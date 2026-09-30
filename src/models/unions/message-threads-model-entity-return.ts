import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entityReturnsResponseSchema, type EntityReturnsResponse } from "../entity-returns-response.js";

/** The identifier of the EntityReturn that is related to this messageThread. */
export type MessageThreadsModelEntityReturn = string | EntityReturnsResponse;

export const messageThreadsModelEntityReturnSchema: Schema<MessageThreadsModelEntityReturn> =
  s.of<MessageThreadsModelEntityReturn>(s.union([s.string(), s.lazy(() => entityReturnsResponseSchema)]));
