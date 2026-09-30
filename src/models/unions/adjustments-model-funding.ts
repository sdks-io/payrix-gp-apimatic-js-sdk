import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entityRefsResponseSchema, type EntityRefsResponse } from "../entity-refs-response.js";

/** The ID of the fund which the disbursement’s movement applies. */
export type AdjustmentsModelFunding = string | EntityRefsResponse;

export const adjustmentsModelFundingSchema: Schema<AdjustmentsModelFunding> = s.of<AdjustmentsModelFunding>(
  s.union([s.string(), s.lazy(() => entityRefsResponseSchema)]),
);
