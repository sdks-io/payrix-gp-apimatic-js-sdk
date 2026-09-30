import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this Billing Modifier applies to. */
export type BillingModifiersModelEntity = string | EntitiesResponse;

export const billingModifiersModelEntitySchema: Schema<BillingModifiersModelEntity> =
  s.of<BillingModifiersModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
