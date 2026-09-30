import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingsResponseSchema, type BillingsResponse } from "../billings-response.js";

/** The identifier of the Billing that this StatementEntry refers to. */
export type StatementEntriesModelBilling = string | BillingsResponse;

export const statementEntriesModelBillingSchema: Schema<StatementEntriesModelBilling> =
  s.of<StatementEntriesModelBilling>(s.union([s.string(), s.lazy(() => billingsResponseSchema)]));
