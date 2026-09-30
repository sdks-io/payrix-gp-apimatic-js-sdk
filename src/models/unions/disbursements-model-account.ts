import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "../accounts-response.js";

/** The token of the accounts resource used for this Disbursement. */
export type DisbursementsModelAccount = string | AccountsResponse;

export const disbursementsModelAccountSchema: Schema<DisbursementsModelAccount> =
  s.of<DisbursementsModelAccount>(s.union([s.string(), s.lazy(() => accountsResponseSchema)]));
