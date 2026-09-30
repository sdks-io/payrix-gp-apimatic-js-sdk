import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The paying entity for which this statementEntry applies. */
export type StatementEntriesModelEntity = string | EntitiesResponse;

export const statementEntriesModelEntitySchema: Schema<StatementEntriesModelEntity> =
  s.of<StatementEntriesModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
