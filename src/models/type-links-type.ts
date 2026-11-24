import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** GP API specific label that indicates the type resource an instance is. */
export const TypeLinksType = {
  ThirdPartyPage: "THIRD_PARTY_PAGE",
  Payment: "PAYMENT",
  HostedPaymentPage: "HOSTED_PAYMENT_PAGE",
  ExchangeAppCredentials: "EXCHANGE_APP_CREDENTIALS",
} as const;
export type TypeLinksType = (typeof TypeLinksType)[keyof typeof TypeLinksType] | (string & {});

export const typeLinksTypeSchema: EnumSchema<TypeLinksType> = s.enumOf<TypeLinksType>(TypeLinksType);
