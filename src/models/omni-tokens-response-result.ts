import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { omniTokensResponseItemSchema, type OmniTokensResponseItem } from "./omni-tokens-response-item.js";

export type OmniTokensResponseResult = {
  response?: OmniTokensResponseItem;
};

export const omniTokensResponseResultSchema: Schema<OmniTokensResponseResult> =
  s.object<OmniTokensResponseResult>({
    response: s.optional(s.lazy(() => omniTokensResponseItemSchema)),
  });
