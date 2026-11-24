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

export type AccountsSingleTokenization = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsSingleTokenizationProperties: s.Shape<AccountsSingleTokenization> = {
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => dataDictionaryV1AccountTypeSchema)),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => dataDictionaryV1EntityStatusSchema)),
  permissions: s.optional(s.array(s.string())),
};

export const accountsSingleTokenizationInternalSchema: Schema<AccountsSingleTokenization> =
  s.object<AccountsSingleTokenization>(accountsSingleTokenizationProperties, {
    additionalProperties: s.json(),
  });

export const accountsSingleTokenizationSchema: Schema<AccountsSingleTokenization> = s.lazySchema(() =>
  s.object<AccountsSingleTokenization>(
    {
      ...accountsSingleTokenizationProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
