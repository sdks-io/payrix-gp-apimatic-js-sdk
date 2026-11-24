import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addresses5InternalSchema, addresses5Schema, type Addresses5 } from "./addresses5.js";
import { attestationSchema, type Attestation } from "./attestation.js";
import { configurationsInternalSchema, configurationsSchema, type Configurations } from "./configurations.js";
import {
  legalEntityMerchantsLegalEntitySchema,
  type LegalEntityMerchantsLegalEntity,
} from "./legal-entity-merchants-legal-entity.js";
import { notificationsInternalSchema, notificationsSchema, type Notifications } from "./notifications.js";
import {
  paymentMethods8InternalSchema,
  paymentMethods8Schema,
  type PaymentMethods8,
} from "./payment-methods8.js";
import {
  paymentProcessingStatistics1Schema,
  type PaymentProcessingStatistics1,
} from "./payment-processing-statistics1.js";
import { person3InternalSchema, person3Schema, type Person3 } from "./person3.js";
import { products3InternalSchema, products3Schema, type Products3 } from "./products3.js";

export type MerchantsRequest = {
  /** This is a label to identify the merchant */
  name: string;
  /**
   * Indicates the type of organization entitiy being boarded. Must always be set to MERCHANT.
   *
   *  * `MERCHANT` - The entity is selling their own goods and services
   *  * `PARTNER` - The entity managing multiple merchants within their integration.
   */
  type?: string;
  /** The legal business name of the merchant being boarded. */
  legalName: string;
  /**
   * The merchant's DBA (Doing Business As) name or the alternate name the merchant may be known as.
   */
  dba: string;
  /** A four-digit number used to classify the merchant into an industry or market segment. */
  merchantCategoryCode?: string;
  /** The merchant's business website URL */
  website: string;
  /** A description of the merchant's business. */
  description: string;
  /** This is the business's company registration number. */
  registrationNumber?: string;
  /** The currency in which the funds are held in ISO-4217(alpha-3). */
  currency?: string;
  /** The IP the merchant signed up from. */
  ipAddress?: string;
  /**
   * Primary email configured with the merchant. If not provided, communication will be routed to
   * persons.email, where function= APPLICANT
   */
  notificationEmail?: string;
  /**
   * The legal entity or type of business registration of the merchant.
   *   * LIMITED_COMPANY
   *   * PUBLICLY_TRADED_CORPORATION
   *   * NON_PUBLICLY_TRADED_CORPORATION
   *   * NON_PROFT_ORGANIZATION
   *   * GOVERNMENT_ORGANIZATION
   *   * NON_PUBLICLY_TRADED_LLC
   *   * PUBLICLY_TRADED_LLC
   *   * GENERAL_PARTNERSHIP
   *   * PUBLICLY_TRADED_PARTNERSHIP
   *   * SOLE_PROPRIETORSHIP
   *   * AMERICAN_EXPRESS
   */
  legalEntity?: LegalEntityMerchantsLegalEntity;
  /**
   * The merchantes tax identification number. For exampe, in the US the (EIN) Employer
   * Identification Number would be used
   */
  taxIdReference?: string;
  /** A client indicated merchant reference identifier. */
  reference?: string;
  /**
   * The preferred language of the merchant.In the format ISO-639-1 (alpha-2) or ISO-639-1
   * (alpha-2)_ISO-3166(alpha-2)
   */
  language?: string;
  attestations?: Attestation[];
  addresses: Addresses5[];
  paymentProcessingStatistics?: PaymentProcessingStatistics1;
  /**
   * Describes the pricing profile the merchant is to be configured for. This will drive the
   * services, pricing and limits configured for merchant boarding
   */
  pricingProfile?: string;
  paymentMethods?: PaymentMethods8[];
  persons: Person3[];
  products?: Products3[];
  notifications?: Notifications;
  /** Specified time to close the Batch */
  batchCloseTime?: string;
  configurations?: Configurations;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchantsRequestProperties: s.Shape<MerchantsRequest> = {
  name: s.string(),
  type: s.optional(s.string()),
  legalName: s.string(),
  dba: s.string(),
  merchantCategoryCode: s.optional(s.string()),
  website: s.string(),
  description: s.string(),
  registrationNumber: s.optional(s.string()),
  currency: s.optional(s.string()),
  ipAddress: s.optional(s.string()),
  notificationEmail: s.optional(s.string()),
  legalEntity: s.optional(s.lazy(() => legalEntityMerchantsLegalEntitySchema)),
  taxIdReference: s.optional(s.string()),
  reference: s.optional(s.string()),
  language: s.optional(s.string()),
  attestations: s.optional(s.array(s.lazy(() => attestationSchema))),
  addresses: s.array(s.lazy(() => addresses5InternalSchema)),
  paymentProcessingStatistics: s.optional(s.lazy(() => paymentProcessingStatistics1Schema)),
  pricingProfile: s.optional(s.string()),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethods8InternalSchema))),
  persons: s.array(s.lazy(() => person3InternalSchema)),
  products: s.optional(s.array(s.lazy(() => products3InternalSchema))),
  notifications: s.optional(s.lazy(() => notificationsInternalSchema)),
  batchCloseTime: s.optional(s.string()),
  configurations: s.optional(s.lazy(() => configurationsInternalSchema)),
  _keysMap: {
    legalName: "legal_name",
    merchantCategoryCode: "merchant_category_code",
    registrationNumber: "registration_number",
    ipAddress: "ip_address",
    notificationEmail: "notification_email",
    legalEntity: "legal_entity",
    taxIdReference: "tax_id_reference",
    paymentProcessingStatistics: "payment_processing_statistics",
    pricingProfile: "pricing_profile",
    paymentMethods: "payment_methods",
    batchCloseTime: "batch_close_time",
  },
};

export const merchantsRequestInternalSchema: Schema<MerchantsRequest> = s.object<MerchantsRequest>(
  merchantsRequestProperties,
  { additionalProperties: s.json() },
);

export const merchantsRequestSchema: Schema<MerchantsRequest> = s.lazySchema(() =>
  s.object<MerchantsRequest>(
    {
      ...merchantsRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      legalName: s.string().check(s.minLength(1), s.maxLength(255)),
      dba: s.string().check(s.minLength(1), s.maxLength(255)),
      description: s.string().check(s.minLength(1), s.maxLength(255)),
      registrationNumber: s.optional(s.string().check(s.maxLength(55))),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      notificationEmail: s.optional(s.string().check(s.maxLength(50))),
      taxIdReference: s.optional(s.string().check(s.minLength(1), s.maxLength(9))),
      reference: s.optional(s.string().check(s.maxLength(50))),
      addresses: s.array(s.lazy(() => addresses5Schema)),
      pricingProfile: s.optional(s.string().check(s.maxLength(255))),
      paymentMethods: s.optional(s.array(s.lazy(() => paymentMethods8Schema))),
      persons: s.array(s.lazy(() => person3Schema)),
      products: s.optional(s.array(s.lazy(() => products3Schema))),
      notifications: s.optional(s.lazy(() => notificationsSchema)),
      batchCloseTime: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      configurations: s.optional(s.lazy(() => configurationsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
