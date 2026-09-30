import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import {
  vasEfeOffersIsMerchantPrequalified2Schema,
  type VasEfeOffersIsMerchantPrequalified2,
} from "./vas-efe-offers-is-merchant-prequalified2.js";
import {
  vasEfeOffersOfferStatus2Schema,
  type VasEfeOffersOfferStatus2,
} from "./vas-efe-offers-offer-status2.js";
import {
  vasEfeOffersSplitSettlementEnabled2Schema,
  type VasEfeOffersSplitSettlementEnabled2,
} from "./vas-efe-offers-split-settlement-enabled2.js";

export type VasEfeOffersResponse = {
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
  /** Id of the offer */
  offerId?: string;
  /** Expire date of offer */
  expiry?: string;
  /** EntityId for merchant */
  entity?: string;
  /** MID */
  mid?: string;
  /** Primary point of contacts email */
  primaryContactEmail?: string;
  /** This refers to the partner product association */
  merchantLenderId?: string;
  /** Vendor associated with the product */
  vendorName?: string;
  /** Date of provided offer */
  offerDate?: string;
  /** Amount approved for */
  totalApprovedAmount?: string;
  /** Fee amount charged */
  feeAmount?: string;
  /** Refers to fee charged by a lender to process a new loan application. */
  originationFee?: string;
  /** Url of corresponding offer */
  offerUrl?: string;
  /** Name associated with the product */
  productName?: string;
  /** Long description of the product. */
  productLongDescription?: string;
  /** To identify whether a partner belongs to Core or VAP platforms. */
  acquirePlatform?: string;
  /**
   * The date when preliminary information is submitted for vendor assessment to determine merchant
   * eligibility to receive the cash advance.
   */
  prequalificationSentDate?: string;
  /** Date when the vendor provides the preQualification status of a given sub-merchant. */
  prequalificationReceivedDate?: string;
  isMerchantPrequalified?: VasEfeOffersIsMerchantPrequalified2;
  /**
   * Date when merchant submitted an application to receive cash advance from a vendor. Date should
   * be past or present in the format YYYY-MM-DD.
   */
  appliedDate?: string;
  offerStatus?: VasEfeOffersOfferStatus2;
  /** Type of product which partner has enrolled into. */
  productCode?: string;
  /** Date when sub merchant started re-paying cash advance. */
  startDate?: string;
  /** Date when sub merchant is expected to complete the repayment of cash advance. */
  endDate?: string;
  /** Maximum amount to be repaid by sub merchant. */
  splitFundingCap?: string;
  /** Repayment percentage as defined by lender. */
  splitFundingRate?: string;
  /** Maximum daily repayment limit as defined by lender. */
  dailyFundingMaxLimit?: string;
  /** Split Funding Amount refers to the cash advance provided to the merchant. */
  splitFundingAmount?: string;
  /** The date when the merchant has opted in. */
  optInDate?: string;
  splitSettlementEnabled?: VasEfeOffersSplitSettlementEnabled2;
  /** The unique identifier for the Embedded Finance Partner (EFP) offer. */
  efpOfferId?: string;
  /** The approved amount for the product. */
  productApprovedAmount?: string;
};

export const vasEfeOffersResponseSchema: Schema<VasEfeOffersResponse> = s.object<VasEfeOffersResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  offerId: s.optional(s.string()),
  expiry: s.optional(s.string()),
  entity: s.optional(s.string()),
  mid: s.optional(s.string()),
  primaryContactEmail: s.optional(s.string()),
  merchantLenderId: s.optional(s.string()),
  vendorName: s.optional(s.string()),
  offerDate: s.optional(s.string()),
  totalApprovedAmount: s.optional(s.string()),
  feeAmount: s.optional(s.string()),
  originationFee: s.optional(s.string()),
  offerUrl: s.optional(s.string()),
  productName: s.optional(s.string()),
  productLongDescription: s.optional(s.string()),
  acquirePlatform: s.optional(s.string()),
  prequalificationSentDate: s.optional(s.string()),
  prequalificationReceivedDate: s.optional(s.string()),
  isMerchantPrequalified: s.optional(s.lazy(() => vasEfeOffersIsMerchantPrequalified2Schema)),
  appliedDate: s.optional(s.string()),
  offerStatus: s.optional(s.lazy(() => vasEfeOffersOfferStatus2Schema)),
  productCode: s.optional(s.string()),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  splitFundingCap: s.optional(s.string()),
  splitFundingRate: s.optional(s.string()),
  dailyFundingMaxLimit: s.optional(s.string()),
  splitFundingAmount: s.optional(s.string()),
  optInDate: s.optional(s.string()),
  splitSettlementEnabled: s.optional(s.lazy(() => vasEfeOffersSplitSettlementEnabled2Schema)),
  efpOfferId: s.optional(s.string()),
  productApprovedAmount: s.optional(s.string()),
});
