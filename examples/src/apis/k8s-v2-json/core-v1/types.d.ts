declare namespace API {
  namespace K8sV2Json {
    namespace CoreV1 {
      namespace GetReadComponentStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ComponentStatus
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiCoreV1ComponentStatus;
      }

      namespace GetListComponentStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1ComponentStatusList;
      }

      namespace GetListConfigMapForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1ConfigMapList;
      }

      namespace GetListEndpointsForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1EndpointsList;
      }

      namespace GetListEventForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1EventList;
      }

      namespace GetApiResources {
        interface Headers {
          "Content-Type"?:
            | "application/json"
            | "application/yaml"
            | "application/vnd.kubernetes.protobuf"
            | string;
          [P: string]: any;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1ApiResourceList;
      }

      namespace GetListLimitRangeForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1LimitRangeList;
      }

      namespace PostCreateNamespacedBinding {
        type Body = $schemas.IoK8sApiCoreV1Binding;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1Binding;
      }

      namespace DeleteNamespacedConfigMap {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ConfigMap
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

      namespace GetReadNamespacedConfigMap {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ConfigMap
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

        type Response = $schemas.IoK8sApiCoreV1ConfigMap;
      }

      namespace PatchNamespacedConfigMap {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ConfigMap
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

        type Response = $schemas.IoK8sApiCoreV1ConfigMap;
      }

      namespace PutReplaceNamespacedConfigMap {
        type Body = $schemas.IoK8sApiCoreV1ConfigMap;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ConfigMap
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

        type Response = $schemas.IoK8sApiCoreV1ConfigMap;
      }

      namespace DeleteCollectionNamespacedConfigMap {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedConfigMap {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ConfigMapList;
      }

      namespace PostCreateNamespacedConfigMap {
        type Body = $schemas.IoK8sApiCoreV1ConfigMap;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ConfigMap;
      }

      namespace DeleteNamespacedEndpoints {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Endpoints
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

      namespace GetReadNamespacedEndpoints {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Endpoints
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

        type Response = $schemas.IoK8sApiCoreV1Endpoints;
      }

      namespace PatchNamespacedEndpoints {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Endpoints
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

        type Response = $schemas.IoK8sApiCoreV1Endpoints;
      }

      namespace PutReplaceNamespacedEndpoints {
        type Body = $schemas.IoK8sApiCoreV1Endpoints;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Endpoints
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

        type Response = $schemas.IoK8sApiCoreV1Endpoints;
      }

      namespace DeleteCollectionNamespacedEndpoints {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedEndpoints {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1EndpointsList;
      }

      namespace PostCreateNamespacedEndpoints {
        type Body = $schemas.IoK8sApiCoreV1Endpoints;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1Endpoints;
      }

      namespace DeleteNamespacedEvent {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Event
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

      namespace GetReadNamespacedEvent {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Event
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

        type Response = $schemas.IoK8sApiCoreV1Event;
      }

      namespace PatchNamespacedEvent {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Event
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

        type Response = $schemas.IoK8sApiCoreV1Event;
      }

      namespace PutReplaceNamespacedEvent {
        type Body = $schemas.IoK8sApiCoreV1Event;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Event
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

        type Response = $schemas.IoK8sApiCoreV1Event;
      }

      namespace DeleteCollectionNamespacedEvent {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedEvent {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1EventList;
      }

      namespace PostCreateNamespacedEvent {
        type Body = $schemas.IoK8sApiCoreV1Event;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1Event;
      }

      namespace DeleteNamespacedLimitRange {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the LimitRange
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

      namespace GetReadNamespacedLimitRange {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the LimitRange
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

        type Response = $schemas.IoK8sApiCoreV1LimitRange;
      }

      namespace PatchNamespacedLimitRange {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the LimitRange
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

        type Response = $schemas.IoK8sApiCoreV1LimitRange;
      }

      namespace PutReplaceNamespacedLimitRange {
        type Body = $schemas.IoK8sApiCoreV1LimitRange;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the LimitRange
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

        type Response = $schemas.IoK8sApiCoreV1LimitRange;
      }

      namespace DeleteCollectionNamespacedLimitRange {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedLimitRange {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1LimitRangeList;
      }

      namespace PostCreateNamespacedLimitRange {
        type Body = $schemas.IoK8sApiCoreV1LimitRange;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1LimitRange;
      }

      namespace GetReadNamespacedPersistentVolumeClaimStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolumeClaim
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;
      }

      namespace PatchNamespacedPersistentVolumeClaimStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolumeClaim
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;
      }

      namespace PutReplaceNamespacedPersistentVolumeClaimStatus {
        type Body = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolumeClaim
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;
      }

      namespace DeleteNamespacedPersistentVolumeClaim {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolumeClaim
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;
      }

      namespace GetReadNamespacedPersistentVolumeClaim {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolumeClaim
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;
      }

      namespace PatchNamespacedPersistentVolumeClaim {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolumeClaim
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;
      }

      namespace PutReplaceNamespacedPersistentVolumeClaim {
        type Body = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolumeClaim
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;
      }

      namespace DeleteCollectionNamespacedPersistentVolumeClaim {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedPersistentVolumeClaim {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaimList;
      }

      namespace PostCreateNamespacedPersistentVolumeClaim {
        type Body = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaim;
      }

      namespace GetConnectNamespacedPodAttach {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodAttachOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * The container in which to execute the command. Defaults to only container if there is only one container in the pod.
           */
          container?: string;
          /**
           * Stderr if true indicates that stderr is to be redirected for the attach call. Defaults to true.
           */
          stderr?: boolean;
          /**
           * Stdin if true, redirects the standard input stream of the pod for this call. Defaults to false.
           */
          stdin?: boolean;
          /**
           * Stdout if true indicates that stdout is to be redirected for the attach call. Defaults to true.
           */
          stdout?: boolean;
          /**
           * TTY if true indicates that a tty will be allocated for the attach call. This is passed through the container runtime so the tty is allocated on the worker node by the container runtime. Defaults to false.
           */
          tty?: boolean;
        }

        type Response = string;
      }

      namespace PostConnectNamespacedPodAttach {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodAttachOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * The container in which to execute the command. Defaults to only container if there is only one container in the pod.
           */
          container?: string;
          /**
           * Stderr if true indicates that stderr is to be redirected for the attach call. Defaults to true.
           */
          stderr?: boolean;
          /**
           * Stdin if true, redirects the standard input stream of the pod for this call. Defaults to false.
           */
          stdin?: boolean;
          /**
           * Stdout if true indicates that stdout is to be redirected for the attach call. Defaults to true.
           */
          stdout?: boolean;
          /**
           * TTY if true indicates that a tty will be allocated for the attach call. This is passed through the container runtime so the tty is allocated on the worker node by the container runtime. Defaults to false.
           */
          tty?: boolean;
        }

        type Response = string;
      }

      namespace PostCreateNamespacedPodBinding {
        type Body = $schemas.IoK8sApiCoreV1Binding;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Binding
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

        type Response = $schemas.IoK8sApiCoreV1Binding;
      }

      namespace GetReadNamespacedPodEphemeralcontainers {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace PatchNamespacedPodEphemeralcontainers {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace PutReplaceNamespacedPodEphemeralcontainers {
        type Body = $schemas.IoK8sApiCoreV1Pod;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace PostCreateNamespacedPodEviction {
        type Body = $schemas.IoK8sApiPolicyV1Eviction;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Eviction
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

        type Response = $schemas.IoK8sApiPolicyV1Eviction;
      }

      namespace GetConnectNamespacedPodExec {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodExecOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Command is the remote command to execute. argv array. Not executed within a shell.
           */
          command?: string;
          /**
           * Container in which to execute the command. Defaults to only container if there is only one container in the pod.
           */
          container?: string;
          /**
           * Redirect the standard error stream of the pod for this call.
           */
          stderr?: boolean;
          /**
           * Redirect the standard input stream of the pod for this call. Defaults to false.
           */
          stdin?: boolean;
          /**
           * Redirect the standard output stream of the pod for this call.
           */
          stdout?: boolean;
          /**
           * TTY if true indicates that a tty will be allocated for the exec call. Defaults to false.
           */
          tty?: boolean;
        }

        type Response = string;
      }

      namespace PostConnectNamespacedPodExec {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodExecOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Command is the remote command to execute. argv array. Not executed within a shell.
           */
          command?: string;
          /**
           * Container in which to execute the command. Defaults to only container if there is only one container in the pod.
           */
          container?: string;
          /**
           * Redirect the standard error stream of the pod for this call.
           */
          stderr?: boolean;
          /**
           * Redirect the standard input stream of the pod for this call. Defaults to false.
           */
          stdin?: boolean;
          /**
           * Redirect the standard output stream of the pod for this call.
           */
          stdout?: boolean;
          /**
           * TTY if true indicates that a tty will be allocated for the exec call. Defaults to false.
           */
          tty?: boolean;
        }

        type Response = string;
      }

      namespace GetReadNamespacedPodLog {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * The container for which to stream logs. Defaults to only container if there is one container in the pod.
           */
          container?: string;
          /**
           * Follow the log stream of the pod. Defaults to false.
           */
          follow?: boolean;
          /**
           * insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver's TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet).
           */
          insecureSkipTLSVerifyBackend?: boolean;
          /**
           * If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit.
           */
          limitBytes?: number;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
          /**
           * Return previous terminated container logs. Defaults to false.
           */
          previous?: boolean;
          /**
           * A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified.
           */
          sinceSeconds?: number;
          /**
           * If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime
           */
          tailLines?: number;
          /**
           * If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false.
           */
          timestamps?: boolean;
        }

        type Response = string;
      }

      namespace GetConnectNamespacedPodPortforward {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodPortForwardOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * List of ports to forward Required when using WebSockets
           */
          ports?: number;
        }

        type Response = string;
      }

      namespace PostConnectNamespacedPodPortforward {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodPortForwardOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * List of ports to forward Required when using WebSockets
           */
          ports?: number;
        }

        type Response = string;
      }

      namespace DeleteConnectNamespacedPodProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetConnectNamespacedPodProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace HeadConnectNamespacedPodProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace OptionsConnectNamespacedPodProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PatchConnectNamespacedPodProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PostConnectNamespacedPodProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PutConnectNamespacedPodProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace DeleteConnectNamespacedPodProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetConnectNamespacedPodProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace HeadConnectNamespacedPodProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace OptionsConnectNamespacedPodProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PatchConnectNamespacedPodProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PostConnectNamespacedPodProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PutConnectNamespacedPodProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to pod.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetReadNamespacedPodStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace PatchNamespacedPodStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace PutReplaceNamespacedPodStatus {
        type Body = $schemas.IoK8sApiCoreV1Pod;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace DeleteNamespacedPod {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace GetReadNamespacedPod {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace PatchNamespacedPod {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace PutReplaceNamespacedPod {
        type Body = $schemas.IoK8sApiCoreV1Pod;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace DeleteCollectionNamespacedPod {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedPod {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1PodList;
      }

      namespace PostCreateNamespacedPod {
        type Body = $schemas.IoK8sApiCoreV1Pod;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1Pod;
      }

      namespace DeleteNamespacedPodTemplate {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodTemplate
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

        type Response = $schemas.IoK8sApiCoreV1PodTemplate;
      }

      namespace GetReadNamespacedPodTemplate {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodTemplate
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

        type Response = $schemas.IoK8sApiCoreV1PodTemplate;
      }

      namespace PatchNamespacedPodTemplate {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodTemplate
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

        type Response = $schemas.IoK8sApiCoreV1PodTemplate;
      }

      namespace PutReplaceNamespacedPodTemplate {
        type Body = $schemas.IoK8sApiCoreV1PodTemplate;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodTemplate
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

        type Response = $schemas.IoK8sApiCoreV1PodTemplate;
      }

      namespace DeleteCollectionNamespacedPodTemplate {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedPodTemplate {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1PodTemplateList;
      }

      namespace PostCreateNamespacedPodTemplate {
        type Body = $schemas.IoK8sApiCoreV1PodTemplate;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1PodTemplate;
      }

      namespace GetReadNamespacedReplicationControllerScale {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Scale
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

        type Response = $schemas.IoK8sApiAutoscalingV1Scale;
      }

      namespace PatchNamespacedReplicationControllerScale {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Scale
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

        type Response = $schemas.IoK8sApiAutoscalingV1Scale;
      }

      namespace PutReplaceNamespacedReplicationControllerScale {
        type Body = $schemas.IoK8sApiAutoscalingV1Scale;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Scale
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

        type Response = $schemas.IoK8sApiAutoscalingV1Scale;
      }

      namespace GetReadNamespacedReplicationControllerStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ReplicationController
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

        type Response = $schemas.IoK8sApiCoreV1ReplicationController;
      }

      namespace PatchNamespacedReplicationControllerStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ReplicationController
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

        type Response = $schemas.IoK8sApiCoreV1ReplicationController;
      }

      namespace PutReplaceNamespacedReplicationControllerStatus {
        type Body = $schemas.IoK8sApiCoreV1ReplicationController;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ReplicationController
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

        type Response = $schemas.IoK8sApiCoreV1ReplicationController;
      }

      namespace DeleteNamespacedReplicationController {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ReplicationController
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

      namespace GetReadNamespacedReplicationController {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ReplicationController
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

        type Response = $schemas.IoK8sApiCoreV1ReplicationController;
      }

      namespace PatchNamespacedReplicationController {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ReplicationController
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

        type Response = $schemas.IoK8sApiCoreV1ReplicationController;
      }

      namespace PutReplaceNamespacedReplicationController {
        type Body = $schemas.IoK8sApiCoreV1ReplicationController;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ReplicationController
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

        type Response = $schemas.IoK8sApiCoreV1ReplicationController;
      }

      namespace DeleteCollectionNamespacedReplicationController {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedReplicationController {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ReplicationControllerList;
      }

      namespace PostCreateNamespacedReplicationController {
        type Body = $schemas.IoK8sApiCoreV1ReplicationController;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ReplicationController;
      }

      namespace GetReadNamespacedResourceQuotaStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ResourceQuota
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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuota;
      }

      namespace PatchNamespacedResourceQuotaStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ResourceQuota
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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuota;
      }

      namespace PutReplaceNamespacedResourceQuotaStatus {
        type Body = $schemas.IoK8sApiCoreV1ResourceQuota;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ResourceQuota
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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuota;
      }

      namespace DeleteNamespacedResourceQuota {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ResourceQuota
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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuota;
      }

      namespace GetReadNamespacedResourceQuota {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ResourceQuota
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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuota;
      }

      namespace PatchNamespacedResourceQuota {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ResourceQuota
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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuota;
      }

      namespace PutReplaceNamespacedResourceQuota {
        type Body = $schemas.IoK8sApiCoreV1ResourceQuota;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ResourceQuota
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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuota;
      }

      namespace DeleteCollectionNamespacedResourceQuota {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedResourceQuota {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuotaList;
      }

      namespace PostCreateNamespacedResourceQuota {
        type Body = $schemas.IoK8sApiCoreV1ResourceQuota;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuota;
      }

      namespace DeleteNamespacedSecret {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Secret
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

      namespace GetReadNamespacedSecret {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Secret
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

        type Response = $schemas.IoK8sApiCoreV1Secret;
      }

      namespace PatchNamespacedSecret {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Secret
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

        type Response = $schemas.IoK8sApiCoreV1Secret;
      }

      namespace PutReplaceNamespacedSecret {
        type Body = $schemas.IoK8sApiCoreV1Secret;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Secret
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

        type Response = $schemas.IoK8sApiCoreV1Secret;
      }

      namespace DeleteCollectionNamespacedSecret {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedSecret {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1SecretList;
      }

      namespace PostCreateNamespacedSecret {
        type Body = $schemas.IoK8sApiCoreV1Secret;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1Secret;
      }

      namespace PostCreateNamespacedServiceAccountToken {
        type Body = $schemas.IoK8sApiAuthenticationV1TokenRequest;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the TokenRequest
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

        type Response = $schemas.IoK8sApiAuthenticationV1TokenRequest;
      }

      namespace DeleteNamespacedServiceAccount {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceAccount
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

        type Response = $schemas.IoK8sApiCoreV1ServiceAccount;
      }

      namespace GetReadNamespacedServiceAccount {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceAccount
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

        type Response = $schemas.IoK8sApiCoreV1ServiceAccount;
      }

      namespace PatchNamespacedServiceAccount {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceAccount
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

        type Response = $schemas.IoK8sApiCoreV1ServiceAccount;
      }

      namespace PutReplaceNamespacedServiceAccount {
        type Body = $schemas.IoK8sApiCoreV1ServiceAccount;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceAccount
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

        type Response = $schemas.IoK8sApiCoreV1ServiceAccount;
      }

      namespace DeleteCollectionNamespacedServiceAccount {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedServiceAccount {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ServiceAccountList;
      }

      namespace PostCreateNamespacedServiceAccount {
        type Body = $schemas.IoK8sApiCoreV1ServiceAccount;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ServiceAccount;
      }

      namespace DeleteConnectNamespacedServiceProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetConnectNamespacedServiceProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace HeadConnectNamespacedServiceProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace OptionsConnectNamespacedServiceProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PatchConnectNamespacedServiceProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PostConnectNamespacedServiceProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PutConnectNamespacedServiceProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace DeleteConnectNamespacedServiceProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetConnectNamespacedServiceProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace HeadConnectNamespacedServiceProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace OptionsConnectNamespacedServiceProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PatchConnectNamespacedServiceProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PostConnectNamespacedServiceProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PutConnectNamespacedServiceProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceProxyOptions
           */
          name: string;
          /**
           * object name and auth scope, such as for teams and projects
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetReadNamespacedServiceStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Service
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

        type Response = $schemas.IoK8sApiCoreV1Service;
      }

      namespace PatchNamespacedServiceStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Service
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

        type Response = $schemas.IoK8sApiCoreV1Service;
      }

      namespace PutReplaceNamespacedServiceStatus {
        type Body = $schemas.IoK8sApiCoreV1Service;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Service
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

        type Response = $schemas.IoK8sApiCoreV1Service;
      }

      namespace DeleteNamespacedService {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Service
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

        type Response = $schemas.IoK8sApiCoreV1Service;
      }

      namespace GetReadNamespacedService {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Service
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

        type Response = $schemas.IoK8sApiCoreV1Service;
      }

      namespace PatchNamespacedService {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Service
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

        type Response = $schemas.IoK8sApiCoreV1Service;
      }

      namespace PutReplaceNamespacedService {
        type Body = $schemas.IoK8sApiCoreV1Service;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Service
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

        type Response = $schemas.IoK8sApiCoreV1Service;
      }

      namespace DeleteCollectionNamespacedService {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetListNamespacedService {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1ServiceList;
      }

      namespace PostCreateNamespacedService {
        type Body = $schemas.IoK8sApiCoreV1Service;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

        type Response = $schemas.IoK8sApiCoreV1Service;
      }

      namespace PutReplaceNamespaceFinalize {
        type Body = $schemas.IoK8sApiCoreV1Namespace;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
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

        type Response = $schemas.IoK8sApiCoreV1Namespace;
      }

      namespace GetReadNamespaceStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiCoreV1Namespace;
      }

      namespace PatchNamespaceStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
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

        type Response = $schemas.IoK8sApiCoreV1Namespace;
      }

      namespace PutReplaceNamespaceStatus {
        type Body = $schemas.IoK8sApiCoreV1Namespace;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
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

        type Response = $schemas.IoK8sApiCoreV1Namespace;
      }

      namespace DeleteNamespace {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
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

      namespace GetReadNamespace {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiCoreV1Namespace;
      }

      namespace PatchNamespace {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
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

        type Response = $schemas.IoK8sApiCoreV1Namespace;
      }

      namespace PutReplaceNamespace {
        type Body = $schemas.IoK8sApiCoreV1Namespace;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
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

        type Response = $schemas.IoK8sApiCoreV1Namespace;
      }

      namespace GetListNamespace {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1NamespaceList;
      }

      namespace PostCreateNamespace {
        type Body = $schemas.IoK8sApiCoreV1Namespace;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1Namespace;
      }

      namespace DeleteConnectNodeProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetConnectNodeProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace HeadConnectNodeProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace OptionsConnectNodeProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PatchConnectNodeProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PostConnectNodeProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PutConnectNodeProxyWithPath {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
          /**
           * path to the resource
           */
          path: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace DeleteConnectNodeProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetConnectNodeProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace HeadConnectNodeProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace OptionsConnectNodeProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PatchConnectNodeProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PostConnectNodeProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace PutConnectNodeProxy {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the NodeProxyOptions
           */
          name: string;
        }

        interface QueryParams {
          /**
           * Path is the URL path to use for the current proxy request to node.
           */
          path?: string;
        }

        type Response = string;
      }

      namespace GetReadNodeStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Node
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiCoreV1Node;
      }

      namespace PatchNodeStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Node
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

        type Response = $schemas.IoK8sApiCoreV1Node;
      }

      namespace PutReplaceNodeStatus {
        type Body = $schemas.IoK8sApiCoreV1Node;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Node
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

        type Response = $schemas.IoK8sApiCoreV1Node;
      }

      namespace DeleteNode {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Node
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

      namespace GetReadNode {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Node
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiCoreV1Node;
      }

      namespace PatchNode {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Node
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

        type Response = $schemas.IoK8sApiCoreV1Node;
      }

      namespace PutReplaceNode {
        type Body = $schemas.IoK8sApiCoreV1Node;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Node
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

        type Response = $schemas.IoK8sApiCoreV1Node;
      }

      namespace DeleteCollectionNode {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetListNode {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1NodeList;
      }

      namespace PostCreateNode {
        type Body = $schemas.IoK8sApiCoreV1Node;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1Node;
      }

      namespace GetListPersistentVolumeClaimForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeClaimList;
      }

      namespace GetReadPersistentVolumeStatus {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolume
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiCoreV1PersistentVolume;
      }

      namespace PatchPersistentVolumeStatus {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolume
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolume;
      }

      namespace PutReplacePersistentVolumeStatus {
        type Body = $schemas.IoK8sApiCoreV1PersistentVolume;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolume
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolume;
      }

      namespace DeletePersistentVolume {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolume
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolume;
      }

      namespace GetReadPersistentVolume {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolume
           */
          name: string;
        }

        interface QueryParams {
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiCoreV1PersistentVolume;
      }

      namespace PatchPersistentVolume {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1Patch;

        interface Headers {
          "Content-Type"?:
            | "application/json-patch+json"
            | "application/merge-patch+json"
            | "application/strategic-merge-patch+json"
            | "application/apply-patch+yaml"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolume
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolume;
      }

      namespace PutReplacePersistentVolume {
        type Body = $schemas.IoK8sApiCoreV1PersistentVolume;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolume
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolume;
      }

      namespace DeleteCollectionPersistentVolume {
        type Body = $schemas.IoK8sApimachineryPkgApisMetaV1DeleteOptions;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetListPersistentVolume {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolumeList;
      }

      namespace PostCreatePersistentVolume {
        type Body = $schemas.IoK8sApiCoreV1PersistentVolume;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1PersistentVolume;
      }

      namespace GetListPodForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1PodList;
      }

      namespace GetListPodTemplateForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1PodTemplateList;
      }

      namespace GetListReplicationControllerForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1ReplicationControllerList;
      }

      namespace GetListResourceQuotaForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1ResourceQuotaList;
      }

      namespace GetListSecretForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1SecretList;
      }

      namespace GetListServiceAccountForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1ServiceAccountList;
      }

      namespace GetListServiceForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

        type Response = $schemas.IoK8sApiCoreV1ServiceList;
      }

      namespace GetWatchConfigMapListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchEndpointsListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchEventListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchLimitRangeListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchNamespacedConfigMap {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ConfigMap
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

      namespace GetWatchNamespacedConfigMapList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedEndpoints {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Endpoints
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

      namespace GetWatchNamespacedEndpointsList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedEvent {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Event
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

      namespace GetWatchNamespacedEventList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedLimitRange {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the LimitRange
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

      namespace GetWatchNamespacedLimitRangeList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedPersistentVolumeClaim {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolumeClaim
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

      namespace GetWatchNamespacedPersistentVolumeClaimList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedPod {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Pod
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

      namespace GetWatchNamespacedPodList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedPodTemplate {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PodTemplate
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

      namespace GetWatchNamespacedPodTemplateList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedReplicationController {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ReplicationController
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

      namespace GetWatchNamespacedReplicationControllerList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedResourceQuota {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ResourceQuota
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

      namespace GetWatchNamespacedResourceQuotaList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedSecret {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Secret
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

      namespace GetWatchNamespacedSecretList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedServiceAccount {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the ServiceAccount
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

      namespace GetWatchNamespacedServiceAccountList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespacedService {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Service
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

      namespace GetWatchNamespacedServiceList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

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

      namespace GetWatchNamespace {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Namespace
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

      namespace GetWatchNamespaceList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchNode {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the Node
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

      namespace GetWatchNodeList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchPersistentVolumeClaimListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchPersistentVolume {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name of the PersistentVolume
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

      namespace GetWatchPersistentVolumeList {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchPodListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchPodTemplateListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchReplicationControllerListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchResourceQuotaListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchSecretListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchServiceAccountListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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

      namespace GetWatchServiceListForAllNamespaces {
        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
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
    }
  }
}
