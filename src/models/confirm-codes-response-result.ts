import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  confirmCodesResponseItemSchema,
  type ConfirmCodesResponseItem,
} from "./confirm-codes-response-item.js";

export type ConfirmCodesResponseResult = {
  response?: ConfirmCodesResponseItem;
};

export const confirmCodesResponseResultSchema: Schema<ConfirmCodesResponseResult> =
  s.object<ConfirmCodesResponseResult>({
    response: s.optional(s.lazy(() => confirmCodesResponseItemSchema)),
  });
