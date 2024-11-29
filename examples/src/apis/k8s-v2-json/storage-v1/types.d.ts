declare namespace API {
  namespace K8sV2Json {
    namespace StorageV1 {
      namespace DeleteCsiDriver {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface PathParams {
          /**
           * name of the CSIDriver
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

        type Response = $schemas.IoK8sApiStorageV1CsiDriver;
      }

      namespace GetReadCsiDriver {
        interface PathParams {
          /**
           * name of the CSIDriver
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiStorageV1CsiDriver;
      }

      namespace PatchCsiDriver {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the CSIDriver
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

        type Response = $schemas.IoK8sApiStorageV1CsiDriver;
      }

      namespace PutReplaceCsiDriver {
        type Body = $schemas.IoK8sApiStorageV1CsiDriver;

        interface PathParams {
          /**
           * name of the CSIDriver
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

        type Response = $schemas.IoK8sApiStorageV1CsiDriver;
      }

      namespace DeleteCollectionCsiDriver {
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

      namespace GetListCsiDriver {
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

        type Response = $schemas.IoK8sApiStorageV1CsiDriverList;
      }

      namespace PostCreateCsiDriver {
        type Body = $schemas.IoK8sApiStorageV1CsiDriver;

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

        type Response = $schemas.IoK8sApiStorageV1CsiDriver;
      }

      namespace DeleteCsiNode {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface PathParams {
          /**
           * name of the CSINode
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

        type Response = $schemas.IoK8sApiStorageV1CsiNode;
      }

      namespace GetReadCsiNode {
        interface PathParams {
          /**
           * name of the CSINode
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiStorageV1CsiNode;
      }

      namespace PatchCsiNode {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the CSINode
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

        type Response = $schemas.IoK8sApiStorageV1CsiNode;
      }

      namespace PutReplaceCsiNode {
        type Body = $schemas.IoK8sApiStorageV1CsiNode;

        interface PathParams {
          /**
           * name of the CSINode
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

        type Response = $schemas.IoK8sApiStorageV1CsiNode;
      }

      namespace DeleteCollectionCsiNode {
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

      namespace GetListCsiNode {
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

        type Response = $schemas.IoK8sApiStorageV1CsiNodeList;
      }

      namespace PostCreateCsiNode {
        type Body = $schemas.IoK8sApiStorageV1CsiNode;

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

        type Response = $schemas.IoK8sApiStorageV1CsiNode;
      }

      namespace GetListCsiStorageCapacityForAllNamespaces {
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

        type Response = $schemas.IoK8sApiStorageV1CsiStorageCapacityList;
      }

      namespace GetApiResources {
        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1ApiResourceList;
      }

      namespace DeleteNamespacedCsiStorageCapacity {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface PathParams {
          /**
           * name of the CSIStorageCapacity
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
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

      namespace GetReadNamespacedCsiStorageCapacity {
        interface PathParams {
          /**
           * name of the CSIStorageCapacity
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiStorageV1CsiStorageCapacity;
      }

      namespace PatchNamespacedCsiStorageCapacity {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the CSIStorageCapacity
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
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

        type Response = $schemas.IoK8sApiStorageV1CsiStorageCapacity;
      }

      namespace PutReplaceNamespacedCsiStorageCapacity {
        type Body = $schemas.IoK8sApiStorageV1CsiStorageCapacity;

        interface PathParams {
          /**
           * name of the CSIStorageCapacity
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
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

        type Response = $schemas.IoK8sApiStorageV1CsiStorageCapacity;
      }

      namespace DeleteCollectionNamespacedCsiStorageCapacity {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface PathParams {
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

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

      namespace GetListNamespacedCsiStorageCapacity {
        interface PathParams {
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
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

        type Response = $schemas.IoK8sApiStorageV1CsiStorageCapacityList;
      }

      namespace PostCreateNamespacedCsiStorageCapacity {
        type Body = $schemas.IoK8sApiStorageV1CsiStorageCapacity;

        interface PathParams {
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
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

        type Response = $schemas.IoK8sApiStorageV1CsiStorageCapacity;
      }

      namespace DeleteStorageClass {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface PathParams {
          /**
           * name of the StorageClass
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

        type Response = $schemas.IoK8sApiStorageV1StorageClass;
      }

      namespace GetReadStorageClass {
        interface PathParams {
          /**
           * name of the StorageClass
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiStorageV1StorageClass;
      }

      namespace PatchStorageClass {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the StorageClass
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

        type Response = $schemas.IoK8sApiStorageV1StorageClass;
      }

      namespace PutReplaceStorageClass {
        type Body = $schemas.IoK8sApiStorageV1StorageClass;

        interface PathParams {
          /**
           * name of the StorageClass
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

        type Response = $schemas.IoK8sApiStorageV1StorageClass;
      }

      namespace DeleteCollectionStorageClass {
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

      namespace GetListStorageClass {
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

        type Response = $schemas.IoK8sApiStorageV1StorageClassList;
      }

      namespace PostCreateStorageClass {
        type Body = $schemas.IoK8sApiStorageV1StorageClass;

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

        type Response = $schemas.IoK8sApiStorageV1StorageClass;
      }

      namespace GetReadVolumeAttachmentStatus {
        interface PathParams {
          /**
           * name of the VolumeAttachment
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachment;
      }

      namespace PatchVolumeAttachmentStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the VolumeAttachment
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

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachment;
      }

      namespace PutReplaceVolumeAttachmentStatus {
        type Body = $schemas.IoK8sApiStorageV1VolumeAttachment;

        interface PathParams {
          /**
           * name of the VolumeAttachment
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

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachment;
      }

      namespace DeleteVolumeAttachment {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface PathParams {
          /**
           * name of the VolumeAttachment
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

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachment;
      }

      namespace GetReadVolumeAttachment {
        interface PathParams {
          /**
           * name of the VolumeAttachment
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachment;
      }

      namespace PatchVolumeAttachment {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface PathParams {
          /**
           * name of the VolumeAttachment
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

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachment;
      }

      namespace PutReplaceVolumeAttachment {
        type Body = $schemas.IoK8sApiStorageV1VolumeAttachment;

        interface PathParams {
          /**
           * name of the VolumeAttachment
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

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachment;
      }

      namespace DeleteCollectionVolumeAttachment {
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

      namespace GetListVolumeAttachment {
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

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachmentList;
      }

      namespace PostCreateVolumeAttachment {
        type Body = $schemas.IoK8sApiStorageV1VolumeAttachment;

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

        type Response = $schemas.IoK8sApiStorageV1VolumeAttachment;
      }

      namespace GetWatchCsiDriver {
        interface PathParams {
          /**
           * name of the CSIDriver
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

      namespace GetWatchCsiDriverList {
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

      namespace GetWatchCsiNode {
        interface PathParams {
          /**
           * name of the CSINode
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

      namespace GetWatchCsiNodeList {
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

      namespace GetWatchCsiStorageCapacityListForAllNamespaces {
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

      namespace GetWatchNamespacedCsiStorageCapacity {
        interface PathParams {
          /**
           * name of the CSIStorageCapacity
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
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

      namespace GetWatchNamespacedCsiStorageCapacityList {
        interface PathParams {
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
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

      namespace GetWatchStorageClass {
        interface PathParams {
          /**
           * name of the StorageClass
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

      namespace GetWatchStorageClassList {
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

      namespace GetWatchVolumeAttachment {
        interface PathParams {
          /**
           * name of the VolumeAttachment
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

      namespace GetWatchVolumeAttachmentList {
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
