import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of system used to initiate the authentication.
 * * `BROWSER`
 * * `MERCHANT_INITIATED`
 * * `MOBILE_SDK`
 */
export const SourceAuthenticationsSource = {
  Browser: "BROWSER",
  MerchantInitiated: "MERCHANT_INITIATED",
  MobileSdk: "MOBILE_SDK",
} as const;
export type SourceAuthenticationsSource =
  | (typeof SourceAuthenticationsSource)[keyof typeof SourceAuthenticationsSource]
  | (string & {});

export const sourceAuthenticationsSourceSchema: EnumSchema<SourceAuthenticationsSource> =
  s.enumOf<SourceAuthenticationsSource>(SourceAuthenticationsSource);
