declare namespace API {
  namespace K8sV2Json {
    namespace AdmissionregistrationV1alpha1 {
      namespace GetApiResources {
        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1ApiResourceList;
      }

      namespace GetReadValidatingAdmissionPolicyStatus {
        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicy
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;
      }

      namespace PatchValidatingAdmissionPolicyStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicy
           */
          name: string;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
           */
          force?: boolean;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;
      }

      namespace PutReplaceValidatingAdmissionPolicyStatus {
        type Body =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;

        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicy
           */
          name: string;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;
      }

      namespace DeleteValidatingAdmissionPolicy {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicy
           */
          name: string;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
           */
          gracePeriodSeconds?: number;
          /**
           * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
           */
          orphanDependents?: boolean;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
           */
          propagationPolicy?: string;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1Status;
      }

      namespace GetReadValidatingAdmissionPolicy {
        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicy
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;
      }

      namespace PatchValidatingAdmissionPolicy {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicy
           */
          name: string;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
           */
          force?: boolean;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;
      }

      namespace PutReplaceValidatingAdmissionPolicy {
        type Body =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;

        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicy
           */
          name: string;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;
      }

      namespace DeleteCollectionValidatingAdmissionPolicy {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface QueryParams {
          /**
           * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
           *
           * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
           */
          continue?: string;
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * A selector to restrict the list of returned objects by their fields. Defaults to everything.
           */
          fieldSelector?: string;
          /**
           * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
           */
          gracePeriodSeconds?: number;
          /**
           * A selector to restrict the list of returned objects by their labels. Defaults to everything.
           */
          labelSelector?: string;
          /**
           * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
           *
           * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
           */
          limit?: number;
          /**
           * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
           */
          orphanDependents?: boolean;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
           */
          propagationPolicy?: string;
          /**
           * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersion?: string;
          /**
           * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersionMatch?: string;
          /**
           * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
           *
           * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
           *   is interpreted as "data at least as new as the provided `resourceVersion`"
           *   and the bookmark event is send when the state is synced
           *   to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
           *   If `resourceVersion` is unset, this is interpreted as "consistent read" and the
           *   bookmark event is send when the state is synced at least to the moment
           *   when request started being processed.
           * - `resourceVersionMatch` set to any other value or unset
           *   Invalid error is returned.
           *
           * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
           */
          sendInitialEvents?: boolean;
          /**
           * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
           */
          timeoutSeconds?: number;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1Status;
      }

      namespace GetListValidatingAdmissionPolicy {
        interface QueryParams {
          /**
           * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
           */
          allowWatchBookmarks?: boolean;
          /**
           * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
           *
           * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
           */
          continue?: string;
          /**
           * A selector to restrict the list of returned objects by their fields. Defaults to everything.
           */
          fieldSelector?: string;
          /**
           * A selector to restrict the list of returned objects by their labels. Defaults to everything.
           */
          labelSelector?: string;
          /**
           * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
           *
           * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
           */
          limit?: number;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersion?: string;
          /**
           * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersionMatch?: string;
          /**
           * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
           *
           * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
           *   is interpreted as "data at least as new as the provided `resourceVersion`"
           *   and the bookmark event is send when the state is synced
           *   to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
           *   If `resourceVersion` is unset, this is interpreted as "consistent read" and the
           *   bookmark event is send when the state is synced at least to the moment
           *   when request started being processed.
           * - `resourceVersionMatch` set to any other value or unset
           *   Invalid error is returned.
           *
           * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
           */
          sendInitialEvents?: boolean;
          /**
           * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
           */
          timeoutSeconds?: number;
          /**
           * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
           */
          watch?: boolean;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyList;
      }

      namespace PostCreateValidatingAdmissionPolicy {
        type Body =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy;
      }

      namespace DeleteValidatingAdmissionPolicyBinding {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicyBinding
           */
          name: string;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
           */
          gracePeriodSeconds?: number;
          /**
           * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
           */
          orphanDependents?: boolean;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
           */
          propagationPolicy?: string;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1Status;
      }

      namespace GetReadValidatingAdmissionPolicyBinding {
        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicyBinding
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding;
      }

