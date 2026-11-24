import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MethodData = {
  /**
   * The reference created by the 3DSecure provider to identify the specific authentication attempt.
   */
  threeDsServerTransId?: string;
  /**
   * The merchant URL that will receive the notification when the 3DS ACS successfully gathers
   * device information.
   */
  threeDsMethodReturnUrl?: string;
  /**
   * JSON object containing the Base64Url encoded string, made up of the integator's
   * method_notification_url and the server_trans_ref which must be sent to the method_url when
   * facilitating the ACS to gather device information.
   */
  encodedMethodData?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const methodDataSchema: Schema<MethodData> = s.object<MethodData>(
  {
    threeDsServerTransId: s.optional(s.string()),
    threeDsMethodReturnUrl: s.optional(s.string()),
    encodedMethodData: s.optional(s.string()),
    _keysMap: {
      threeDsServerTransId: "three_ds_server_trans_id",
      threeDsMethodReturnUrl: "three_ds_method_return_url",
      encodedMethodData: "encoded_method_data",
    },
  },
  { additionalProperties: s.json() },
);
