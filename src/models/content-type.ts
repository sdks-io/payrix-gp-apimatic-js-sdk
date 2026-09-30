import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentType = {
  MultipartFormDataBoundaryCalculatedWhenRequestIsSent:
    "multipart/form-data; boundary=<calculated when request is sent>",
} as const;
export type ContentType = (typeof ContentType)[keyof typeof ContentType] | (string & {});

export const contentTypeSchema: EnumSchema<ContentType> = s.enumOf<ContentType>(ContentType);
