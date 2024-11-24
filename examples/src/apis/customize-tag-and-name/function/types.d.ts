declare namespace API {
  namespace CustomizeTagAndName {
    namespace Function {
      namespace DeleteFunction {
        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the function that you are deleting, which you can get using <code>DescribeFunction</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are deleting.
           */
          Name: string;
        }
      }

      namespace PutUpdate {
        interface Body {
          /**
           * The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.
           * @format password
           * @maxLength 40960
           * @minLength 1
           */
          FunctionCode: string;
          /**
           * Contains configuration information about a CloudFront function.
           */
          FunctionConfig: {
            Comment?: $schemas.String;
            Runtime?: $schemas.FunctionRuntime;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The current version (<code>ETag</code> value) of the function that you are updating, which you can get using <code>DescribeFunction</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are updating.
           */
          Name: string;
        }

        type Response = $schemas.UpdateFunctionResult;
      }

      namespace GetDescribe {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are getting information about.
           */
          Name: string;
        }

        interface QueryParams {
          /**
           * The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
           */
          Stage?: "DEVELOPMENT" | "LIVE";
        }

        type Response = $schemas.DescribeFunctionResult;
      }

      namespace PostPublish {
        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the function that you are publishing, which you can get using <code>DescribeFunction</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are publishing.
           */
          Name: string;
        }

        type Response = $schemas.PublishFunctionResult;
      }

      namespace PostTest {
        interface Body {
          /**
           * The event object to test the function with. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.
           * @format password
           * @maxLength 40960
           */
          EventObject: string;
          /**
           * The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
           */
          Stage?: "DEVELOPMENT" | "LIVE";
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The current version (<code>ETag</code> value) of the function that you are testing, which you can get using <code>DescribeFunction</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are testing.
           */
          Name: string;
        }

        type Response = $schemas.TestFunctionResult;
      }

      namespace GetFunction {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function whose code you are getting.
           */
          Name: string;
        }

        interface QueryParams {
          /**
           * The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
           */
          Stage?: "DEVELOPMENT" | "LIVE";
        }

        type Response = $schemas.GetFunctionResult;
      }

      namespace GetListFunctions {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of functions that you want in the response.
           */
          MaxItems?: string;
          /**
           * An optional filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
           */
          Stage?: "DEVELOPMENT" | "LIVE";
        }

        type Response = $schemas.ListFunctionsResult;
      }

      namespace PostCreate {
        interface Body {
          /**
           * The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.
           * @format password
           * @maxLength 40960
           * @minLength 1
           */
          FunctionCode: string;
          /**
           * Contains configuration information about a CloudFront function.
           */
          FunctionConfig: {
            Comment?: $schemas.String;
            Runtime?: $schemas.FunctionRuntime;
          };
          /**
           * A name to identify the function.
           * @maxLength 64
           * @minLength 1
           */
          Name: string;
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateFunctionResult;
      }
    }
  }
}
