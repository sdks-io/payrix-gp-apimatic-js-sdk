import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appleDomainsResponseSchema, type AppleDomainsResponse } from "./apple-domains-response.js";
import { assessmentsResponseSchema, type AssessmentsResponse } from "./assessments-response.js";
import { batchesResponseSchema, type BatchesResponse } from "./batches-response.js";
import { chargebacksResponseSchema, type ChargebacksResponse } from "./chargebacks-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { customersResponseSchema, type CustomersResponse } from "./customers-response.js";
import { entity4Schema, type Entity4 } from "./entity4.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { invoicesResponseSchema, type InvoicesResponse } from "./invoices-response.js";
import { merchantAutoBoarded1Schema, type MerchantAutoBoarded1 } from "./merchant-auto-boarded1.js";
import { merchantEnvironment1Schema, type MerchantEnvironment1 } from "./merchant-environment1.js";
import { merchantLocationType1Schema, type MerchantLocationType1 } from "./merchant-location-type1.js";
import { merchantRiskLevel1Schema, type MerchantRiskLevel1 } from "./merchant-risk-level1.js";
import { merchantStatusReason1Schema, type MerchantStatusReason1 } from "./merchant-status-reason1.js";
import { merchantStatus1Schema, type MerchantStatus1 } from "./merchant-status1.js";
import {
  merchantsAdvanceBilling1Schema,
  type MerchantsAdvanceBilling1,
} from "./merchants-advance-billing1.js";
import {
  merchantsApplePayActive1Schema,
  type MerchantsApplePayActive1,
} from "./merchants-apple-pay-active1.js";
import {
  merchantsExpressBatchCloseMethod1Schema,
  type MerchantsExpressBatchCloseMethod1,
} from "./merchants-express-batch-close-method1.js";
import {
  merchantsGooglePayActive1Schema,
  type MerchantsGooglePayActive1,
} from "./merchants-google-pay-active1.js";
import {
  merchantsIncrementalAuthSupported1Schema,
  type MerchantsIncrementalAuthSupported1,
} from "./merchants-incremental-auth-supported1.js";
import { merchantsLetterStatus1Schema, type MerchantsLetterStatus1 } from "./merchants-letter-status1.js";
import { merchantsNaics1Schema, type MerchantsNaics1 } from "./merchants-naics1.js";
import { merchantsNew1Schema, type MerchantsNew1 } from "./merchants-new1.js";
import {
  merchantsPassTokenEnabled1Schema,
  type MerchantsPassTokenEnabled1,
} from "./merchants-pass-token-enabled1.js";
import { merchantsSaqType1Schema, type MerchantsSaqType1 } from "./merchants-saq-type1.js";
import { merchantsSeasonal1Schema, type MerchantsSeasonal1 } from "./merchants-seasonal1.js";
import { merchantsTcAttestation1Schema, type MerchantsTcAttestation1 } from "./merchants-tc-attestation1.js";
import {
  merchantsVisaDisclosureIp1Schema,
  type MerchantsVisaDisclosureIp1,
} from "./merchants-visa-disclosure-ip1.js";

