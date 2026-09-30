import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/**
 * This field indicates that this EntityReturn was triggered from a\ \ Disbursement. \nThis field
 * stores the identifier of the Disbursement.
 */
export type EntityReturnsModelDisbursement = string | DisbursementsResponse;

export const entityReturnsModelDisbursementSchema: Schema<EntityReturnsModelDisbursement> =
  s.of<EntityReturnsModelDisbursement>(s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]));
