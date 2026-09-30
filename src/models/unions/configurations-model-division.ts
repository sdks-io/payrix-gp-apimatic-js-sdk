import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division associated with this configuration resource. */
export type ConfigurationsModelDivision = string | DivisionsResponse;

export const configurationsModelDivisionSchema: Schema<ConfigurationsModelDivision> =
  s.of<ConfigurationsModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));
