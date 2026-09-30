import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchesPostRequestSchema, type BatchesPostRequest } from "./batches-post-request.js";
import { customersPostRequestSchema, type CustomersPostRequest } from "./customers-post-request.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "./entities-post-request.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { membersPostRequestSchema, type MembersPostRequest } from "./members-post-request.js";
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
  merchantsOmniTokenEnabled1Schema,
  type MerchantsOmniTokenEnabled1,
} from "./merchants-omni-token-enabled1.js";
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
import { plansPostRequestSchema, type PlansPostRequest } from "./plans-post-request.js";
import { terminalsPostRequestSchema, type TerminalsPostRequest } from "./terminals-post-request.js";

export type MerchantsPostRequest = {
  /** Show the total approved amount to this merchant. @default 0 */
  totalApprovedSales?: number;
  entity: EntitiesPostRequest;
  /**
   * The name under which the Merchant is doing business, if applicable. This field is stored as a
   * text string and must be between 0 and 50 characters long.
   */
  dba?: string;
  new?: MerchantsNew1;
  advancedBilling?: MerchantsAdvanceBilling1;
  seasonal?: MerchantsSeasonal1;
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
   *
   * @default 0
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
   *
   * @default 0
   */
  avgTicket?: number;
  /**
   * The American Express merchant identifier for this Merchant, if applicable. This field is stored
   * as a string and must be between 1 and 15 characters long.
   */
  amex?: string;
  /**
   * The Discover merchant identifier for this Merchant, if applicable. This field is stored as a
   * string and must be between 1 and 15 characters long.
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
  /**
   * The date the Merchant platform disclosure is reviewed by the Merchant. The format should be
   * YYYYMMDD
   */
  disclosureDate?: number;
  environment: MerchantEnvironment1;
  status?: MerchantStatus1;
  incrementalAuthSupported?: MerchantsIncrementalAuthSupported1;
  autoBoarded?: MerchantAutoBoarded1;
  statusReason?: MerchantStatusReason1;
  locationType?: MerchantLocationType1;
  /** This field indicates what percentage are internet originated transactions. */
  percentEcomm?: number;
  /**
   * The merchant percentage of transactions that are Card Not Present (Includes MOTO and
   * eCommerce).
   */
  percentKeyed?: number;
  /** This field indicates what percentage of the transactions are Business to Business. */
  percentBusiness?: number;
  /**
   * The expected total volume for all credit card and ACH payments that the merchant will process
   * for the current year.
   */
  totalVolume?: number;
  /** The denial or account closure reason code. */
  accountClosureReasonCode?: string;
  /** The date the account closure reason code was provided. The format should be YYYMMDD. */
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
  /** The date of letter. The format should be YYYYMMDD. */
  letterDate?: number;
  /** Notification Email for chargebacks. */
  chargebackNotificationEmail?: string;
  tcAttestation?: MerchantsTcAttestation1;
  applePayActive?: MerchantsApplePayActive1;
  googlePayActive?: MerchantsGooglePayActive1;
  naics?: MerchantsNaics1;
  /**
   * The NAICS sector description matching the above NAICS sector code. If "Other", industry
   * description is prefixed with "Other: ".
   */
  naicsDescription?: string;
  /** Transaction Session Id. */
  tmxSessionId?: string;
  passTokenEnabled?: MerchantsPassTokenEnabled1;
  expressBatchCloseMethod?: MerchantsExpressBatchCloseMethod1;
  /** This field indicates the batch close time for this merchant applicable to Express platform. */
  expressBatchCloseTime?: string;
  omniTokenEnabled?: MerchantsOmniTokenEnabled1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  batches?: BatchesPostRequest[];
  customers?: CustomersPostRequest[];
  members?: MembersPostRequest[];
  plans?: PlansPostRequest[];
  terminals?: TerminalsPostRequest[];
};