      namespace PatchValidatingAdmissionPolicyBinding {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicyBinding
           */
          name: string;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
           */
          force?: boolean;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding;
      }

      namespace PutReplaceValidatingAdmissionPolicyBinding {
        type Body =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding;

        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicyBinding
           */
          name: string;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding;
      }

      namespace DeleteCollectionValidatingAdmissionPolicyBinding {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface QueryParams {
          /**
           * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
           *
           * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
           */
          continue?: string;
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * A selector to restrict the list of returned objects by their fields. Defaults to everything.
           */
          fieldSelector?: string;
          /**
           * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
           */
          gracePeriodSeconds?: number;
          /**
           * A selector to restrict the list of returned objects by their labels. Defaults to everything.
           */
          labelSelector?: string;
          /**
           * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
           *
           * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
           */
          limit?: number;
          /**
           * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
           */
          orphanDependents?: boolean;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
           */
          propagationPolicy?: string;
          /**
           * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersion?: string;
          /**
           * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersionMatch?: string;
          /**
           * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
           *
           * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
           *   is interpreted as "data at least as new as the provided `resourceVersion`"
           *   and the bookmark event is send when the state is synced
           *   to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
           *   If `resourceVersion` is unset, this is interpreted as "consistent read" and the
           *   bookmark event is send when the state is synced at least to the moment
           *   when request started being processed.
           * - `resourceVersionMatch` set to any other value or unset
           *   Invalid error is returned.
           *
           * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
           */
          sendInitialEvents?: boolean;
          /**
           * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
           */
          timeoutSeconds?: number;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1Status;
      }

      namespace GetListValidatingAdmissionPolicyBinding {
        interface QueryParams {
          /**
           * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
           */
          allowWatchBookmarks?: boolean;
          /**
           * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
           *
           * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
           */
          continue?: string;
          /**
           * A selector to restrict the list of returned objects by their fields. Defaults to everything.
           */
          fieldSelector?: string;
          /**
           * A selector to restrict the list of returned objects by their labels. Defaults to everything.
           */
          labelSelector?: string;
          /**
           * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
           *
           * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
           */
          limit?: number;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersion?: string;
          /**
           * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersionMatch?: string;
          /**
           * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
           *
           * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
           *   is interpreted as "data at least as new as the provided `resourceVersion`"
           *   and the bookmark event is send when the state is synced
           *   to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
           *   If `resourceVersion` is unset, this is interpreted as "consistent read" and the
           *   bookmark event is send when the state is synced at least to the moment
           *   when request started being processed.
           * - `resourceVersionMatch` set to any other value or unset
           *   Invalid error is returned.
           *
           * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
           */
          sendInitialEvents?: boolean;
          /**
           * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
           */
          timeoutSeconds?: number;
          /**
           * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
           */
          watch?: boolean;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList;
      }

      namespace PostCreateValidatingAdmissionPolicyBinding {
        type Body =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding;

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response =
          $schemas.IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding;
      }

      namespace GetWatchValidatingAdmissionPolicy {
        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicy
           */
          name: string;
        }

        interface QueryParams {
          /**
           * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
           */
          allowWatchBookmarks?: boolean;
          /**
           * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
           *
           * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
           */
          continue?: string;
          /**
           * A selector to restrict the list of returned objects by their fields. Defaults to everything.
           */
          fieldSelector?: string;
          /**
           * A selector to restrict the list of returned objects by their labels. Defaults to everything.
           */
          labelSelector?: string;
          /**
           * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
           *
           * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
           */
          limit?: number;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersion?: string;
          /**
           * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersionMatch?: string;
          /**
           * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
           *
           * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
           *   is interpreted as "data at least as new as the provided `resourceVersion`"
           *   and the bookmark event is send when the state is synced
           *   to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
           *   If `resourceVersion` is unset, this is interpreted as "consistent read" and the
           *   bookmark event is send when the state is synced at least to the moment
           *   when request started being processed.
           * - `resourceVersionMatch` set to any other value or unset
           *   Invalid error is returned.
           *
           * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
           */
          sendInitialEvents?: boolean;
          /**
           * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
           */
          timeoutSeconds?: number;
          /**
           * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
           */
          watch?: boolean;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1WatchEvent;
      }

