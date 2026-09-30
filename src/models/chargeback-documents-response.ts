import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackDocumentStatus2Schema,
  type ChargebackDocumentStatus2,
} from "./chargeback-document-status2.js";
import { chargebackDocumentType1Schema, type ChargebackDocumentType1 } from "./chargeback-document-type1.js";
import {
  chargebackDocumentsDocumentSource1Schema,
  type ChargebackDocumentsDocumentSource1,
} from "./chargeback-documents-document-source1.js";
import { chargebackSchema, type Chargeback } from "./chargeback.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type ChargebackDocumentsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  chargeback?: Chargeback;
  /**
   * The reference for this chargebackDocument. This field is stored as a text string and must be
   * between 1 and 100 characters long. The value is set when the file is properly integrated,
   * otherwise will be null.
   */
  ref?: string;
  type?: ChargebackDocumentType1;
  /**
   * The name of this chargebackDocument. This field is stored as a text string and must be between
   * 1 and 100 characters long. The value is set when the file is created and properly integrated.
   * It holds the real file name used by the user.
   */
  name?: string;
  /**
   * The description of this chargebackDocument. This field is stored as a text string and must be
   * between 1 and 100 characters long.
   */
  description?: string;
  status?: ChargebackDocumentStatus2;
  documentSource?: ChargebackDocumentsDocumentSource1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const chargebackDocumentsResponseSchema: Schema<ChargebackDocumentsResponse> =
  s.object<ChargebackDocumentsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    chargeback: s.optional(s.lazy(() => chargebackSchema)),
    ref: s.optional(s.string()),
    type: s.optional(s.lazy(() => chargebackDocumentType1Schema)),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    status: s.optional(s.lazy(() => chargebackDocumentStatus2Schema)),
    documentSource: s.optional(s.lazy(() => chargebackDocumentsDocumentSource1Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
