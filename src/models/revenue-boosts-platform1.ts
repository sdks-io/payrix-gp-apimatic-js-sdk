import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform used to process this transaction. Valid Values : - `VCORE` - **VCORE**
 */
export const RevenueBoostsPlatform1 = {
  Vcore: "VCORE",
} as const;
export type RevenueBoostsPlatform1 =
  | (typeof RevenueBoostsPlatform1)[keyof typeof RevenueBoostsPlatform1]
  | (string & {});

export const revenueBoostsPlatform1Schema: EnumSchema<RevenueBoostsPlatform1> =
  s.enumOf<RevenueBoostsPlatform1>(RevenueBoostsPlatform1);
