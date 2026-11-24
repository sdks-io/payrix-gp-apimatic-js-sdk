import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The recommended next action to be taken by the merchant based on the response given by the
 * payment method provider.
 */
export const NextActionTransactionsPaymentMethodApmNextAction = {
  Redirect: "REDIRECT",
  RedirectInFrame: "REDIRECT_IN_FRAME",
  PresentQrCode: "PRESENT_QR_CODE",
  InvokeWallet: "INVOKE_WALLET",
} as const;
export type NextActionTransactionsPaymentMethodApmNextAction =
  | (typeof NextActionTransactionsPaymentMethodApmNextAction)[keyof typeof NextActionTransactionsPaymentMethodApmNextAction]
  | (string & {});

export const nextActionTransactionsPaymentMethodApmNextActionSchema: EnumSchema<NextActionTransactionsPaymentMethodApmNextAction> =
  s.enumOf<NextActionTransactionsPaymentMethodApmNextAction>(
    NextActionTransactionsPaymentMethodApmNextAction,
  );
