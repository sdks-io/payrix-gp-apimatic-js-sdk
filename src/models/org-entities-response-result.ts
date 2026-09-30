import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orgEntitiesResponseItemSchema, type OrgEntitiesResponseItem } from "./org-entities-response-item.js";

export type OrgEntitiesResponseResult = {
  response?: OrgEntitiesResponseItem;
};

export const orgEntitiesResponseResultSchema: Schema<OrgEntitiesResponseResult> =
  s.object<OrgEntitiesResponseResult>({
    response: s.optional(s.lazy(() => orgEntitiesResponseItemSchema)),
  });
