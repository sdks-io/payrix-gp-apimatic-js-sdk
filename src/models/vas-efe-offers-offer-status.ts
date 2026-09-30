import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VasEfeOffersOfferStatus = {
  Active: "ACTIVE",
  Applied: "APPLIED",
  Approved: "APPROVED",
  Expired: "EXPIRED",
} as const;
export type VasEfeOffersOfferStatus =
  | (typeof VasEfeOffersOfferStatus)[keyof typeof VasEfeOffersOfferStatus]
  | (string & {});

export const vasEfeOffersOfferStatusSchema: EnumSchema<VasEfeOffersOfferStatus> =
  s.enumOf<VasEfeOffersOfferStatus>(VasEfeOffersOfferStatus);
