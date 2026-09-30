import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityReturnsResponseItemSchema,
  type EntityReturnsResponseItem,
} from "./entity-returns-response-item.js";

export type EntityReturnsResponseResult = {
  response?: EntityReturnsResponseItem;
};

export const entityReturnsResponseResultSchema: Schema<EntityReturnsResponseResult> =
  s.object<EntityReturnsResponseResult>({
    response: s.optional(s.lazy(() => entityReturnsResponseItemSchema)),
  });
