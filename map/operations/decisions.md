<!-- Generated file — do not edit; regenerated with the SDK. -->

# Decisions — operations

Accessor: `client.decisions` · Source: `src/resources/decisions.ts` · 5 operations · Request and error types: namespace `Decisions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDecisionsId

- **Signature**: `deleteDecisionsId(request: Decisions.DeleteDecisionsIdRequest, options?: RequestOptions): ApiPromise<DecisionsResponseResult, Decisions.DeleteDecisionsIdError>`
- **Wire**: `DELETE /decisions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Decisions.DeleteDecisionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Decisions.DeleteDecisionsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionsResponseResult` | `decisionsResponseResultSchema` | `src/models/decisions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getDecisions

- **Signature**: `getDecisions(request: Decisions.GetDecisionsRequest, options?: RequestOptions): ApiPromise<DecisionsResponseResult, Decisions.GetDecisionsError>`
- **Wire**: `GET /decisions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Decisions.GetDecisionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Decisions.GetDecisionsRequest` (7):

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
| `DecisionsResponseResult` | `decisionsResponseResultSchema` | `src/models/decisions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getDecisionsId

- **Signature**: `getDecisionsId(request: Decisions.GetDecisionsIdRequest, options?: RequestOptions): ApiPromise<DecisionsResponseResult, Decisions.GetDecisionsIdError>`
- **Wire**: `GET /decisions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Decisions.GetDecisionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Decisions.GetDecisionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionsResponseResult` | `decisionsResponseResultSchema` | `src/models/decisions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postDecisions

- **Signature**: `postDecisions(request: Decisions.PostDecisionsRequest, options?: RequestOptions): ApiPromise<DecisionsResponseResult, Decisions.PostDecisionsError>`
- **Wire**: `POST /decisions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Decisions.PostDecisionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Decisions.PostDecisionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `DecisionsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionsPostRequest` | `decisionsPostRequestSchema` | `src/models/decisions-post-request.ts` |
| `DecisionsResponseResult` | `decisionsResponseResultSchema` | `src/models/decisions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putDecisionsId

- **Signature**: `putDecisionsId(request: Decisions.PutDecisionsIdRequest, options?: RequestOptions): ApiPromise<DecisionsResponseResult, Decisions.PutDecisionsIdError>`
- **Wire**: `PUT /decisions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Decisions.PutDecisionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Decisions.PutDecisionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `DecisionsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionsPutRequest` | `decisionsPutRequestSchema` | `src/models/decisions-put-request.ts` |
| `DecisionsResponseResult` | `decisionsResponseResultSchema` | `src/models/decisions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

