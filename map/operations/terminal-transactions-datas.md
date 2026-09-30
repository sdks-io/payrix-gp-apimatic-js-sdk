<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalTransactionsDatas — operations

Accessor: `client.terminalTransactionsDatas` · Source: `src/resources/terminal-transactions-datas.ts` · 3 operations · Request and error types: namespace `TerminalTransactionsDatas`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTerminalTxnsDatas

- **Signature**: `getTerminalTxnsDatas(request: TerminalTransactionsDatas.GetTerminalTxnsDatasRequest, options?: RequestOptions): ApiPromise<TerminalTxnDatasResponseResult, TerminalTransactionsDatas.GetTerminalTxnsDatasError>`
- **Wire**: `GET /terminalTxnDatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalTxnDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionsDatas.GetTerminalTxnsDatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionsDatas.GetTerminalTxnsDatasRequest` (7):

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
| `TerminalTxnDatasResponseResult` | `terminalTxnDatasResponseResultSchema` | `src/models/terminal-txn-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTerminalTxnsDatasId

- **Signature**: `getTerminalTxnsDatasId(request: TerminalTransactionsDatas.GetTerminalTxnsDatasIdRequest, options?: RequestOptions): ApiPromise<TerminalTxnDatasResponseResult, TerminalTransactionsDatas.GetTerminalTxnsDatasIdError>`
- **Wire**: `GET /terminalTxnDatas/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalTxnDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionsDatas.GetTerminalTxnsDatasIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionsDatas.GetTerminalTxnsDatasIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnDatasResponseResult` | `terminalTxnDatasResponseResultSchema` | `src/models/terminal-txn-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTerminalTxnsDatas

- **Signature**: `postTerminalTxnsDatas(request: TerminalTransactionsDatas.PostTerminalTxnsDatasRequest, options?: RequestOptions): ApiPromise<TerminalTxnDatasResponseResult, TerminalTransactionsDatas.PostTerminalTxnsDatasError>`
- **Wire**: `POST /terminalTxnDatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalTxnDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionsDatas.PostTerminalTxnsDatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionsDatas.PostTerminalTxnsDatasRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TerminalTxnsDatasPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnsDatasPostRequest` | `terminalTxnsDatasPostRequestSchema` | `src/models/terminal-txns-datas-post-request.ts` |
| `TerminalTxnDatasResponseResult` | `terminalTxnDatasResponseResultSchema` | `src/models/terminal-txn-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

