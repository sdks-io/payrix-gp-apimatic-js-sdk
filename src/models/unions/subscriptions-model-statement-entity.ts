import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * For a plan that is attached to a billing, this is the paying entity to match to the generated
 * statements of that billing for which the recurring payments will be made.
 */
export type SubscriptionsModelStatementEntity = string | EntitiesResponse;

export const subscriptionsModelStatementEntitySchema: Schema<SubscriptionsModelStatementEntity> =
  s.of<SubscriptionsModelStatementEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
