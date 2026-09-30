import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  statementEntriesResponseItemSchema,
  type StatementEntriesResponseItem,
} from "./statement-entries-response-item.js";

export type StatementEntriesResponseResult = {
  response?: StatementEntriesResponseItem;
};

export const statementEntriesResponseResultSchema: Schema<StatementEntriesResponseResult> =
  s.object<StatementEntriesResponseResult>({
    response: s.optional(s.lazy(() => statementEntriesResponseItemSchema)),
  });
