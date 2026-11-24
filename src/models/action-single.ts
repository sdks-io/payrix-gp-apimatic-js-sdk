import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action9Schema, type Action9 } from "./action9.js";

export type ActionSingle = {
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
  /** The id of the parent resource the action is relates to. */
  resourceParentId?: string;
  /** The status of the resource the action is directly related to. */
  resourceStatus?: string;
  /** The URL the action was executed to. */
  resourceRequestUrl?: string;
  /** The version of the platform the action relates to. */
  version?: string;
  /** The HTTP response code for the action. */
  httpResponseCode?: string;
  /** The error code of the action if the action resulted in an error. */
  responseCode?: string;
  /** The detailed error code of the action provides more detail on why the action erred. */
  responseDetailedCode?: string;
  /**
   * A verbal description of the error which will help users of the platform understand the error.
   */
  responseDetailedMessage?: string;
  /** The id of the app that is being used to execute and sign the action */
  appId?: string;
  /** The name of the app that is being used to execute and sign the action */
  appName?: string;
  /** Email registered with the application that was used to access this token. */
  email?: string;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** This indicates the IP address of the source or origin of the action. */
  sourceLocation?: string;
  /** This indicates the IP address of the destination the action is being sent to. */
  destinationLocation?: string;
  /** The JSON message received by the platform for this action. */
  messageReceived?: string;
  /** The JSON message returned by the platform for this action. */
  messageSent?: string;
  /** The X-GP header fields captured for this action. */
  metrics?: string;
  /** The total time in milliseconds it took the action to complete. */
  totalTimeMilliseconds?: string;
  /** The time in milliseconds it took the downstream platform to complete the action. */
  totalTimeDownstreamMilliseconds?: string;
  action?: Action9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const actionSingleProperties: s.Shape<ActionSingle> = {
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  resource: s.optional(s.string()),
  resourceId: s.optional(s.string()),
  resourceParentId: s.optional(s.string()),
  resourceStatus: s.optional(s.string()),
  resourceRequestUrl: s.optional(s.string()),
  version: s.optional(s.string()),
  httpResponseCode: s.optional(s.string()),
  responseCode: s.optional(s.string()),
  responseDetailedCode: s.optional(s.string()),
  responseDetailedMessage: s.optional(s.string()),
  appId: s.optional(s.string()),
  appName: s.optional(s.string()),
  email: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  sourceLocation: s.optional(s.string()),
  destinationLocation: s.optional(s.string()),
  messageReceived: s.optional(s.string()),
  messageSent: s.optional(s.string()),
  metrics: s.optional(s.string()),
  totalTimeMilliseconds: s.optional(s.string()),
  totalTimeDownstreamMilliseconds: s.optional(s.string()),
  action: s.optional(s.lazy(() => action9Schema)),
  _keysMap: {
    timeCreated: "time_created",
    resourceId: "resource_id",
    resourceParentId: "resource_parent_id",
    resourceStatus: "resource_status",
    resourceRequestUrl: "resource_request_url",
    httpResponseCode: "http_response_code",
    responseCode: "response_code",
    responseDetailedCode: "response_detailed_code",
    responseDetailedMessage: "response_detailed_message",
    appId: "app_id",
    appName: "app_name",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    sourceLocation: "source_location",
    destinationLocation: "destination_location",
    messageReceived: "message_received",
    messageSent: "message_sent",
    totalTimeMilliseconds: "total_time_milliseconds",
    totalTimeDownstreamMilliseconds: "total_time_downstream_milliseconds",
  },
};

export const actionSingleInternalSchema: Schema<ActionSingle> = s.object<ActionSingle>(
  actionSingleProperties,
  { additionalProperties: s.json() },
);

export const actionSingleSchema: Schema<ActionSingle> = s.lazySchema(() =>
  s.object<ActionSingle>(
    {
      ...actionSingleProperties,
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
