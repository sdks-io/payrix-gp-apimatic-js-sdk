import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "../entities-post-request.js";

/** Entity for which we are creating custom field. */
export type EntityCustomFieldsPostRequestModelEntity = string | EntitiesPostRequest;

export const entityCustomFieldsPostRequestModelEntitySchema: Schema<EntityCustomFieldsPostRequestModelEntity> =
  s.of<EntityCustomFieldsPostRequestModelEntity>(
    s.union([s.string(), s.lazy(() => entitiesPostRequestSchema)]),
  );
