import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "../entities-post-request.js";

/** The identifier of the Entity associated with this Vendor resource. */
export type VendorsPostRequestModelEntity = string | EntitiesPostRequest;

export const vendorsPostRequestModelEntitySchema: Schema<VendorsPostRequestModelEntity> =
  s.of<VendorsPostRequestModelEntity>(s.union([s.string(), s.lazy(() => entitiesPostRequestSchema)]));
