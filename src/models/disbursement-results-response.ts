import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import {
  disbursementRefsResponseSchema,
  type DisbursementRefsResponse,
} from "./disbursement-refs-response.js";
import { disbursementResultCode2Schema, type DisbursementResultCode2 } from "./disbursement-result-code2.js";
import {
  disbursementResultsPlatform2Schema,
  type DisbursementResultsPlatform2,
} from "./disbursement-results-platform2.js";
import { disbursement2Schema, type Disbursement2 } from "./disbursement2.js";

export type DisbursementResultsResponse = {
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
  disbursement?: Disbursement2;
  disbursementRef?: DisbursementRefsResponse;
  code?: DisbursementResultCode2;
  /** The original, unmapped code as received from the processor for this result. */
  originalCode?: string;
  platform?: DisbursementResultsPlatform2;
  /** The message string for this result. */
  message?: string;
  /** The amount of the disbursement relevant for this result. */
  amount?: number;
  /** Data (the trace number, if applicable). */
  data?: string;
};

export const disbursementResultsResponseSchema: Schema<DisbursementResultsResponse> =
  s.object<DisbursementResultsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    disbursement: s.optional(s.lazy(() => disbursement2Schema)),
    disbursementRef: s.optional(s.lazy(() => disbursementRefsResponseSchema)),
    code: s.optional(s.lazy(() => disbursementResultCode2Schema)),
    originalCode: s.optional(s.string()),
    platform: s.optional(s.lazy(() => disbursementResultsPlatform2Schema)),
    message: s.optional(s.string()),
    amount: s.optional(s.number()),
    data: s.optional(s.string()),
  });
