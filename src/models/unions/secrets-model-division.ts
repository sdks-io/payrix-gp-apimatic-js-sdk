import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division associated with this secret. */
export type SecretsModelDivision = string | DivisionsResponse;

export const secretsModelDivisionSchema: Schema<SecretsModelDivision> = s.of<SecretsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
