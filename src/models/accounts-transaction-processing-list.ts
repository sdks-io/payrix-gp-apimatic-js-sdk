import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1AccountTypeSchema,
  type DataDictionaryV1AccountType,
} from "./data-dictionary-v1-account-type.js";
import {
  dataDictionaryV1EntityStatusSchema,
  type DataDictionaryV1EntityStatus,
} from "./data-dictionary-v1-entity-status.js";
import {
  dataDictionaryV1PaymentMethodSchema,
  type DataDictionaryV1PaymentMethod,
} from "./data-dictionary-v1-payment-method.js";
import {
  dataDictionaryV1TransactionChannelSchema,
  type DataDictionaryV1TransactionChannel,
} from "./data-dictionary-v1-transaction-channel.js";

export type AccountsTransactionProcessingList = {
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  id?: string;
  /**
   * Describes what capability the account relates to be it transaction processing, data services,
   * dispute management, merchant management,tokenization.
   *   * TRANSACTION_PROCESSING - indicates an account that can be used to create and manage
   *     transactions.
   *   * DATA_SERVICES - indicates an account that can be used to retrieve data.
   *   * DISPUTE_MANAGEMENT - indicates an account that can be used to manage transaction disputes.
   *   * TOKENIZATION - indicates an account that can be used to store and manage payment methods
   *     securely.
   *   * FUND_MANAGMENT - indicates an account where funds are added to and paid out from.
   *   * MERCHANT_MANAGEMENT - indicates an account that can be used to store and manage merchants
   *     and their accounts.
   */
  type?: DataDictionaryV1AccountType;
  /** A meaningful label for the merchant account set by Global Payments. */
  name?: string;
  /**
   * Indicates where a configured entity on the Global Payments system is in its lifecycle. * ACTIVE
   * - The configured entity is able to execute related API actions. * INACTIVE - The configured
   * entity is not able to execute related API actions as its status has been set to inactive.
   */
  status?: DataDictionaryV1EntityStatus;
  permissions?: string[];
  /** A list of countries in ISO-3166-1(alpha-2 code) format an account is configured for. */
  countries?: string[];
  /** A list of channels account is configured for. */
  channels?: DataDictionaryV1TransactionChannel[];
  /** A list of currencies in ISO-4217(alpha-3) format an account is configured for. */
  currencies?: string[];
  /** A list of payment methods an account is configured for. */
  paymentMethods?: DataDictionaryV1PaymentMethod[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsTransactionProcessingListProperties: s.Shape<AccountsTransactionProcessingList> = {
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => dataDictionaryV1AccountTypeSchema)),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => dataDictionaryV1EntityStatusSchema)),
  permissions: s.optional(s.array(s.string())),
  countries: s.optional(s.array(s.string())),
  channels: s.optional(s.array(s.lazy(() => dataDictionaryV1TransactionChannelSchema))),
  currencies: s.optional(s.array(s.string())),
  paymentMethods: s.optional(s.array(s.lazy(() => dataDictionaryV1PaymentMethodSchema))),
  _keysMap: {
    paymentMethods: "payment_methods",
  },
};

export const accountsTransactionProcessingListInternalSchema: Schema<AccountsTransactionProcessingList> =
  s.object<AccountsTransactionProcessingList>(accountsTransactionProcessingListProperties, {
    additionalProperties: s.json(),
  });

export const accountsTransactionProcessingListSchema: Schema<AccountsTransactionProcessingList> =
  s.lazySchema(() =>
    s.object<AccountsTransactionProcessingList>(
      {
        ...accountsTransactionProcessingListProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        countries: s.optional(s.array(s.string().check(s.minLength(1), s.maxLength(255)))),
        currencies: s.optional(s.array(s.string().check(s.minLength(3), s.maxLength(3)))),
      },
      { additionalProperties: s.json() },
    ),
  );
