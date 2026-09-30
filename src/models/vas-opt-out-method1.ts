import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method used to create the opt-out request.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `api` - **API**
 * - `portal` - **PORTAL**
 * - `widget` - **WIDGET**
 *
 * </details>
 */
export const VasOptOutMethod1 = {
  Api: "api",
  Portal: "portal",
  Widget: "widget",
} as const;
export type VasOptOutMethod1 = (typeof VasOptOutMethod1)[keyof typeof VasOptOutMethod1] | (string & {});

export const vasOptOutMethod1Schema: EnumSchema<VasOptOutMethod1> =
  s.enumOf<VasOptOutMethod1>(VasOptOutMethod1);
