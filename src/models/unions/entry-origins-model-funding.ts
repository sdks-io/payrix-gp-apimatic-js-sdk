import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entityRefsResponseSchema, type EntityRefsResponse } from "../entity-refs-response.js";

/**
 * The processor’s funding ID (related to a merchant, for some processors it is the merchant ID)
 * from which the funds were sourced.
 */
export type EntryOriginsModelFunding = string | EntityRefsResponse;

export const entryOriginsModelFundingSchema: Schema<EntryOriginsModelFunding> =
  s.of<EntryOriginsModelFunding>(s.union([s.string(), s.lazy(() => entityRefsResponseSchema)]));
