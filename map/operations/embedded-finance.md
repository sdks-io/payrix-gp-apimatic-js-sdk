<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmbeddedFinance — operations

Accessor: `client.embeddedFinance` · Source: `src/resources/embedded-finance.ts` · 2 operations · Request and error types: namespace `EmbeddedFinance`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEmbeddedFinance

- **Signature**: `getEmbeddedFinance(request: EmbeddedFinance.GetEmbeddedFinanceRequest, options?: RequestOptions): ApiPromise<EmbeddedFinanceResponseResult, EmbeddedFinance.GetEmbeddedFinanceError>`
- **Wire**: `GET /embeddedFinance`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EmbeddedFinanceResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EmbeddedFinance.GetEmbeddedFinanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbeddedFinance.GetEmbeddedFinanceRequest` (7):

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
| `EmbeddedFinanceResponseResult` | `embeddedFinanceResponseResultSchema` | `src/models/embedded-finance-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEmbeddedFinanceId

- **Signature**: `getEmbeddedFinanceId(request: EmbeddedFinance.GetEmbeddedFinanceIdRequest, options?: RequestOptions): ApiPromise<EmbeddedFinanceResponseResult, EmbeddedFinance.GetEmbeddedFinanceIdError>`
- **Wire**: `GET /embeddedFinance/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EmbeddedFinanceResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EmbeddedFinance.GetEmbeddedFinanceIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbeddedFinance.GetEmbeddedFinanceIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmbeddedFinanceResponseResult` | `embeddedFinanceResponseResultSchema` | `src/models/embedded-finance-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

