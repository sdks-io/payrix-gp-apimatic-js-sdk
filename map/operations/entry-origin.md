<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntryOrigin — operations

Accessor: `client.entryOrigin` · Source: `src/resources/entry-origin.ts` · 2 operations · Request and error types: namespace `EntryOrigin`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEntryOrigins

- **Signature**: `getEntryOrigins(request: EntryOrigin.GetEntryOriginsRequest, options?: RequestOptions): ApiPromise<EntryOriginsResponseResult, EntryOrigin.GetEntryOriginsError>`
- **Wire**: `GET /entryOrigins`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntryOriginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntryOrigin.GetEntryOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntryOrigin.GetEntryOriginsRequest` (7):

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
| `EntryOriginsResponseResult` | `entryOriginsResponseResultSchema` | `src/models/entry-origins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntryOriginsId

- **Signature**: `getEntryOriginsId(request: EntryOrigin.GetEntryOriginsIdRequest, options?: RequestOptions): ApiPromise<EntryOriginsResponseResult, EntryOrigin.GetEntryOriginsIdError>`
- **Wire**: `GET /entryOrigins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntryOriginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntryOrigin.GetEntryOriginsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntryOrigin.GetEntryOriginsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntryOriginsResponseResult` | `entryOriginsResponseResultSchema` | `src/models/entry-origins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

