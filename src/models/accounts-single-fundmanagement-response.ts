import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cardReplacementReasonAccountsCardReplacmentReason5Schema,
  type CardReplacementReasonAccountsCardReplacmentReason5,
} from "./card-replacement-reason-accounts-card-replacment-reason5.js";
import {
  dataDictionaryV1EntityStatusSchema,
  type DataDictionaryV1EntityStatus,
} from "./data-dictionary-v1-entity-status.js";
import {
  schemaObjectsV1ActionInternalSchema,
  schemaObjectsV1ActionSchema,
  type SchemaObjectsV1Action,
} from "./schema-objects-v1-action.js";
import { type9Schema, type Type9 } from "./type9.js";

export type AccountsSingleFundmanagementResponse = {
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  id?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  name?: string;
  /**
   * Describes what capability the account relates to be it transaction processing, data services,
   * dispute management, merchant management,tokenization.
   */
  type?: Type9;
  /**
   * Indicates where a configured entity on the Global Payments system is in its lifecycle. * ACTIVE
   * - The configured entity is able to execute related API actions. * INACTIVE - The configured
   * entity is not able to execute related API actions as its status has been set to inactive.
   */
  status?: DataDictionaryV1EntityStatus;
  /** Global Payments time indicating when the object was created in ISO-8601 format. */
  timeCreated?: Date;
  /** The date and time the resource object was last changed. */
  timeLastUpdated?: Date;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /**
   * Indicates the reason why a Prepaied card needs to be replaced.
   * * `LOST` - The card has either been lost or stolen. This will immediately disable the
   *   currently-assigned card and issue a new card with a new number. The card PIN number will be
   *   mailed to the account's shipping address.
   */
  cardReplacmentReason?: CardReplacementReasonAccountsCardReplacmentReason5;
  permissions?: string[];
  /** Information about the Action executed. */
  action?: SchemaObjectsV1Action;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsSingleFundmanagementResponseProperties: s.Shape<AccountsSingleFundmanagementResponse> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.lazy(() => type9Schema)),
  status: s.optional(s.lazy(() => dataDictionaryV1EntityStatusSchema)),
  timeCreated: s.optional(s.dateTime()),
  timeLastUpdated: s.optional(s.dateTime()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  cardReplacmentReason: s.optional(s.lazy(() => cardReplacementReasonAccountsCardReplacmentReason5Schema)),
  permissions: s.optional(s.array(s.string())),
  action: s.optional(s.lazy(() => schemaObjectsV1ActionInternalSchema)),
  _keysMap: {
    timeCreated: "time_created",
    timeLastUpdated: "time_last_updated",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    cardReplacmentReason: "card_replacment_reason",
  },
};

export const accountsSingleFundmanagementResponseInternalSchema: Schema<AccountsSingleFundmanagementResponse> =
  s.object<AccountsSingleFundmanagementResponse>(accountsSingleFundmanagementResponseProperties, {
    additionalProperties: s.json(),
  });

export const accountsSingleFundmanagementResponseSchema: Schema<AccountsSingleFundmanagementResponse> =
  s.lazySchema(() =>
    s.object<AccountsSingleFundmanagementResponse>(
      {
        ...accountsSingleFundmanagementResponseProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        action: s.optional(s.lazy(() => schemaObjectsV1ActionSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
