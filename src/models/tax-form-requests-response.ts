import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { merchant5Schema, type Merchant5 } from "./merchant5.js";
import { taxFormType1Schema, type TaxFormType1 } from "./tax-form-type1.js";

export type TaxFormRequestsResponse = {
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
  merchant?: Merchant5;
  type?: TaxFormType1;
  /** The tax year for which the document is requested. */
  taxYear?: number;
  /** The API call response code. */
  responseCode?: number;
};

export const taxFormRequestsResponseSchema: Schema<TaxFormRequestsResponse> =
  s.object<TaxFormRequestsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    merchant: s.optional(s.lazy(() => merchant5Schema)),
    type: s.optional(s.lazy(() => taxFormType1Schema)),
    taxYear: s.optional(s.number()),
    responseCode: s.optional(s.number()),
  });
