import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this omniTokens is associated to. */
export type OmniTokensModelEntity = string | EntitiesResponse;

export const omniTokensModelEntitySchema: Schema<OmniTokensModelEntity> = s.of<OmniTokensModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
