<!-- Generated file — do not edit; regenerated with the SDK. -->

# LoginsHelpers — operations

Accessor: `client.loginsHelpers` · Source: `src/resources/logins-helpers.ts` · 3 operations · Request and error types: namespace `LoginsHelpers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLoginsHelpers

- **Signature**: `getLoginsHelpers(request: LoginsHelpers.GetLoginsHelpersRequest, options?: RequestOptions): ApiPromise<LoginsHelpersResponseResult, LoginsHelpers.GetLoginsHelpersError>`
- **Wire**: `GET /loginsHelpers`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LoginsHelpersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `LoginsHelpers.GetLoginsHelpersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LoginsHelpers.GetLoginsHelpersRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginsHelpersResponseResult` | `loginsHelpersResponseResultSchema` | `src/models/logins-helpers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getLoginsHelpersId

- **Signature**: `getLoginsHelpersId(request: LoginsHelpers.GetLoginsHelpersIdRequest, options?: RequestOptions): ApiPromise<LoginsHelpersResponseResult, LoginsHelpers.GetLoginsHelpersIdError>`
- **Wire**: `GET /loginsHelpers/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LoginsHelpersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `LoginsHelpers.GetLoginsHelpersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LoginsHelpers.GetLoginsHelpersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginsHelpersResponseResult` | `loginsHelpersResponseResultSchema` | `src/models/logins-helpers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putLoginsHelpersId

- **Signature**: `putLoginsHelpersId(request: LoginsHelpers.PutLoginsHelpersIdRequest, options?: RequestOptions): ApiPromise<LoginsHelpersResponseResult, LoginsHelpers.PutLoginsHelpersIdError>`
- **Wire**: `PUT /loginsHelpers/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LoginsHelpersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `LoginsHelpers.PutLoginsHelpersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LoginsHelpers.PutLoginsHelpersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `LoginsHelpersPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginsHelpersPutRequest` | `loginsHelpersPutRequestSchema` | `src/models/logins-helpers-put-request.ts` |
| `LoginsHelpersResponseResult` | `loginsHelpersResponseResultSchema` | `src/models/logins-helpers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

