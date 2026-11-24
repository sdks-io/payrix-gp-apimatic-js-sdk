import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1PaymentMethodSchema,
  type DataDictionaryV1PaymentMethod,
} from "./data-dictionary-v1-payment-method.js";
import {
  dataDictionaryV1TransactionChannelSchema,
  type DataDictionaryV1TransactionChannel,
} from "./data-dictionary-v1-transaction-channel.js";

/**
 * A configuration's countries, channels, currencies and payment_methods, represents a different
 * transaction processing system route.
 */
export type SchemaObjectsV1TransactionProcessingConfiguration = {
  /** A list of countries in ISO-3166-1(alpha-2 code) format an account is configured for. */
  countries?: string[];
  /** A list of currencies in ISO-4217(alpha-3) format an account is configured for. */
  currencies?: string[];
  /** A list of channels account is configured for. */
  channels?: DataDictionaryV1TransactionChannel[];
  /** A list of payment methods an account is configured for. */
  paymentMethods?: DataDictionaryV1PaymentMethod[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const schemaObjectsV1TransactionProcessingConfigurationProperties: s.Shape<SchemaObjectsV1TransactionProcessingConfiguration> =
  {
    countries: s.optional(s.array(s.string())),
    currencies: s.optional(s.array(s.string())),
    channels: s.optional(s.array(s.lazy(() => dataDictionaryV1TransactionChannelSchema))),
    paymentMethods: s.optional(s.array(s.lazy(() => dataDictionaryV1PaymentMethodSchema))),
    _keysMap: {
      paymentMethods: "payment_methods",
    },
  };

export const schemaObjectsV1TransactionProcessingConfigurationInternalSchema: Schema<SchemaObjectsV1TransactionProcessingConfiguration> =
  s.object<SchemaObjectsV1TransactionProcessingConfiguration>(
    schemaObjectsV1TransactionProcessingConfigurationProperties,
    { additionalProperties: s.json() },
  );

export const schemaObjectsV1TransactionProcessingConfigurationSchema: Schema<SchemaObjectsV1TransactionProcessingConfiguration> =
  s.lazySchema(() =>
    s.object<SchemaObjectsV1TransactionProcessingConfiguration>(
      {
        ...schemaObjectsV1TransactionProcessingConfigurationProperties,
        countries: s.optional(s.array(s.string().check(s.minLength(1), s.maxLength(255)))),
        currencies: s.optional(s.array(s.string().check(s.minLength(3), s.maxLength(3)))),
      },
      { additionalProperties: s.json() },
    ),
  );
