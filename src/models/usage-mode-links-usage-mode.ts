import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the link can be used once or multiple times */
export const UsageModeLinksUsageMode = {
  Single: "SINGLE",
  Multiple: "MULTIPLE",
} as const;
export type UsageModeLinksUsageMode =
  | (typeof UsageModeLinksUsageMode)[keyof typeof UsageModeLinksUsageMode]
  | (string & {});

export const usageModeLinksUsageModeSchema: EnumSchema<UsageModeLinksUsageMode> =
  s.enumOf<UsageModeLinksUsageMode>(UsageModeLinksUsageMode);
