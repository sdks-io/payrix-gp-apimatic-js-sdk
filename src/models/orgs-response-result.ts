import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orgsResponseItemSchema, type OrgsResponseItem } from "./orgs-response-item.js";

export type OrgsResponseResult = {
  response?: OrgsResponseItem;
};

export const orgsResponseResultSchema: Schema<OrgsResponseResult> = s.object<OrgsResponseResult>({
  response: s.optional(s.lazy(() => orgsResponseItemSchema)),
});
