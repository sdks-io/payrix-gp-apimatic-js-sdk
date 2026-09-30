import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VasOptOutMethod = {
  Api: "api",
  Portal: "portal",
  Widget: "widget",
} as const;
export type VasOptOutMethod = (typeof VasOptOutMethod)[keyof typeof VasOptOutMethod] | (string & {});

export const vasOptOutMethodSchema: EnumSchema<VasOptOutMethod> = s.enumOf<VasOptOutMethod>(VasOptOutMethod);
