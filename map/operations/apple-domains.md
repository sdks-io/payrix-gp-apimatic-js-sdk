<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppleDomains — operations

Accessor: `client.appleDomains` · Source: `src/resources/apple-domains.ts` · 2 operations · Request and error types: namespace `AppleDomains`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAppleDomains

- **Signature**: `getAppleDomains(request: AppleDomains.GetAppleDomainsRequest, options?: RequestOptions): ApiPromise<AppleDomainsResponseResult, AppleDomains.GetAppleDomainsError>`
- **Wire**: `GET /appleDomains`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppleDomainsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AppleDomains.GetAppleDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppleDomains.GetAppleDomainsRequest` (7):

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
| `AppleDomainsResponseResult` | `appleDomainsResponseResultSchema` | `src/models/apple-domains-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAppleDomainsId

- **Signature**: `getAppleDomainsId(request: AppleDomains.GetAppleDomainsIdRequest, options?: RequestOptions): ApiPromise<AppleDomainsResponseResult, AppleDomains.GetAppleDomainsIdError>`
- **Wire**: `GET /appleDomains{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppleDomainsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AppleDomains.GetAppleDomainsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppleDomains.GetAppleDomainsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppleDomainsResponseResult` | `appleDomainsResponseResultSchema` | `src/models/apple-domains-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

