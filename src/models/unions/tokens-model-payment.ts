import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentResponseSchema, type PaymentResponse } from "../payment-response.js";

/** The payment method that is associated with this Token. */
export type TokensModelPayment = string | PaymentResponse;

export const tokensModelPaymentSchema: Schema<TokensModelPayment> = s.of<TokensModelPayment>(
  s.union([s.string(), s.lazy(() => paymentResponseSchema)]),
);
