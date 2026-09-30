import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The Entity associated with this Merchant. */
export type MerchantsModelEntity = string | EntitiesResponse;

export const merchantsModelEntitySchema: Schema<MerchantsModelEntity> = s.of<MerchantsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
