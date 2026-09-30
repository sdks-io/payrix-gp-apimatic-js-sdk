import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  vasEfeOffersResponseItemSchema,
  type VasEfeOffersResponseItem,
} from "./vas-efe-offers-response-item.js";

export type VasEfeOffersResponseResult = {
  response?: VasEfeOffersResponseItem;
};

export const vasEfeOffersResponseResultSchema: Schema<VasEfeOffersResponseResult> =
  s.object<VasEfeOffersResponseResult>({
    response: s.optional(s.lazy(() => vasEfeOffersResponseItemSchema)),
  });
