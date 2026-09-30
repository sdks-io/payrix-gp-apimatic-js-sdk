import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  changeRequestsResponseItemSchema,
  type ChangeRequestsResponseItem,
} from "./change-requests-response-item.js";

export type ChangeRequestsResponseResult = {
  response?: ChangeRequestsResponseItem;
};

export const changeRequestsResponseResultSchema: Schema<ChangeRequestsResponseResult> =
  s.object<ChangeRequestsResponseResult>({
    response: s.optional(s.lazy(() => changeRequestsResponseItemSchema)),
  });
