import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that saferPayments is associated to. */
export type SaferPaymentsModelEntity = string | EntitiesResponse;

export const saferPaymentsModelEntitySchema: Schema<SaferPaymentsModelEntity> =
  s.of<SaferPaymentsModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
