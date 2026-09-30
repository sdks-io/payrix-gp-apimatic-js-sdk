import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this Vendor resource. */
export type VendorsModelEntity = string | EntitiesResponse;

export const vendorsModelEntitySchema: Schema<VendorsModelEntity> = s.of<VendorsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
