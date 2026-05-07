import { SurfaceEquations } from "./surfaceEquations";
import {
  calculateDisplacementMap1D,
  calculateDisplacementMap2D,
  calculateSpecularHighlight,
  imageDataToDataURL,
} from "./surfaceRenderer";

export type LiquidSurfaceType = keyof typeof SurfaceEquations;

export interface LiquidConfig {
  width: number;
  height: number;
  radius: number;
  bezelWidth: number;
  glassThickness: number;
  refractiveIndex: number;
  surfaceType?: LiquidSurfaceType;
}

export interface LiquidAssets {
  displacementUrl: string;
  specularUrl: string;
  maximumDisplacement: number;
}

export interface LiquidFilterTuning {
  blurStdDev?: number;
  saturation?: number;
  specularAlpha?: number;
  scale?: number;
}

export function createLiquidAssets(config: LiquidConfig): LiquidAssets {
  const surfaceType = config.surfaceType ?? "convex_squircle";
  const precomputed = calculateDisplacementMap1D(
    config.glassThickness,
    config.bezelWidth,
    SurfaceEquations[surfaceType],
    config.refractiveIndex,
  );

  const maximumDisplacement = Math.max(...precomputed.map(Math.abs));

  const displacementData = calculateDisplacementMap2D(
    config.width,
    config.height,
    config.width,
    config.height,
    config.radius,
    config.bezelWidth,
    maximumDisplacement || 1,
    precomputed,
  );

  const specularData = calculateSpecularHighlight(
    config.width,
    config.height,
    config.radius,
    config.bezelWidth,
  );

  return {
    displacementUrl: imageDataToDataURL(displacementData),
    specularUrl: imageDataToDataURL(specularData),
    maximumDisplacement,
  };
}

export function applyLiquidAssets(filterId: string, assets: LiquidAssets) {
  document
    .getElementById(`${filterId}-image`)
    ?.setAttribute("href", assets.displacementUrl);
  document
    .getElementById(`${filterId}-specular`)
    ?.setAttribute("href", assets.specularUrl);
}

export function updateLiquidFilter(filterId: string, tuning: LiquidFilterTuning) {
  if (tuning.scale !== undefined) {
    document
      .getElementById(`${filterId}-map`)
      ?.setAttribute("scale", tuning.scale.toString());
  }

  if (tuning.blurStdDev !== undefined) {
    document
      .getElementById(`${filterId}-blur`)
      ?.setAttribute("stdDeviation", tuning.blurStdDev.toString());
  }

  if (tuning.saturation !== undefined) {
    document
      .getElementById(`${filterId}-saturation`)
      ?.setAttribute("values", tuning.saturation.toString());
  }

  if (tuning.specularAlpha !== undefined) {
    document
      .getElementById(`${filterId}-alpha`)
      ?.setAttribute("slope", tuning.specularAlpha.toString());
  }
}

export function syncCloneContent(target: HTMLElement, source: HTMLElement) {
  const clone = source.cloneNode(true) as HTMLElement;
  stripIds(clone);
  target.replaceChildren(clone);
}

export function bindLiquidControls(
  target: HTMLElement,
  state: Record<string, string | number | boolean>,
  onChange: (key: string, value: string | number | boolean) => void,
  onReset?: () => void,
) {
  const root = document.querySelector<HTMLElement>(
    `[data-liquid-controls="${target.dataset.controls ?? target.id}"]`,
  );

  if (!root) return;

  const rows = [...root.querySelectorAll<HTMLElement>("[data-liquid-control]")];

  const renderRow = (row: HTMLElement) => {
    const key = row.dataset.liquidControl;
    if (!key) return;

    const valueNode = row.querySelector<HTMLElement>("[data-liquid-value]");
    const input = row.querySelector<HTMLInputElement>("[data-liquid-input]");
    const optionButtons = row.querySelectorAll<HTMLButtonElement>("[data-liquid-option]");

    const renderValue = (value: string | number | boolean) => {
      if (valueNode) valueNode.textContent = typeof value === "number" ? value.toFixed(value % 1 === 0 ? 0 : 2) : String(value);
      optionButtons.forEach((button) => {
        const active = button.dataset.liquidOption === String(value);
        button.classList.toggle("border-zinc-900", active);
        button.classList.toggle("bg-zinc-900", active);
        button.classList.toggle("text-white", active);
        button.classList.toggle("dark:border-white", active);
        button.classList.toggle("dark:bg-white", active);
        button.classList.toggle("dark:text-black", active);
        button.classList.toggle("border-black/10", !active);
        button.classList.toggle("text-zinc-500", !active);
        button.classList.toggle("dark:border-white/10", !active);
        button.classList.toggle("dark:text-zinc-400", !active);
      });
    };

    renderValue(state[key]);

    if (input) {
      input.addEventListener("input", () => {
        const nextValue = input.type === "checkbox" ? input.checked : Number(input.value);
        state[key] = nextValue;
        renderValue(nextValue);
        onChange(key, nextValue);
      });
    }

    optionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextValue = button.dataset.liquidOption ?? "";
        state[key] = nextValue;
        renderValue(nextValue);
        onChange(key, nextValue);
      });
    });
  };

  rows.forEach(renderRow);

  root.querySelector<HTMLElement>("[data-liquid-reset]")?.addEventListener("click", () => {
    root.querySelectorAll<HTMLInputElement>("[data-liquid-input]").forEach((input) => {
      const defaultValue = input.dataset.defaultValue ?? "";
      if (input.type === "checkbox") {
        input.checked = defaultValue === "true";
      } else {
        input.value = defaultValue;
      }
    });
    onReset?.();
    rows.forEach(renderRow);
  });
}

function stripIds(root: HTMLElement) {
  root.removeAttribute("id");
  root.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
}
