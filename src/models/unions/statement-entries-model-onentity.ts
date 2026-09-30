import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that triggered the charge. */
export type StatementEntriesModelOnentity = string | EntitiesResponse;

export const statementEntriesModelOnentitySchema: Schema<StatementEntriesModelOnentity> =
  s.of<StatementEntriesModelOnentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
