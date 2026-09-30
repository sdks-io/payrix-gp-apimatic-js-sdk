import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalsResponseItemSchema, type TerminalsResponseItem } from "./terminals-response-item.js";

export type TerminalsResponseResult = {
  response?: TerminalsResponseItem;
};

export const terminalsResponseResultSchema: Schema<TerminalsResponseResult> =
  s.object<TerminalsResponseResult>({
    response: s.optional(s.lazy(() => terminalsResponseItemSchema)),
  });
