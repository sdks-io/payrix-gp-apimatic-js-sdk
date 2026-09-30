import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "./entities-post-request.js";

export type EntityCustomFieldsPostRequest = {
  entity?: EntitiesPostRequest;
  /** Name of custom field. */
  key?: string;
  /** Value of custom field. */
  value?: string;
};

export const entityCustomFieldsPostRequestSchema: Schema<EntityCustomFieldsPostRequest> =
  s.object<EntityCustomFieldsPostRequest>({
    entity: s.optional(s.lazy(() => entitiesPostRequestSchema)),
    key: s.optional(s.string()),
    value: s.optional(s.string()),
  });
