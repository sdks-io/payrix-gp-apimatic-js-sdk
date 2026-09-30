import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentPostRequestSchema, type PaymentPostRequest } from "../payment-post-request.js";

/** The token of the Tokens resource this Transaction is associated with. */
export type TxnsPostModelToken = string | PaymentPostRequest;

export const txnsPostModelTokenSchema: Schema<TxnsPostModelToken> = s.of<TxnsPostModelToken>(
  s.union([s.string(), s.lazy(() => paymentPostRequestSchema)]),
);
