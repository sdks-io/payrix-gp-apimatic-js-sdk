import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the status of a cash advance application submitted by the sub-merchant */
export const VasEfeOffersOfferStatus2 = {
  Active: "ACTIVE",
  Applied: "APPLIED",
  Approved: "APPROVED",
  Expired: "EXPIRED",
} as const;
export type VasEfeOffersOfferStatus2 =
  | (typeof VasEfeOffersOfferStatus2)[keyof typeof VasEfeOffersOfferStatus2]
  | (string & {});

export const vasEfeOffersOfferStatus2Schema: EnumSchema<VasEfeOffersOfferStatus2> =
  s.enumOf<VasEfeOffersOfferStatus2>(VasEfeOffersOfferStatus2);
