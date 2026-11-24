<!-- Generated file — do not edit; regenerated with the SDK. -->

# FileProcessing — operations

Accessor: `client.fileProcessing` · Source: `src/resources/file-processing.ts` · 4 operations · Request and error types: namespace `FileProcessing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUrl

- **Signature**: `createUrl(request?: FileProcessing.CreateUrlRequest, options?: RequestOptions): ApiPromise<CreateUrlResponse2, FileProcessing.CreateUrlError>`
- **Wire**: `POST /files`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateUrlResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `FileProcessing.CreateUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileProcessing.CreateUrlRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `CreateUrlRequest2` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateUrlRequest2` | `createUrlRequest2Schema` | `src/models/create-url-request2.ts` |
| `CreateUrlResponse2` | `createUrlResponse2Schema` | `src/models/create-url-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getFileDetails

- **Signature**: `getFileDetails(request: FileProcessing.GetFileDetailsRequest, options?: RequestOptions): ApiPromise<FileDetailsResponse2, FileProcessing.GetFileDetailsError>`
- **Wire**: `GET /files/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FileDetailsResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `FileProcessing.GetFileDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileProcessing.GetFileDetailsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileDetailsResponse2` | `fileDetailsResponse2Schema` | `src/models/file-details-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### listFiles

- **Signature**: `listFiles(request?: FileProcessing.ListFilesRequest, options?: RequestOptions): ApiPromise<ListFilesResponse2, FileProcessing.ListFilesError>`
- **Wire**: `GET /files`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFilesResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `FileProcessing.ListFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileProcessing.ListFilesRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `DataDictionaryV1PaginationOrder` | no | — |
| `orderBy` | `query` | `order_by` | `OrderByFileProcessingQueryParamsOrderBy` | no | — |
| `status` | `query` | — | `StatusFileProcessingStatus` | no | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` | no | — |
| `id` | `query` | — | `string` | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataDictionaryV1PaginationOrder` | `dataDictionaryV1PaginationOrderSchema` | `src/models/data-dictionary-v1-pagination-order.ts` |
| `OrderByFileProcessingQueryParamsOrderBy` | `orderByFileProcessingQueryParamsOrderBySchema` | `src/models/order-by-file-processing-query-params-order-by.ts` |
| `StatusFileProcessingStatus` | `statusFileProcessingStatusSchema` | `src/models/status-file-processing-status.ts` |
| `ListFilesResponse2` | `listFilesResponse2Schema` | `src/models/list-files-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### uploadFile

- **Signature**: `uploadFile(request: FileProcessing.UploadFileRequest, options?: RequestOptions): ApiPromise<undefined, FileProcessing.UploadFileError>`
- **Wire**: `PUT /{signed_upload_path}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `FileProcessing.UploadFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileProcessing.UploadFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signedUploadPath` | `path` | `signed_upload_path` | `string` | yes |