export const merchantsPostRequestSchema: Schema<MerchantsPostRequest> = s.object<MerchantsPostRequest>({
  totalApprovedSales: s.defaulted(s.number(), 0),
  entity: entitiesPostRequestSchema,
  dba: s.optional(s.string()),
  new: s.optional(s.lazy(() => merchantsNew1Schema)),
  advancedBilling: s.optional(s.lazy(() => merchantsAdvanceBilling1Schema)),
  seasonal: s.optional(s.lazy(() => merchantsSeasonal1Schema)),
  established: s.optional(s.number()),
  annualCcSales: s.defaulted(s.number(), 0),
  annualCcSaleVolume: s.optional(s.number()),
  annualAchSaleVolume: s.optional(s.number()),
  amexVolume: s.optional(s.number()),
  avgTicket: s.defaulted(s.number(), 0),
  amex: s.optional(s.string()),
  discover: s.optional(s.string()),
  mcc: s.optional(s.string()),
  visaMvv: s.optional(s.string()),
  visaDisclosure: s.optional(s.lazy(() => merchantsVisaDisclosureIp1Schema)),
  disclosureIp: s.optional(s.string()),
  disclosureDate: s.optional(s.number()),
  environment: merchantEnvironment1Schema,
  status: s.optional(s.lazy(() => merchantStatus1Schema)),
  incrementalAuthSupported: s.optional(s.lazy(() => merchantsIncrementalAuthSupported1Schema)),
  autoBoarded: s.optional(s.lazy(() => merchantAutoBoarded1Schema)),
  statusReason: s.optional(s.lazy(() => merchantStatusReason1Schema)),
  locationType: s.optional(s.lazy(() => merchantLocationType1Schema)),
  percentEcomm: s.optional(s.number()),
  percentKeyed: s.optional(s.number()),
  percentBusiness: s.optional(s.number()),
  totalVolume: s.optional(s.number()),
  accountClosureReasonCode: s.optional(s.string()),
  accountClosureReasonDate: s.optional(s.number()),
  riskLevel: s.optional(s.lazy(() => merchantRiskLevel1Schema)),
  creditRatio: s.optional(s.number()),
  creditTimeliness: s.optional(s.number()),
  chargebackRatio: s.optional(s.number()),
  ndxDays: s.optional(s.number()),
  ndxPercentage: s.optional(s.number()),
  saqType: s.optional(s.lazy(() => merchantsSaqType1Schema)),
  saqDate: s.optional(s.number()),
  qsa: s.optional(s.string()),
  letterStatus: s.optional(s.lazy(() => merchantsLetterStatus1Schema)),
  letterDate: s.optional(s.number()),
  chargebackNotificationEmail: s.optional(s.string()),
  tcAttestation: s.optional(s.lazy(() => merchantsTcAttestation1Schema)),
  applePayActive: s.optional(s.lazy(() => merchantsApplePayActive1Schema)),
  googlePayActive: s.optional(s.lazy(() => merchantsGooglePayActive1Schema)),
  naics: s.optional(s.lazy(() => merchantsNaics1Schema)),
  naicsDescription: s.optional(s.string()),
  tmxSessionId: s.optional(s.string()),
  passTokenEnabled: s.optional(s.lazy(() => merchantsPassTokenEnabled1Schema)),
  expressBatchCloseMethod: s.optional(s.lazy(() => merchantsExpressBatchCloseMethod1Schema)),
  expressBatchCloseTime: s.optional(s.string()),
  omniTokenEnabled: s.optional(s.lazy(() => merchantsOmniTokenEnabled1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  batches: s.optional(s.array(s.lazy(() => batchesPostRequestSchema))),
  customers: s.optional(s.array(s.lazy(() => customersPostRequestSchema))),
  members: s.optional(s.array(s.lazy(() => membersPostRequestSchema))),
  plans: s.optional(s.array(s.lazy(() => plansPostRequestSchema))),
  terminals: s.optional(s.array(s.lazy(() => terminalsPostRequestSchema))),
  _keysMap: {
    annualCcSales: "annualCCSales",
    annualCcSaleVolume: "annualCCSaleVolume",
    annualAchSaleVolume: "annualACHSaleVolume",
    disclosureIp: "disclosureIP",
  },
});
