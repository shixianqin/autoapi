declare namespace API {
  namespace TgV3Json {
    namespace Main {
      namespace PostAddStickerToSet {
        interface FormData {
          /**
           * One or more emoji corresponding to the sticker
           */
          emojis: string;
          /**
           * This object describes the position on faces where a mask should be placed by default.
           */
          mask_position?: $schemas.MaskPosition;
          /**
           * Sticker set name
           */
          name: string;
          /**
           * **PNG** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          png_sticker?: $schemas.InputFile | string;
          /**
           * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
           */
          tgs_sticker?: $schemas.InputFile;
          /**
           * User identifier of sticker set owner
           */
          user_id: number;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostAnswerCallbackQuery {
        interface Body {
          /**
           * The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
           */
          cache_time?: number;
          /**
           * Unique identifier for the query to be answered
           */
          callback_query_id: string;
          /**
           * If *true*, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to *false*.
           */
          show_alert?: boolean;
          /**
           * Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
           */
          text?: string;
          /**
           * URL that will be opened by the user's client. If you have created a [Game](https://core.telegram.org/bots/api/#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game — note that this will only work if the query comes from a [*callback\_game*](https://core.telegram.org/bots/api/#inlinekeyboardbutton) button.
           *
           * Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
           */
          url?: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostAnswerInlineQuery {
        interface Body {
          /**
           * The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
           * @default 300
           */
          cache_time?: number;
          /**
           * Unique identifier for the answered query
           */
          inline_query_id: string;
          /**
           * Pass *True*, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query
           */
          is_personal?: boolean;
          /**
           * Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
           */
          next_offset?: string;
          /**
           * A JSON-serialized array of results for the inline query
           */
          results: $schemas.InlineQueryResult[];
          /**
           * [Deep-linking](/bots#deep-linking) parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.
           *
           * *Example:* An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a [*switch\_inline*](https://core.telegram.org/bots/api/#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
           */
          switch_pm_parameter?: string;
          /**
           * If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter *switch\_pm\_parameter*
           */
          switch_pm_text?: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostAnswerPreCheckoutQuery {
        interface Body {
          /**
           * Required if *ok* is *False*. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
           */
          error_message?: string;
          /**
           * Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use *False* if there are any problems.
           */
          ok: boolean;
          /**
           * Unique identifier for the query to be answered
           */
          pre_checkout_query_id: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostAnswerShippingQuery {
        interface Body {
          /**
           * Required if *ok* is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
           */
          error_message?: string;
          /**
           * Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
           */
          ok: boolean;
          /**
           * Required if *ok* is True. A JSON-serialized array of available shipping options.
           */
          shipping_options?: $schemas.ShippingOption[];
          /**
           * Unique identifier for the query to be answered
           */
          shipping_query_id: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostClose {
        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostCopyMessage {
        interface Body {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
           */
          caption?: string;
          /**
           * List of special entities that appear in the new caption, which can be specified instead of *parse\_mode*
           */
          caption_entities?: $schemas.MessageEntity[];
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
           */
          from_chat_id: number | string;
          /**
           * Message identifier in the chat specified in *from\_chat\_id*
           */
          message_id: number;
          /**
           * Mode for parsing entities in the new caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a unique message identifier.
           */
          result: $schemas.MessageId;
        }
      }

      namespace PostCreateNewStickerSet {
        interface FormData {
          /**
           * Pass *True*, if a set of mask stickers should be created
           */
          contains_masks?: boolean;
          /**
           * One or more emoji corresponding to the sticker
           */
          emojis: string;
          /**
           * This object describes the position on faces where a mask should be placed by default.
           */
          mask_position?: $schemas.MaskPosition;
          /**
           * Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., *animals*). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“\_by\_<bot username>”*. *<bot\_username>* is case insensitive. 1-64 characters.
           */
          name: string;
          /**
           * **PNG** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          png_sticker?: $schemas.InputFile | string;
          /**
           * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
           */
          tgs_sticker?: $schemas.InputFile;
          /**
           * Sticker set title, 1-64 characters
           */
          title: string;
          /**
           * User identifier of created sticker set owner
           */
          user_id: number;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostDeleteChatPhoto {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostDeleteChatStickerSet {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostDeleteMessage {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Identifier of the message to delete
           */
          message_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostDeleteStickerFromSet {
        interface Body {
          /**
           * File identifier of the sticker
           */
          sticker: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostDeleteWebhook {
        interface Body {
          /**
           * Pass *True* to drop all pending updates
           */
          drop_pending_updates?: boolean;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostEditMessageCaption {
        interface Body {
          /**
           * New caption of the message, 0-1024 characters after entities parsing
           */
          caption?: string;
          /**
           * List of special entities that appear in the caption, which can be specified instead of *parse\_mode*
           */
          caption_entities?: $schemas.MessageEntity[];
          /**
           * Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id?: number | string;
          /**
           * Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message
           */
          inline_message_id?: string;
          /**
           * Required if *inline\_message\_id* is not specified. Identifier of the message to edit
           */
          message_id?: number;
          /**
           * Mode for parsing entities in the message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Message | boolean;
        }
      }

      namespace PostEditMessageLiveLocation {
        interface Body {
          /**
           * Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id?: number | string;
          /**
           * Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
           */
          heading?: number;
          /**
           * The radius of uncertainty for the location, measured in meters; 0-1500
           */
          horizontal_accuracy?: number;
          /**
           * Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message
           */
          inline_message_id?: string;
          /**
           * Latitude of new location
           */
          latitude: number;
          /**
           * Longitude of new location
           */
          longitude: number;
          /**
           * Required if *inline\_message\_id* is not specified. Identifier of the message to edit
           */
          message_id?: number;
          /**
           * Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
           */
          proximity_alert_radius?: number;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Message | boolean;
        }
      }

      namespace PostEditMessageMedia {
        interface FormData {
          /**
           * Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id?: number | string;
          /**
           * Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message
           */
          inline_message_id?: string;
          /**
           * This object represents the content of a media message to be sent. It should be one of
           */
          media: $schemas.InputMedia;
          /**
           * Required if *inline\_message\_id* is not specified. Identifier of the message to edit
           */
          message_id?: number;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Message | boolean;
        }
      }

      namespace PostEditMessageReplyMarkup {
        interface Body {
          /**
           * Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id?: number | string;
          /**
           * Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message
           */
          inline_message_id?: string;
          /**
           * Required if *inline\_message\_id* is not specified. Identifier of the message to edit
           */
          message_id?: number;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Message | boolean;
        }
      }

      namespace PostEditMessageText {
        interface Body {
          /**
           * Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id?: number | string;
          /**
           * Disables link previews for links in this message
           */
          disable_web_page_preview?: boolean;
          /**
           * List of special entities that appear in message text, which can be specified instead of *parse\_mode*
           */
          entities?: $schemas.MessageEntity[];
          /**
           * Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message
           */
          inline_message_id?: string;
          /**
           * Required if *inline\_message\_id* is not specified. Identifier of the message to edit
           */
          message_id?: number;
          /**
           * Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
          /**
           * New text of the message, 1-4096 characters after entities parsing
           */
          text: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Message | boolean;
        }
      }

      namespace PostExportChatInviteLink {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: string;
        }
      }

      namespace PostForwardMessage {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
           */
          from_chat_id: number | string;
          /**
           * Message identifier in the chat specified in *from\_chat\_id*
           */
          message_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostGetChatAdministrators {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.ChatMember[];
        }
      }

      namespace PostGetChatMember {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Unique identifier of the target user
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object contains information about one member of a chat.
           */
          result: $schemas.ChatMember;
        }
      }

      namespace PostGetChatMembersCount {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: number;
        }
      }

      namespace PostGetChat {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a chat.
           */
          result: $schemas.Chat;
        }
      }

      namespace PostGetFile {
        interface Body {
          /**
           * File identifier to get info about
           */
          file_id: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile).
           *
           * Maximum file size to download is 20 MB
           */
          result: $schemas.File;
        }
      }

      namespace PostGetGameHighScores {
        interface Body {
          /**
           * Required if *inline\_message\_id* is not specified. Unique identifier for the target chat
           */
          chat_id?: number;
          /**
           * Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message
           */
          inline_message_id?: string;
          /**
           * Required if *inline\_message\_id* is not specified. Identifier of the sent message
           */
          message_id?: number;
          /**
           * Target user id
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.GameHighScore[];
        }
      }

      namespace PostGetMe {
        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a Telegram user or bot.
           */
          result: $schemas.User;
        }
      }

      namespace PostGetMyCommands {
        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.BotCommand[];
        }
      }

      namespace PostGetStickerSet {
        interface Body {
          /**
           * Name of the sticker set
           */
          name: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a sticker set.
           */
          result: $schemas.StickerSet;
        }
      }

      namespace PostGetUpdates {
        interface Body {
          /**
           * A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited\_channel\_post”, “callback\_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api/#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
           *
           * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
           */
          allowed_updates?: string[];
          /**
           * Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
           * @default 100
           * @maximum 100
           * @minimum 1
           */
          limit?: number;
          /**
           * Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api/#getupdates) is called with an *offset* higher than its *update\_id*. The negative offset can be specified to retrieve updates starting from *-offset* update from the end of the updates queue. All previous updates will forgotten.
           */
          offset?: number;
          /**
           * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
           */
          timeout?: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Update[];
        }
      }

      namespace PostGetUserProfilePhotos {
        interface Body {
          /**
           * Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
           * @default 100
           * @maximum 100
           * @minimum 1
           */
          limit?: number;
          /**
           * Sequential number of the first photo to be returned. By default, all photos are returned.
           */
          offset?: number;
          /**
           * Unique identifier of the target user
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represent a user's profile pictures.
           */
          result: $schemas.UserProfilePhotos;
        }
      }

      namespace PostGetWebhookInfo {
        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * Contains information about the current status of a webhook.
           */
          result: $schemas.WebhookInfo;
        }
      }

      namespace PostKickChatMember {
        interface Body {
          /**
           * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever
           */
          until_date?: number;
          /**
           * Unique identifier of the target user
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostLeaveChat {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostLogOut {
        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostPinChatMessage {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Pass *True*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
           */
          disable_notification?: boolean;
          /**
           * Identifier of a message to pin
           */
          message_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostPromoteChatMember {
        interface Body {
          /**
           * Pass True, if the administrator can change chat title, photo and other settings
           */
          can_change_info?: boolean;
          /**
           * Pass True, if the administrator can delete messages of other users
           */
          can_delete_messages?: boolean;
          /**
           * Pass True, if the administrator can edit messages of other users and can pin messages, channels only
           */
          can_edit_messages?: boolean;
          /**
           * Pass True, if the administrator can invite new users to the chat
           */
          can_invite_users?: boolean;
          /**
           * Pass True, if the administrator can pin messages, supergroups only
           */
          can_pin_messages?: boolean;
          /**
           * Pass True, if the administrator can create channel posts, channels only
           */
          can_post_messages?: boolean;
          /**
           * Pass True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him)
           */
          can_promote_members?: boolean;
          /**
           * Pass True, if the administrator can restrict, ban or unban chat members
           */
          can_restrict_members?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Pass *True*, if the administrator's presence in the chat is hidden
           */
          is_anonymous?: boolean;
          /**
           * Unique identifier of the target user
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostRestrictChatMember {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
           */
          chat_id: number | string;
          /**
           * Describes actions that a non-administrator user is allowed to take in a chat.
           */
          permissions: $schemas.ChatPermissions;
          /**
           * Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
           */
          until_date?: number;
          /**
           * Unique identifier of the target user
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSendAnimation {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Animation to send. Pass a file\_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          animation: $schemas.InputFile | string;
          /**
           * Animation caption (may also be used when resending animation by *file\_id*), 0-1024 characters after entities parsing
           */
          caption?: string;
          /**
           * List of special entities that appear in the caption, which can be specified instead of *parse\_mode*
           */
          caption_entities?: $schemas.MessageEntity[];
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Duration of sent animation in seconds
           */
          duration?: number;
          /**
           * Animation height
           */
          height?: number;
          /**
           * Mode for parsing entities in the animation caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          thumb?: $schemas.InputFile | string;
          /**
           * Animation width
           */
          width?: number;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendAudio {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Audio file to send. Pass a file\_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          audio: $schemas.InputFile | string;
          /**
           * Audio caption, 0-1024 characters after entities parsing
           */
          caption?: string;
          /**
           * List of special entities that appear in the caption, which can be specified instead of *parse\_mode*
           */
          caption_entities?: $schemas.MessageEntity[];
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Duration of the audio in seconds
           */
          duration?: number;
          /**
           * Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * Performer
           */
          performer?: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          thumb?: $schemas.InputFile | string;
          /**
           * Track name
           */
          title?: string;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendChatAction {
        interface Body {
          /**
           * Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api/#sendmessage), *upload\_photo* for [photos](https://core.telegram.org/bots/api/#sendphoto), *record\_video* or *upload\_video* for [videos](https://core.telegram.org/bots/api/#sendvideo), *record\_voice* or *upload\_voice* for [voice notes](https://core.telegram.org/bots/api/#sendvoice), *upload\_document* for [general files](https://core.telegram.org/bots/api/#senddocument), *find\_location* for [location data](https://core.telegram.org/bots/api/#sendlocation), *record\_video\_note* or *upload\_video\_note* for [video notes](https://core.telegram.org/bots/api/#sendvideonote).
           */
          action: string;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSendContact {
        interface Body {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Contact's first name
           */
          first_name: string;
          /**
           * Contact's last name
           */
          last_name?: string;
          /**
           * Contact's phone number
           */
          phone_number: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes
           */
          vcard?: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendDice {
        interface Body {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Emoji on which the dice throw animation is based. Currently, must be one of “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />”, “<img alt="🎯" src="//telegram.org/img/emoji/40/F09F8EAF.png" height="20" width="20" />”, “<img alt="🏀" src="//telegram.org/img/emoji/40/F09F8F80.png" height="20" width="20" />”, “<img alt="⚽" src="//telegram.org/img/emoji/40/E29ABD.png" height="20" width="20" />”, or “<img alt="🎰" src="//telegram.org/img/emoji/40/F09F8EB0.png" height="20" width="20" />”. Dice can have values 1-6 for “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />” and “<img alt="🎯" src="//telegram.org/img/emoji/40/F09F8EAF.png" height="20" width="20" />”, values 1-5 for “<img alt="🏀" src="//telegram.org/img/emoji/40/F09F8F80.png" height="20" width="20" />” and “<img alt="⚽" src="//telegram.org/img/emoji/40/E29ABD.png" height="20" width="20" />”, and values 1-64 for “<img alt="🎰" src="//telegram.org/img/emoji/40/F09F8EB0.png" height="20" width="20" />”. Defaults to “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />”
           * @default 🎲
           */
          emoji?: "⚽" | "🎯" | "🎰" | "🎲" | "🏀";
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendDocument {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Document caption (may also be used when resending documents by *file\_id*), 0-1024 characters after entities parsing
           */
          caption?: string;
          /**
           * List of special entities that appear in the caption, which can be specified instead of *parse\_mode*
           */
          caption_entities?: $schemas.MessageEntity[];
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Disables automatic server-side content type detection for files uploaded using multipart/form-data
           */
          disable_content_type_detection?: boolean;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * File to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          document: $schemas.InputFile | string;
          /**
           * Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          thumb?: $schemas.InputFile | string;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendGame {
        interface Body {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat
           */
          chat_id: number;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather).
           */
          game_short_name: string;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendInvoice {
        interface Body {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target private chat
           */
          chat_id: number;
          /**
           * Three-letter ISO 4217 currency code, see [more on currencies](/bots/payments#supported-currencies)
           */
          currency: string;
          /**
           * Product description, 1-255 characters
           */
          description: string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Pass *True*, if the final price depends on the shipping method
           */
          is_flexible?: boolean;
          /**
           * Pass *True*, if you require the user's email address to complete the order
           */
          need_email?: boolean;
          /**
           * Pass *True*, if you require the user's full name to complete the order
           */
          need_name?: boolean;
          /**
           * Pass *True*, if you require the user's phone number to complete the order
           */
          need_phone_number?: boolean;
          /**
           * Pass *True*, if you require the user's shipping address to complete the order
           */
          need_shipping_address?: boolean;
          /**
           * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
           */
          payload: string;
          /**
           * Photo height
           */
          photo_height?: number;
          /**
           * Photo size
           */
          photo_size?: number;
          /**
           * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
           */
          photo_url?: string;
          /**
           * Photo width
           */
          photo_width?: number;
          /**
           * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
           */
          prices: $schemas.LabeledPrice[];
          /**
           * A JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
           */
          provider_data?: string;
          /**
           * Payments provider token, obtained via [Botfather](https://t.me/botfather)
           */
          provider_token: string;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Pass *True*, if user's email address should be sent to provider
           */
          send_email_to_provider?: boolean;
          /**
           * Pass *True*, if user's phone number should be sent to provider
           */
          send_phone_number_to_provider?: boolean;
          /**
           * Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter
           */
          start_parameter: string;
          /**
           * Product name, 1-32 characters
           */
          title: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendLocation {
        interface Body {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
           */
          heading?: number;
          /**
           * The radius of uncertainty for the location, measured in meters; 0-1500
           */
          horizontal_accuracy?: number;
          /**
           * Latitude of the location
           */
          latitude: number;
          /**
           * Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400.
           */
          live_period?: number;
          /**
           * Longitude of the location
           */
          longitude: number;
          /**
           * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
           */
          proximity_alert_radius?: number;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendMediaGroup {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * A JSON-serialized array describing messages to be sent, must include 2-10 items
           */
          media: any[];
          /**
           * If the messages are a reply, ID of the original message
           */
          reply_to_message_id?: number;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Message[];
        }
      }

      namespace PostSendMessage {
        interface Body {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Disables link previews for links in this message
           */
          disable_web_page_preview?: boolean;
          /**
           * List of special entities that appear in message text, which can be specified instead of *parse\_mode*
           */
          entities?: $schemas.MessageEntity[];
          /**
           * Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Text of the message to be sent, 1-4096 characters after entities parsing
           */
          text: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendPhoto {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Photo caption (may also be used when resending photos by *file\_id*), 0-1024 characters after entities parsing
           */
          caption?: string;
          /**
           * List of special entities that appear in the caption, which can be specified instead of *parse\_mode*
           */
          caption_entities?: $schemas.MessageEntity[];
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * Photo to send. Pass a file\_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          photo: $schemas.InputFile | string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendPoll {
        interface Body {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to *False*
           */
          allows_multiple_answers?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with *open\_period*.
           */
          close_date?: number;
          /**
           * 0-based identifier of the correct answer option, required for polls in quiz mode
           */
          correct_option_id?: number;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
           */
          explanation?: string;
          /**
           * List of special entities that appear in the poll explanation, which can be specified instead of *parse\_mode*
           */
          explanation_entities?: $schemas.MessageEntity[];
          /**
           * Mode for parsing entities in the explanation. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          explanation_parse_mode?: string;
          /**
           * True, if the poll needs to be anonymous, defaults to *True*
           */
          is_anonymous?: boolean;
          /**
           * Pass *True*, if the poll needs to be immediately closed. This can be useful for poll preview.
           */
          is_closed?: boolean;
          /**
           * Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with *close\_date*.
           */
          open_period?: number;
          /**
           * A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
           */
          options: string[];
          /**
           * Poll question, 1-300 characters
           */
          question: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Poll type, “quiz” or “regular”, defaults to “regular”
           */
          type?: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendSticker {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          sticker: $schemas.InputFile | string;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendVenue {
        interface Body {
          /**
           * Address of the venue
           */
          address: string;
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Foursquare identifier of the venue
           */
          foursquare_id?: string;
          /**
           * Foursquare type of the venue, if known. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.)
           */
          foursquare_type?: string;
          /**
           * Google Places identifier of the venue
           */
          google_place_id?: string;
          /**
           * Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)
           */
          google_place_type?: string;
          /**
           * Latitude of the venue
           */
          latitude: number;
          /**
           * Longitude of the venue
           */
          longitude: number;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Name of the venue
           */
          title: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendVideoNote {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Duration of sent video in seconds
           */
          duration?: number;
          /**
           * Video width and height, i.e. diameter of the video message
           */
          length?: number;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          thumb?: $schemas.InputFile | string;
          /**
           * Video note to send. Pass a file\_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files). Sending video notes by a URL is currently unsupported
           */
          video_note: $schemas.InputFile | string;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendVideo {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Video caption (may also be used when resending videos by *file\_id*), 0-1024 characters after entities parsing
           */
          caption?: string;
          /**
           * List of special entities that appear in the caption, which can be specified instead of *parse\_mode*
           */
          caption_entities?: $schemas.MessageEntity[];
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Duration of sent video in seconds
           */
          duration?: number;
          /**
           * Video height
           */
          height?: number;
          /**
           * Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Pass *True*, if the uploaded video is suitable for streaming
           */
          supports_streaming?: boolean;
          /**
           * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          thumb?: $schemas.InputFile | string;
          /**
           * Video to send. Pass a file\_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          video: $schemas.InputFile | string;
          /**
           * Video width
           */
          width?: number;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSendVoice {
        interface FormData {
          /**
           * Pass *True*, if the message should be sent even if the specified replied-to message is not found
           */
          allow_sending_without_reply?: boolean;
          /**
           * Voice message caption, 0-1024 characters after entities parsing
           */
          caption?: string;
          /**
           * List of special entities that appear in the caption, which can be specified instead of *parse\_mode*
           */
          caption_entities?: $schemas.MessageEntity[];
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
           */
          disable_notification?: boolean;
          /**
           * Duration of the voice message in seconds
           */
          duration?: number;
          /**
           * Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.
           */
          parse_mode?: string;
          /**
           * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
           */
          reply_markup?:
            | $schemas.InlineKeyboardMarkup
            | $schemas.ReplyKeyboardMarkup
            | $schemas.ReplyKeyboardRemove
            | $schemas.ForceReply;
          /**
           * If the message is a reply, ID of the original message
           */
          reply_to_message_id?: number;
          /**
           * Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
           */
          voice: $schemas.InputFile | string;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a message.
           */
          result: $schemas.Message;
        }
      }

      namespace PostSetChatAdministratorCustomTitle {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
           */
          chat_id: number | string;
          /**
           * New custom title for the administrator; 0-16 characters, emoji are not allowed
           */
          custom_title: string;
          /**
           * Unique identifier of the target user
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetChatDescription {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * New chat description, 0-255 characters
           */
          description?: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetChatPermissions {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
           */
          chat_id: number | string;
          /**
           * Describes actions that a non-administrator user is allowed to take in a chat.
           */
          permissions: $schemas.ChatPermissions;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetChatPhoto {
        interface FormData {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
           */
          photo: $schemas.InputFile;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetChatStickerSet {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
           */
          chat_id: number | string;
          /**
           * Name of the sticker set to be set as the group sticker set
           */
          sticker_set_name: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetChatTitle {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * New chat title, 1-255 characters
           */
          title: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetGameScore {
        interface Body {
          /**
           * Required if *inline\_message\_id* is not specified. Unique identifier for the target chat
           */
          chat_id?: number;
          /**
           * Pass True, if the game message should not be automatically edited to include the current scoreboard
           */
          disable_edit_message?: boolean;
          /**
           * Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
           */
          force?: boolean;
          /**
           * Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message
           */
          inline_message_id?: string;
          /**
           * Required if *inline\_message\_id* is not specified. Identifier of the sent message
           */
          message_id?: number;
          /**
           * New score, must be non-negative
           */
          score: number;
          /**
           * User identifier
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Message | boolean;
        }
      }

      namespace PostSetMyCommands {
        interface Body {
          /**
           * A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
           */
          commands: $schemas.BotCommand[];
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetPassportDataErrors {
        interface Body {
          /**
           * A JSON-serialized array describing the errors
           */
          errors: $schemas.PassportElementError[];
          /**
           * User identifier
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetStickerPositionInSet {
        interface Body {
          /**
           * New sticker position in the set, zero-based
           */
          position: number;
          /**
           * File identifier of the sticker
           */
          sticker: string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetStickerSetThumb {
        interface FormData {
          /**
           * Sticker set name
           */
          name: string;
          /**
           * A **PNG** image with the thumbnail, must be up to 128 kilobytes in size and have width and height exactly 100px, or a **TGS** animation with the thumbnail up to 32 kilobytes in size; see [](https://core.telegram.org/animated_stickers#technical-requirements)[https://core.telegram.org/animated\_stickers#technical-requirements](https://core.telegram.org/animated_stickers#technical-requirements) for animated sticker technical requirements. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files). Animated sticker set thumbnail can't be uploaded via HTTP URL.
           */
          thumb?: $schemas.InputFile | string;
          /**
           * User identifier of the sticker set owner
           */
          user_id: number;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostSetWebhook {
        interface FormData {
          /**
           * A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited\_channel\_post”, “callback\_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api/#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
           * Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
           */
          allowed_updates?: string[];
          /**
           * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
           */
          certificate?: $schemas.InputFile;
          /**
           * Pass *True* to drop all pending updates
           */
          drop_pending_updates?: boolean;
          /**
           * The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
           */
          ip_address?: string;
          /**
           * Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to *40*. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
           * @default 40
           */
          max_connections?: number;
          /**
           * HTTPS url to send updates to. Use an empty string to remove webhook integration
           */
          url: string;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostStopMessageLiveLocation {
        interface Body {
          /**
           * Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id?: number | string;
          /**
           * Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message
           */
          inline_message_id?: string;
          /**
           * Required if *inline\_message\_id* is not specified. Identifier of the message with live location to stop
           */
          message_id?: number;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          result: $schemas.Message | boolean;
        }
      }

      namespace PostStopPoll {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Identifier of the original message with the poll
           */
          message_id: number;
          /**
           * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
           */
          reply_markup?: $schemas.InlineKeyboardMarkup;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object contains information about a poll.
           */
          result: $schemas.Poll;
        }
      }

      namespace PostUnbanChatMember {
        interface Body {
          /**
           * Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`)
           */
          chat_id: number | string;
          /**
           * Do nothing if the user is not banned
           */
          only_if_banned?: boolean;
          /**
           * Unique identifier of the target user
           */
          user_id: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostUnpinAllChatMessages {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostUnpinChatMessage {
        interface Body {
          /**
           * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
           */
          chat_id: number | string;
          /**
           * Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
           */
          message_id?: number;
        }

        type FormData = Body;

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * @default true
           */
          result: boolean;
        }
      }

      namespace PostUploadStickerFile {
        interface FormData {
          /**
           * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
           */
          png_sticker: $schemas.InputFile;
          /**
           * User identifier of sticker file owner
           */
          user_id: number;
        }

        interface Response {
          /**
           * @default true
           */
          ok: boolean;
          /**
           * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile).
           *
           * Maximum file size to download is 20 MB
           */
          result: $schemas.File;
        }
      }
    }
  }
}
