<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionDatas — operations

Accessor: `client.transactionDatas` · Source: `src/resources/transaction-datas.ts` · 3 operations · Request and error types: namespace `TransactionDatas`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTxnDatas

- **Signature**: `getTxnDatas(request: TransactionDatas.GetTxnDatasRequest, options?: RequestOptions): ApiPromise<TxnDatasResponseResult, TransactionDatas.GetTxnDatasError>`
- **Wire**: `GET /txnDatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionDatas.GetTxnDatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionDatas.GetTxnDatasRequest` (7):

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
| `TxnDatasResponseResult` | `txnDatasResponseResultSchema` | `src/models/txn-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTxnDatasId

- **Signature**: `getTxnDatasId(request: TransactionDatas.GetTxnDatasIdRequest, options?: RequestOptions): ApiPromise<TxnDatasResponseResult, TransactionDatas.GetTxnDatasIdError>`
- **Wire**: `GET /txnDatas/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionDatas.GetTxnDatasIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionDatas.GetTxnDatasIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnDatasResponseResult` | `txnDatasResponseResultSchema` | `src/models/txn-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTxnDatas

- **Signature**: `postTxnDatas(request: TransactionDatas.PostTxnDatasRequest, options?: RequestOptions): ApiPromise<TxnDatasResponseResult, TransactionDatas.PostTxnDatasError>`
- **Wire**: `POST /txnDatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TxnDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionDatas.PostTxnDatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionDatas.PostTxnDatasRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TxnDatasPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnDatasPostRequest` | `txnDatasPostRequestSchema` | `src/models/txn-datas-post-request.ts` |
| `TxnDatasResponseResult` | `txnDatasResponseResultSchema` | `src/models/txn-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

