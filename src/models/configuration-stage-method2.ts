import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method used for configurationStage resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `sftpUpload` - **SFtpUpload. Use sftp to Upload**
 * - `sftpDownload` - **sftpDownload. Use sftp to Download**
 * - `post` - **POST. Use a post request**
 * - `get` - **GET. Use a get request**
 * - `put` - **PUT. Use a put request**
 * - `delete` - **DELETE. Use a delete request**
 * - `tcp` - **TCP. Use tcp protocol**
 *
 * </details>
 */
export const ConfigurationStageMethod2 = {
  SftpUpload: "sftpUpload",
  SftpDownload: "sftpDownload",
  Post: "post",
  Get: "get",
  Put: "put",
  Delete: "delete",
  Tcp: "tcp",
} as const;
export type ConfigurationStageMethod2 =
  | (typeof ConfigurationStageMethod2)[keyof typeof ConfigurationStageMethod2]
  | (string & {});

export const configurationStageMethod2Schema: EnumSchema<ConfigurationStageMethod2> =
  s.enumOf<ConfigurationStageMethod2>(ConfigurationStageMethod2);
