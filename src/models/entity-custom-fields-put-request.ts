import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntityCustomFieldsPutRequest = {
  /** Name of custom field. */
  key?: string;
  /** Value of custom field. */
  value?: string;
};

export const entityCustomFieldsPutRequestSchema: Schema<EntityCustomFieldsPutRequest> =
  s.object<EntityCustomFieldsPutRequest>({
    key: s.optional(s.string()),
    value: s.optional(s.string()),
  });
