import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appleDomainsMassEnablementDataPreviewSchema,
  type AppleDomainsMassEnablementDataPreview,
} from "./apple-domains-mass-enablement-data-preview.js";

export type AppleDomainsMassEnablementCsvResponseResult = {
  response?: AppleDomainsMassEnablementDataPreview[];
};

export const appleDomainsMassEnablementCsvResponseResultSchema: Schema<AppleDomainsMassEnablementCsvResponseResult> =
  s.object<AppleDomainsMassEnablementCsvResponseResult>({
    response: s.optional(s.array(s.lazy(() => appleDomainsMassEnablementDataPreviewSchema))),
  });
