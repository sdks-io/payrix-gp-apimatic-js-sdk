import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type MappingsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  /** The Login that owns this resource. */
  login?: string;
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

export const mappingsResponseSchema: Schema<MappingsResponse> = s.object<MappingsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  input: s.optional(s.string()),
  output: s.optional(s.string()),
  namespace: s.optional(s.string()),
});
