import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division that omniTokens is associated to. */
export type OmniTokensModelDivision = string | DivisionsResponse;

export const omniTokensModelDivisionSchema: Schema<OmniTokensModelDivision> = s.of<OmniTokensModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
