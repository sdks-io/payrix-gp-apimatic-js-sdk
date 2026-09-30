import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import {
  disbursementRefPlatform1Schema,
  type DisbursementRefPlatform1,
} from "./disbursement-ref-platform1.js";
import { disbursementRefStage1Schema, type DisbursementRefStage1 } from "./disbursement-ref-stage1.js";
import {
  disbursementResultsResponseSchema,
  type DisbursementResultsResponse,
} from "./disbursement-results-response.js";
import { disbursement2Schema, type Disbursement2 } from "./disbursement2.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type DisbursementRefsResponse = {
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
  platform?: DisbursementRefPlatform1;
  /** An identification document for a company. */
  companyId?: string;
  /**
   * The Disbursement reference code itself. This field is stored as a text string and must be
   * between 1 and 50 characters long.
   */
  ref?: string;
  /**
   * A file reference code that is stored as a text string and must be between 1 and 50 characters
   * long.
   */
  fileRef?: string;
  stage?: DisbursementRefStage1;
  /** The amount of the disbursement related to this disbursementRef. */
  amount?: number;
  frozen?: Frozen1;
  inactive?: Inactive1;
  disbursementRefs?: DisbursementRefsResponse[];
  disbursementResults?: DisbursementResultsResponse[];
};

export const disbursementRefsResponseSchema: Schema<DisbursementRefsResponse> =
  s.object<DisbursementRefsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    disbursement: s.optional(s.lazy(() => disbursement2Schema)),
    disbursementRef: s.optional(s.lazy(() => disbursementRefsResponseSchema)),
    platform: s.optional(s.lazy(() => disbursementRefPlatform1Schema)),
    companyId: s.optional(s.string()),
    ref: s.optional(s.string()),
    fileRef: s.optional(s.string()),
    stage: s.optional(s.lazy(() => disbursementRefStage1Schema)),
    amount: s.optional(s.number()),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    disbursementRefs: s.optional(s.array(s.lazy(() => disbursementRefsResponseSchema))),
    disbursementResults: s.optional(s.array(s.lazy(() => disbursementResultsResponseSchema))),
  });
