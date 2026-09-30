<!-- Generated file — do not edit; regenerated with the SDK. -->

# TxnSessions — operations

Accessor: `client.txnSessions` · Source: `src/resources/txn-sessions.ts` · 4 operations · Request and error types: namespace `TxnSessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTxnSessionsId

- **Signature**: `deleteTxnSessionsId(request: TxnSessions.DeleteTxnSessionsIdRequest, options?: RequestOptions): ApiPromise<TxnSessionsResponseResult, TxnSessions.DeleteTxnSessionsIdError>`
- **Wire**: `DELETE /txnSessions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TxnSessionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TxnSessions.DeleteTxnSessionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TxnSessions.DeleteTxnSessionsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnSessionsResponseResult` | `txnSessionsResponseResultSchema` | `src/models/txn-sessions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTxnSessions

- **Signature**: `getTxnSessions(request: TxnSessions.GetTxnSessionsRequest, options?: RequestOptions): ApiPromise<TxnSessionsResponseResult, TxnSessions.GetTxnSessionsError>`
- **Wire**: `GET /txnSessions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnSessionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TxnSessions.GetTxnSessionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TxnSessions.GetTxnSessionsRequest` (7):

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
| `TxnSessionsResponseResult` | `txnSessionsResponseResultSchema` | `src/models/txn-sessions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTxnSessionsId

- **Signature**: `getTxnSessionsId(request: TxnSessions.GetTxnSessionsIdRequest, options?: RequestOptions): ApiPromise<TxnSessionsResponseResult, TxnSessions.GetTxnSessionsIdError>`
- **Wire**: `GET /txnSessions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnSessionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TxnSessions.GetTxnSessionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TxnSessions.GetTxnSessionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnSessionsResponseResult` | `txnSessionsResponseResultSchema` | `src/models/txn-sessions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTxnSessions

- **Signature**: `postTxnSessions(request: TxnSessions.PostTxnSessionsRequest, options?: RequestOptions): ApiPromise<TxnSessionsResponseResult, TxnSessions.PostTxnSessionsError>`
- **Wire**: `POST /txnSessions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TxnSessionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TxnSessions.PostTxnSessionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TxnSessions.PostTxnSessionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TxnSessionsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnSessionsPostRequest` | `txnSessionsPostRequestSchema` | `src/models/txn-sessions-post-request.ts` |
| `TxnSessionsResponseResult` | `txnSessionsResponseResultSchema` | `src/models/txn-sessions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

