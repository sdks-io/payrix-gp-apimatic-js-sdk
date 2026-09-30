import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that will be paid for this charge. */
export type StatementEntriesModelForentity = string | EntitiesResponse;

export const statementEntriesModelForentitySchema: Schema<StatementEntriesModelForentity> =
  s.of<StatementEntriesModelForentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));
