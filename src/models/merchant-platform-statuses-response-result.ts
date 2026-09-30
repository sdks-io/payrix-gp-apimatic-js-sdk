import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  merchantPlatformStatusesResponseItemSchema,
  type MerchantPlatformStatusesResponseItem,
} from "./merchant-platform-statuses-response-item.js";

export type MerchantPlatformStatusesResponseResult = {
  response?: MerchantPlatformStatusesResponseItem;
};

export const merchantPlatformStatusesResponseResultSchema: Schema<MerchantPlatformStatusesResponseResult> =
  s.object<MerchantPlatformStatusesResponseResult>({
    response: s.optional(s.lazy(() => merchantPlatformStatusesResponseItemSchema)),
  });
