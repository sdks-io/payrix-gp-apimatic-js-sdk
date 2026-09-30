import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityTermsResponseItemSchema, type EntityTermsResponseItem } from "./entity-terms-response-item.js";

export type EntityTermsResponseResult = {
  response?: EntityTermsResponseItem;
};

export const entityTermsResponseResultSchema: Schema<EntityTermsResponseResult> =
  s.object<EntityTermsResponseResult>({
    response: s.optional(s.lazy(() => entityTermsResponseItemSchema)),
  });
