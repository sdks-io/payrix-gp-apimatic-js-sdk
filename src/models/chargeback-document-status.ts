import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackDocumentStatus = {
  Created: "created",
  Processed: "processed",
  Failed: "failed",
} as const;
export type ChargebackDocumentStatus =
  | (typeof ChargebackDocumentStatus)[keyof typeof ChargebackDocumentStatus]
  | (string & {});

export const chargebackDocumentStatusSchema: EnumSchema<ChargebackDocumentStatus> =
  s.enumOf<ChargebackDocumentStatus>(ChargebackDocumentStatus);
