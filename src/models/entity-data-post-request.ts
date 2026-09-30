import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntityDataPostRequest = {
  /** The Entity associated with this EntityData. */
  entity: string;
  /** The Base64 encoded image of the signature captured at the time of creating the Entity. */
  tcAcceptSignature: string;
};

export const entityDataPostRequestSchema: Schema<EntityDataPostRequest> = s.object<EntityDataPostRequest>({
  entity: s.string(),
  tcAcceptSignature: s.string(),
});
