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
  schemaObjectsV1ActionInternalSchema,
  schemaObjectsV1ActionSchema,
  type SchemaObjectsV1Action,
} from "./schema-objects-v1-action.js";

export type AccountsSingleBackoffice = {
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
  /** Email registered with the application that was used to access this token. */
  emailId?: string;
  permissions?: string[];
  /** Information about the Action executed. */
  action?: SchemaObjectsV1Action;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsSingleBackofficeProperties: s.Shape<AccountsSingleBackoffice> = {
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => dataDictionaryV1AccountTypeSchema)),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => dataDictionaryV1EntityStatusSchema)),
  emailId: s.optional(s.string()),
  permissions: s.optional(s.array(s.string())),
  action: s.optional(s.lazy(() => schemaObjectsV1ActionInternalSchema)),
  _keysMap: {
    emailId: "email_id",
  },
};

export const accountsSingleBackofficeInternalSchema: Schema<AccountsSingleBackoffice> =
  s.object<AccountsSingleBackoffice>(accountsSingleBackofficeProperties, { additionalProperties: s.json() });

export const accountsSingleBackofficeSchema: Schema<AccountsSingleBackoffice> = s.lazySchema(() =>
  s.object<AccountsSingleBackoffice>(
    {
      ...accountsSingleBackofficeProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      emailId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      action: s.optional(s.lazy(() => schemaObjectsV1ActionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
