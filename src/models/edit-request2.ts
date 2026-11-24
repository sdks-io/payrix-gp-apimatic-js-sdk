import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address7InternalSchema, address7Schema, type Address7 } from "./address7.js";
import { notificationsInternalSchema, notificationsSchema, type Notifications } from "./notifications.js";
import {
  paymentMethod28InternalSchema,
  paymentMethod28Schema,
  type PaymentMethod28,
} from "./payment-method28.js";
import {
  paymentProcessingStatistics1Schema,
  type PaymentProcessingStatistics1,
} from "./payment-processing-statistics1.js";
import { person1InternalSchema, person1Schema, type Person1 } from "./person1.js";
import {
  statusChangeReasonMerchantsStatusChangeReasonSchema,
  type StatusChangeReasonMerchantsStatusChangeReason,
} from "./status-change-reason-merchants-status-change-reason.js";

export type EditRequest2 = {
  /** This is a label to identify the merchant */
  name?: string;
  /**
   * This is the reason or nature of the status.
   *   * 'ACTIVE - The merchant is in good standing.
   *   * CLOSED_BY_MERCHANT - The merchant has been closed at the request of the merchant or
   *     partner.
   *   * CLOSED_BY_RISK - The merchant has been closed by a Global Payments Risk Team.
   *   * APPLICATION_DENIED - The merchant application has been denied by the Global Payments Risk
   *     Team.
   *   * PENDING_REVIEW - The merchant application is pending review from the Global Payments Risk
   *     Team.
   *   * PENDING_MERCHANT_CONSENT - The merchant must agree to terms and conditions prior to
   *     accepting payments.
   *   * PENDING_IDENTITY_VALIDATION - The applicant's identity and/or business documents must be
   *     reviewed by the Global Payments Risk Team.
   *   * PENDING_IDENTITY_VALIDATION_AND_PAYMENT - The applicant's identity and/or business
   *     documents must be reviewed by the Global Payments Risk Team and submit payment.
   *   * PENDING_PAYMENT - The merchant must submit payment.
   *   * UNKNOWN_STATUS - Contact your relationship manager for more details.
   *   * REMOVE_PARTNERSHIP - The partner has requested to disassociate the merchant from the
   *     partner program.
   */
  statusChangeReason?: StatusChangeReasonMerchantsStatusChangeReason;
  /** The legal business name of the merchant being boarded. */
  legalName?: string;
  /**
   * The merchant's DBA (Doing Business As) name or the alternate name the merchant may be known as.
   */
  dba?: string;
  /** A four-digit number used to classify the merchant into an industry or market segment. */
  merchantCategoryCode?: string;
  /** The merchant's business website URL */
  webstite?: string;
  /** A description of the merchant's business. */
  description?: string;
  /** The currency in which the funds are held in ISO-4217(alpha-3). */
  currency?: string;
  /**
   * The merchantes tax identification number. For exampe, in the US the (EIN) Employer
   * Identification Number would be used
   */
  taxIdReference?: string;
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
  addresses?: Address7[];
  persons?: Person1[];
  paymentProcessingStatistics?: PaymentProcessingStatistics1;
  paymentMethods?: PaymentMethod28[];
  notifications?: Notifications;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const editRequest2Properties: s.Shape<EditRequest2> = {
  name: s.optional(s.string()),
  statusChangeReason: s.optional(s.lazy(() => statusChangeReasonMerchantsStatusChangeReasonSchema)),
  legalName: s.optional(s.string()),
  dba: s.optional(s.string()),
  merchantCategoryCode: s.optional(s.string()),
  webstite: s.optional(s.string()),
  description: s.optional(s.string()),
  currency: s.optional(s.string()),
  taxIdReference: s.optional(s.string()),
  notificationEmail: s.optional(s.string()),
  pricingProfile: s.optional(s.string()),
  addresses: s.optional(s.array(s.lazy(() => address7InternalSchema))),
  persons: s.optional(s.array(s.lazy(() => person1InternalSchema))),
  paymentProcessingStatistics: s.optional(s.lazy(() => paymentProcessingStatistics1Schema)),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethod28InternalSchema))),
  notifications: s.optional(s.lazy(() => notificationsInternalSchema)),
  _keysMap: {
    statusChangeReason: "status_change_reason",
    legalName: "legal_name",
    merchantCategoryCode: "merchant_category_code",
    taxIdReference: "tax_id_reference",
    notificationEmail: "notification_email",
    pricingProfile: "pricing_profile",
    paymentProcessingStatistics: "payment_processing_statistics",
    paymentMethods: "payment_methods",
  },
};

export const editRequest2InternalSchema: Schema<EditRequest2> = s.object<EditRequest2>(
  editRequest2Properties,
  { additionalProperties: s.json() },
);

export const editRequest2Schema: Schema<EditRequest2> = s.lazySchema(() =>
  s.object<EditRequest2>(
    {
      ...editRequest2Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      legalName: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      dba: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      taxIdReference: s.optional(s.string().check(s.minLength(1), s.maxLength(9))),
      notificationEmail: s.optional(s.string().check(s.maxLength(50))),
      pricingProfile: s.optional(s.string().check(s.maxLength(255))),
      addresses: s.optional(s.array(s.lazy(() => address7Schema))),
      persons: s.optional(s.array(s.lazy(() => person1Schema))),
      paymentMethods: s.optional(s.array(s.lazy(() => paymentMethod28Schema))),
      notifications: s.optional(s.lazy(() => notificationsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
