<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalTransactionsMetadatas — operations

Accessor: `client.terminalTransactionsMetadatas` · Source: `src/resources/terminal-transactions-metadatas.ts` · 3 operations · Request and error types: namespace `TerminalTransactionsMetadatas`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTerminalTxnsMetadatas

- **Signature**: `getTerminalTxnsMetadatas(request: TerminalTransactionsMetadatas.GetTerminalTxnsMetadatasRequest, options?: RequestOptions): ApiPromise<TerminalTxnMetadatasResponseResult, TerminalTransactionsMetadatas.GetTerminalTxnsMetadatasError>`
- **Wire**: `GET /terminalTxnMetadatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalTxnMetadatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionsMetadatas.GetTerminalTxnsMetadatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionsMetadatas.GetTerminalTxnsMetadatasRequest` (7):

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
| `TerminalTxnMetadatasResponseResult` | `terminalTxnMetadatasResponseResultSchema` | `src/models/terminal-txn-metadatas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTerminalTxnsMetadatasId

- **Signature**: `getTerminalTxnsMetadatasId(request: TerminalTransactionsMetadatas.GetTerminalTxnsMetadatasIdRequest, options?: RequestOptions): ApiPromise<TerminalTxnMetadatasResponseResult, TerminalTransactionsMetadatas.GetTerminalTxnsMetadatasIdError>`
- **Wire**: `GET /terminalTxnMetadatas/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalTxnMetadatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionsMetadatas.GetTerminalTxnsMetadatasIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionsMetadatas.GetTerminalTxnsMetadatasIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnMetadatasResponseResult` | `terminalTxnMetadatasResponseResultSchema` | `src/models/terminal-txn-metadatas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTerminalTxnsMetadatas

- **Signature**: `postTerminalTxnsMetadatas(request: TerminalTransactionsMetadatas.PostTerminalTxnsMetadatasRequest, options?: RequestOptions): ApiPromise<TerminalTxnMetadatasResponseResult, TerminalTransactionsMetadatas.PostTerminalTxnsMetadatasError>`
- **Wire**: `POST /terminalTxnMetadatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalTxnMetadatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionsMetadatas.PostTerminalTxnsMetadatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionsMetadatas.PostTerminalTxnsMetadatasRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TerminalTxnsMetadatasPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnsMetadatasPostRequest` | `terminalTxnsMetadatasPostRequestSchema` | `src/models/terminal-txns-metadatas-post-request.ts` |
| `TerminalTxnMetadatasResponseResult` | `terminalTxnMetadatasResponseResultSchema` | `src/models/terminal-txn-metadatas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

