import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this secret. */
export type SecretsModelEntity = string | EntitiesResponse;

export const secretsModelEntitySchema: Schema<SecretsModelEntity> = s.of<SecretsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
