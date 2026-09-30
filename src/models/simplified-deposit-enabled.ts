import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimplifiedDepositEnabled = {
  _1: 1,
} as const;
export type SimplifiedDepositEnabled =
  | (typeof SimplifiedDepositEnabled)[keyof typeof SimplifiedDepositEnabled]
  | (number & {});

export const simplifiedDepositEnabledSchema: EnumSchema<SimplifiedDepositEnabled> =
  s.enumOf<SimplifiedDepositEnabled>(SimplifiedDepositEnabled);
