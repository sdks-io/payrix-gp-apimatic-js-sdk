import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appleDomainsMassEnablementDataPreviewItemSchema,
  type AppleDomainsMassEnablementDataPreviewItem,
} from "./apple-domains-mass-enablement-data-preview-item.js";

export type AppleDomainsMassEnablementDataPreview = {
  dataPreview?: AppleDomainsMassEnablementDataPreviewItem[];
  msg?: string;
  status?: string;
};

export const appleDomainsMassEnablementDataPreviewSchema: Schema<AppleDomainsMassEnablementDataPreview> =
  s.object<AppleDomainsMassEnablementDataPreview>({
    dataPreview: s.optional(s.array(s.lazy(() => appleDomainsMassEnablementDataPreviewItemSchema))),
    msg: s.optional(s.string()),
    status: s.optional(s.string()),
  });
