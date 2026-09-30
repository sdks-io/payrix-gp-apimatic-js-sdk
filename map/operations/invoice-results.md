<!-- Generated file — do not edit; regenerated with the SDK. -->

# InvoiceResults — operations

Accessor: `client.invoiceResults` · Source: `src/resources/invoice-results.ts` · 3 operations · Request and error types: namespace `InvoiceResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInvoiceResults

- **Signature**: `getInvoiceResults(request: InvoiceResults.GetInvoiceResultsRequest, options?: RequestOptions): ApiPromise<InvoiceResultsResponseResult, InvoiceResults.GetInvoiceResultsError>`
- **Wire**: `GET /invoiceResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceResults.GetInvoiceResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceResults.GetInvoiceResultsRequest` (7):

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
| `InvoiceResultsResponseResult` | `invoiceResultsResponseResultSchema` | `src/models/invoice-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoiceResultsId

- **Signature**: `getInvoiceResultsId(request: InvoiceResults.GetInvoiceResultsIdRequest, options?: RequestOptions): ApiPromise<InvoiceResultsResponseResult, InvoiceResults.GetInvoiceResultsIdError>`
- **Wire**: `GET /invoiceResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceResults.GetInvoiceResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceResults.GetInvoiceResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceResultsResponseResult` | `invoiceResultsResponseResultSchema` | `src/models/invoice-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postInvoiceResults

- **Signature**: `postInvoiceResults(request: InvoiceResults.PostInvoiceResultsRequest, options?: RequestOptions): ApiPromise<InvoiceResultsResponseResult, InvoiceResults.PostInvoiceResultsError>`
- **Wire**: `POST /invoiceResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceResults.PostInvoiceResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceResults.PostInvoiceResultsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoiceResultPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceResultPostRequest` | `invoiceResultPostRequestSchema` | `src/models/invoice-result-post-request.ts` |
| `InvoiceResultsResponseResult` | `invoiceResultsResponseResultSchema` | `src/models/invoice-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

