import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  disbursementRefsResponseSchema,
  type DisbursementRefsResponse,
} from "../disbursement-refs-response.js";

/** The identifier of the DisbursementRef that this disbursementRef resource refers to. */
export type DisbursementRefsModelDisbursementRef = string | DisbursementRefsResponse;

export const disbursementRefsModelDisbursementRefSchema: Schema<DisbursementRefsModelDisbursementRef> =
  s.of<DisbursementRefsModelDisbursementRef>(
    s.union([s.string(), s.lazy(() => disbursementRefsResponseSchema)]),
  );
