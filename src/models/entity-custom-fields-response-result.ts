import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityCustomFieldsResponseItemSchema,
  type EntityCustomFieldsResponseItem,
} from "./entity-custom-fields-response-item.js";

export type EntityCustomFieldsResponseResult = {
  response?: EntityCustomFieldsResponseItem;
};

export const entityCustomFieldsResponseResultSchema: Schema<EntityCustomFieldsResponseResult> =
  s.object<EntityCustomFieldsResponseResult>({
    response: s.optional(s.lazy(() => entityCustomFieldsResponseItemSchema)),
  });
