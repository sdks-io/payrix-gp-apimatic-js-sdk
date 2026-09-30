<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalTransactionResults — operations

Accessor: `client.terminalTransactionResults` · Source: `src/resources/terminal-transaction-results.ts` · 2 operations · Request and error types: namespace `TerminalTransactionResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTerminalTxnResults

- **Signature**: `getTerminalTxnResults(request: TerminalTransactionResults.GetTerminalTxnResultsRequest, options?: RequestOptions): ApiPromise<TerminalTxnResultsResponseResult, TerminalTransactionResults.GetTerminalTxnResultsError>`
- **Wire**: `GET /terminalTxnResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalTxnResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionResults.GetTerminalTxnResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionResults.GetTerminalTxnResultsRequest` (7):

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
| `TerminalTxnResultsResponseResult` | `terminalTxnResultsResponseResultSchema` | `src/models/terminal-txn-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTerminalTxnResultsId

- **Signature**: `getTerminalTxnResultsId(request: TerminalTransactionResults.GetTerminalTxnResultsIdRequest, options?: RequestOptions): ApiPromise<TerminalTxnResultsResponseResult, TerminalTransactionResults.GetTerminalTxnResultsIdError>`
- **Wire**: `GET /terminalTxnResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalTxnResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TerminalTransactionResults.GetTerminalTxnResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalTransactionResults.GetTerminalTxnResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalTxnResultsResponseResult` | `terminalTxnResultsResponseResultSchema` | `src/models/terminal-txn-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

