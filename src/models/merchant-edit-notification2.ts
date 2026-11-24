import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action35Schema, type Action35 } from "./action35.js";
import { statusMerchantsStatusSchema, type StatusMerchantsStatus } from "./status-merchants-status.js";

export type MerchantEditNotification2 = {
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
  /** A further desctiption of the status of a merchant. */
  statusDescription?: string;
  action?: Action35;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchantEditNotification2Properties: s.Shape<MerchantEditNotification2> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusMerchantsStatusSchema)),
  type: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  timeLastUpdated: s.optional(s.dateTime()),
  statusDescription: s.optional(s.string()),
  action: s.optional(s.lazy(() => action35Schema)),
  _keysMap: {
    timeCreated: "time_created",
    timeLastUpdated: "time_last_updated",
    statusDescription: "status_description",
  },
};

export const merchantEditNotification2InternalSchema: Schema<MerchantEditNotification2> =
  s.object<MerchantEditNotification2>(merchantEditNotification2Properties, {
    additionalProperties: s.json(),
  });

export const merchantEditNotification2Schema: Schema<MerchantEditNotification2> = s.lazySchema(() =>
  s.object<MerchantEditNotification2>(
    {
      ...merchantEditNotification2Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      statusDescription: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
