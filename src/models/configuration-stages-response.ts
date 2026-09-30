import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  configurationStageCredentials2Schema,
  type ConfigurationStageCredentials2,
} from "./configuration-stage-credentials2.js";
import {
  configurationStageExtension2Schema,
  type ConfigurationStageExtension2,
} from "./configuration-stage-extension2.js";
import {
  configurationStageInput2Schema,
  type ConfigurationStageInput2,
} from "./configuration-stage-input2.js";
import {
  configurationStageMethod2Schema,
  type ConfigurationStageMethod2,
} from "./configuration-stage-method2.js";
import { configurationStageName2Schema, type ConfigurationStageName2 } from "./configuration-stage-name2.js";
import {
  configurationStageOutput2Schema,
  type ConfigurationStageOutput2,
} from "./configuration-stage-output2.js";
import { configurationSchema, type Configuration } from "./configuration.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type ConfigurationStagesResponse = {
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
  configuration?: Configuration;
  name?: ConfigurationStageName2;
  method?: ConfigurationStageMethod2;
  /** A free-form sequence identifier to order the execution of stages for a configuration. */
  sequence?: number;
  input?: ConfigurationStageInput2;
  output?: ConfigurationStageOutput2;
  credential?: ConfigurationStageCredentials2;
  /**
   * The url used for configurationStage resource. It will consist of a combination of at least one
   * path, and restful id. Placeholders can be used for the restful ids such as
   * https://sample.com/:placeholder:. Valid placeholders are: entity, merchant, member, chargeback,
   * and document. The field is stored as a text string and must be between 1 and 500 characters
   * long.
   */
  url?: string;
  /**
   * The directory used once connected. This field is stored as a text string and must be between 1
   * and 500 characters long.
   */
  dir?: string;
  /**
   * The indicator of the field when ref Id is found. This field is stored as a text string and must
   * be between 0 and 100 characters long.
   */
  restId?: string;
  /**
   * A string-JSON representing the data injection mapping between the third party’s response and
   * our internal data array.
   */
  mapToData?: string;
  /**
   * The specification on how the file will be named on write. This field is stored as a JSON string
   * and must be between 0 and 5000 characters long.
   */
  file?: string;
  /**
   * The filter applied when successful on data read. This field is stored as a JSON string and must
   * be between 0 and 5000 characters long.
   */
  filter?: string;
  extension?: ConfigurationStageExtension2;
  /**
   * The namespace used for the configurationStage resource. This field is stored as a text string
   * and must be between 0 and 500 characters long.
   */
  namespace?: string | null;
  /**
   * Only used in case the it is dynamic stage. This field is stored as a JSON string, must be
   * between 0 and 5000 characters long, and have a property key name with value of stage name and
   * id key.
   */
  dynamicStage?: string | null;
  /**
   * With the specificity of the configuration stages, it holds different integration methods, part
   * of it is holding specific connection details that is needed to consume the service. The
   * curlOptions is used to hold those specifics, things like SSLCERT, SSLKEY etc
   */
  curlOptions?: string | null;
  /**
   * The headers used for the configurationStage resource. This field is stored as a JSON string and
   * must be between 0 and 5000 characters long.
   */
  headers?: string;
  /**
   * Delay to be applied before calling the resource in microseconds. Range allowed between 0 and 10
   * secs (10000) miliseconds.
   */
  callDelay?: number;
  /** The connection timeout duration (in seconds) for API calls. */
  connectTimeout?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
  fileConfigFilter?: string | null;
};

export const configurationStagesResponseSchema: Schema<ConfigurationStagesResponse> =
  s.object<ConfigurationStagesResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    configuration: s.optional(s.lazy(() => configurationSchema)),
    name: s.optional(s.lazy(() => configurationStageName2Schema)),
    method: s.optional(s.lazy(() => configurationStageMethod2Schema)),
    sequence: s.optional(s.number()),
    input: s.optional(s.lazy(() => configurationStageInput2Schema)),
    output: s.optional(s.lazy(() => configurationStageOutput2Schema)),
    credential: s.optional(s.lazy(() => configurationStageCredentials2Schema)),
    url: s.optional(s.string()),
    dir: s.optional(s.string()),
    restId: s.optional(s.string()),
    mapToData: s.optional(s.string()),
    file: s.optional(s.string()),
    filter: s.optional(s.string()),
    extension: s.optional(s.lazy(() => configurationStageExtension2Schema)),
    namespace: s.optionalNullable(s.string()),
    dynamicStage: s.optionalNullable(s.string()),
    curlOptions: s.optionalNullable(s.string()),
    headers: s.optional(s.string()),
    callDelay: s.optional(s.number()),
    connectTimeout: s.optional(s.number()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
    fileConfigFilter: s.optionalNullable(s.string()),
  });
