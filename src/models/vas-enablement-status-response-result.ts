import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  vasEnablementStatusResponseItemSchema,
  type VasEnablementStatusResponseItem,
} from "./vas-enablement-status-response-item.js";

export type VasEnablementStatusResponseResult = {
  response?: VasEnablementStatusResponseItem;
};

export const vasEnablementStatusResponseResultSchema: Schema<VasEnablementStatusResponseResult> =
  s.object<VasEnablementStatusResponseResult>({
    response: s.optional(s.lazy(() => vasEnablementStatusResponseItemSchema)),
  });
