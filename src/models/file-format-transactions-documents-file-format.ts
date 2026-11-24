import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is the format of the file being uploaded. */
export const FileFormatTransactionsDocumentsFileFormat = {
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
export type FileFormatTransactionsDocumentsFileFormat =
  | (typeof FileFormatTransactionsDocumentsFileFormat)[keyof typeof FileFormatTransactionsDocumentsFileFormat]
  | (string & {});

export const fileFormatTransactionsDocumentsFileFormatSchema: EnumSchema<FileFormatTransactionsDocumentsFileFormat> =
  s.enumOf<FileFormatTransactionsDocumentsFileFormat>(FileFormatTransactionsDocumentsFileFormat);
