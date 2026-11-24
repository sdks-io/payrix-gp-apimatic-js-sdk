import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action35Schema, type Action35 } from "./action35.js";
import { addresses7InternalSchema, addresses7Schema, type Addresses7 } from "./addresses7.js";
import { notificationsInternalSchema, notificationsSchema, type Notifications } from "./notifications.js";
import {
  paymentMethods10InternalSchema,
  paymentMethods10Schema,
  type PaymentMethods10,
} from "./payment-methods10.js";
import { person5InternalSchema, person5Schema, type Person5 } from "./person5.js";
import {
  prepaidCardStatusMerchantsPrepaidCardStatusSchema,
  type PrepaidCardStatusMerchantsPrepaidCardStatus,
} from "./prepaid-card-status-merchants-prepaid-card-status.js";
import { statusMerchantsStatusSchema, type StatusMerchantsStatus } from "./status-merchants-status.js";
import {
  statusReasonMerchantsStatusReasonSchema,
  type StatusReasonMerchantsStatusReason,
} from "./status-reason-merchants-status-reason.js";

export type MerchantsResponse2 = {
  /** A unique identifier for the merchant set by Global Payments. */
  id?: string;
  /**
   * Indicates the type of organization entitiy being boarded. Must always be set to MERCHANT.
   *
   *  * `MERCHANT` - The entity is selling their own goods and services
   *  * `PARTNER` - The entity managing multiple merchants within their integration.
   */
  type: string;
  /**
   * Global Payments time indicating when the object was created in ISO-8601 format. format
   * date-time.
   */
  timeCreated?: Date;
  /** The date and time the resource object was last changed. */
  timeLastUpdated?: Date;
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
  /** A meaningful description for the status or status change. */
  statusReason?: StatusReasonMerchantsStatusReason;
  /** This is a label to identify the merchant */
  name?: string;
  /** A client indicated merchant reference identifier. */
  reference?: string;
  /** The currency in which the funds are held in ISO-4217(alpha-3). */
  currency?: string;
  /**
   * The merchant's DBA (Doing Business As) name or the alternate name the merchant may be known as.
   */
  dba: string;
  /** The merchant's business website URL */
  website: string;
  /**
   * The merchantes tax identification number. For exampe, in the US the (EIN) Employer
   * Identification Number would be used
   */
  taxIdReference: string;
  /**
   * Primary email configured with the merchant. If not provided, communication will be routed to
   * persons.email, where function= APPLICANT
   */
  notificationEmail?: string;
  /**
   * Describes the pricing profile the merchant is to be configured for. This will drive the
   * services, pricing and limits configured for merchant boarding
   */
  pricingProfile?: string;
  /**
   * This value reflects the latest stage in the prepaid card issuance and delivery process.
   * * `ACTIVE` - The prepaid card is fully operational and can be used for transactions.
   * * `MANUFACTURING` - The prepaid card is currently being produced and has not yet been
   *   dispatched to the cardholder.
   * * `INACTIVE` - The prepaid card has been issued but not yet activated for use.
   * * `LOST` - The cardholder has reported the prepaid card as lost.
   * * `STOLEN` - The prepaid card has been reported stolen.
   * * `HOLD` - The prepaid card is temporarily suspended.
   * * `EXPIRED` - The prepaid card has reached its expiration date and no longer valid for
   *   transactions.
   * * `RESET_PIN` - The prepaid card requires a PIN reset.
   * * `REJECTED` - The prepaid card issuance request has been declined.
   */
  prepaidCardStatus?: PrepaidCardStatusMerchantsPrepaidCardStatus;
  notifications?: Notifications;
  persons: Person5[];
  addresses: Addresses7[];
  paymentMethods?: PaymentMethods10[];
  /** This is the creation date of the merchant. */
  startDate?: string;
  /** The date at which the merchant account will expire. */
  expirationDate?: string;
  action?: Action35;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchantsResponse2Properties: s.Shape<MerchantsResponse2> = {
  id: s.optional(s.string()),
  type: s.string(),
  timeCreated: s.optional(s.dateTime()),
  timeLastUpdated: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => statusMerchantsStatusSchema)),
  statusReason: s.optional(s.lazy(() => statusReasonMerchantsStatusReasonSchema)),
  name: s.optional(s.string()),
  reference: s.optional(s.string()),
  currency: s.optional(s.string()),
  dba: s.string(),
  website: s.string(),
  taxIdReference: s.string(),
  notificationEmail: s.optional(s.string()),
  pricingProfile: s.optional(s.string()),
  prepaidCardStatus: s.optional(s.lazy(() => prepaidCardStatusMerchantsPrepaidCardStatusSchema)),
  notifications: s.optional(s.lazy(() => notificationsInternalSchema)),
  persons: s.array(s.lazy(() => person5InternalSchema)),
  addresses: s.array(s.lazy(() => addresses7InternalSchema)),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethods10InternalSchema))),
  startDate: s.optional(s.string()),
  expirationDate: s.optional(s.string()),
  action: s.optional(s.lazy(() => action35Schema)),
  _keysMap: {
    timeCreated: "time_created",
    timeLastUpdated: "time_last_updated",
    statusReason: "status_reason",
    taxIdReference: "tax_id_reference",
    notificationEmail: "notification_email",
    pricingProfile: "pricing_profile",
    prepaidCardStatus: "prepaid_card_status",
    paymentMethods: "payment_methods",
    startDate: "start_date",
    expirationDate: "expiration_date",
  },
};

export const merchantsResponse2InternalSchema: Schema<MerchantsResponse2> = s.object<MerchantsResponse2>(
  merchantsResponse2Properties,
  { additionalProperties: s.json() },
);

export const merchantsResponse2Schema: Schema<MerchantsResponse2> = s.lazySchema(() =>
  s.object<MerchantsResponse2>(
    {
      ...merchantsResponse2Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      reference: s.optional(s.string().check(s.maxLength(50))),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      dba: s.string().check(s.minLength(1), s.maxLength(255)),
      taxIdReference: s.string().check(s.minLength(1), s.maxLength(9)),
      notificationEmail: s.optional(s.string().check(s.maxLength(50))),
      pricingProfile: s.optional(s.string().check(s.maxLength(255))),
      notifications: s.optional(s.lazy(() => notificationsSchema)),
      persons: s.array(s.lazy(() => person5Schema)),
      addresses: s.array(s.lazy(() => addresses7Schema)),
      paymentMethods: s.optional(s.array(s.lazy(() => paymentMethods10Schema))),
      startDate: s.optional(s.string().check(s.minLength(10), s.maxLength(100))),
      expirationDate: s.optional(s.string().check(s.minLength(10), s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
