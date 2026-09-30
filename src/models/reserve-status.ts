import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReserveStatus = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type ReserveStatus = (typeof ReserveStatus)[keyof typeof ReserveStatus] | (number & {});

export const reserveStatusSchema: EnumSchema<ReserveStatus> = s.enumOf<ReserveStatus>(ReserveStatus);
