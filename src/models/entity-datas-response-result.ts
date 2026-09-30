import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityDatasResponseItemSchema, type EntityDatasResponseItem } from "./entity-datas-response-item.js";

export type EntityDatasResponseResult = {
  response?: EntityDatasResponseItem;
};

export const entityDatasResponseResultSchema: Schema<EntityDatasResponseResult> =
  s.object<EntityDatasResponseResult>({
    response: s.optional(s.lazy(() => entityDatasResponseItemSchema)),
  });
