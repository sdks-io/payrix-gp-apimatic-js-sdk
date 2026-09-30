import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines if the themes is the default one for the host. <details> <summary>Valid
 * Values</summary>
 *
 *   - `0` - **On**
 *   - `1` - **Off** </details>
 */
export const HostThemesDefault2 = {
  _0: 0,
  _1: 1,
} as const;
export type HostThemesDefault2 = (typeof HostThemesDefault2)[keyof typeof HostThemesDefault2] | (number & {});

export const hostThemesDefault2Schema: EnumSchema<HostThemesDefault2> =
  s.enumOf<HostThemesDefault2>(HostThemesDefault2);
