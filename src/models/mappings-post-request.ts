import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MappingsPostRequest = {
  /** The Login that owns this resource. */
  login: string;
  /** Name of Mappings. */
  name?: string;
  /** A description of this Mapping. */
  description?: string;
  /**
   * A JSON document that describes the input fields that should be mapped. This field is stored as
   * a text string and must be between 1 and 5000 characters long.
   */
  input?: string;
  /**
   * A JSON document that describes the fields that should appear in the output, after the input
   * fields have been mapped. This field is stored as a text string and must be between 1 and 5000
   * characters long.
   */
  output?: string;
  /**
   * A valid URL that represents the XML namespace of the input and output documents. This field is
   * stored as a text string and must be between 1 and 100 characters long.
   */
  namespace?: string;
};

export const mappingsPostRequestSchema: Schema<MappingsPostRequest> = s.object<MappingsPostRequest>({
  login: s.string(),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  input: s.optional(s.string()),
  output: s.optional(s.string()),
  namespace: s.optional(s.string()),
});
