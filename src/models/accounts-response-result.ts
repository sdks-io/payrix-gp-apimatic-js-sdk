import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsResponseItemSchema, type AccountsResponseItem } from "./accounts-response-item.js";

export type AccountsResponseResult = {
  response?: AccountsResponseItem;
};

export const accountsResponseResultSchema: Schema<AccountsResponseResult> = s.object<AccountsResponseResult>({
  response: s.optional(s.lazy(() => accountsResponseItemSchema)),
});
