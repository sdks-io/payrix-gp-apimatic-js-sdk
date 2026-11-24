import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActionsListSingle = {
  /**
   * ID of the action that was executed that initialed the activity this notification is providing
   * an update on.
   */
  id?: string;
  /**
   * The type of action that was executed that initialed the activity this notification is providing
   * an update on.
   */
  type?: string;
  /** The time the action that initialed the activity this notification was executed. */
  timeCreated?: Date;
  /** The resource the action is directly related to. */
  resource?: string;
  /** The id of the resource the action is directly related to. */
  resourceId?: string;
  /** The status of the resource the action is directly related to. */
  resourceStatus?: string;
  /** The version of the platform the action relates to. */
  version?: string;
  /** The HTTP response code for the action. */
  httpResponseCode?: string;
  /** The error code of the action if the action resulted in an error. */
  responseCode?: string;
  /** The id of the app that is being used to execute and sign the action */
  appId?: string;
  /** The name of the app that is being used to execute and sign the action */
  appName?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const actionsListSingleProperties: s.Shape<ActionsListSingle> = {
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  resource: s.optional(s.string()),
  resourceId: s.optional(s.string()),
  resourceStatus: s.optional(s.string()),
  version: s.optional(s.string()),
  httpResponseCode: s.optional(s.string()),
  responseCode: s.optional(s.string()),
  appId: s.optional(s.string()),
  appName: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountName: s.optional(s.string()),
  _keysMap: {
    timeCreated: "time_created",
    resourceId: "resource_id",
    resourceStatus: "resource_status",
    httpResponseCode: "http_response_code",
    responseCode: "response_code",
    appId: "app_id",
    appName: "app_name",
    merchantName: "merchant_name",
    accountName: "account_name",
  },
};

export const actionsListSingleInternalSchema: Schema<ActionsListSingle> = s.object<ActionsListSingle>(
  actionsListSingleProperties,
  { additionalProperties: s.json() },
);

export const actionsListSingleSchema: Schema<ActionsListSingle> = s.lazySchema(() =>
  s.object<ActionsListSingle>(
    {
      ...actionsListSingleProperties,
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
