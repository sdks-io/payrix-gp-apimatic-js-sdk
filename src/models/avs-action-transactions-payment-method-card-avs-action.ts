import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The recommended action to be taken by the merchant based on the AVS response. */
export const AvsActionTransactionsPaymentMethodCardAvsAction = {
  Prompt: "PROMPT",
  Decline: "DECLINE",
  Accept: "ACCEPT",
} as const;
export type AvsActionTransactionsPaymentMethodCardAvsAction =
  | (typeof AvsActionTransactionsPaymentMethodCardAvsAction)[keyof typeof AvsActionTransactionsPaymentMethodCardAvsAction]
  | (string & {});

export const avsActionTransactionsPaymentMethodCardAvsActionSchema: EnumSchema<AvsActionTransactionsPaymentMethodCardAvsAction> =
  s.enumOf<AvsActionTransactionsPaymentMethodCardAvsAction>(AvsActionTransactionsPaymentMethodCardAvsAction);
