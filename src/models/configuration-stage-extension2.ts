import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The extension of the file. */
export const ConfigurationStageExtension2 = {
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
export type ConfigurationStageExtension2 =
  | (typeof ConfigurationStageExtension2)[keyof typeof ConfigurationStageExtension2]
  | (string & {});

export const configurationStageExtension2Schema: EnumSchema<ConfigurationStageExtension2> =
  s.enumOf<ConfigurationStageExtension2>(ConfigurationStageExtension2);
