import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * The identifier of the Entity who should pay this Fee on behalf of the Entity identified in the
 * value of the 'entity' or 'org' field. This field is optional. If it is set, then the Fee is
 * charged to this Entity instead.
 */
export type FeeModifiersModelFromentity = string | EntitiesResponse;

export const feeModifiersModelFromentitySchema: Schema<FeeModifiersModelFromentity> =
  s.of<FeeModifiersModelFromentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
