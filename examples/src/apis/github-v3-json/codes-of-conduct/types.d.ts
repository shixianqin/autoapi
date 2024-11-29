declare namespace API {
  namespace GithubV3Json {
    namespace CodesOfConduct {
      namespace GetConductCode {
        interface PathParams {
          key: string;
        }

        type Response = $schemas.CodeOfConduct;
      }

      namespace GetAll {
        type Response = $schemas.CodeOfConduct[];
      }
    }
  }
}
