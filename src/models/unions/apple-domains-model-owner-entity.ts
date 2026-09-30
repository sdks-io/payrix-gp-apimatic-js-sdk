import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * The identifier of the Entity that controls this domain. This is to identify the Vendor or
 * Facilitator hosting the Apple Pay domain for the merchant. If this domain is controlled by the
 * actual registered Merchant, the Entity field will be the Merchant's Entity.
 */
export type AppleDomainsModelOwnerEntity = string | EntitiesResponse;

export const appleDomainsModelOwnerEntitySchema: Schema<AppleDomainsModelOwnerEntity> =
  s.of<AppleDomainsModelOwnerEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
