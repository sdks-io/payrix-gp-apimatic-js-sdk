import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { vendorsResponseSchema, type VendorsResponse } from "../vendors-response.js";

/** This holds the ID of the related vendor record. */
export type MembersModelVendor = string | VendorsResponse;

export const membersModelVendorSchema: Schema<MembersModelVendor> = s.of<MembersModelVendor>(
  s.union([s.string(), s.lazy(() => vendorsResponseSchema)]),
);
