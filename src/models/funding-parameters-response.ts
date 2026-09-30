import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { division3Schema, type Division3 } from "./division3.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { fundingParameterLocked2Schema, type FundingParameterLocked2 } from "./funding-parameter-locked2.js";
import {
  fundingParameterPaymentMethods2Schema,
  type FundingParameterPaymentMethods2,
} from "./funding-parameter-payment-methods2.js";
import {
  fundingParameterPlatform2Schema,
  type FundingParameterPlatform2,
} from "./funding-parameter-platform2.js";
import { fundingParameterType2Schema, type FundingParameterType2 } from "./funding-parameter-type2.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { orgsResponseSchema, type OrgsResponse } from "./orgs-response.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";

export type FundingParametersResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  entity?: Entity28;
  org?: OrgsResponse;
  division?: Division3;
  partition?: PartitionsResponse;
  platform?: FundingParameterPlatform2;
  type?: FundingParameterType2;
  /** The value of this type of fundingParameter. */
  value?: string;
  paymentMethods?: FundingParameterPaymentMethods2;
  locked?: FundingParameterLocked2;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const fundingParametersResponseSchema: Schema<FundingParametersResponse> =
  s.object<FundingParametersResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    login: s.optional(s.lazy(() => login2Schema)),
    entity: s.optional(s.lazy(() => entity28Schema)),
    org: s.optional(s.lazy(() => orgsResponseSchema)),
    division: s.optional(s.lazy(() => division3Schema)),
    partition: s.optional(s.lazy(() => partitionsResponseSchema)),
    platform: s.optional(s.lazy(() => fundingParameterPlatform2Schema)),
    type: s.optional(s.lazy(() => fundingParameterType2Schema)),
    value: s.optional(s.string()),
    paymentMethods: s.optional(s.lazy(() => fundingParameterPaymentMethods2Schema)),
    locked: s.optional(s.lazy(() => fundingParameterLocked2Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
