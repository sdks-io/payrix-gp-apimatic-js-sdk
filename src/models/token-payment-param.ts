import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenPaymentMethod1Schema, type TokenPaymentMethod1 } from "./token-payment-method1.js";

/** The payment method that is associated with this Token. */
export type TokenPaymentParam = {
  method?: TokenPaymentMethod1;
  /**
   * For credit payment method, the card number of the credit card associated with this Token. For
   * eCheck payment method, the bank account number associated with this Token.
   */
  number?: string;
  /**
   * If the payment method associated with this Token is a bank account, then this field contains
   * the routing code for the bank account.
   */
  routing?: string;
};

export const tokenPaymentParamSchema: Schema<TokenPaymentParam> = s.object<TokenPaymentParam>({
  method: s.optional(s.lazy(() => tokenPaymentMethod1Schema)),
  number: s.optional(s.string()),
  routing: s.optional(s.string()),
});
