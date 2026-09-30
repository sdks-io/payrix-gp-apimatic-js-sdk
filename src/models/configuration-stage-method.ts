import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfigurationStageMethod = {
  SftpUpload: "sftpUpload",
  SftpDownload: "sftpDownload",
  Post: "post",
  Get: "get",
  Put: "put",
  Delete: "delete",
  Tcp: "tcp",
} as const;
export type ConfigurationStageMethod =
  | (typeof ConfigurationStageMethod)[keyof typeof ConfigurationStageMethod]
  | (string & {});

export const configurationStageMethodSchema: EnumSchema<ConfigurationStageMethod> =
  s.enumOf<ConfigurationStageMethod>(ConfigurationStageMethod);
