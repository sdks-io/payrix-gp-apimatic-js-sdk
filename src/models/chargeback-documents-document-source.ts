import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackDocumentsDocumentSource = {
  Merchant: "merchant",
  Issuer: "issuer",
} as const;
export type ChargebackDocumentsDocumentSource =
  | (typeof ChargebackDocumentsDocumentSource)[keyof typeof ChargebackDocumentsDocumentSource]
  | (string & {});

export const chargebackDocumentsDocumentSourceSchema: EnumSchema<ChargebackDocumentsDocumentSource> =
  s.enumOf<ChargebackDocumentsDocumentSource>(ChargebackDocumentsDocumentSource);
