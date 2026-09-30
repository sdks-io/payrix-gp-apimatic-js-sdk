import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackMessageImported = {
  _0: 0,
  _1: 1,
} as const;
export type ChargebackMessageImported =
  | (typeof ChargebackMessageImported)[keyof typeof ChargebackMessageImported]
  | (number & {});

export const chargebackMessageImportedSchema: EnumSchema<ChargebackMessageImported> =
  s.enumOf<ChargebackMessageImported>(ChargebackMessageImported);
