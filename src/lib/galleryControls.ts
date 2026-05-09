export interface GalleryControlItem {
  key: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number | string;
  type?: "range" | "segmented" | "toggle";
  options?: Array<{ value: string; label: string }>;
}

export interface GalleryModalConfig {
  id: string;
  title: string;
  panelDataAttr: string;
  closeDataAttr: string;
  triggerDataAttr: string;
  triggerLabel: string;
  panelSide: "top" | "bottom" | "left" | "right";
  panelAlign: "start" | "center" | "end";
}

export interface GalleryControlsConfig {
  modal: GalleryModalConfig;
  panelTitle: string;
  target: string;
  controls: GalleryControlItem[];
}

export const galleryControls: Record<string, GalleryControlsConfig> = {
  button: {
    modal: {
      id: "button-controls-modal",
      title: "Button Parameters",
      panelDataAttr: "data-button-modal-panel",
      closeDataAttr: "data-close-button-controls",
      triggerDataAttr: "data-open-button-controls",
      triggerLabel: "Parameters",
      panelSide: "bottom",
      panelAlign: "end",
    },
    panelTitle: "Button Controls",
    target: "button-controls",
    controls: [
      { key: "refraction", label: "Refraction", min: 0.4, max: 2.4, step: 0.01, value: 0.8 },
      { key: "hoverRefraction", label: "Hover Boost", min: 0.8, max: 2.2, step: 0.01, value: 1.2 },
      { key: "pressRefraction", label: "Press Boost", min: 0.8, max: 2.4, step: 0.01, value: 1.5 },
      { key: "scale", label: "Hover Scale", min: 1, max: 1.14, step: 0.01, value: 1.05 },
      { key: "pressScale", label: "Press Scale", min: 0.82, max: 1, step: 0.01, value: 0.9 },
      { key: "shadowDepth", label: "Shadow", min: 4, max: 18, step: 0.1, value: 8 },
    ],
  },
  switch: {
    modal: {
      id: "switch-controls-modal",
      title: "Switch Parameters",
      panelDataAttr: "data-switch-modal-panel",
      closeDataAttr: "data-close-switch-controls",
      triggerDataAttr: "data-open-switch-controls",
      triggerLabel: "Parameters",
      panelSide: "bottom",
      panelAlign: "end",
    },
    panelTitle: "Switch Controls",
    target: "switch-controls",
    controls: [
      { key: "forceActive", label: "Force Active", type: "toggle", value: false },
      { key: "refraction", label: "Refraction", min: 0, max: 1.4, step: 0.01, value: 1 },
      { key: "blur", label: "Blur", min: 0, max: 3, step: 0.01, value: 0.2 },
      { key: "specularOpacity", label: "Specular", min: 0, max: 1, step: 0.01, value: 0.5 },
      { key: "saturation", label: "Saturation", min: 0, max: 12, step: 0.1, value: 6 },
    ],
  },
  cursor: {
    modal: {
      id: "cursor-controls-modal",
      title: "Cursor Parameters",
      panelDataAttr: "data-cursor-modal-panel",
      closeDataAttr: "data-close-cursor-controls",
      triggerDataAttr: "data-open-cursor-controls",
      triggerLabel: "Parameters",
      panelSide: "bottom",
      panelAlign: "end",
    },
    panelTitle: "Cursor Controls",
    target: "liquid-cursor",
    controls: [
      { key: "idleScale", label: "Idle Scale", min: 0.8, max: 1.4, step: 0.01, value: 1 },
      { key: "hoverScale", label: "Hover Scale", min: 1, max: 2.2, step: 0.01, value: 1.6 },
      { key: "pressScale", label: "Press Scale", min: 0.5, max: 1.1, step: 0.01, value: 0.7 },
      { key: "refraction", label: "Refraction", min: 0.4, max: 2.2, step: 0.01, value: 1.5 },
      { key: "blur", label: "Blur", min: 0, max: 2, step: 0.01, value: 0 },
      { key: "specularOpacity", label: "Specular", min: 0, max: 1, step: 0.01, value: 0.75 },
      { key: "saturation", label: "Saturation", min: 0, max: 12, step: 0.1, value: 7 },
    ],
  },
  input: {
    modal: {
      id: "input-controls-modal",
      title: "Input Parameters",
      panelDataAttr: "data-input-modal-panel",
      closeDataAttr: "data-close-input-controls",
      triggerDataAttr: "data-open-input-controls",
      triggerLabel: "Parameters",
      panelSide: "bottom",
      panelAlign: "end",
    },
    panelTitle: "Input Controls",
    target: "input-controls",
    controls: [
      { key: "focusScale", label: "Focus Scale", min: 1, max: 1.2, step: 0.01, value: 1.05 },
      { key: "refraction", label: "Refraction", min: 0.4, max: 2, step: 0.01, value: 1 },
      { key: "blur", label: "Blur", min: 0, max: 2, step: 0.01, value: 0 },
      { key: "specularOpacity", label: "Specular", min: 0, max: 1, step: 0.01, value: 0.75 },
      { key: "saturation", label: "Saturation", min: 0, max: 12, step: 0.1, value: 6 },
      { key: "pulseX", label: "Type Pulse X", min: 0, max: 3, step: 0.1, value: 1.5 },
      { key: "pulseY", label: "Type Pulse Y", min: -3, max: 0, step: 0.1, value: -1 },
    ],
  },
  fab: {
    modal: {
      id: "fab-controls-modal",
      title: "FAB Parameters",
      panelDataAttr: "data-fab-modal-panel",
      closeDataAttr: "data-close-fab-controls",
      triggerDataAttr: "data-open-fab-controls",
      triggerLabel: "Parameters",
      panelSide: "bottom",
      panelAlign: "end",
    },
    panelTitle: "FAB Controls",
    target: "fab-controls",
    controls: [
      { key: "menuLift", label: "Menu Lift", min: 72, max: 132, step: 1, value: 96 },
      { key: "refraction", label: "Refraction", min: 0.3, max: 1.6, step: 0.01, value: 0.9 },
      { key: "blur", label: "Blur", min: 0, max: 1.5, step: 0.01, value: 0.25 },
      { key: "specularOpacity", label: "Specular", min: 0, max: 1, step: 0.01, value: 0.75 },
      { key: "saturation", label: "Saturation", min: 0.5, max: 4, step: 0.01, value: 1.2 },
      { key: "bounce", label: "Bounce", min: 0.5, max: 1.6, step: 0.01, value: 1 },
    ],
  },
  card: {
    modal: {
      id: "card-controls-modal",
      title: "Card Parameters",
      panelDataAttr: "data-card-modal-panel",
      closeDataAttr: "data-close-card-controls",
      triggerDataAttr: "data-open-card-controls",
      triggerLabel: "Parameters",
      panelSide: "bottom",
      panelAlign: "end",
    },
    panelTitle: "Card Controls",
    target: "liquid-card-container",
    controls: [
      { key: "hoverScale", label: "Hover Scale", min: 1, max: 1.08, step: 0.01, value: 1.02 },
      { key: "refraction", label: "Refraction", min: 0.2, max: 1.2, step: 0.01, value: 0.5 },
      { key: "tilt", label: "Tilt", min: 0.01, max: 0.08, step: 0.005, value: 0.05 },
      { key: "blur", label: "Blur", min: 0, max: 2, step: 0.01, value: 0 },
      { key: "specularOpacity", label: "Specular", min: 0, max: 1, step: 0.01, value: 0.6 },
      { key: "saturation", label: "Saturation", min: 0.5, max: 4, step: 0.01, value: 1.2 },
    ],
  },
};
