<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalTransactions — operations

Accessor: `client.terminalTransactions` · Source: `src/resources/terminal-transactions.ts` · 5 operations · Request and error types: namespace `TerminalTransactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTerminalTxnsById

- **Signature**: `deleteTerminalTxnsById(request: TerminalTransactions.DeleteTerminalTxnsByIdRequest, options?: RequestOptions): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.DeleteTerminalTxnsByIdError>`
- **Wire**: `DELETE /terminalTxns/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalTxnsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactions.DeleteTerminalTxnsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactions.DeleteTerminalTxnsByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnsResponseResult` | `terminalTxnsResponseResultSchema` | `src/models/terminal-txns-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTerminalTxns

- **Signature**: `getTerminalTxns(request: TerminalTransactions.GetTerminalTxnsRequest, options?: RequestOptions): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.GetTerminalTxnsError>`
- **Wire**: `GET /terminalTxns`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalTxnsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactions.GetTerminalTxnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactions.GetTerminalTxnsRequest` (7):

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
| `TerminalTxnsResponseResult` | `terminalTxnsResponseResultSchema` | `src/models/terminal-txns-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTerminalTxnsById

- **Signature**: `getTerminalTxnsById(request: TerminalTransactions.GetTerminalTxnsByIdRequest, options?: RequestOptions): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.GetTerminalTxnsByIdError>`
- **Wire**: `GET /terminalTxns/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalTxnsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactions.GetTerminalTxnsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactions.GetTerminalTxnsByIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnsResponseResult` | `terminalTxnsResponseResultSchema` | `src/models/terminal-txns-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTerminalTxns

- **Signature**: `postTerminalTxns(request: TerminalTransactions.PostTerminalTxnsRequest, options?: RequestOptions): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.PostTerminalTxnsError>`
- **Wire**: `POST /terminalTxns`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalTxnsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactions.PostTerminalTxnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactions.PostTerminalTxnsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TerminalTxnsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnsPostRequest` | `terminalTxnsPostRequestSchema` | `src/models/terminal-txns-post-request.ts` |
| `TerminalTxnsResponseResult` | `terminalTxnsResponseResultSchema` | `src/models/terminal-txns-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### updateTerminalTxnsById

- **Signature**: `updateTerminalTxnsById(request: TerminalTransactions.UpdateTerminalTxnsByIdRequest, options?: RequestOptions): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.UpdateTerminalTxnsByIdError>`
- **Wire**: `PUT /terminalTxns/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalTxnsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactions.UpdateTerminalTxnsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactions.UpdateTerminalTxnsByIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TerminalTxnsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnsPutRequest` | `terminalTxnsPutRequestSchema` | `src/models/terminal-txns-put-request.ts` |
| `TerminalTxnsResponseResult` | `terminalTxnsResponseResultSchema` | `src/models/terminal-txns-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

