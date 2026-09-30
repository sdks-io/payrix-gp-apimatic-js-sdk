import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this embeddedFinance is associated to. */
export type EmbeddedFinanceModelEntity = string | EntitiesResponse;

export const embeddedFinanceModelEntitySchema: Schema<EmbeddedFinanceModelEntity> =
  s.of<EmbeddedFinanceModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
