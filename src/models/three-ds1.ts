import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  messageTypeAuthenticationsThreeDsMessageTypeSchema,
  type MessageTypeAuthenticationsThreeDsMessageType,
} from "./message-type-authentications-three-ds-message-type.js";

export type ThreeDs1 = {
  /** Unique transaction identifier assigned by the ACS. */
  acsTransReference?: string;
  /**
   * Indicates what is the authentication value format used.
   * * `PAREQ`
   * * `CREQ`
   */
  messageType?: MessageTypeAuthenticationsThreeDsMessageType;
  /**
   * Scheme specific data elements used to to carry additional data. Message extension is sent based
   * on rules set by each scheme and may not always be present in the response.
   */
  messageExtension?: string[];
  /** Indicates the version of 3DS. */
  messageVersion?: string;
  acsTransactionStatus?: string;
  sessionData?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDs1Properties: s.Shape<ThreeDs1> = {
  acsTransReference: s.optional(s.string()),
  messageType: s.optional(s.lazy(() => messageTypeAuthenticationsThreeDsMessageTypeSchema)),
  messageExtension: s.optional(s.array(s.string())),
  messageVersion: s.optional(s.string()),
  acsTransactionStatus: s.optional(s.string()),
  sessionData: s.optional(s.string()),
  _keysMap: {
    acsTransReference: "acs_trans_reference",
    messageType: "message_type",
    messageExtension: "message_extension",
    messageVersion: "message_version",
    acsTransactionStatus: "acs_transaction_status",
    sessionData: "session_data",
  },
};

export const threeDs1InternalSchema: Schema<ThreeDs1> = s.object<ThreeDs1>(threeDs1Properties, {
  additionalProperties: s.json(),
});

export const threeDs1Schema: Schema<ThreeDs1> = s.lazySchema(() =>
  s.object<ThreeDs1>(
    {
      ...threeDs1Properties,
      acsTransReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
