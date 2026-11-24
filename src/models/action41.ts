import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1ResultCodeSchema,
  type DataDictionaryV1ResultCode,
} from "./data-dictionary-v1-result-code.js";
import { typeAddressesActionTypeSchema, type TypeAddressesActionType } from "./type-addresses-action-type.js";

export type Action41 = {
  /** The id of the app that was used to create the token. */
  id?: string;
  /** Time indicating when the object was created in ISO-8601 format. */
  timeCreated?: string;
  /** Indicates the specific action taken. */
  type?: TypeAddressesActionType;
  /** The result of the action executed. */
  resultCode?: DataDictionaryV1ResultCode;
  /** The id of the app that was used to create the token. */
  appId?: string;
  /** The name of the app the user gave to the application. */
  appName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const action41Schema: Schema<Action41> = s.object<Action41>(
  {
    id: s.optional(s.string()),
    timeCreated: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeAddressesActionTypeSchema)),
    resultCode: s.optional(s.lazy(() => dataDictionaryV1ResultCodeSchema)),
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
