import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfigurationStageExtension = {
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
export type ConfigurationStageExtension =
  | (typeof ConfigurationStageExtension)[keyof typeof ConfigurationStageExtension]
  | (string & {});

export const configurationStageExtensionSchema: EnumSchema<ConfigurationStageExtension> =
  s.enumOf<ConfigurationStageExtension>(ConfigurationStageExtension);
