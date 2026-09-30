import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundOriginsResponseItemSchema, type FundOriginsResponseItem } from "./fund-origins-response-item.js";

export type FundOriginsResponseResult = {
  response?: FundOriginsResponseItem;
};

export const fundOriginsResponseResultSchema: Schema<FundOriginsResponseResult> =
  s.object<FundOriginsResponseResult>({
    response: s.optional(s.lazy(() => fundOriginsResponseItemSchema)),
  });
