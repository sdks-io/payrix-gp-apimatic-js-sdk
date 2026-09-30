import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentPostRequestSchema, type PaymentPostRequest } from "../payment-post-request.js";

/** The payment method associated with this Transaction, including the card details. */
export type TxnsPostModelPayment = string | PaymentPostRequest;

export const txnsPostModelPaymentSchema: Schema<TxnsPostModelPayment> = s.of<TxnsPostModelPayment>(
  s.union([s.string(), s.lazy(() => paymentPostRequestSchema)]),
);
