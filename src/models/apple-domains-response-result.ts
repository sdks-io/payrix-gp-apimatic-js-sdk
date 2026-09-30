import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appleDomainsResponseItemSchema,
  type AppleDomainsResponseItem,
} from "./apple-domains-response-item.js";

export type AppleDomainsResponseResult = {
  response?: AppleDomainsResponseItem;
};

export const appleDomainsResponseResultSchema: Schema<AppleDomainsResponseResult> =
  s.object<AppleDomainsResponseResult>({
    response: s.optional(s.lazy(() => appleDomainsResponseItemSchema)),
  });
