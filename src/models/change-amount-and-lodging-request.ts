import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lodgingInternalSchema, lodgingSchema, type Lodging } from "./lodging.js";

export type ChangeAmountAndLodgingRequest = {
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount?: string;
  lodging?: Lodging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const changeAmountAndLodgingRequestProperties: s.Shape<ChangeAmountAndLodgingRequest> = {
  amount: s.optional(s.string()),
  lodging: s.optional(s.lazy(() => lodgingInternalSchema)),
};

export const changeAmountAndLodgingRequestInternalSchema: Schema<ChangeAmountAndLodgingRequest> =
  s.object<ChangeAmountAndLodgingRequest>(changeAmountAndLodgingRequestProperties, {
    additionalProperties: s.json(),
  });

export const changeAmountAndLodgingRequestSchema: Schema<ChangeAmountAndLodgingRequest> = s.lazySchema(() =>
  s.object<ChangeAmountAndLodgingRequest>(
    {
      ...changeAmountAndLodgingRequestProperties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lodging: s.optional(s.lazy(() => lodgingSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
