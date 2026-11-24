import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of interface provided by the mobile SDK to present the challenge to the user.
 */
export const SdkInterfaceAuthenticationsMobileDataSdkInterface = {
  Native: "NATIVE",
  Both: "BOTH",
} as const;
export type SdkInterfaceAuthenticationsMobileDataSdkInterface =
  | (typeof SdkInterfaceAuthenticationsMobileDataSdkInterface)[keyof typeof SdkInterfaceAuthenticationsMobileDataSdkInterface]
  | (string & {});

export const sdkInterfaceAuthenticationsMobileDataSdkInterfaceSchema: EnumSchema<SdkInterfaceAuthenticationsMobileDataSdkInterface> =
  s.enumOf<SdkInterfaceAuthenticationsMobileDataSdkInterface>(
    SdkInterfaceAuthenticationsMobileDataSdkInterface,
  );
