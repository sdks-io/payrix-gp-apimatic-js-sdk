<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionsTxns — operations

Accessor: `client.transactionsTxns` · Source: `src/resources/transactions-txns.ts` · 4 operations · Request and error types: namespace `TransactionsTxns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTxns

- **Signature**: `getTxns(request: TransactionsTxns.GetTxnsRequest, options?: RequestOptions): ApiPromise<TxnsResponseResult, TransactionsTxns.GetTxnsError>`
- **Wire**: `GET /txns`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionsTxns.GetTxnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsTxns.GetTxnsRequest` (7):

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
| `TxnsResponseResult` | `txnsResponseResultSchema` | `src/models/txns-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTxnsId

- **Signature**: `getTxnsId(request: TransactionsTxns.GetTxnsIdRequest, options?: RequestOptions): ApiPromise<TxnsResponseResult, TransactionsTxns.GetTxnsIdError>`
- **Wire**: `GET /txns/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TxnsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionsTxns.GetTxnsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsTxns.GetTxnsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnsResponseResult` | `txnsResponseResultSchema` | `src/models/txns-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTxns

- **Signature**: `postTxns(request: TransactionsTxns.PostTxnsRequest, options?: RequestOptions): ApiPromise<TxnsPostResponseResult, TransactionsTxns.PostTxnsError>`
- **Wire**: `POST /txns`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TxnsPostResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionsTxns.PostTxnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsTxns.PostTxnsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TxnsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnsPostRequest` | `txnsPostRequestSchema` | `src/models/txns-post-request.ts` |
| `TxnsPostResponseResult` | `txnsPostResponseResultSchema` | `src/models/txns-post-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putTxnsId

- **Signature**: `putTxnsId(request: TransactionsTxns.PutTxnsIdRequest, options?: RequestOptions): ApiPromise<TxnsResponseResult, TransactionsTxns.PutTxnsIdError>`
- **Wire**: `PUT /txns/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TxnsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionsTxns.PutTxnsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsTxns.PutTxnsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TxnsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TxnsPutRequest` | `txnsPutRequestSchema` | `src/models/txns-put-request.ts` |
| `TxnsResponseResult` | `txnsResponseResultSchema` | `src/models/txns-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

