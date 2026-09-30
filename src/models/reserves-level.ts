import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReservesLevel = {
  Admin: "admin",
  Division: "division",
  Merchant: "merchant",
  Partition: "partition",
} as const;
export type ReservesLevel = (typeof ReservesLevel)[keyof typeof ReservesLevel] | (string & {});

export const reservesLevelSchema: EnumSchema<ReservesLevel> = s.enumOf<ReservesLevel>(ReservesLevel);
