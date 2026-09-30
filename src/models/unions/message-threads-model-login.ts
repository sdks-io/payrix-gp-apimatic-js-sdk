import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this messageThreads resource. */
export type MessageThreadsModelLogin = string | LoginsResponse;

export const messageThreadsModelLoginSchema: Schema<MessageThreadsModelLogin> =
  s.of<MessageThreadsModelLogin>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
