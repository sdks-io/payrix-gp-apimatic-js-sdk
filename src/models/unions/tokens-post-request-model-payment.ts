import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentPostRequestSchema, type PaymentPostRequest } from "../payment-post-request.js";

/** The payment method that is associated with this Token. */
export type TokensPostRequestModelPayment = string | PaymentPostRequest;

export const tokensPostRequestModelPaymentSchema: Schema<TokensPostRequestModelPayment> =
  s.of<TokensPostRequestModelPayment>(s.union([s.string(), s.lazy(() => paymentPostRequestSchema)]));
