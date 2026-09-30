import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this configuration resource. */
export type ConfigurationsModelEntity = string | EntitiesResponse;

export const configurationsModelEntitySchema: Schema<ConfigurationsModelEntity> =
  s.of<ConfigurationsModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
