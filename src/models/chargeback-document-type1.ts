import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the file that holds this chargebackDocument. The value is set when the file is
 * properly integrated, otherwise will be null.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `jpg` - **JPG file**
 * - `jpeg` - **JPEG file**
 * - `gif` - **GIF file**
 * - `png` - **PNG file**
 * - `pdf` - **PDF file**
 * - `tiff` - **TIFF file**
 * - `tif` - **TIF file**
 *
 * </details>
 */
export const ChargebackDocumentType1 = {
  Jpg: "jpg",
  Jpeg: "jpeg",
  Gif: "gif",
  Png: "png",
  Pdf: "pdf",
  Tiff: "tiff",
  Tif: "tif",
} as const;
export type ChargebackDocumentType1 =
  | (typeof ChargebackDocumentType1)[keyof typeof ChargebackDocumentType1]
  | (string & {});

export const chargebackDocumentType1Schema: EnumSchema<ChargebackDocumentType1> =
  s.enumOf<ChargebackDocumentType1>(ChargebackDocumentType1);
