<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionsResults — operations

Accessor: `client.transactionsResults` · Source: `src/resources/transactions-results.ts` · 2 operations · Request and error types: namespace `TransactionsResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTxnResults

- **Signature**: `getTxnResults(request: TransactionsResults.GetTxnResultsRequest, options?: RequestOptions): ApiPromise<TxnResultsResponseResult, TransactionsResults.GetTxnResultsError>`
- **Wire**: `GET /txnResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionsResults.GetTxnResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsResults.GetTxnResultsRequest` (7):

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
| `TxnResultsResponseResult` | `txnResultsResponseResultSchema` | `src/models/txn-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTxnResultsId

- **Signature**: `getTxnResultsId(request: TransactionsResults.GetTxnResultsIdRequest, options?: RequestOptions): ApiPromise<TxnResultsResponseResult, TransactionsResults.GetTxnResultsIdError>`
- **Wire**: `GET /txnResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionsResults.GetTxnResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsResults.GetTxnResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnResultsResponseResult` | `txnResultsResponseResultSchema` | `src/models/txn-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

