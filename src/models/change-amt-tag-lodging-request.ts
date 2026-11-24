import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  captureSequenceTransactionsCaptureSequenceSchema,
  type CaptureSequenceTransactionsCaptureSequence,
} from "./capture-sequence-transactions-capture-sequence.js";
import { lodgingInternalSchema, lodgingSchema, type Lodging } from "./lodging.js";
import {
  paymentMethod46InternalSchema,
  paymentMethod46Schema,
  type PaymentMethod46,
} from "./payment-method46.js";

export type ChangeAmtTagLodgingRequest = {
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount?: string;
  /** The amount of the gratuity for a transaction. */
  gratuityAmount?: string;
  /**
   * Indicates whether the request is the first,a subsequent or the last capture request when
   * capturing multiple amounts separately.
   */
  captureSequence?: CaptureSequenceTransactionsCaptureSequence;
  /**
   * Indicates the total or expected total of captures that will executed against a transaction that
   * can be captured multiple times.
   */
  totalCaptureCount?: number;
  lodging?: Lodging;
  paymentMethod?: PaymentMethod46;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const changeAmtTagLodgingRequestProperties: s.Shape<ChangeAmtTagLodgingRequest> = {
  amount: s.optional(s.string()),
  gratuityAmount: s.optional(s.string()),
  captureSequence: s.optional(s.lazy(() => captureSequenceTransactionsCaptureSequenceSchema)),
  totalCaptureCount: s.optional(s.float64()),
  lodging: s.optional(s.lazy(() => lodgingInternalSchema)),
  paymentMethod: s.optional(s.lazy(() => paymentMethod46InternalSchema)),
  _keysMap: {
    gratuityAmount: "gratuity_amount",
    captureSequence: "capture_sequence",
    totalCaptureCount: "total_capture_count",
    paymentMethod: "payment_method",
  },
};

export const changeAmtTagLodgingRequestInternalSchema: Schema<ChangeAmtTagLodgingRequest> =
  s.object<ChangeAmtTagLodgingRequest>(changeAmtTagLodgingRequestProperties, {
    additionalProperties: s.json(),
  });

export const changeAmtTagLodgingRequestSchema: Schema<ChangeAmtTagLodgingRequest> = s.lazySchema(() =>
  s.object<ChangeAmtTagLodgingRequest>(
    {
      ...changeAmtTagLodgingRequestProperties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      gratuityAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lodging: s.optional(s.lazy(() => lodgingSchema)),
      paymentMethod: s.optional(s.lazy(() => paymentMethod46Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
