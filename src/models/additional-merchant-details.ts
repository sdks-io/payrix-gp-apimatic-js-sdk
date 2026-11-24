import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address17InternalSchema, address17Schema, type Address17 } from "./address17.js";

export type AdditionalMerchantDetails = {
  address?: Address17;
  /** The phone number of the Merchant. */
  businessPhone?: string;
  /** The customer care number of the Merchant. */
  inquiryPhone?: string;
  /** The url address of the Merchant. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const additionalMerchantDetailsProperties: s.Shape<AdditionalMerchantDetails> = {
  address: s.optional(s.lazy(() => address17InternalSchema)),
  businessPhone: s.optional(s.string()),
  inquiryPhone: s.optional(s.string()),
  url: s.optional(s.string()),
  _keysMap: {
    businessPhone: "business_phone",
    inquiryPhone: "inquiry_phone",
  },
};

export const additionalMerchantDetailsInternalSchema: Schema<AdditionalMerchantDetails> =
  s.object<AdditionalMerchantDetails>(additionalMerchantDetailsProperties, {
    additionalProperties: s.json(),
  });

export const additionalMerchantDetailsSchema: Schema<AdditionalMerchantDetails> = s.lazySchema(() =>
  s.object<AdditionalMerchantDetails>(
    {
      ...additionalMerchantDetailsProperties,
      address: s.optional(s.lazy(() => address17Schema)),
      businessPhone: s.optional(s.string().check(s.minLength(1), s.maxLength(16))),
      inquiryPhone: s.optional(s.string().check(s.minLength(1), s.maxLength(16))),
      url: s.optional(s.string().check(s.minLength(1), s.maxLength(30))),
    },
    { additionalProperties: s.json() },
  ),
);
