import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this resource belongs to. */
export type PaymentUpdateGroupsModelEntity = string | EntitiesResponse;

export const paymentUpdateGroupsModelEntitySchema: Schema<PaymentUpdateGroupsModelEntity> =
  s.of<PaymentUpdateGroupsModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
