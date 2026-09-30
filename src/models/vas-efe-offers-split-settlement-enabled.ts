import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VasEfeOffersSplitSettlementEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type VasEfeOffersSplitSettlementEnabled =
  | (typeof VasEfeOffersSplitSettlementEnabled)[keyof typeof VasEfeOffersSplitSettlementEnabled]
  | (number & {});

export const vasEfeOffersSplitSettlementEnabledSchema: EnumSchema<VasEfeOffersSplitSettlementEnabled> =
  s.enumOf<VasEfeOffersSplitSettlementEnabled>(VasEfeOffersSplitSettlementEnabled);
