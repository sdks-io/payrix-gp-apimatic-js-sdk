<!-- Generated file — do not edit; regenerated with the SDK. -->

# Logins — operations

Accessor: `client.logins` · Source: `src/resources/logins.ts` · 5 operations · Request and error types: namespace `Logins`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteLoginsId

- **Signature**: `deleteLoginsId(request: Logins.DeleteLoginsIdRequest, options?: RequestOptions): ApiPromise<LoginsResponseResult, Logins.DeleteLoginsIdError>`
- **Wire**: `DELETE /logins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LoginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Logins.DeleteLoginsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Logins.DeleteLoginsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginsResponseResult` | `loginsResponseResultSchema` | `src/models/logins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getLogins

- **Signature**: `getLogins(request: Logins.GetLoginsRequest, options?: RequestOptions): ApiPromise<LoginsResponseResult, Logins.GetLoginsError>`
- **Wire**: `GET /logins`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LoginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Logins.GetLoginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Logins.GetLoginsRequest` (7):

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
| `LoginsResponseResult` | `loginsResponseResultSchema` | `src/models/logins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getLoginsId

- **Signature**: `getLoginsId(request: Logins.GetLoginsIdRequest, options?: RequestOptions): ApiPromise<LoginsResponseResult, Logins.GetLoginsIdError>`
- **Wire**: `GET /logins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LoginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Logins.GetLoginsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Logins.GetLoginsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginsResponseResult` | `loginsResponseResultSchema` | `src/models/logins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postLogins

- **Signature**: `postLogins(request: Logins.PostLoginsRequest, options?: RequestOptions): ApiPromise<LoginsResponseResult, Logins.PostLoginsError>`
- **Wire**: `POST /logins`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LoginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Logins.PostLoginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Logins.PostLoginsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `LoginsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginsPostRequest` | `loginsPostRequestSchema` | `src/models/logins-post-request.ts` |
| `LoginsResponseResult` | `loginsResponseResultSchema` | `src/models/logins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putLoginsId

- **Signature**: `putLoginsId(request: Logins.PutLoginsIdRequest, options?: RequestOptions): ApiPromise<LoginsResponseResult, Logins.PutLoginsIdError>`
- **Wire**: `PUT /logins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LoginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Logins.PutLoginsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Logins.PutLoginsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `LoginsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginsPutRequest` | `loginsPutRequestSchema` | `src/models/logins-put-request.ts` |
| `LoginsResponseResult` | `loginsResponseResultSchema` | `src/models/logins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

