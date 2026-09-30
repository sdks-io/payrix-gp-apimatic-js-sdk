<!-- Generated file — do not edit; regenerated with the SDK. -->

# Terminals — operations

Accessor: `client.terminals` · Source: `src/resources/terminals.ts` · 5 operations · Request and error types: namespace `Terminals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTerminalsId

- **Signature**: `deleteTerminalsId(request: Terminals.DeleteTerminalsIdRequest, options?: RequestOptions): ApiPromise<TerminalsResponseResult, Terminals.DeleteTerminalsIdError>`
- **Wire**: `DELETE /terminals/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Terminals.DeleteTerminalsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Terminals.DeleteTerminalsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalsResponseResult` | `terminalsResponseResultSchema` | `src/models/terminals-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTerminals

- **Signature**: `getTerminals(request: Terminals.GetTerminalsRequest, options?: RequestOptions): ApiPromise<TerminalsResponseResult, Terminals.GetTerminalsError>`
- **Wire**: `GET /terminals`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Terminals.GetTerminalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Terminals.GetTerminalsRequest` (7):

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
| `TerminalsResponseResult` | `terminalsResponseResultSchema` | `src/models/terminals-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTerminalsId

- **Signature**: `getTerminalsId(request: Terminals.GetTerminalsIdRequest, options?: RequestOptions): ApiPromise<TerminalsResponseResult, Terminals.GetTerminalsIdError>`
- **Wire**: `GET /terminals/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Terminals.GetTerminalsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Terminals.GetTerminalsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalsResponseResult` | `terminalsResponseResultSchema` | `src/models/terminals-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTerminals

- **Signature**: `postTerminals(request: Terminals.PostTerminalsRequest, options?: RequestOptions): ApiPromise<TerminalsResponseResult, Terminals.PostTerminalsError>`
- **Wire**: `POST /terminals`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Terminals.PostTerminalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Terminals.PostTerminalsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TerminalsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalsPostRequest` | `terminalsPostRequestSchema` | `src/models/terminals-post-request.ts` |
| `TerminalsResponseResult` | `terminalsResponseResultSchema` | `src/models/terminals-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putTerminalsId

- **Signature**: `putTerminalsId(request: Terminals.PutTerminalsIdRequest, options?: RequestOptions): ApiPromise<TerminalsResponseResult, Terminals.PutTerminalsIdError>`
- **Wire**: `PUT /terminals/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Terminals.PutTerminalsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Terminals.PutTerminalsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TerminalsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalsPutRequest` | `terminalsPutRequestSchema` | `src/models/terminals-put-request.ts` |
| `TerminalsResponseResult` | `terminalsResponseResultSchema` | `src/models/terminals-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

