declare namespace API {
  namespace CustomizeFilter {
    namespace $schemas {
      interface ActionsCacheUsageOrgEnterprise {
        /**
         * The count of active caches across all repositories of an enterprise or an organization.
         */
        total_active_caches_count: number;
        /**
         * The total size in bytes of all active cache items across all repositories of an enterprise or an organization.
         */
        total_active_caches_size_in_bytes: number;
      }

      interface Feed {
        _links: {
          /**
           * Hypermedia Link with Type
           */
          current_user?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          current_user_actor?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          current_user_organization?: $schemas.LinkWithType;
          current_user_organizations?: $schemas.LinkWithType[];
          /**
           * Hypermedia Link with Type
           */
          current_user_public?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          repository_discussions?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          repository_discussions_category?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          security_advisories?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          timeline: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          user: $schemas.LinkWithType;
        };
        current_user_actor_url?: string;
        current_user_organization_url?: string;
        current_user_organization_urls?: string[];
        current_user_public_url?: string;
        current_user_url?: string;
        /**
         * A feed of discussions for a given repository and category.
         */
        repository_discussions_category_url?: string;
        /**
         * A feed of discussions for a given repository.
         */
        repository_discussions_url?: string;
        security_advisories_url?: string;
        timeline_url: string;
        user_url: string;
      }

      /**
       * Hypermedia Link with Type
       */
      interface LinkWithType {
        href: string;
        type: string;
      }
    }
  }
}
