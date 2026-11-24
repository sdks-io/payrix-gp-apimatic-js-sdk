import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Action6 = {
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  id?: string;
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  type?: string;
  /** Global Payments time indicating when the object was created in ISO-8601 format. */
  timeCreated?: Date;
  /** The result of the action executed. */
  resultCode?: string;
  /** The id of the app that was used to create the token. */
  appId?: string;
  /** The name of the app the user gave to the application. */
  appName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const action6Properties: s.Shape<Action6> = {
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  resultCode: s.optional(s.string()),
  appId: s.optional(s.string()),
  appName: s.optional(s.string()),
  _keysMap: {
    timeCreated: "time_created",
    resultCode: "result_code",
    appId: "app_id",
    appName: "app_name",
  },
};

export const action6InternalSchema: Schema<Action6> = s.object<Action6>(action6Properties, {
  additionalProperties: s.json(),
});

export const action6Schema: Schema<Action6> = s.lazySchema(() =>
  s.object<Action6>(
    {
      ...action6Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      appId: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
