declare namespace API {
  namespace GithubV3Json {
    namespace Packages {
      namespace PostRestorePackageForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        }

        interface QueryParams {
          /**
           * package token
           */
          token?: string;
        }
      }

      namespace PostRestorePackageVersionForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
        }
      }

      namespace DeletePackageVersionForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
        }
      }

      namespace GetPackageVersionForOrganization {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
        }

        type Response = $schemas.PackageVersion;
      }

      namespace GetAllPackageVersionsForPackageOwnedByOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * The state of the package, either active or deleted.
           * @default active
           */
          state?: "active" | "deleted";
        }

        type Response = $schemas.PackageVersion[];
      }

      namespace DeletePackageForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        }
      }

      namespace GetPackageForOrganization {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        }

        type Response = $schemas.Package;
      }

      namespace GetListForOrganization {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        interface QueryParams {
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * The selected visibility of the packages.  This parameter is optional and only filters an existing result set.
           *
           * The `internal` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems `internal` is synonymous with `private`.
           * For the list of GitHub Packages registries that support granular permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
           */
          visibility?: "internal" | "private" | "public";
        }

        type Response = $schemas.Package[];
      }

      namespace PostRestorePackageForAuthenticatedUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        }

        interface QueryParams {
          /**
           * package token
           */
          token?: string;
        }
      }

      namespace PostRestorePackageVersionForAuthenticatedUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
        }
      }

      namespace DeletePackageVersionForAuthenticatedUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
        }
      }

      namespace GetPackageVersionForAuthenticatedUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
        }

        type Response = $schemas.PackageVersion;
      }

      namespace GetAllPackageVersionsForPackageOwnedByAuthenticatedUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * The state of the package, either active or deleted.
           * @default active
           */
          state?: "active" | "deleted";
        }

        type Response = $schemas.PackageVersion[];
      }

      namespace DeletePackageForAuthenticatedUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        }
      }

      namespace GetPackageForAuthenticatedUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        }

        type Response = $schemas.Package;
      }

      namespace GetListForAuthenticatedUser {
        interface QueryParams {
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * The selected visibility of the packages.  This parameter is optional and only filters an existing result set.
           *
           * The `internal` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems `internal` is synonymous with `private`.
           * For the list of GitHub Packages registries that support granular permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
           */
          visibility?: "internal" | "private" | "public";
        }

        type Response = $schemas.Package[];
      }

      namespace PostRestorePackageForUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        interface QueryParams {
          /**
           * package token
           */
          token?: string;
        }
      }

      namespace PostRestorePackageVersionForUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace DeletePackageVersionForUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetPackageVersionForUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * Unique identifier of the package version.
           */
          package_version_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.PackageVersion;
      }

      namespace GetAllPackageVersionsForPackageOwnedByUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.PackageVersion[];
      }

      namespace DeletePackageForUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetPackageForUser {
        interface PathParams {
          /**
           * The name of the package.
           */
          package_name: string;
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.Package;
      }

      namespace GetListForUser {
        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        interface QueryParams {
          /**
           * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
           */
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
          /**
           * The selected visibility of the packages.  This parameter is optional and only filters an existing result set.
           *
           * The `internal` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems `internal` is synonymous with `private`.
           * For the list of GitHub Packages registries that support granular permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
           */
          visibility?: "internal" | "private" | "public";
        }

        type Response = $schemas.Package[];
      }
    }
  }
}
