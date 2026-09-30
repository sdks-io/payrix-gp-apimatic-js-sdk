<!-- Generated file — do not edit; regenerated with the SDK. -->

# HostThemes — operations

Accessor: `client.hostThemes` · Source: `src/resources/host-themes.ts` · 2 operations · Request and error types: namespace `HostThemes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getHostThemes

- **Signature**: `getHostThemes(request: HostThemes.GetHostThemesRequest, options?: RequestOptions): ApiPromise<HostThemesResponseResult, HostThemes.GetHostThemesError>`
- **Wire**: `GET /hostThemes`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HostThemesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `HostThemes.GetHostThemesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HostThemes.GetHostThemesRequest` (7):

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
| `HostThemesResponseResult` | `hostThemesResponseResultSchema` | `src/models/host-themes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getHostThemesId

- **Signature**: `getHostThemesId(request: HostThemes.GetHostThemesIdRequest, options?: RequestOptions): ApiPromise<HostThemesResponseResult, HostThemes.GetHostThemesIdError>`
- **Wire**: `GET /hostThemes/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HostThemesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `HostThemes.GetHostThemesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HostThemes.GetHostThemesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HostThemesResponseResult` | `hostThemesResponseResultSchema` | `src/models/host-themes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

