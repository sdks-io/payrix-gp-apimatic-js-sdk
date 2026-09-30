import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { binsResponseSchema, type BinsResponse } from "../bins-response.js";

/** Bin identifier for this payment. */
export type PaymentModelBin = string | BinsResponse;

export const paymentModelBinSchema: Schema<PaymentModelBin> = s.of<PaymentModelBin>(
  s.union([s.string(), s.lazy(() => binsResponseSchema)]),
);
