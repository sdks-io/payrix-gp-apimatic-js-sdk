import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action35Schema, type Action35 } from "./action35.js";
import { address6InternalSchema, address6Schema, type Address6 } from "./address6.js";
import { contactPhoneInternalSchema, contactPhoneSchema, type ContactPhone } from "./contact-phone.js";
import { products4InternalSchema, products4Schema, type Products4 } from "./products4.js";
import { statusMerchantsStatusSchema, type StatusMerchantsStatus } from "./status-merchants-status.js";

export type MerchantCreateNotification = {
  /** A unique identifier for the merchant set by Global Payments. */
  id?: string;
  /** This is a label to identify the merchant */
  name?: string;
  /**
   * Indicates where the merchant is in its lifecycle.
   * * `ACTIVE` - The entity is active on the Global Payments platform and can use the capabilities
   *   that are configured and active to payment process. *` INACTIVE` - The entity is disabled on
   *   the Global Payments platform and cannot use any payment processing capabilities.
   *   *`UNDER_REVIEW` - The entity is under review and cannot use any of the payment processing
   *   capabilities until the review is complete and the merchant is switched to active. *`
   *   DECLINED` - The entity did not complete the risk review process and cannot use any payment
   *   processing capabilities.
   *
   *  * `WITH_MERCHAN`T - The entity must submit additional information or documentation before
   *    activation.
   */
  status?: StatusMerchantsStatus;
  /**
   * Indicates the type of organization entitiy being boarded. Must always be set to MERCHANT.
   *
   *  * `MERCHANT` - The entity is selling their own goods and services
   *  * `PARTNER` - The entity managing multiple merchants within their integration.
   */
  type?: string;
  /**
   * Global Payments time indicating when the object was created in ISO-8601 format. format
   * date-time.
   */
  timeCreated?: Date;
  /** The date and time the resource object was last changed. */
  timeLastUpdated?: Date;
  /** Email address of the person */
  email?: string;
  address?: Address6;
  contactPhone?: ContactPhone;
  products?: Products4[];
  action?: Action35;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchantCreateNotificationProperties: s.Shape<MerchantCreateNotification> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusMerchantsStatusSchema)),
  type: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  timeLastUpdated: s.optional(s.dateTime()),
  email: s.optional(s.string()),
  address: s.optional(s.lazy(() => address6InternalSchema)),
  contactPhone: s.optional(s.lazy(() => contactPhoneInternalSchema)),
  products: s.optional(s.array(s.lazy(() => products4InternalSchema))),
  action: s.optional(s.lazy(() => action35Schema)),
  _keysMap: {
    timeCreated: "time_created",
    timeLastUpdated: "time_last_updated",
    contactPhone: "contact_phone",
  },
};

export const merchantCreateNotificationInternalSchema: Schema<MerchantCreateNotification> =
  s.object<MerchantCreateNotification>(merchantCreateNotificationProperties, {
    additionalProperties: s.json(),
  });

export const merchantCreateNotificationSchema: Schema<MerchantCreateNotification> = s.lazySchema(() =>
  s.object<MerchantCreateNotification>(
    {
      ...merchantCreateNotificationProperties,
      id: s.optional(s.string().check(s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      address: s.optional(s.lazy(() => address6Schema)),
      contactPhone: s.optional(s.lazy(() => contactPhoneSchema)),
      products: s.optional(s.array(s.lazy(() => products4Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
