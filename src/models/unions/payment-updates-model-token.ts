import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokensResponseSchema, type TokensResponse } from "../tokens-response.js";

/** The ID of the token record to associate with this terminal activation request. */
export type PaymentUpdatesModelToken = string | TokensResponse;

export const paymentUpdatesModelTokenSchema: Schema<PaymentUpdatesModelToken> =
  s.of<PaymentUpdatesModelToken>(s.union([s.string(), s.lazy(() => tokensResponseSchema)]));
