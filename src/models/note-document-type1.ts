import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The desired type to take on the referenced Note.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `jpg` - **JPG Image File Type**
 * - `jpeg` - **JPEG Image File Type**
 * - `gif` - **GIF Image File Type**
 * - `png` - **PNG Image File Type**
 * - `pdf` - **PDF Document File Type**
 * - `tif` - **TIF Tag Image File Type**
 * - `tiff` - **TIFF Tag Image File Type**
 * - `txt` - **TXT Document File Type**
 * - `xml` - **XML Document File Type**
 * - `asc` - **American Standard Code II File Type**
 * - `rtf` - **Rich Text Document File Type**
 * - `csv` - **Comma Separated Values Table File Type**
 * - `xls` - **Microsoft Excel File Type**
 * - `doc` - **Microsoft Word File Type**
 * - `odt` - **OpenDocument Text File Type**
 * - `ods` - **OpenDocument Spreadsheet File Type**
 * - `json` - **JSON Document File Type**
 * - `soap` - **SOAP Document File Type**
 *
 * </details>
 */
export const NoteDocumentType1 = {
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
export type NoteDocumentType1 = (typeof NoteDocumentType1)[keyof typeof NoteDocumentType1] | (string & {});

export const noteDocumentType1Schema: EnumSchema<NoteDocumentType1> =
  s.enumOf<NoteDocumentType1>(NoteDocumentType1);
