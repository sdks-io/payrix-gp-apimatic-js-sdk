import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { facilitatorsResponseSchema, type FacilitatorsResponse } from "../facilitators-response.js";

/** This holds the ID of the related facilitator record. */
export type MembersModelFacilitator = string | FacilitatorsResponse;

export const membersModelFacilitatorSchema: Schema<MembersModelFacilitator> = s.of<MembersModelFacilitator>(
  s.union([s.string(), s.lazy(() => facilitatorsResponseSchema)]),
);
