import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsPostRequestSchema, type DivisionsPostRequest } from "../divisions-post-request.js";

/** ID of the division associated with this vendor. */
export type VendorsPostRequestModelDivision = string | DivisionsPostRequest;

export const vendorsPostRequestModelDivisionSchema: Schema<VendorsPostRequestModelDivision> =
  s.of<VendorsPostRequestModelDivision>(s.union([s.string(), s.lazy(() => divisionsPostRequestSchema)]));