export type Merchant1 = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  /**
   * The date and time on which this Merchant last processed a Transaction. The format should be
   * YYYY-MM-DD HH:MM:SS.
   */
  lastActivity?: string;
  /** Show the total approved amount to this merchant. */
  totalApprovedSales?: number;
  entity?: Entity4;
  /**
   * The name under which the Merchant is doing business, if applicable. This field is stored as a
   * text string and must be between 0 and 50 characters long.
   */
  dba?: string;
  new?: MerchantsNew1;
  incrementalAuthSupported?: MerchantsIncrementalAuthSupported1;
  seasonal?: MerchantsSeasonal1;
  advancedBilling?: MerchantsAdvanceBilling1;
  /**
   * The date on which the Merchant was established. The date is specified as an eight digit string
   * in YYYYMMDD format, for example, '20160120' for January 20, 2016.
   *
   * **Note:** Include the `established` date value to ensure successful underwriting and new
   * Merchant onboarding to the VCore platform.
   */
  established?: number;
  /**
   * The value of the annual credit card sales of this Merchant. This field is specified as an
   * integer in cents. For example, $25.30 is expressed as '2530'.
   */
  annualCcSales?: number;
  /**
   * The value of the annual credit card sale volume of this Merchant. This field is specified as an
   * integer in cents. For example, $25.30 is expressed as '2530'.
   */
  annualCcSaleVolume?: number;
  /**
   * The value of the annual direct deposit sale volume of this Merchant. This field is specified as
   * an integer in cents. For example, $25.30 is expressed as '2530'.
   */
  annualAchSaleVolume?: number;
  /** Indicates the Annual AMEX Sales Volume for the outlet. */
  amexVolume?: number;
  /**
   * The value of the average credit card sales of this Merchant. This field is specified as an
   * integer in cents. For example, $25.30 is expressed as '2530'.
   */
  avgTicket?: number;
  /**
   * The American Express merchant identifier for this Merchant, if applicable. This field is stored
   * as a text string and must be between 1 and 15 characters long.
   */
  amex?: string;
  /**
   * The Discover merchant identifier for this Merchant, if applicable. This field is stored as a
   * text string and must be between 1 and 15 characters long.
   */
  discover?: string;
  /**
   * The Merchant Category Code (MCC) for this Merchant. This code is not required to create a
   * Merchant, but it is required to successfully board a Merchant.
   */
  mcc?: string;
  /**
   * Merchant Verification Value. A value assigned by Visa to identify participation in select
   * merchant programs.
   */
  visaMvv?: string;
  visaDisclosure?: MerchantsVisaDisclosureIp1;
  /** The IP address where the Merchant platform disclosure is hosted. */
  disclosureIp?: string;
  /** The date the Merchant platform disclosure is reviewed by the Merchant. */
  disclosureDate?: number;
  environment?: MerchantEnvironment1;
  status?: MerchantStatus1;
  autoBoarded?: MerchantAutoBoarded1;
  statusReason?: MerchantStatusReason1;
  /** The denial or account closure reason code. */
  accountClosureReasonCode?: string;
  /** The date the account closure reason code was provided. It should be in YYYYMMDD format */
  accountClosureReasonDate?: number;
  riskLevel?: MerchantRiskLevel1;
  /** The credit ratio to use while calculating risk factors for credit, if applicable. */
  creditRatio?: number;
  /** The credit timeliness for the Merchant, if applicable. */
  creditTimeliness?: number;
  /** Chargeback Ratio. */
  chargebackRatio?: number;
  /** The ndx (Non Delivery Exposure) days which the Merchant is in, if applicable. */
  ndxDays?: number;
  /** The ndx (Non Delivery Exposure) percentage to be used for the merchant, if applicable. */
  ndxPercentage?: number;
  /** The date and time on which this Merchant was successfully boarded. */
  boarded?: number;
  saqType?: MerchantsSaqType1;
  /** The date of the PCI SAQ assessment. The format should be YYYYMMDD. */
  saqDate?: number;
  /**
   * Qualified Security Assessor (QSA) companies are independent security organizations that have
   * been qualified by the PCI Security Standards Council to validate an entity's adherence to PCI
   * DSS. This is a free-text field for inputting the QSA's business name. The name of the Qualified
   * Security Assessor (QSA) used by the Merchant to assess, verify and prove their PCI DSS
   * compliance.
   */
  qsa?: string;
  letterStatus?: MerchantsLetterStatus1;
  /** The date associated with the letter status. The format should be YYYYMMDD. */
  letterDate?: number;
  tcAttestation?: MerchantsTcAttestation1;
  /** Transaction Session Id. */
  tmxSessionId?: string;
  /** Notification Email for chargebacks. */
  chargebackNotificationEmail?: string;
  locationType?: MerchantLocationType1;
  /**
   * The merchant percentage of transactions that are Card Not Present (Includes MOTO and
   * eCommerce).
   */
  percentKeyed?: number;
  /**
   * The expected total volume for all credit card and ACH payments that the merchant will process
   * for the current year.
   */
  totalVolume?: number;
  /** This field indicates what percentage are internet originated transactions. */
  percentEcomm?: number;
  /** This field indicates what percentage of the transactions are Business to Business. */
  percentBusiness?: number;
  applePayActive?: MerchantsApplePayActive1;
  /** The status of Apple Pay for this merchant. */
  applePayStatus?: string;
  googlePayActive?: MerchantsGooglePayActive1;
  naics?: MerchantsNaics1;
  /**
   * The NAICS sector description matching the above NAICS sector code. If "Other", industry
   * description is prefixed with "Other: ".
   */
  naicsDescription?: string;
  expressBatchCloseMethod?: MerchantsExpressBatchCloseMethod1;
  /** This field indicates the batch close time for this merchant applicable to Express platform. */
  expressBatchCloseTime?: string;
  passTokenEnabled?: MerchantsPassTokenEnabled1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  assessments?: AssessmentsResponse[];
  appleDomains?: AppleDomainsResponse[];
  batches?: BatchesResponse[];
  chargebacks?: ChargebacksResponse[];
  customers?: CustomersResponse[];
  invoices?: InvoicesResponse[];
};

