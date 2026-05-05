// Surface equations - define the height profile of the glass bezel
export const SurfaceEquations = {
  convex_circle: (x: number) => Math.sqrt(1 - Math.pow(1 - x, 2)),
  convex_squircle: (x: number) => Math.pow(1 - Math.pow(1 - x, 4), 1 / 4),
  concave: (x: number) => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  lip: (x: number) => {
    const convex = Math.pow(1 - Math.pow(1 - Math.min(x * 2, 1), 4), 1 / 4);
    const concave = 1 - Math.sqrt(1 - Math.pow(1 - x, 2)) + 0.1;
    const smootherstep =
      6 * Math.pow(x, 5) - 15 * Math.pow(x, 4) + 10 * Math.pow(x, 3);
    return convex * (1 - smootherstep) + concave * smootherstep;
  },
};
