import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The alphanumeric identifier of the Entity associated with this Account. */
export type BillingsModelEntity = string | EntitiesResponse;

export const billingsModelEntitySchema: Schema<BillingsModelEntity> = s.of<BillingsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
