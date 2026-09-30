import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entityRefsResponseSchema, type EntityRefsResponse } from "../entity-refs-response.js";
import { fundOriginPlatformSchema, type FundOriginPlatform } from "../fund-origin-platform.js";

/**
 * The processor's funding ID (related to a merchant, this field is required if the adjustment is
 * not between entities.
 */
export type FundOriginsModelFunding = FundOriginPlatform | EntityRefsResponse;

export const fundOriginsModelFundingSchema: Schema<FundOriginsModelFunding> = s.of<FundOriginsModelFunding>(
  s.union([s.lazy(() => fundOriginPlatformSchema), s.lazy(() => entityRefsResponseSchema)]),
);
