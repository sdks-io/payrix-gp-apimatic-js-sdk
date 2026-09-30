import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BinsBillPayEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type BinsBillPayEnabled = (typeof BinsBillPayEnabled)[keyof typeof BinsBillPayEnabled] | (number & {});

export const binsBillPayEnabledSchema: EnumSchema<BinsBillPayEnabled> =
  s.enumOf<BinsBillPayEnabled>(BinsBillPayEnabled);
