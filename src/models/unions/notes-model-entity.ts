import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that relates to this notes resource. */
export type NotesModelEntity = string | EntitiesResponse;

export const notesModelEntitySchema: Schema<NotesModelEntity> = s.of<NotesModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);
