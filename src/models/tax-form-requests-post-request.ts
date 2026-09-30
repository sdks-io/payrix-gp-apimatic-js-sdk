import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxFormType1Schema, type TaxFormType1 } from "./tax-form-type1.js";

export type TaxFormRequestsPostRequest = {
  /** The identifies of the Merchant requesting the tax document. */
  merchant?: string;
  type?: TaxFormType1;
  /** The tax year for which the document is requested. */
  taxYear?: number;
  /** The API call response code. */
  responseCode?: number;
};

export const taxFormRequestsPostRequestSchema: Schema<TaxFormRequestsPostRequest> =
  s.object<TaxFormRequestsPostRequest>({
    merchant: s.optional(s.string()),
    type: s.optional(s.lazy(() => taxFormType1Schema)),
    taxYear: s.optional(s.number()),
    responseCode: s.optional(s.number()),
  });
