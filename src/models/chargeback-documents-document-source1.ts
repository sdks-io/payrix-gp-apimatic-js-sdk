import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The source of the document. <details> <summary>Valid Values</summary>
 * - `merchant` - **Merchant.**
 * - `issuer` - **Issuer.** </details>
 */
export const ChargebackDocumentsDocumentSource1 = {
  Merchant: "merchant",
  Issuer: "issuer",
} as const;
export type ChargebackDocumentsDocumentSource1 =
  | (typeof ChargebackDocumentsDocumentSource1)[keyof typeof ChargebackDocumentsDocumentSource1]
  | (string & {});

export const chargebackDocumentsDocumentSource1Schema: EnumSchema<ChargebackDocumentsDocumentSource1> =
  s.enumOf<ChargebackDocumentsDocumentSource1>(ChargebackDocumentsDocumentSource1);
