import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  revShareStatementsResponseItemSchema,
  type RevShareStatementsResponseItem,
} from "./rev-share-statements-response-item.js";

export type RevShareStatementsResponseResult = {
  response?: RevShareStatementsResponseItem;
};

export const revShareStatementsResponseResultSchema: Schema<RevShareStatementsResponseResult> =
  s.object<RevShareStatementsResponseResult>({
    response: s.optional(s.lazy(() => revShareStatementsResponseItemSchema)),
  });
