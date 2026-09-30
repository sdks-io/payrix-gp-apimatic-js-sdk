import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "../entities-post-request.js";

/** The Entity associated with this Merchant. */
export type MerchantsPostRequestModelEntity = string | EntitiesPostRequest;

export const merchantsPostRequestModelEntitySchema: Schema<MerchantsPostRequestModelEntity> =
  s.of<MerchantsPostRequestModelEntity>(s.union([s.string(), s.lazy(() => entitiesPostRequestSchema)]));
