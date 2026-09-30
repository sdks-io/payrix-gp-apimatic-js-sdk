import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentResponseSchema, type PaymentResponse } from "../payment-response.js";

/** The identifier of the Payment that this EntityReturns refers to. */
export type EntityReturnsModelPayment = string | PaymentResponse;

export const entityReturnsModelPaymentSchema: Schema<EntityReturnsModelPayment> =
  s.of<EntityReturnsModelPayment>(s.union([s.string(), s.lazy(() => paymentResponseSchema)]));
