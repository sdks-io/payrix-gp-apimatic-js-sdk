import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paymentUpdateGroupsResponseSchema,
  type PaymentUpdateGroupsResponse,
} from "../payment-update-groups-response.js";

/** The PaymentGroup resource that this PaymentUpdate belongs to. */
export type PaymentUpdatesModelPaymentUpdateGroup = string | PaymentUpdateGroupsResponse;

export const paymentUpdatesModelPaymentUpdateGroupSchema: Schema<PaymentUpdatesModelPaymentUpdateGroup> =
  s.of<PaymentUpdatesModelPaymentUpdateGroup>(
    s.union([s.string(), s.lazy(() => paymentUpdateGroupsResponseSchema)]),
  );
