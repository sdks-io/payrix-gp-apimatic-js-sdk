import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this notes resource. */
export type NotesModelLogin = string | LoginsResponse;

export const notesModelLoginSchema: Schema<NotesModelLogin> = s.of<NotesModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
