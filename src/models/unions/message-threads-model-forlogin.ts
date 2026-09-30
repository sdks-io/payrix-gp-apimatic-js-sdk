import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the receiving Login of this messageThreads resource. */
export type MessageThreadsModelForlogin = string | LoginsResponse;

export const messageThreadsModelForloginSchema: Schema<MessageThreadsModelForlogin> =
  s.of<MessageThreadsModelForlogin>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
