import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of tax being charged. *VAT - Value-added tax *NATIONAL - National tax. *SERVICE -
 * Service tax. *DUTY - Duty tax or sometimes referred to as a tariff. *ALTERNATE - Use this option
 * if none of the other tax types apply. *STATE - State or provinical tax. *HST - Harmonized sales
 * tax. *GST - Goods and services tax. *QST - Quebec Sales tax. *SHIPPING - Shipping tax.
 */
export const TypeTransactionsOrderTaxesType = {
  Vat: "VAT",
  National: "NATIONAL",
  Service: "SERVICE",
  Duty: "DUTY",
  Alternate: "ALTERNATE",
  State: "STATE",
  Hst: "HST",
  Gst: "GST",
  Qst: "QST",
  Shipping: "SHIPPING",
} as const;
export type TypeTransactionsOrderTaxesType =
  | (typeof TypeTransactionsOrderTaxesType)[keyof typeof TypeTransactionsOrderTaxesType]
  | (string & {});

export const typeTransactionsOrderTaxesTypeSchema: EnumSchema<TypeTransactionsOrderTaxesType> =
  s.enumOf<TypeTransactionsOrderTaxesType>(TypeTransactionsOrderTaxesType);
