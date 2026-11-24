import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall status of the file being processed. *`INITIATED` - The initial status of all newly
 * created file resources. Occurs after the API sends the signed URL to upload your file to.
 * *`UPLOADED` - Occurs after you upload the bulk file to the signed URL provided by the API.
 * *`PENDING` - Occurs after record validation and the combinations are deemed valid by our File
 * Processing solution. *`SUBMITTED` - Occurs once the file has been fully processed. *`FAILED`
 * -Occurs after record validation if the combinations are deemed invalid by our File Processing
 * solution *`COMPLETED` - Occurs after the response file is generated and the API sends you the
 * signed URL to download the encrypted response file via webhook notification.
 */
export const StatusFileProcessingStatus = {
  Initiated: "INITIATED",
  Uploaded: "UPLOADED",
  Submitted: "SUBMITTED",
  Pending: "PENDING",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type StatusFileProcessingStatus =
  | (typeof StatusFileProcessingStatus)[keyof typeof StatusFileProcessingStatus]
  | (string & {});

export const statusFileProcessingStatusSchema: EnumSchema<StatusFileProcessingStatus> =
  s.enumOf<StatusFileProcessingStatus>(StatusFileProcessingStatus);
