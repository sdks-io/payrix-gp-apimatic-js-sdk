import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** Entity for which we are creating custom field. */
export type EntityCustomFieldsModelEntity = string | EntitiesResponse;

export const entityCustomFieldsModelEntitySchema: Schema<EntityCustomFieldsModelEntity> =
  s.of<EntityCustomFieldsModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
