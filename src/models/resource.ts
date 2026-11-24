import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Resource = {
  Authentications: "AUTHENTICATIONS",
  Batches: "BATCHES",
  CurrencyConversions: "CURRENCY_CONVERSIONS",
  Devices: "DEVICES",
  Funds: "FUNDS",
  Installments: "INSTALLMENTS",
  Transfers: "TRANSFERS",
  Transactions: "TRANSACTIONS",
  Verifications: "VERIFICATIONS",
} as const;
export type Resource = (typeof Resource)[keyof typeof Resource] | (string & {});

export const resourceSchema: EnumSchema<Resource> = s.enumOf<Resource>(Resource);
