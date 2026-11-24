import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action40Schema, type Action40 } from "./action40.js";

export type DocumentsResponse2 = {
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to
   */
  id?: string;
  /** Indicates where the document is in its lifecycle. */
  status?: string;
  /** A meaningful label for the document set by Global Payments. */
  name?: string;
  action?: Action40;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const documentsResponse2Properties: s.Shape<DocumentsResponse2> = {
  id: s.optional(s.string()),
  status: s.optional(s.string()),
  name: s.optional(s.string()),
  action: s.optional(s.lazy(() => action40Schema)),
};

export const documentsResponse2InternalSchema: Schema<DocumentsResponse2> = s.object<DocumentsResponse2>(
  documentsResponse2Properties,
  { additionalProperties: s.json() },
);

export const documentsResponse2Schema: Schema<DocumentsResponse2> = s.lazySchema(() =>
  s.object<DocumentsResponse2>(
    {
      ...documentsResponse2Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
