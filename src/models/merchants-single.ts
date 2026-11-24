import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1MerchantStatusSchema,
  type DataDictionaryV1MerchantStatus,
} from "./data-dictionary-v1-merchant-status.js";
import { linkInternalSchema, linkSchema, type Link } from "./link.js";
import {
  schemaObjectsV1ActionInternalSchema,
  schemaObjectsV1ActionSchema,
  type SchemaObjectsV1Action,
} from "./schema-objects-v1-action.js";

export type MerchantsSingle = {
  /** A unique identifier for the merchant set by Global Payments. */
  id?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /** Global Payments time indicating when the object was created in ISO-8601 format. */
  timeCreated?: Date;
  /**
   * Indicates whether the merchant is in its lifecycle.
   *   * ACTIVE - The entity is active on the Global Payments platform and can use the capabilities
   *     that are configured and active to payment process.
   *   * INACTIVE - The entity is disabled on the Global Payments platform and cannot use any
   *     payment processing capabilities.
   *   * UNDER_REVIEW - The entity is under review and can cannot used any of the payment processing
   *     capabilities until the review is complete and the merchant is switched to active.
   *   * DECLINED - The entity did not complete the risk review process and cannot use any payment
   *     processing capabilities.
   *   * WITH_MERCHANT - The entity must submit additional information or documentation before
   *     activation.
   */
  status?: DataDictionaryV1MerchantStatus;
  /** Primary email configured with the merchant. */
  email?: string;
  /** First line of the address. */
  address1?: string;
  /** Second line of the address. */
  address2?: string;
  /** The city associated with the address. */
  city?: string;
  /** The postal code of the address. */
  zip?: string;
  /**
   * The state or region of the address. ISO 3166-2 minus the country code itself. For example, US
   * Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state?: string;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  links?: Link[][];
  /** Information about the Action executed. */
  action?: SchemaObjectsV1Action;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchantsSingleProperties: s.Shape<MerchantsSingle> = {
  id: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => dataDictionaryV1MerchantStatusSchema)),
  email: s.optional(s.string()),
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  zip: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  links: s.optional(s.array(s.array(s.lazy(() => linkInternalSchema)))),
  action: s.optional(s.lazy(() => schemaObjectsV1ActionInternalSchema)),
  _keysMap: {
    merchantName: "merchant_name",
    timeCreated: "time_created",
    address1: "address_1",
    address2: "address_2",
  },
};

export const merchantsSingleInternalSchema: Schema<MerchantsSingle> = s.object<MerchantsSingle>(
  merchantsSingleProperties,
  { additionalProperties: s.json() },
);

export const merchantsSingleSchema: Schema<MerchantsSingle> = s.lazySchema(() =>
  s.object<MerchantsSingle>(
    {
      ...merchantsSingleProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      address1: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      address2: s.optional(s.string().check(s.minLength(0), s.maxLength(255))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      zip: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      country: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      links: s.optional(s.array(s.array(s.lazy(() => linkSchema)))),
      action: s.optional(s.lazy(() => schemaObjectsV1ActionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
