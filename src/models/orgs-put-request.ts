import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrgsPutRequest = {
  /** The Login that owns this Org. */
  login?: string;
  /**
   * The name of this Org. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Org. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  description?: string;
};

export const orgsPutRequestSchema: Schema<OrgsPutRequest> = s.object<OrgsPutRequest>({
  login: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
});
