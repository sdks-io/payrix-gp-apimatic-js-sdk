import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebacksActionable = {
  _0: 0,
  _1: 1,
} as const;
export type ChargebacksActionable =
  | (typeof ChargebacksActionable)[keyof typeof ChargebacksActionable]
  | (number & {});

export const chargebacksActionableSchema: EnumSchema<ChargebacksActionable> =
  s.enumOf<ChargebacksActionable>(ChargebacksActionable);
