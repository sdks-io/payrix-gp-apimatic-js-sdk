import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is the format of the file being uploaded. */
export const FormatDocumentsFormat = {
  Tif: "TIF",
  Tiff: "TIFF",
  Pdf: "PDF",
  Bmp: "BMP",
  Jpeg: "JPEG",
  Gif: "GIF",
  Png: "PNG",
  Doc: "DOC",
  Docx: "DOCX",
} as const;
export type FormatDocumentsFormat =
  | (typeof FormatDocumentsFormat)[keyof typeof FormatDocumentsFormat]
  | (string & {});

export const formatDocumentsFormatSchema: EnumSchema<FormatDocumentsFormat> =
  s.enumOf<FormatDocumentsFormat>(FormatDocumentsFormat);
