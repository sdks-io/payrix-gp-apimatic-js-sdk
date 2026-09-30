import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statementsResponseSchema, type StatementsResponse } from "../statements-response.js";

/** The identifier of the Statement being paid by this Disbursement. */
export type DisbursementsModelStatement = string | StatementsResponse;

export const disbursementsModelStatementSchema: Schema<DisbursementsModelStatement> =
  s.of<DisbursementsModelStatement>(s.union([s.string(), s.lazy(() => statementsResponseSchema)]));
