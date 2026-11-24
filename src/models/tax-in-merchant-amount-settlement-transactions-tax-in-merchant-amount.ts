import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if a tax amount was included in the setttled merchant amount
 *     * `TRUE` - The tax amount was added to the settled merchant amount
 *     * `FALSE` - The tax amount was not added to the settled merchant amount
 */
export const TaxInMerchantAmountSettlementTransactionsTaxInMerchantAmount = {
  True: "true",
  False: "false",
} as const;
export type TaxInMerchantAmountSettlementTransactionsTaxInMerchantAmount =
  | (typeof TaxInMerchantAmountSettlementTransactionsTaxInMerchantAmount)[keyof typeof TaxInMerchantAmountSettlementTransactionsTaxInMerchantAmount]
  | (string & {});

export const taxInMerchantAmountSettlementTransactionsTaxInMerchantAmountSchema: EnumSchema<TaxInMerchantAmountSettlementTransactionsTaxInMerchantAmount> =
  s.enumOf<TaxInMerchantAmountSettlementTransactionsTaxInMerchantAmount>(
    TaxInMerchantAmountSettlementTransactionsTaxInMerchantAmount,
  );
