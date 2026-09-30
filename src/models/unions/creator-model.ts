import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that created this resource. */
export type CreatorModel = string | LoginsResponse;

export const creatorModelSchema: Schema<CreatorModel> = s.of<CreatorModel>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
