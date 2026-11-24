import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes whether the transaction is a SALE, that moves funds from Payer to Merchant, or a REFUND
 * where funds move from Merchant to Payer.
 * * `SALE` - indicates the movement, or the attempt to move, funds from payer to a merchant.
 * * `REFUND` - indicates the movement, or the attempt to move, funds from merchant to the payer.
 */
export const TypeTransactionsType = {
  Sale: "SALE",
  Refund: "REFUND",
} as const;
export type TypeTransactionsType =
  | (typeof TypeTransactionsType)[keyof typeof TypeTransactionsType]
  | (string & {});

export const typeTransactionsTypeSchema: EnumSchema<TypeTransactionsType> =
  s.enumOf<TypeTransactionsType>(TypeTransactionsType);
