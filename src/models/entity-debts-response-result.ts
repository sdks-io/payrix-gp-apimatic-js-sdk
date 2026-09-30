import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityDebtsResponseItemSchema, type EntityDebtsResponseItem } from "./entity-debts-response-item.js";

export type EntityDebtsResponseResult = {
  response?: EntityDebtsResponseItem;
};

export const entityDebtsResponseResultSchema: Schema<EntityDebtsResponseResult> =
  s.object<EntityDebtsResponseResult>({
    response: s.optional(s.lazy(() => entityDebtsResponseItemSchema)),
  });
