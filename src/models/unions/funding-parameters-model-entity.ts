import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this fundingParameter. */
export type FundingParametersModelEntity = string | EntitiesResponse;

export const fundingParametersModelEntitySchema: Schema<FundingParametersModelEntity> =
  s.of<FundingParametersModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
