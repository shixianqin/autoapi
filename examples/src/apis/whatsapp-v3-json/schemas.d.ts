declare namespace API {
  namespace WhatsappV3Json {
    namespace $schemas {
      interface Address {
        /**
         * City name
         */
        city: string;
        /**
         * Full country name
         */
        country: string;
        /**
         * Two-letter country abbreviation
         */
        country_code: string;
        /**
         * State abbreviation
         */
        state: string;
        /**
         * Street number and name
         */
        street: string;
        /**
         * Standard Values: HOME, WORK
         */
        type: string;
        /**
         * ZIP code
         */
        zip: string;
      }

      interface ApplicationSettings {
        /**
         * Backoff delay for a failed callback in milliseconds
         * This setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.
         * @default 3000
         */
        callback_backoff_delay_ms?: string;
        /**
         * Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required.
         * @default true
         */
        callback_persist?: boolean;
        /**
         * Multiconnect: Interval of the Master node monitoring of Coreapp nodes in seconds
         * @default 5
         */
        heartbeat_interval?: number;
        /**
         * Maximum delay for a failed callback in milliseconds
         * @default 900000
         */
        max_callback_backoff_delay_ms?: string;
        media?: $schemas.Media;
        /**
         * Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages.
         */
        on_call_pager?: string;
        /**
         * When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted.
         * When messages are sent, they are stored in a local database. This database is used as the application's history. Since the business keeps its own history, you can specify whether you want message pass_through or not. Restart required.
         * @default true
         */
        pass_through?: boolean;
        /**
         * Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification.
         */
        sent_status?: boolean;
        /**
         * Multiconnect: Maximum amount of seconds a Master node waits for a Coreapp node to respond to a heartbeat before considering it unhealthy and starting the failover process.
         * @default 30
         */
        unhealthy_interval?: number;
        webhooks?: $schemas.Webhooks;
      }

      /**
       * The media object containing audio
       */
      type Audio = $schemas.AudioById | $schemas.AudioByProvider;

      interface AudioById {
        id: string;
      }

      interface AudioByProvider {
        link: string;
        provider: $schemas.Provider;
      }

      interface BackupSettings {
        /**
         * The data that has been backed up, encrypted for security.
         */
        data?: string;
      }

      interface BackupSettingsRequestBody {
        /**
         * Used to encrypt backup data for security
         */
        password: string;
      }

      /**
       * Save the data value as that will be used along with your password to restore the information.
       */
      interface BackupSettingsResponse {
        settings?: $schemas.BackupSettings;
      }

      interface Basic {
        password?: string;
        username?: string;
      }

      interface BusinessProfile {
        /**
         * Address of the business
         * Maximum of 256 characters
         */
        address: string;
        /**
         * Description of the business
         * Maximum of 256 characters
         */
        description: string;
        /**
         * Email address to contact the business
         * Maximum of 128 characters
         */
        email: string;
        /**
         * Industry of the business
         * Maximum of 128 characters
         */
        vertical: string;
        /**
         * URLs associated with business (e.g., website, Facebook page, Instagram)
         * Maximum of 2 websites with a maximum of 256 characters each
         */
        websites: string[];
      }

      interface BusinessSettings {
        business?: $schemas.BusinessSettingsBusiness;
      }

      interface BusinessSettingsBusiness {
        profile?: $schemas.BusinessProfile;
      }

      interface CheckContact {
        /**
         * The value you sent in the contacts field of the JSON request.
         */
        input?: string;
        /**
         * Status of the user.
         */
        status?: "invalid" | "processing" | "valid";
        /**
         * WhatsApp user identifier that can be used in other API calls. Only returned if the status is valid.
         */
        wa_id?: string;
      }

      interface CheckContactRequestBody {
        /**
         * Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).
         * @default no_wait
         */
        blocking?: "no_wait" | "wait";
        /**
         * Array of contact phone numbers. The numbers can be in any standard telephone number format.
         */
        contacts: string[];
      }

      type CheckContactResponse = $schemas.Response & {
        contacts?: $schemas.CheckContact[];
      };

      type Config = $schemas.ConfigBearer | $schemas.ConfigBasic;

      interface ConfigBasic {
        basic?: $schemas.Basic;
      }

      interface ConfigBearer {
        bearer: string;
      }

      interface Contact {
        /**
         * Full contact address(es)
         */
        addresses?: $schemas.Address[];
        /**
         * YYYY-MM-DD formatted string
         */
        birthday?: string;
        /**
         * Contact email address(es)
         */
        emails?: $schemas.Email[];
        ims?: string[];
        /**
         * Full contact name
         */
        name?: $schemas.Name;
        /**
         * Contact organization information
         */
        org?: $schemas.Org;
        /**
         * Contact phone number(s)
         */
        phones?: $schemas.Phone[];
        /**
         * Contact URL(s)
         */
        urls?: $schemas.Url[];
      }

      interface CreateGroupRequestBody {
        subject: string;
      }

      interface CreateUserRequestBody {
        /**
         * username
         */
        password: string;
        /**
         * password
         */
        username: string;
      }

      interface Currency {
        /**
         * @format int32
         */
        amount_1000: number;
        currency_code: string;
      }

      /**
       * Date/time by component
       */
      interface DateTimeComponent {
        /**
         * The day of month
         * @format int32
         */
        day_of_month?: number;
        /**
         * Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value.
         * @format int32
         */
        day_of_week?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
        /**
         * The hour
         * @format int32
         */
        hour?: number;
        /**
         * The minute
         * @format int32
         */
        minute?: number;
        /**
         * The month
         * @format int32
         */
        month?: number;
        /**
         * The year
         * @format int32
         */
        year?: number;
      }

      /**
       * The Whatsapp Business API Client will attempt to format the date/time based on a specified localization.
       */
      interface DateTimeObject {
        /**
         * Date/time by component
         */
        component?: $schemas.DateTimeComponent;
        /**
         * Date/time by Unix epoch
         */
        unix_epoch?: $schemas.DateTimeUnixEpoch;
      }

      /**
       * Date/time by Unix epoch
       */
      interface DateTimeUnixEpoch {
        /**
         * Epoch timestamp in seconds
         * @format int32
         */
        timestamp?: number;
      }

      type DetailedUserResponse = $schemas.Response & {
        users?: $schemas.DetailedUserResponseItem[];
      };

      interface DetailedUserResponseItem {
        ROLES?: $schemas.UserRole;
        username?: string;
      }

      /**
       * The media object containing a document
       */
      type Document = $schemas.DocumentById | $schemas.DocumentByProvider;

      interface DocumentById {
        caption: string;
        filename: string;
        id: string;
      }

      interface DocumentByProvider {
        caption: string;
        filename: string;
        link: string;
        provider: $schemas.Provider;
      }

      interface Email {
        email: string;
        type: string;
      }

      interface EnableTwoStepRequestBody {
        pin: string;
      }

      interface Error {
        /**
         * See the https://developers.facebook.com/docs/whatsapp/api/errors for more information.
         * @format int32
         */
        code?: number;
        /**
         * error detail
         */
        details?: string;
        /**
         * location for error detail
         */
        href?: string;
        /**
         * error title
         */
        title?: string;
      }

      type GetBusinessProfileResponse = $schemas.Response & {
        settings?: $schemas.BusinessSettings;
      };

      type GetMediaProvidersResponse = $schemas.Response & {
        settings?: $schemas.MediaProviderSettings;
      };

      interface GetProfileAboutResponse {
        settings?: $schemas.ProfileAboutSettings;
      }

      interface GetProfilePhotoResponse {
        settings?: $schemas.ProfilePhotoSettings;
      }

      interface Group {
        /**
         * timestamp
         * @format int32
         */
        creation_time?: number;
        id?: string;
      }

      interface GroupAdminRequestBody {
        /**
         * The WhatsApp IDs of the people to be added or removed as group admins
         */
        wa_ids: string[];
      }

      interface GroupInfo {
        /**
         * Group administrators
         * Lists IDs of the creator of the group and any administrators added
         */
        admins?: string[];
        /**
         * Group creation time
         * @format int32
         */
        creation_time?: number;
        /**
         * ID of the creator of this group
         */
        creator?: string;
        /**
         * Participants of the group
         * This is an array of all the IDs of the participants in the group. Initially, this will be the creator of the group.
         */
        participants?: string[];
        /**
         * Subject of the group
         */
        subject?: string;
      }

      interface GroupInvite {
        link?: string;
      }

      type GroupInviteResponse = $schemas.Response & {
        groups?: $schemas.GroupInvite[];
      };

      type GroupResponse = $schemas.Response & {
        groups?: $schemas.GroupInfo[];
      };

      type GroupsResponse = $schemas.Response & {
        groups?: $schemas.Group[];
      };

      /**
       * The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.
       */
      interface Hsm {
        /**
         * The element name that indicates which template to use within the namespace
         */
        element_name: string;
        language: $schemas.Language;
        /**
         * This field is an array of values to apply to variables in the template
         */
        localizable_params: $schemas.LocalizableParam[];
        /**
         * The namespace that will be used
         */
        namespace: string;
      }

      /**
       * The media object containing an image
       */
      type Image = $schemas.ImageById | $schemas.ImageByProvider;

      interface ImageById {
        caption: string;
        id: string;
      }

      interface ImageByProvider {
        caption: string;
        link: string;
        provider: $schemas.Provider;
      }

      interface Language {
        /**
         * The code of the language or locale to use — Accepts both language and language_locale formats (e.g., en and en_US).
         */
        code: string;
        /**
         * The language policy the message should follow
         */
        policy: "deterministic" | "fallback";
      }

      interface LocalizableParam {
        currency?: $schemas.Currency;
        /**
         * The Whatsapp Business API Client will attempt to format the date/time based on a specified localization.
         */
        date_time?: $schemas.DateTimeObject;
        /**
         * Default text if localization fails
         */
        default: string;
      }

      interface Location {
        /**
         * Address of the location. Only displayed if name is present.
         */
        address: string;
        /**
         * Latitude of the location
         */
        latitude: string;
        /**
         * Longitude of the location
         */
        longitude: string;
        /**
         * Name of the location
         */
        name: string;
      }

      interface LoginAdminRequestBody {
        new_password: string;
      }

      interface MarkMessageAsReadRequestBody {
        /**
         * @default read
         */
        status: string;
      }

      interface Media {
        /**
         * An array specifying which types of media to automatically download.
         */
        auto_download: Array<
          "audio" | "document" | "image." | "video" | "voice"
        >;
      }

      interface MediaProvider {
        config?: $schemas.Config;
        /**
         * The name for the provider
         */
        name?: string;
        /**
         * The type of provider
         */
        type?: string;
      }

      interface MediaProviderSettings {
        application?: $schemas.MediaProviderSettingsApplication;
      }

      interface MediaProviderSettingsApplication {
        media?: $schemas.MediaProviderSettingsApplicationMedia;
      }

      interface MediaProviderSettingsApplicationMedia {
        providers?: $schemas.MediaProvider[];
      }

      interface Message {
        id?: string;
      }

      type MessageResponse = $schemas.Response & {
        messages?: $schemas.Message[];
      };

      /**
       * type of the message
       */
      type MessageType =
        | "audio"
        | "contacts"
        | "document"
        | "hsm"
        | "image"
        | "location"
        | "text"
        | "unknown"
        | "video"
        | "voice";

      /**
       * Contains generic information such as WhatsApp Business API Client version.
       */
      interface Meta {
        api_status?: "deprecated" | "experimental" | "stable";
        version?: string;
      }

      /**
       * Full contact name
       */
      interface Name {
        /**
         * First name
         */
        first_name?: string;
        /**
         * Full name as it normally appears
         */
        formatted_name: string;
        /**
         * Last name
         */
        last_name?: string;
        /**
         * Name preffix
         */
        prefix?: string;
        /**
         * Name suffix
         */
        suffix?: string;
      }

      /**
       * Contact organization information
       */
      interface Org {
        /**
         * Name of the contact's company
         */
        company: string;
        /**
         * Name of the contact's department
         */
        department?: string;
        /**
         * Contact's business title
         */
        title?: string;
      }

      interface Phone {
        phone?: string;
        /**
         * Standard Values: CELL, MAIN, IPHONE, HOME, WORK
         */
        type?: string;
        /**
         * WhatsApp ID
         */
        wa_id?: string;
      }

      interface ProfileAbout {
        /**
         * Text to display in your profile's About section
         * The max length for the string is 139 characters.
         */
        text: string;
      }

      interface ProfileAboutSettings {
        profile?: $schemas.ProfileAboutSettingsProfile;
      }

      interface ProfileAboutSettingsProfile {
        about?: $schemas.ProfileAbout;
      }

      interface ProfilePhotoSettings {
        profile?: {
          photo?: {
            link?: string;
          };
        };
      }

      interface Provider {
        name: string;
      }

      interface RegisterAccountRequestBody {
        code: string;
      }

      interface RemoveGroupParticipantRequestBody {
        wa_ids: string[];
      }

      interface RequestCodeAccount {
        vname?: string;
      }

      interface RequestCodeRequestBody {
        /**
         * Numerical country code for the phone number you are registering
         */
        cc: string;
        /**
         * Base64-encoded Verified Name certificate
         */
        cert: string;
        /**
         * Method of receiving your registration code
         */
        method: "sms" | "voice";
        /**
         * Phone number you are registering, without the country code or plus symbol (+)
         */
        phone_number: string;
        /**
         * Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account.
         */
        pin?: string;
      }

      interface RequestCodeResponse {
        account?: $schemas.RequestCodeAccount[];
      }

      interface Response {
        /**
         * Only returned with a failed request. Contains an array of error objects that are present when there is an error.
         */
        errors?: $schemas.Error[];
        /**
         * Contains generic information such as WhatsApp Business API Client version.
         */
        meta?: $schemas.Meta;
      }

      interface RestoreSettingsRequestBody {
        /**
         * The data that was returned by the /v1/settings/backup API call
         */
        data: string;
        /**
         * The password you used in the /v1/settings/backup API call to encrypt the backup data
         */
        password: string;
      }

      interface SendMessageRequestBody {
        /**
         * The media object containing audio
         */
        audio?: $schemas.Audio;
        contacts?: $schemas.Contact[];
        /**
         * The media object containing a document
         */
        document?: $schemas.Document;
        /**
         * The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.
         */
        hsm?: $schemas.Hsm;
        /**
         * The media object containing an image
         */
        image?: $schemas.Image;
        location?: $schemas.Location;
        /**
         * Specifying preview_url in the request is optional when not including a URL in your message.
         * To include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://. For more information, see the Sending URLs in Text Messages section.
         */
        preview_url?: boolean;
        /**
         * Determines whether the recipient is an individual or a group
         * Specifying recipient_type in the request is optional when the value is individual.
         * However, recipient_type is required when using group. If sending a text message to a group, see the Sending Group Messages documentation.
         * @default individual
         */
        recipient_type?: "group" | "individual";
        text?: $schemas.Text;
        /**
         * When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.
         */
        to: string;
        ttl?: {};
        /**
         * type of the message
         * @default text
         */
        type?: $schemas.MessageType;
        /**
         * The media object containing a video
         */
        video?: $schemas.Video;
      }

      interface SetShardsRequestBody {
        cc: string;
        phone_number: string;
        pin: string;
        /**
         * @format int32
         */
        shards: "1" | "2" | "4" | "8" | "16" | "32";
      }

      interface Text {
        body: string;
      }

      interface UpdateGroupInfoRequestBody {
        subject: string;
      }

      interface UpdateUserRequestBody {
        /**
         * password
         */
        password: string;
      }

      interface UploadMedia {
        id?: string;
      }

      type UploadMediaResponse = $schemas.Response & {
        media?: $schemas.UploadMedia[];
      };

      /**
       * Standard Values: HOME, WORK
       */
      interface Url {
        /**
         * Standard Values: HOME, WORK
         */
        type?: string;
        /**
         * URL
         */
        url?: string;
      }

      type UserLoginResponse = $schemas.Response & {
        users?: $schemas.UserLoginResponseItem[];
      };

      interface UserLoginResponseItem {
        /**
         * Token expiration timestamp. By default, this is 7 days.
         * @format date-time
         */
        expires_after?: string;
        /**
         * Authentication token to be used for all other WhatsApp Business API calls. The token must be sent in the authorization header in the format:
         * Authorization: Bearer <authentication-token>
         */
        token?: string;
      }

      type UserResponse = $schemas.Response & {
        users?: $schemas.UserResponseItem[];
      };

      interface UserResponseItem {
        username?: string;
      }

      type UserRole = "ROLE_ADMIN" | "ROLE_USER";

      /**
       * The media object containing a video
       */
      type Video = $schemas.VideoById | $schemas.VideoByProvider;

      interface VideoById {
        caption: string;
        id: string;
      }

      interface VideoByProvider {
        caption: string;
        link: string;
        provider: $schemas.Provider;
      }

      interface Webhooks {
        /**
         * Configures the maximum number of inflight callback requests that are sent out. Can be set to 6 (default), 12, 18, or 24.
         * @default 6
         * @format int32
         */
        max_concurrent_requests?: "6" | "12" | "18" | "24";
        /**
         * Inbound and outbound notifications are routed to this URL. A HTTPS-based endpoint is required; HTTP will not work.
         */
        url?: string;
      }
    }
  }
}
