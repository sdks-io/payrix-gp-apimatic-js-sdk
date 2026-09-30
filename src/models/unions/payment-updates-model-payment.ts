import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentResponseSchema, type PaymentResponse } from "../payment-response.js";

/** The payment associated with this PaymentUpdate. */
export type PaymentUpdatesModelPayment = string | PaymentResponse;

export const paymentUpdatesModelPaymentSchema: Schema<PaymentUpdatesModelPayment> =
  s.of<PaymentUpdatesModelPayment>(s.union([s.string(), s.lazy(() => paymentResponseSchema)]));