export const merchant1Schema: Schema<Merchant1> = s.object<Merchant1>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  lastActivity: s.optional(s.string()),
  totalApprovedSales: s.optional(s.number()),
  entity: s.optional(s.lazy(() => entity4Schema)),
  dba: s.optional(s.string()),
  new: s.optional(s.lazy(() => merchantsNew1Schema)),
  incrementalAuthSupported: s.optional(s.lazy(() => merchantsIncrementalAuthSupported1Schema)),
  seasonal: s.optional(s.lazy(() => merchantsSeasonal1Schema)),
  advancedBilling: s.optional(s.lazy(() => merchantsAdvanceBilling1Schema)),
  established: s.optional(s.number()),
  annualCcSales: s.optional(s.number()),
  annualCcSaleVolume: s.optional(s.number()),
  annualAchSaleVolume: s.optional(s.number()),
  amexVolume: s.optional(s.number()),
  avgTicket: s.optional(s.number()),
  amex: s.optional(s.string()),
  discover: s.optional(s.string()),
  mcc: s.optional(s.string()),
  visaMvv: s.optional(s.string()),
  visaDisclosure: s.optional(s.lazy(() => merchantsVisaDisclosureIp1Schema)),
  disclosureIp: s.optional(s.string()),
  disclosureDate: s.optional(s.number()),
  environment: s.optional(s.lazy(() => merchantEnvironment1Schema)),
  status: s.optional(s.lazy(() => merchantStatus1Schema)),
  autoBoarded: s.optional(s.lazy(() => merchantAutoBoarded1Schema)),
  statusReason: s.optional(s.lazy(() => merchantStatusReason1Schema)),
  accountClosureReasonCode: s.optional(s.string()),
  accountClosureReasonDate: s.optional(s.number()),
  riskLevel: s.optional(s.lazy(() => merchantRiskLevel1Schema)),
  creditRatio: s.optional(s.number()),
  creditTimeliness: s.optional(s.number()),
  chargebackRatio: s.optional(s.number()),
  ndxDays: s.optional(s.number()),
  ndxPercentage: s.optional(s.number()),
  boarded: s.optional(s.number()),
  saqType: s.optional(s.lazy(() => merchantsSaqType1Schema)),
  saqDate: s.optional(s.number()),
  qsa: s.optional(s.string()),
  letterStatus: s.optional(s.lazy(() => merchantsLetterStatus1Schema)),
  letterDate: s.optional(s.number()),
  tcAttestation: s.optional(s.lazy(() => merchantsTcAttestation1Schema)),
  tmxSessionId: s.optional(s.string()),
  chargebackNotificationEmail: s.optional(s.string()),
  locationType: s.optional(s.lazy(() => merchantLocationType1Schema)),
  percentKeyed: s.optional(s.number()),
  totalVolume: s.optional(s.number()),
  percentEcomm: s.optional(s.number()),
  percentBusiness: s.optional(s.number()),
  applePayActive: s.optional(s.lazy(() => merchantsApplePayActive1Schema)),
  applePayStatus: s.optional(s.string()),
  googlePayActive: s.optional(s.lazy(() => merchantsGooglePayActive1Schema)),
  naics: s.optional(s.lazy(() => merchantsNaics1Schema)),
  naicsDescription: s.optional(s.string()),
  expressBatchCloseMethod: s.optional(s.lazy(() => merchantsExpressBatchCloseMethod1Schema)),
  expressBatchCloseTime: s.optional(s.string()),
  passTokenEnabled: s.optional(s.lazy(() => merchantsPassTokenEnabled1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  assessments: s.optional(s.array(s.lazy(() => assessmentsResponseSchema))),
  appleDomains: s.optional(s.array(s.lazy(() => appleDomainsResponseSchema))),
  batches: s.optional(s.array(s.lazy(() => batchesResponseSchema))),
  chargebacks: s.optional(s.array(s.lazy(() => chargebacksResponseSchema))),
  customers: s.optional(s.array(s.lazy(() => customersResponseSchema))),
  invoices: s.optional(s.array(s.lazy(() => invoicesResponseSchema))),
  _keysMap: {
    annualCcSales: "annualCCSales",
    annualCcSaleVolume: "annualCCSaleVolume",
    annualAchSaleVolume: "annualACHSaleVolume",
    disclosureIp: "disclosureIP",
  },
});
