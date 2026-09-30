import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentResponseSchema, type PaymentResponse } from "../payment-response.js";

/** The payment method associated with this Transaction, including the card details. */
export type TxnsModelPayment = string | PaymentResponse;

export const txnsModelPaymentSchema: Schema<TxnsModelPayment> = s.of<TxnsModelPayment>(
  s.union([s.string(), s.lazy(() => paymentResponseSchema)]),
);
