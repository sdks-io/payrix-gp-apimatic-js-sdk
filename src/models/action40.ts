import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeDocumentsActionTypeSchema, type TypeDocumentsActionType } from "./type-documents-action-type.js";

export type Action40 = {
  /**
   * ID of the action that was executed that initialed the activity this notification is providing
   * an update on.
   */
  id?: string;
  /**
   * The type of action that was executed that initialed the activity this notification is providing
   * an update on.
   */
  type?: TypeDocumentsActionType;
  /** The time the action that initialed the activity this notification was executed. */
  timeCreated?: string;
  /** The result code of the initiating action that this notification reatles to. */
  resultCode?: string;
  /** The id of the app that is being used to execute and sign the action */
  appId?: string;
  /** The name of the app that is being used to execute and sign the action */
  appName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const action40Schema: Schema<Action40> = s.object<Action40>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeDocumentsActionTypeSchema)),
    timeCreated: s.optional(s.string()),
    resultCode: s.optional(s.string()),
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
