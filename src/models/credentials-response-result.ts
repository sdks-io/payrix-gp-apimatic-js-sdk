import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { credentialsResponseItemSchema, type CredentialsResponseItem } from "./credentials-response-item.js";

export type CredentialsResponseResult = {
  response?: CredentialsResponseItem;
};

export const credentialsResponseResultSchema: Schema<CredentialsResponseResult> =
  s.object<CredentialsResponseResult>({
    response: s.optional(s.lazy(() => credentialsResponseItemSchema)),
  });
