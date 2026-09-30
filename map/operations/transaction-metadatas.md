<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionMetadatas — operations

Accessor: `client.transactionMetadatas` · Source: `src/resources/transaction-metadatas.ts` · 2 operations · Request and error types: namespace `TransactionMetadatas`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTxnMetadatas

- **Signature**: `getTxnMetadatas(request: TransactionMetadatas.GetTxnMetadatasRequest, options?: RequestOptions): ApiPromise<TxnMetaDatasResponseResult, TransactionMetadatas.GetTxnMetadatasError>`
- **Wire**: `GET /txnMetadatas`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnMetaDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionMetadatas.GetTxnMetadatasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionMetadatas.GetTxnMetadatasRequest` (7):

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
| `TxnMetaDatasResponseResult` | `txnMetaDatasResponseResultSchema` | `src/models/txn-meta-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTxnMetadatasId

- **Signature**: `getTxnMetadatasId(request: TransactionMetadatas.GetTxnMetadatasIdRequest, options?: RequestOptions): ApiPromise<TxnMetaDatasResponseResult, TransactionMetadatas.GetTxnMetadatasIdError>`
- **Wire**: `GET /txnMetadatas/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnMetaDatasResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionMetadatas.GetTxnMetadatasIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionMetadatas.GetTxnMetadatasIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnMetaDatasResponseResult` | `txnMetaDatasResponseResultSchema` | `src/models/txn-meta-datas-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

