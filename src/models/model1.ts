import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The currency exchange rate model used.
 *   * FROM_TRANSACTION_CURRENCY - indicates the conversion was executed using from the currency and
 *     amount of the transaction.
 */
export const Model1 = {
  FromTransactionCurrency: "FROM_TRANSACTION_CURRENCY",
} as const;
export type Model1 = (typeof Model1)[keyof typeof Model1] | (string & {});

export const model1Schema: EnumSchema<Model1> = s.enumOf<Model1>(Model1);
