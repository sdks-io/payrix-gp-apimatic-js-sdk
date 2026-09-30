import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RevenueBoostsPlatform = {
  Vcore: "VCORE",
} as const;
export type RevenueBoostsPlatform =
  | (typeof RevenueBoostsPlatform)[keyof typeof RevenueBoostsPlatform]
  | (string & {});

export const revenueBoostsPlatformSchema: EnumSchema<RevenueBoostsPlatform> =
  s.enumOf<RevenueBoostsPlatform>(RevenueBoostsPlatform);
