import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if split funding settlement allowed for merchant. */
export const VasEfeOffersSplitSettlementEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type VasEfeOffersSplitSettlementEnabled2 =
  | (typeof VasEfeOffersSplitSettlementEnabled2)[keyof typeof VasEfeOffersSplitSettlementEnabled2]
  | (number & {});

export const vasEfeOffersSplitSettlementEnabled2Schema: EnumSchema<VasEfeOffersSplitSettlementEnabled2> =
  s.enumOf<VasEfeOffersSplitSettlementEnabled2>(VasEfeOffersSplitSettlementEnabled2);
