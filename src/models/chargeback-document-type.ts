import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackDocumentType = {
  Jpg: "jpg",
  Jpeg: "jpeg",
  Gif: "gif",
  Png: "png",
  Pdf: "pdf",
  Tiff: "tiff",
  Tif: "tif",
} as const;
export type ChargebackDocumentType =
  | (typeof ChargebackDocumentType)[keyof typeof ChargebackDocumentType]
  | (string & {});

export const chargebackDocumentTypeSchema: EnumSchema<ChargebackDocumentType> =
  s.enumOf<ChargebackDocumentType>(ChargebackDocumentType);
