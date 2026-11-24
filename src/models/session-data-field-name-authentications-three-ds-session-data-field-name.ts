import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the field name to populate data with when redirecting to the 3DS ACS. The data will be
 * returned by the ACS in the same field name when redirecting back to the notification challenge
 * result URL.
 * * MD - Use this field name in the redirect to the ACS 3DS 1.
 * * threeDSSessionData - Use this field name in the redirect to the ACS for 3DS 2.
 */
export const SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName = {
  ThreeDsSessionData: "threeDSSessionData",
  Md: "MD",
} as const;
export type SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName =
  | (typeof SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName)[keyof typeof SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName]
  | (string & {});

export const sessionDataFieldNameAuthenticationsThreeDsSessionDataFieldNameSchema: EnumSchema<SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName> =
  s.enumOf<SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName>(
    SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName,
  );
