import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthorizationModesVerificationsDeviceCapabilitiesAuthorizationMode = {
  Partial: "PARTIAL",
  Alternative: "ALTERNATIVE",
} as const;
export type AuthorizationModesVerificationsDeviceCapabilitiesAuthorizationMode =
  | (typeof AuthorizationModesVerificationsDeviceCapabilitiesAuthorizationMode)[keyof typeof AuthorizationModesVerificationsDeviceCapabilitiesAuthorizationMode]
  | (string & {});

export const authorizationModesVerificationsDeviceCapabilitiesAuthorizationModeSchema: EnumSchema<AuthorizationModesVerificationsDeviceCapabilitiesAuthorizationMode> =
  s.enumOf<AuthorizationModesVerificationsDeviceCapabilitiesAuthorizationMode>(
    AuthorizationModesVerificationsDeviceCapabilitiesAuthorizationMode,
  );
