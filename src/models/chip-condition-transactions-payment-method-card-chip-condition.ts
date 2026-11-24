import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if a fallback mechanism was used to obtain the card information when EMV/chip did not
 * work as expected.
 * * `PREV_SUCCESS` - indicates the previous transaction with this card was a success.
 * * `PREV_FAILED` - indicates the previous transaction with this card failed.
 * * `NON_CHIP_TRANSACTION` - indicates this was not a chip transaction.
 * * `UNKNOWN` - indicates the reason is unknown.
 */
export const ChipConditionTransactionsPaymentMethodCardChipCondition = {
  PrevSuccess: "PREV_SUCCESS",
  PrevFailed: "PREV_FAILED",
  NonChipTransaction: "NON_CHIP_TRANSACTION",
  Unknown: "UNKNOWN",
} as const;
export type ChipConditionTransactionsPaymentMethodCardChipCondition =
  | (typeof ChipConditionTransactionsPaymentMethodCardChipCondition)[keyof typeof ChipConditionTransactionsPaymentMethodCardChipCondition]
  | (string & {});

export const chipConditionTransactionsPaymentMethodCardChipConditionSchema: EnumSchema<ChipConditionTransactionsPaymentMethodCardChipCondition> =
  s.enumOf<ChipConditionTransactionsPaymentMethodCardChipCondition>(
    ChipConditionTransactionsPaymentMethodCardChipCondition,
  );
