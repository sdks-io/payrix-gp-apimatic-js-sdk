import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargebackDocumentType1Schema, type ChargebackDocumentType1 } from "./chargeback-document-type1.js";
import {
  chargebackDocumentsDocumentSource1Schema,
  type ChargebackDocumentsDocumentSource1,
} from "./chargeback-documents-document-source1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type ChargebackDocumentsPostRequest = {
  /** The identifier of the Chargeback resource that this chargebackDocument relates to. */
  chargeback: string;
  type?: ChargebackDocumentType1;
  /**
   * The reference of this chargeback document is stored as a text string and must be between 1 and
   * 100 characters long, with the value being set when the file is properly integrated, otherwise
   * it will be null.
   */
  ref?: string;
  /**
   * The description of this chargebackDocument. This field is stored as a text string and must be
   * between 1 and 100 characters long.
   */
  description?: string;
  /**
   * The name of this chargeback document holds the real file name used by the user, stored as a
   * text string and must be between 1 and 100 characters long.
   */
  name?: string;
  documentSource?: ChargebackDocumentsDocumentSource1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const chargebackDocumentsPostRequestSchema: Schema<ChargebackDocumentsPostRequest> =
  s.object<ChargebackDocumentsPostRequest>({
    chargeback: s.string(),
    type: s.optional(s.lazy(() => chargebackDocumentType1Schema)),
    ref: s.optional(s.string()),
    description: s.optional(s.string()),
    name: s.optional(s.string()),
    documentSource: s.optional(s.lazy(() => chargebackDocumentsDocumentSource1Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
