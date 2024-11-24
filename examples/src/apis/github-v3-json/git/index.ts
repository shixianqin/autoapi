import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * The `content` in the response will always be Base64 encoded.
 *
 * _Note_: This API supports blobs up to 100 megabytes in size.
 * @summary Get a blob
 * @path `/repos/{owner}/{repo}/git/blobs/{file_sha}`
 * @docs https://docs.github.com/rest/reference/git#get-a-blob
 */
export function getBlob(options: {
  pathParams: API.GithubV3Json.Git.GetBlob.PathParams;
  headers?: API.GithubV3Json.Git.GetBlob.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.GetBlob.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/blobs/${options.pathParams.file_sha}`,
    options,
  );
}

/**
 * Create a blob
 * @path `/repos/{owner}/{repo}/git/blobs`
 * @docs https://docs.github.com/rest/reference/git#create-a-blob
 */
export function postCreateBlob(options: {
  pathParams: API.GithubV3Json.Git.PostCreateBlob.PathParams;
  headers?: API.GithubV3Json.Git.PostCreateBlob.Headers;
  body: API.GithubV3Json.Git.PostCreateBlob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.PostCreateBlob.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/blobs`,
    options,
  );
}

/**
 * Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
 *
 * **Signature verification object**
 *
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 *
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 *
 * These are the possible values for `reason` in the `verification` object:
 *
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
 * @summary Get a commit
 * @path `/repos/{owner}/{repo}/git/commits/{commit_sha}`
 * @docs https://docs.github.com/rest/reference/git#get-a-commit
 */
export function getCommit(options: {
  pathParams: API.GithubV3Json.Git.GetCommit.PathParams;
  headers?: API.GithubV3Json.Git.GetCommit.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.GetCommit.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/commits/${options.pathParams.commit_sha}`,
    options,
  );
}

/**
 * Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
 *
 * **Signature verification object**
 *
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 *
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 *
 * These are the possible values for `reason` in the `verification` object:
 *
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
 * @summary Create a commit
 * @path `/repos/{owner}/{repo}/git/commits`
 * @docs https://docs.github.com/rest/reference/git#create-a-commit
 */
export function postCreateCommit(options: {
  pathParams: API.GithubV3Json.Git.PostCreateCommit.PathParams;
  headers?: API.GithubV3Json.Git.PostCreateCommit.Headers;
  body: API.GithubV3Json.Git.PostCreateCommit.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.PostCreateCommit.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/commits`,
    options,
  );
}

/**
 * Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.
 *
 * When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.
 *
 * **Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
 *
 * If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
 * @summary List matching references
 * @path `/repos/{owner}/{repo}/git/matching-refs/{ref}`
 * @docs https://docs.github.com/rest/reference/git#list-matching-references
 */
export function getListMatchingRefs(options: {
  pathParams: API.GithubV3Json.Git.GetListMatchingRefs.PathParams;
  headers?: API.GithubV3Json.Git.GetListMatchingRefs.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.GetListMatchingRefs.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/matching-refs/${options.pathParams.ref}`,
    options,
  );
}

/**
 * Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.
 *
 * **Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
 * @summary Get a reference
 * @path `/repos/{owner}/{repo}/git/ref/{ref}`
 * @docs https://docs.github.com/rest/reference/git#get-a-reference
 */
export function getRef(options: {
  pathParams: API.GithubV3Json.Git.GetRef.PathParams;
  headers?: API.GithubV3Json.Git.GetRef.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.GetRef.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/ref/${options.pathParams.ref}`,
    options,
  );
}

/**
 * Delete a reference
 * @path `/repos/{owner}/{repo}/git/refs/{ref}`
 * @docs https://docs.github.com/rest/reference/git#delete-a-reference
 */
export function deleteRef(options: {
  pathParams: API.GithubV3Json.Git.DeleteRef.PathParams;
  headers?: API.GithubV3Json.Git.DeleteRef.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/refs/${options.pathParams.ref}`,
    options,
  );
}

/**
 * Update a reference
 * @path `/repos/{owner}/{repo}/git/refs/{ref}`
 * @docs https://docs.github.com/rest/reference/git#update-a-reference
 */
export function patchUpdateRef(options: {
  pathParams: API.GithubV3Json.Git.PatchUpdateRef.PathParams;
  headers?: API.GithubV3Json.Git.PatchUpdateRef.Headers;
  body: API.GithubV3Json.Git.PatchUpdateRef.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.PatchUpdateRef.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/refs/${options.pathParams.ref}`,
    options,
  );
}

/**
 * Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
 * @summary Create a reference
 * @path `/repos/{owner}/{repo}/git/refs`
 * @docs https://docs.github.com/rest/reference/git#create-a-reference
 */
export function postCreateRef(options: {
  pathParams: API.GithubV3Json.Git.PostCreateRef.PathParams;
  headers?: API.GithubV3Json.Git.PostCreateRef.Headers;
  body: API.GithubV3Json.Git.PostCreateRef.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.PostCreateRef.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/refs`,
    options,
  );
}

/**
 * **Signature verification object**
 *
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 *
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 *
 * These are the possible values for `reason` in the `verification` object:
 *
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
 * @summary Get a tag
 * @path `/repos/{owner}/{repo}/git/tags/{tag_sha}`
 * @docs https://docs.github.com/rest/reference/git#get-a-tag
 */
export function getTag(options: {
  pathParams: API.GithubV3Json.Git.GetTag.PathParams;
  headers?: API.GithubV3Json.Git.GetTag.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.GetTag.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/tags/${options.pathParams.tag_sha}`,
    options,
  );
}

/**
 * Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.
 *
 * **Signature verification object**
 *
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 *
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 *
 * These are the possible values for `reason` in the `verification` object:
 *
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
 * @summary Create a tag object
 * @path `/repos/{owner}/{repo}/git/tags`
 * @docs https://docs.github.com/rest/reference/git#create-a-tag-object
 */
export function postCreateTag(options: {
  pathParams: API.GithubV3Json.Git.PostCreateTag.PathParams;
  headers?: API.GithubV3Json.Git.PostCreateTag.Headers;
  body: API.GithubV3Json.Git.PostCreateTag.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.PostCreateTag.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/tags`,
    options,
  );
}

/**
 * Returns a single tree using the SHA1 value for that tree.
 *
 * If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
 *
 *
 * **Note**: The limit for the `tree` array is 100,000 entries with a maximum size of 7 MB when using the `recursive` parameter.
 * @summary Get a tree
 * @path `/repos/{owner}/{repo}/git/trees/{tree_sha}`
 * @docs https://docs.github.com/rest/reference/git#get-a-tree
 */
export function getTree(options: {
  pathParams: API.GithubV3Json.Git.GetTree.PathParams;
  queryParams?: API.GithubV3Json.Git.GetTree.QueryParams;
  headers?: API.GithubV3Json.Git.GetTree.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.GetTree.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/trees/${options.pathParams.tree_sha}`,
    options,
  );
}

/**
 * The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.
 *
 * If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/rest/reference/git#update-a-reference)."
 *
 * Returns an error if you try to delete a file that does not exist.
 * @summary Create a tree
 * @path `/repos/{owner}/{repo}/git/trees`
 * @docs https://docs.github.com/rest/reference/git#create-a-tree
 */
export function postCreateTree(options: {
  pathParams: API.GithubV3Json.Git.PostCreateTree.PathParams;
  headers?: API.GithubV3Json.Git.PostCreateTree.Headers;
  body: API.GithubV3Json.Git.PostCreateTree.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Git.PostCreateTree.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/git/trees`,
    options,
  );
}
