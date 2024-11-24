declare namespace API {
  namespace GithubV3Json {
    namespace CodesOfConduct {
      namespace GetConductCode {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          key: string;
        }

        type Response = $schemas.CodeOfConduct;
      }

      namespace GetAll {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.CodeOfConduct[];
      }
    }
  }
}
