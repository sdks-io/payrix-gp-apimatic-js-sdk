import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The ID of the Entity that owns this resource. */
export type CustomersModelEntity = string | EntitiesResponse;

export const customersModelEntitySchema: Schema<CustomersModelEntity> = s.of<CustomersModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
