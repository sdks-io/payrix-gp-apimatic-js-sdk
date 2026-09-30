import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fraudSightEnablementsResponseItemSchema,
  type FraudSightEnablementsResponseItem,
} from "./fraud-sight-enablements-response-item.js";

export type FraudSightEnablementsResponseResult = {
  response?: FraudSightEnablementsResponseItem;
};

export const fraudSightEnablementsResponseResultSchema: Schema<FraudSightEnablementsResponseResult> =
  s.object<FraudSightEnablementsResponseResult>({
    response: s.optional(s.lazy(() => fraudSightEnablementsResponseItemSchema)),
  });
