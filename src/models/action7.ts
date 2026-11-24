import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeActionsType3Schema, type TypeActionsType3 } from "./type-actions-type3.js";

export type Action7 = {
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  id?: string;
  /** The type of action executed. This is a non-exhaustive list of enums. */
  type?: TypeActionsType3;
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

const action7Properties: s.Shape<Action7> = {
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeActionsType3Schema)),
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

export const action7InternalSchema: Schema<Action7> = s.object<Action7>(action7Properties, {
  additionalProperties: s.json(),
});

export const action7Schema: Schema<Action7> = s.lazySchema(() =>
  s.object<Action7>(
    {
      ...action7Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      appId: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
