import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bnpl9InternalSchema, bnpl9Schema, type Bnpl9 } from "./bnpl9.js";
import {
  existingTransactionCardResponseInternalSchema,
  existingTransactionCardResponseSchema,
  type ExistingTransactionCardResponse,
} from "./existing-transaction-card-response.js";

export type ExistingTransactionPaymentMethodResponse = {
  /**
   * The result code associated with the payment method used to process this transaction. It is
   * returned from another system used to process the payment method.
   */
  result?: string;
  /** The result message that better explains the result code. */
  message?: string;
  card?: ExistingTransactionCardResponse;
  bnpl?: Bnpl9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const existingTransactionPaymentMethodResponseProperties: s.Shape<ExistingTransactionPaymentMethodResponse> =
  {
    result: s.optional(s.string()),
    message: s.optional(s.string()),
    card: s.optional(s.lazy(() => existingTransactionCardResponseInternalSchema)),
    bnpl: s.optional(s.lazy(() => bnpl9InternalSchema)),
  };

export const existingTransactionPaymentMethodResponseInternalSchema: Schema<ExistingTransactionPaymentMethodResponse> =
  s.object<ExistingTransactionPaymentMethodResponse>(existingTransactionPaymentMethodResponseProperties, {
    additionalProperties: s.json(),
  });

export const existingTransactionPaymentMethodResponseSchema: Schema<ExistingTransactionPaymentMethodResponse> =
  s.lazySchema(() =>
    s.object<ExistingTransactionPaymentMethodResponse>(
      {
        ...existingTransactionPaymentMethodResponseProperties,
        result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        card: s.optional(s.lazy(() => existingTransactionCardResponseSchema)),
        bnpl: s.optional(s.lazy(() => bnpl9Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
