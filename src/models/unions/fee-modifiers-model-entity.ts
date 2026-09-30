import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this Fee Modifier applies for. */
export type FeeModifiersModelEntity = string | EntitiesResponse;

export const feeModifiersModelEntitySchema: Schema<FeeModifiersModelEntity> = s.of<FeeModifiersModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
