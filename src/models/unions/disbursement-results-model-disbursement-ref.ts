import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  disbursementRefsResponseSchema,
  type DisbursementRefsResponse,
} from "../disbursement-refs-response.js";

/** The ID of the disbursementRef for which this result is recorded. */
export type DisbursementResultsModelDisbursementRef = string | DisbursementRefsResponse;

export const disbursementResultsModelDisbursementRefSchema: Schema<DisbursementResultsModelDisbursementRef> =
  s.of<DisbursementResultsModelDisbursementRef>(
    s.union([s.string(), s.lazy(() => disbursementRefsResponseSchema)]),
  );
