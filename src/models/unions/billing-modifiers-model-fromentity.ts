import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * The identifier of the Entity that is responsible for paying this Bill on behalf of the Entity
 * specified in the 'entity' field.
 */
export type BillingModifiersModelFromentity = string | EntitiesResponse;

export const billingModifiersModelFromentitySchema: Schema<BillingModifiersModelFromentity> =
  s.of<BillingModifiersModelFromentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
