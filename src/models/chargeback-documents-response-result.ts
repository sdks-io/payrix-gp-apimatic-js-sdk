import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackDocumentsResponseItemSchema,
  type ChargebackDocumentsResponseItem,
} from "./chargeback-documents-response-item.js";

export type ChargebackDocumentsResponseResult = {
  response?: ChargebackDocumentsResponseItem;
};

export const chargebackDocumentsResponseResultSchema: Schema<ChargebackDocumentsResponseResult> =
  s.object<ChargebackDocumentsResponseResult>({
    response: s.optional(s.lazy(() => chargebackDocumentsResponseItemSchema)),
  });
