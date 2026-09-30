import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NoteDocumentType = {
  Jpg: "jpg",
  Jpeg: "jpeg",
  Gif: "gif",
  Png: "png",
  Pdf: "pdf",
  Tif: "tif",
  Tiff: "tiff",
  Txt: "txt",
  Xml: "xml",
  Asc: "asc",
  Rtf: "rtf",
  Csv: "csv",
  Xls: "xls",
  Doc: "doc",
  Odt: "odt",
  Ods: "ods",
  Json: "json",
  Soap: "soap",
} as const;
export type NoteDocumentType = (typeof NoteDocumentType)[keyof typeof NoteDocumentType] | (string & {});

export const noteDocumentTypeSchema: EnumSchema<NoteDocumentType> =
  s.enumOf<NoteDocumentType>(NoteDocumentType);
