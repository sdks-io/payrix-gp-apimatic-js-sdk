import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { secretsResponseItemSchema, type SecretsResponseItem } from "./secrets-response-item.js";

export type SecretsResponseResult = {
  response?: SecretsResponseItem;
};

export const secretsResponseResultSchema: Schema<SecretsResponseResult> = s.object<SecretsResponseResult>({
  response: s.optional(s.lazy(() => secretsResponseItemSchema)),
});
