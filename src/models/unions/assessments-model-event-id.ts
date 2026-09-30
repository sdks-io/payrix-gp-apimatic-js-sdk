import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the record that is associated with this assessments resource. */
export type AssessmentsModelEventId = string | TxnsResponse;

export const assessmentsModelEventIdSchema: Schema<AssessmentsModelEventId> = s.of<AssessmentsModelEventId>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
