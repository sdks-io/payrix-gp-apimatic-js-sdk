import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loginsHelpersResponseItemSchema,
  type LoginsHelpersResponseItem,
} from "./logins-helpers-response-item.js";

export type LoginsHelpersResponseResult = {
  response?: LoginsHelpersResponseItem;
};

export const loginsHelpersResponseResultSchema: Schema<LoginsHelpersResponseResult> =
  s.object<LoginsHelpersResponseResult>({
    response: s.optional(s.lazy(() => loginsHelpersResponseItemSchema)),
  });