      namespace GetWatchValidatingAdmissionPolicyList {
        interface QueryParams {
          /**
           * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
           */
          allowWatchBookmarks?: boolean;
          /**
           * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
           *
           * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
           */
          continue?: string;
          /**
           * A selector to restrict the list of returned objects by their fields. Defaults to everything.
           */
          fieldSelector?: string;
          /**
           * A selector to restrict the list of returned objects by their labels. Defaults to everything.
           */
          labelSelector?: string;
          /**
           * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
           *
           * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
           */
          limit?: number;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersion?: string;
          /**
           * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersionMatch?: string;
          /**
           * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
           *
           * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
           *   is interpreted as "data at least as new as the provided `resourceVersion`"
           *   and the bookmark event is send when the state is synced
           *   to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
           *   If `resourceVersion` is unset, this is interpreted as "consistent read" and the
           *   bookmark event is send when the state is synced at least to the moment
           *   when request started being processed.
           * - `resourceVersionMatch` set to any other value or unset
           *   Invalid error is returned.
           *
           * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
           */
          sendInitialEvents?: boolean;
          /**
           * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
           */
          timeoutSeconds?: number;
          /**
           * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
           */
          watch?: boolean;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1WatchEvent;
      }

      namespace GetWatchValidatingAdmissionPolicyBinding {
        interface PathParams {
          /**
           * name of the ValidatingAdmissionPolicyBinding
           */
          name: string;
        }

        interface QueryParams {
          /**
           * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
           */
          allowWatchBookmarks?: boolean;
          /**
           * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
           *
           * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
           */
          continue?: string;
          /**
           * A selector to restrict the list of returned objects by their fields. Defaults to everything.
           */
          fieldSelector?: string;
          /**
           * A selector to restrict the list of returned objects by their labels. Defaults to everything.
           */
          labelSelector?: string;
          /**
           * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
           *
           * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
           */
          limit?: number;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersion?: string;
          /**
           * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersionMatch?: string;
          /**
           * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
           *
           * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
           *   is interpreted as "data at least as new as the provided `resourceVersion`"
           *   and the bookmark event is send when the state is synced
           *   to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
           *   If `resourceVersion` is unset, this is interpreted as "consistent read" and the
           *   bookmark event is send when the state is synced at least to the moment
           *   when request started being processed.
           * - `resourceVersionMatch` set to any other value or unset
           *   Invalid error is returned.
           *
           * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
           */
          sendInitialEvents?: boolean;
          /**
           * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
           */
          timeoutSeconds?: number;
          /**
           * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
           */
          watch?: boolean;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1WatchEvent;
      }

      namespace GetWatchValidatingAdmissionPolicyBindingList {
        interface QueryParams {
          /**
           * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
           */
          allowWatchBookmarks?: boolean;
          /**
           * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
           *
           * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
           */
          continue?: string;
          /**
           * A selector to restrict the list of returned objects by their fields. Defaults to everything.
           */
          fieldSelector?: string;
          /**
           * A selector to restrict the list of returned objects by their labels. Defaults to everything.
           */
          labelSelector?: string;
          /**
           * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
           *
           * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
           */
          limit?: number;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersion?: string;
          /**
           * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
           *
           * Defaults to unset
           */
          resourceVersionMatch?: string;
          /**
           * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
           *
           * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
           *   is interpreted as "data at least as new as the provided `resourceVersion`"
           *   and the bookmark event is send when the state is synced
           *   to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
           *   If `resourceVersion` is unset, this is interpreted as "consistent read" and the
           *   bookmark event is send when the state is synced at least to the moment
           *   when request started being processed.
           * - `resourceVersionMatch` set to any other value or unset
           *   Invalid error is returned.
           *
           * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
           */
          sendInitialEvents?: boolean;
          /**
           * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
           */
          timeoutSeconds?: number;
          /**
           * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
           */
          watch?: boolean;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1WatchEvent;
      }
    }
  }
}
