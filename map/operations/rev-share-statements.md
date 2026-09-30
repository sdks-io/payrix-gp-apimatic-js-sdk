<!-- Generated file — do not edit; regenerated with the SDK. -->

# RevShareStatements — operations

Accessor: `client.revShareStatements` · Source: `src/resources/rev-share-statements.ts` · 2 operations · Request and error types: namespace `RevShareStatements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRevShareStatements

- **Signature**: `getRevShareStatements(request: RevShareStatements.GetRevShareStatementsRequest, options?: RequestOptions): ApiPromise<RevShareStatementsResponseResult, RevShareStatements.GetRevShareStatementsError>`
- **Wire**: `GET /revShareStatements`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevShareStatementsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevShareStatements.GetRevShareStatementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevShareStatements.GetRevShareStatementsRequest` (7):

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
| `RevShareStatementsResponseResult` | `revShareStatementsResponseResultSchema` | `src/models/rev-share-statements-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getRevShareStatementsId

- **Signature**: `getRevShareStatementsId(request: RevShareStatements.GetRevShareStatementsIdRequest, options?: RequestOptions): ApiPromise<RevShareStatementsResponseResult, RevShareStatements.GetRevShareStatementsIdError>`
- **Wire**: `GET /revShareStatements/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevShareStatementsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevShareStatements.GetRevShareStatementsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevShareStatements.GetRevShareStatementsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevShareStatementsResponseResult` | `revShareStatementsResponseResultSchema` | `src/models/rev-share-statements-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

