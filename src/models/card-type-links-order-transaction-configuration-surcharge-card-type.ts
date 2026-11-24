import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This indicates whether the surcharge is for a DEBIT, CREDIT or COMMERCIAL card type by the
 * merchant
 */
export const CardTypeLinksOrderTransactionConfigurationSurchargeCardType = {
  Debit: "DEBIT",
  Credit: "CREDIT",
  Commercial: "COMMERCIAL",
} as const;
export type CardTypeLinksOrderTransactionConfigurationSurchargeCardType =
  | (typeof CardTypeLinksOrderTransactionConfigurationSurchargeCardType)[keyof typeof CardTypeLinksOrderTransactionConfigurationSurchargeCardType]
  | (string & {});

export const cardTypeLinksOrderTransactionConfigurationSurchargeCardTypeSchema: EnumSchema<CardTypeLinksOrderTransactionConfigurationSurchargeCardType> =
  s.enumOf<CardTypeLinksOrderTransactionConfigurationSurchargeCardType>(
    CardTypeLinksOrderTransactionConfigurationSurchargeCardType,
  );
