import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthorizationModesTransactionsDeviceCapabilitiesAuthorizationMode = {
  Partial: "PARTIAL",
} as const;
export type AuthorizationModesTransactionsDeviceCapabilitiesAuthorizationMode =
  | (typeof AuthorizationModesTransactionsDeviceCapabilitiesAuthorizationMode)[keyof typeof AuthorizationModesTransactionsDeviceCapabilitiesAuthorizationMode]
  | (string & {});

export const authorizationModesTransactionsDeviceCapabilitiesAuthorizationModeSchema: EnumSchema<AuthorizationModesTransactionsDeviceCapabilitiesAuthorizationMode> =
  s.enumOf<AuthorizationModesTransactionsDeviceCapabilitiesAuthorizationMode>(
    AuthorizationModesTransactionsDeviceCapabilitiesAuthorizationMode,
  );
