import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountVerificationsResponseItemSchema,
  type AccountVerificationsResponseItem,
} from "./account-verifications-response-item.js";

export type AccountVerificationsResponseResult = {
  response?: AccountVerificationsResponseItem;
};

export const accountVerificationsResponseResultSchema: Schema<AccountVerificationsResponseResult> =
  s.object<AccountVerificationsResponseResult>({
    response: s.optional(s.lazy(() => accountVerificationsResponseItemSchema)),
  });
