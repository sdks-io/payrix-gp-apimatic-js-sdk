<!-- Generated file — do not edit; regenerated with the SDK. -->

# Links — operations

Accessor: `client.links` · Source: `src/resources/links.ts` · 3 operations · Request and error types: namespace `Links`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLink

- **Signature**: `createLink(request?: Links.CreateLinkRequest, options?: RequestOptions): ApiPromise<LinksResponse1, Links.CreateLinkError>`
- **Wire**: `POST /links`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinksResponse1`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Links.CreateLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.CreateLinkRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `body` | `body` | — | `LinksRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinksRequest` | `linksRequestSchema` | `src/models/links-request.ts` |
| `LinksResponse1` | `linksResponse1Schema` | `src/models/links-response1.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |

### getLink

- **Signature**: `getLink(request: Links.GetLinkRequest, options?: RequestOptions): ApiPromise<LinksResponse2, Links.GetLinkError>`
- **Wire**: `GET /links/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinksResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Links.GetLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.GetLinkRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinksResponse2` | `linksResponse2Schema` | `src/models/links-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |

### getListOfLinks

- **Signature**: `getListOfLinks(request?: Links.GetListOfLinksRequest, options?: RequestOptions): ApiPromise<LinksResponse, Links.GetListOfLinksError>`
- **Wire**: `GET /links`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinksResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Links.GetListOfLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.GetListOfLinksRequest` (18):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `id` | `query` | — | `string` | no | — |
| `status` | `query` | — | `StatusLinksStatus` | no | — |
| `usageMode` | `query` | `usage_mode` | `UsageModeLinksUsageMode` | no | — |
| `name` | `query` | — | `string` | no | — |
| `description` | `query` | — | `string` | no | — |
| `reference` | `query` | — | `string` | no | — |
| `country` | `query` | — | `string` | no | — |
| `amount` | `query` | — | `string` | no | — |
| `currency` | `query` | — | `string` | no | — |
| `shippable` | `query` | — | `ShippableLinksShippable` | no | — |
| `expirationDate` | `query` | `expiration_date` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `orderBy` | `query` | `order_by` | `string` | no | `"TIME_CREATED"` |
| `order` | `query` | — | `Order53` | no | `Order53.Desc` |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusLinksStatus` | `statusLinksStatusSchema` | `src/models/status-links-status.ts` |
| `UsageModeLinksUsageMode` | `usageModeLinksUsageModeSchema` | `src/models/usage-mode-links-usage-mode.ts` |
| `ShippableLinksShippable` | `shippableLinksShippableSchema` | `src/models/shippable-links-shippable.ts` |
| `Order53` | `order53Schema` | `src/models/order53.ts` |
| `LinksResponse` | `linksResponseSchema` | `src/models/links-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |

