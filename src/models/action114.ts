import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resultCodeActionsActionResultCodeSchema,
  type ResultCodeActionsActionResultCode,
} from "./result-code-actions-action-result-code.js";
import {
  typeActionsActionTypeLinksSchema,
  type TypeActionsActionTypeLinks,
} from "./type-actions-action-type-links.js";

export type Action114 = {
  /**
   * ID of the action that was executed that initialed the activity this notification is providing
   * an update on.
   */
  id?: string;
  /**
   * Indicates the specific action taken.
   * * `ACTION_LIST` - Get a list of actions
   * * `ACTION_SINGLE` - Get a single action
   */
  type?: TypeActionsActionTypeLinks;
  /** Time indicating when the object was created in ISO-8601 format. */
  timeCreated?: Date;
  /** The result of the action executed. */
  resultCode?: ResultCodeActionsActionResultCode;
  /** The id of the app that was used to create the token. */
  appId?: string;
  /** The name of the app the user gave to the application. */
  appName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const action114Schema: Schema<Action114> = s.object<Action114>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeActionsActionTypeLinksSchema)),
    timeCreated: s.optional(s.dateTime()),
    resultCode: s.optional(s.lazy(() => resultCodeActionsActionResultCodeSchema)),
    appId: s.optional(s.string()),
    appName: s.optional(s.string()),
    _keysMap: {
      timeCreated: "time_created",
      resultCode: "result_code",
      appId: "app_id",
      appName: "app_name",
    },
  },
  { additionalProperties: s.json() },
);
