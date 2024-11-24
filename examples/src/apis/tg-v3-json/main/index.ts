import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Use this method to add a new sticker to a set created by the bot. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns *True* on success.
 * @path `/addStickerToSet`
 * @docs https://core.telegram.org/bots/api/#addstickertoset
 */
export function postAddStickerToSet(options: {
  headers?: API.TgV3Json.Main.PostAddStickerToSet.Headers;
  formData: API.TgV3Json.Main.PostAddStickerToSet.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostAddStickerToSet.Response>(
    "post",
    "/addStickerToSet",
    options,
  );
}

/**
 * Use this method to send answers to callback queries sent from [inline keyboards](/bots#inline-keyboards-and-on-the-fly-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, *True* is returned.
 *
 * Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
 * @path `/answerCallbackQuery`
 * @docs https://core.telegram.org/bots/api/#answercallbackquery
 */
export function postAnswerCallbackQuery(options: {
  headers?: API.TgV3Json.Main.PostAnswerCallbackQuery.Headers;
  formData?: API.TgV3Json.Main.PostAnswerCallbackQuery.FormData;
  body?: API.TgV3Json.Main.PostAnswerCallbackQuery.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostAnswerCallbackQuery.Response>(
    "post",
    "/answerCallbackQuery",
    options,
  );
}

/**
 * Use this method to send answers to an inline query. On success, *True* is returned.
 * No more than **50** results per query are allowed.
 * @path `/answerInlineQuery`
 * @docs https://core.telegram.org/bots/api/#answerinlinequery
 */
export function postAnswerInlineQuery(options: {
  headers?: API.TgV3Json.Main.PostAnswerInlineQuery.Headers;
  formData?: API.TgV3Json.Main.PostAnswerInlineQuery.FormData;
  body?: API.TgV3Json.Main.PostAnswerInlineQuery.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostAnswerInlineQuery.Response>(
    "post",
    "/answerInlineQuery",
    options,
  );
}

/**
 * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api/#update) with the field *pre\_checkout\_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 * @path `/answerPreCheckoutQuery`
 * @docs https://core.telegram.org/bots/api/#answerprecheckoutquery
 */
export function postAnswerPreCheckoutQuery(options: {
  headers?: API.TgV3Json.Main.PostAnswerPreCheckoutQuery.Headers;
  formData?: API.TgV3Json.Main.PostAnswerPreCheckoutQuery.FormData;
  body?: API.TgV3Json.Main.PostAnswerPreCheckoutQuery.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostAnswerPreCheckoutQuery.Response>(
    "post",
    "/answerPreCheckoutQuery",
    options,
  );
}

/**
 * If you sent an invoice requesting a shipping address and the parameter *is\_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api/#update) with a *shipping\_query* field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 * @path `/answerShippingQuery`
 * @docs https://core.telegram.org/bots/api/#answershippingquery
 */
export function postAnswerShippingQuery(options: {
  headers?: API.TgV3Json.Main.PostAnswerShippingQuery.Headers;
  formData?: API.TgV3Json.Main.PostAnswerShippingQuery.FormData;
  body?: API.TgV3Json.Main.PostAnswerShippingQuery.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostAnswerShippingQuery.Response>(
    "post",
    "/answerShippingQuery",
    options,
  );
}

/**
 * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns *True* on success. Requires no parameters.
 * @path `/close`
 * @docs https://core.telegram.org/bots/api/#close
 */
export function postClose(options?: {
  headers?: API.TgV3Json.Main.PostClose.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostClose.Response>(
    "post",
    "/close",
    options || {},
  );
}

/**
 * Use this method to copy messages of any kind. The method is analogous to the method [forwardMessages](https://core.telegram.org/bots/api/#forwardmessages), but the copied message doesn't have a link to the original message. Returns the [MessageId](https://core.telegram.org/bots/api/#messageid) of the sent message on success.
 * @path `/copyMessage`
 * @docs https://core.telegram.org/bots/api/#copymessage
 */
export function postCopyMessage(options: {
  headers?: API.TgV3Json.Main.PostCopyMessage.Headers;
  formData?: API.TgV3Json.Main.PostCopyMessage.FormData;
  body?: API.TgV3Json.Main.PostCopyMessage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostCopyMessage.Response>(
    "post",
    "/copyMessage",
    options,
  );
}

/**
 * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Returns *True* on success.
 * @path `/createNewStickerSet`
 * @docs https://core.telegram.org/bots/api/#createnewstickerset
 */
export function postCreateNewStickerSet(options: {
  headers?: API.TgV3Json.Main.PostCreateNewStickerSet.Headers;
  formData: API.TgV3Json.Main.PostCreateNewStickerSet.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostCreateNewStickerSet.Response>(
    "post",
    "/createNewStickerSet",
    options,
  );
}

/**
 * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
 * @path `/deleteChatPhoto`
 * @docs https://core.telegram.org/bots/api/#deletechatphoto
 */
export function postDeleteChatPhoto(options: {
  headers?: API.TgV3Json.Main.PostDeleteChatPhoto.Headers;
  formData?: API.TgV3Json.Main.PostDeleteChatPhoto.FormData;
  body?: API.TgV3Json.Main.PostDeleteChatPhoto.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostDeleteChatPhoto.Response>(
    "post",
    "/deleteChatPhoto",
    options,
  );
}

/**
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.
 * @path `/deleteChatStickerSet`
 * @docs https://core.telegram.org/bots/api/#deletechatstickerset
 */
export function postDeleteChatStickerSet(options: {
  headers?: API.TgV3Json.Main.PostDeleteChatStickerSet.Headers;
  formData?: API.TgV3Json.Main.PostDeleteChatStickerSet.FormData;
  body?: API.TgV3Json.Main.PostDeleteChatStickerSet.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostDeleteChatStickerSet.Response>(
    "post",
    "/deleteChatStickerSet",
    options,
  );
}

/**
 * Use this method to delete a message, including service messages, with the following limitations:
 * \- A message can only be deleted if it was sent less than 48 hours ago.
 * \- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
 * \- Bots can delete outgoing messages in private chats, groups, and supergroups.
 * \- Bots can delete incoming messages in private chats.
 * \- Bots granted *can\_post\_messages* permissions can delete outgoing messages in channels.
 * \- If the bot is an administrator of a group, it can delete any message there.
 * \- If the bot has *can\_delete\_messages* permission in a supergroup or a channel, it can delete any message there.
 * Returns *True* on success.
 * @path `/deleteMessage`
 * @docs https://core.telegram.org/bots/api/#deletemessage
 */
export function postDeleteMessage(options: {
  headers?: API.TgV3Json.Main.PostDeleteMessage.Headers;
  formData?: API.TgV3Json.Main.PostDeleteMessage.FormData;
  body?: API.TgV3Json.Main.PostDeleteMessage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostDeleteMessage.Response>(
    "post",
    "/deleteMessage",
    options,
  );
}

/**
 * Use this method to delete a sticker from a set created by the bot. Returns *True* on success.
 * @path `/deleteStickerFromSet`
 * @docs https://core.telegram.org/bots/api/#deletestickerfromset
 */
export function postDeleteStickerFromSet(options: {
  headers?: API.TgV3Json.Main.PostDeleteStickerFromSet.Headers;
  formData?: API.TgV3Json.Main.PostDeleteStickerFromSet.FormData;
  body?: API.TgV3Json.Main.PostDeleteStickerFromSet.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostDeleteStickerFromSet.Response>(
    "post",
    "/deleteStickerFromSet",
    options,
  );
}

/**
 * Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api/#getupdates). Returns *True* on success.
 * @path `/deleteWebhook`
 * @docs https://core.telegram.org/bots/api/#deletewebhook
 */
export function postDeleteWebhook(options: {
  headers?: API.TgV3Json.Main.PostDeleteWebhook.Headers;
  formData?: API.TgV3Json.Main.PostDeleteWebhook.FormData;
  body?: API.TgV3Json.Main.PostDeleteWebhook.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostDeleteWebhook.Response>(
    "post",
    "/deleteWebhook",
    options,
  );
}

/**
 * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
 * @path `/editMessageCaption`
 * @docs https://core.telegram.org/bots/api/#editmessagecaption
 */
export function postEditMessageCaption(options: {
  headers?: API.TgV3Json.Main.PostEditMessageCaption.Headers;
  formData?: API.TgV3Json.Main.PostEditMessageCaption.FormData;
  body?: API.TgV3Json.Main.PostEditMessageCaption.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostEditMessageCaption.Response>(
    "post",
    "/editMessageCaption",
    options,
  );
}

/**
 * Use this method to edit live location messages. A location can be edited until its *live\_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api/#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
 * @path `/editMessageLiveLocation`
 * @docs https://core.telegram.org/bots/api/#editmessagelivelocation
 */
export function postEditMessageLiveLocation(options: {
  headers?: API.TgV3Json.Main.PostEditMessageLiveLocation.Headers;
  formData?: API.TgV3Json.Main.PostEditMessageLiveLocation.FormData;
  body?: API.TgV3Json.Main.PostEditMessageLiveLocation.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostEditMessageLiveLocation.Response>(
    "post",
    "/editMessageLiveLocation",
    options,
  );
}

/**
 * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
 * @path `/editMessageMedia`
 * @docs https://core.telegram.org/bots/api/#editmessagemedia
 */
export function postEditMessageMedia(options: {
  headers?: API.TgV3Json.Main.PostEditMessageMedia.Headers;
  formData: API.TgV3Json.Main.PostEditMessageMedia.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostEditMessageMedia.Response>(
    "post",
    "/editMessageMedia",
    options,
  );
}

/**
 * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
 * @path `/editMessageReplyMarkup`
 * @docs https://core.telegram.org/bots/api/#editmessagereplymarkup
 */
export function postEditMessageReplyMarkup(options: {
  headers?: API.TgV3Json.Main.PostEditMessageReplyMarkup.Headers;
  formData?: API.TgV3Json.Main.PostEditMessageReplyMarkup.FormData;
  body?: API.TgV3Json.Main.PostEditMessageReplyMarkup.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostEditMessageReplyMarkup.Response>(
    "post",
    "/editMessageReplyMarkup",
    options,
  );
}

/**
 * Use this method to edit text and [game](https://core.telegram.org/bots/api/#games) messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
 * @path `/editMessageText`
 * @docs https://core.telegram.org/bots/api/#editmessagetext
 */
export function postEditMessageText(options: {
  headers?: API.TgV3Json.Main.PostEditMessageText.Headers;
  formData?: API.TgV3Json.Main.PostEditMessageText.FormData;
  body?: API.TgV3Json.Main.PostEditMessageText.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostEditMessageText.Response>(
    "post",
    "/editMessageText",
    options,
  );
}

/**
 * Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success.
 * @path `/exportChatInviteLink`
 * @docs https://core.telegram.org/bots/api/#exportchatinvitelink
 */
export function postExportChatInviteLink(options: {
  headers?: API.TgV3Json.Main.PostExportChatInviteLink.Headers;
  formData?: API.TgV3Json.Main.PostExportChatInviteLink.FormData;
  body?: API.TgV3Json.Main.PostExportChatInviteLink.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostExportChatInviteLink.Response>(
    "post",
    "/exportChatInviteLink",
    options,
  );
}

/**
 * Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/forwardMessage`
 * @docs https://core.telegram.org/bots/api/#forwardmessage
 */
export function postForwardMessage(options: {
  headers?: API.TgV3Json.Main.PostForwardMessage.Headers;
  formData?: API.TgV3Json.Main.PostForwardMessage.FormData;
  body?: API.TgV3Json.Main.PostForwardMessage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostForwardMessage.Response>(
    "post",
    "/forwardMessage",
    options,
  );
}

/**
 * Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
 * @path `/getChatAdministrators`
 * @docs https://core.telegram.org/bots/api/#getchatadministrators
 */
export function postGetChatAdministrators(options: {
  headers?: API.TgV3Json.Main.PostGetChatAdministrators.Headers;
  formData?: API.TgV3Json.Main.PostGetChatAdministrators.FormData;
  body?: API.TgV3Json.Main.PostGetChatAdministrators.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetChatAdministrators.Response>(
    "post",
    "/getChatAdministrators",
    options,
  );
}

/**
 * Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api/#chatmember) object on success.
 * @path `/getChatMember`
 * @docs https://core.telegram.org/bots/api/#getchatmember
 */
export function postGetChatMember(options: {
  headers?: API.TgV3Json.Main.PostGetChatMember.Headers;
  formData?: API.TgV3Json.Main.PostGetChatMember.FormData;
  body?: API.TgV3Json.Main.PostGetChatMember.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetChatMember.Response>(
    "post",
    "/getChatMember",
    options,
  );
}

/**
 * Use this method to get the number of members in a chat. Returns *Int* on success.
 * @path `/getChatMembersCount`
 * @docs https://core.telegram.org/bots/api/#getchatmemberscount
 */
export function postGetChatMembersCount(options: {
  headers?: API.TgV3Json.Main.PostGetChatMembersCount.Headers;
  formData?: API.TgV3Json.Main.PostGetChatMembersCount.FormData;
  body?: API.TgV3Json.Main.PostGetChatMembersCount.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetChatMembersCount.Response>(
    "post",
    "/getChatMembersCount",
    options,
  );
}

/**
 * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api/#chat) object on success.
 * @path `/getChat`
 * @docs https://core.telegram.org/bots/api/#getchat
 */
export function postGetChat(options: {
  headers?: API.TgV3Json.Main.PostGetChat.Headers;
  formData?: API.TgV3Json.Main.PostGetChat.FormData;
  body?: API.TgV3Json.Main.PostGetChat.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetChat.Response>(
    "post",
    "/getChat",
    options,
  );
}

/**
 * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api/#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile) again.
 * @path `/getFile`
 * @docs https://core.telegram.org/bots/api/#getfile
 */
export function postGetFile(options: {
  headers?: API.TgV3Json.Main.PostGetFile.Headers;
  formData?: API.TgV3Json.Main.PostGetFile.FormData;
  body?: API.TgV3Json.Main.PostGetFile.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetFile.Response>(
    "post",
    "/getFile",
    options,
  );
}

/**
 * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api/#gamehighscore) objects.
 *
 * This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.
 * @path `/getGameHighScores`
 * @docs https://core.telegram.org/bots/api/#getgamehighscores
 */
export function postGetGameHighScores(options: {
  headers?: API.TgV3Json.Main.PostGetGameHighScores.Headers;
  formData?: API.TgV3Json.Main.PostGetGameHighScores.FormData;
  body?: API.TgV3Json.Main.PostGetGameHighScores.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetGameHighScores.Response>(
    "post",
    "/getGameHighScores",
    options,
  );
}

/**
 * A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api/#user) object.
 * @path `/getMe`
 * @docs https://core.telegram.org/bots/api/#getme
 */
export function postGetMe(options?: {
  headers?: API.TgV3Json.Main.PostGetMe.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetMe.Response>(
    "post",
    "/getMe",
    options || {},
  );
}

/**
 * Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of [BotCommand](https://core.telegram.org/bots/api/#botcommand) on success.
 * @path `/getMyCommands`
 * @docs https://core.telegram.org/bots/api/#getmycommands
 */
export function postGetMyCommands(options?: {
  headers?: API.TgV3Json.Main.PostGetMyCommands.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetMyCommands.Response>(
    "post",
    "/getMyCommands",
    options || {},
  );
}

/**
 * Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api/#stickerset) object is returned.
 * @path `/getStickerSet`
 * @docs https://core.telegram.org/bots/api/#getstickerset
 */
export function postGetStickerSet(options: {
  headers?: API.TgV3Json.Main.PostGetStickerSet.Headers;
  formData?: API.TgV3Json.Main.PostGetStickerSet.FormData;
  body?: API.TgV3Json.Main.PostGetStickerSet.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetStickerSet.Response>(
    "post",
    "/getStickerSet",
    options,
  );
}

/**
 * Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api/#update) objects is returned.
 * @path `/getUpdates`
 * @docs https://core.telegram.org/bots/api/#getupdates
 */
export function postGetUpdates(options: {
  headers?: API.TgV3Json.Main.PostGetUpdates.Headers;
  formData?: API.TgV3Json.Main.PostGetUpdates.FormData;
  body?: API.TgV3Json.Main.PostGetUpdates.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetUpdates.Response>(
    "post",
    "/getUpdates",
    options,
  );
}

/**
 * Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api/#userprofilephotos) object.
 * @path `/getUserProfilePhotos`
 * @docs https://core.telegram.org/bots/api/#getuserprofilephotos
 */
export function postGetUserProfilePhotos(options: {
  headers?: API.TgV3Json.Main.PostGetUserProfilePhotos.Headers;
  formData?: API.TgV3Json.Main.PostGetUserProfilePhotos.FormData;
  body?: API.TgV3Json.Main.PostGetUserProfilePhotos.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetUserProfilePhotos.Response>(
    "post",
    "/getUserProfilePhotos",
    options,
  );
}

/**
 * Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api/#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api/#getupdates), will return an object with the *url* field empty.
 * @path `/getWebhookInfo`
 * @docs https://core.telegram.org/bots/api/#getwebhookinfo
 */
export function postGetWebhookInfo(options?: {
  headers?: API.TgV3Json.Main.PostGetWebhookInfo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostGetWebhookInfo.Response>(
    "post",
    "/getWebhookInfo",
    options || {},
  );
}

/**
 * Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api/#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
 * @path `/kickChatMember`
 * @docs https://core.telegram.org/bots/api/#kickchatmember
 */
export function postKickChatMember(options: {
  headers?: API.TgV3Json.Main.PostKickChatMember.Headers;
  formData?: API.TgV3Json.Main.PostKickChatMember.FormData;
  body?: API.TgV3Json.Main.PostKickChatMember.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostKickChatMember.Response>(
    "post",
    "/kickChatMember",
    options,
  );
}

/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success.
 * @path `/leaveChat`
 * @docs https://core.telegram.org/bots/api/#leavechat
 */
export function postLeaveChat(options: {
  headers?: API.TgV3Json.Main.PostLeaveChat.Headers;
  formData?: API.TgV3Json.Main.PostLeaveChat.FormData;
  body?: API.TgV3Json.Main.PostLeaveChat.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostLeaveChat.Response>(
    "post",
    "/leaveChat",
    options,
  );
}

/**
 * Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns *True* on success. Requires no parameters.
 * @path `/logOut`
 * @docs https://core.telegram.org/bots/api/#logout
 */
export function postLogOut(options?: {
  headers?: API.TgV3Json.Main.PostLogOut.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostLogOut.Response>(
    "post",
    "/logOut",
    options || {},
  );
}

/**
 * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.
 * @path `/pinChatMessage`
 * @docs https://core.telegram.org/bots/api/#pinchatmessage
 */
export function postPinChatMessage(options: {
  headers?: API.TgV3Json.Main.PostPinChatMessage.Headers;
  formData?: API.TgV3Json.Main.PostPinChatMessage.FormData;
  body?: API.TgV3Json.Main.PostPinChatMessage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostPinChatMessage.Response>(
    "post",
    "/pinChatMessage",
    options,
  );
}

/**
 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass *False* for all boolean parameters to demote a user. Returns *True* on success.
 * @path `/promoteChatMember`
 * @docs https://core.telegram.org/bots/api/#promotechatmember
 */
export function postPromoteChatMember(options: {
  headers?: API.TgV3Json.Main.PostPromoteChatMember.Headers;
  formData?: API.TgV3Json.Main.PostPromoteChatMember.FormData;
  body?: API.TgV3Json.Main.PostPromoteChatMember.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostPromoteChatMember.Response>(
    "post",
    "/promoteChatMember",
    options,
  );
}

/**
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all permissions to lift restrictions from a user. Returns *True* on success.
 * @path `/restrictChatMember`
 * @docs https://core.telegram.org/bots/api/#restrictchatmember
 */
export function postRestrictChatMember(options: {
  headers?: API.TgV3Json.Main.PostRestrictChatMember.Headers;
  formData?: API.TgV3Json.Main.PostRestrictChatMember.FormData;
  body?: API.TgV3Json.Main.PostRestrictChatMember.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostRestrictChatMember.Response>(
    "post",
    "/restrictChatMember",
    options,
  );
}

/**
 * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
 * @path `/sendAnimation`
 * @docs https://core.telegram.org/bots/api/#sendanimation
 */
export function postSendAnimation(options: {
  headers?: API.TgV3Json.Main.PostSendAnimation.Headers;
  formData: API.TgV3Json.Main.PostSendAnimation.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendAnimation.Response>(
    "post",
    "/sendAnimation",
    options,
  );
}

/**
 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
 *
 * For sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api/#sendvoice) method instead.
 * @path `/sendAudio`
 * @docs https://core.telegram.org/bots/api/#sendaudio
 */
export function postSendAudio(options: {
  headers?: API.TgV3Json.Main.PostSendAudio.Headers;
  formData: API.TgV3Json.Main.PostSendAudio.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendAudio.Response>(
    "post",
    "/sendAudio",
    options,
  );
}

/**
 * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns *True* on success.
 *
 * Example: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api/#sendchataction) with *action* = *upload\_photo*. The user will see a “sending photo” status for the bot.
 *
 * We only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.
 * @path `/sendChatAction`
 * @docs https://core.telegram.org/bots/api/#sendchataction
 */
export function postSendChatAction(options: {
  headers?: API.TgV3Json.Main.PostSendChatAction.Headers;
  formData?: API.TgV3Json.Main.PostSendChatAction.FormData;
  body?: API.TgV3Json.Main.PostSendChatAction.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendChatAction.Response>(
    "post",
    "/sendChatAction",
    options,
  );
}

/**
 * Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendContact`
 * @docs https://core.telegram.org/bots/api/#sendcontact
 */
export function postSendContact(options: {
  headers?: API.TgV3Json.Main.PostSendContact.Headers;
  formData?: API.TgV3Json.Main.PostSendContact.FormData;
  body?: API.TgV3Json.Main.PostSendContact.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendContact.Response>(
    "post",
    "/sendContact",
    options,
  );
}

/**
 * Use this method to send an animated emoji that will display a random value. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendDice`
 * @docs https://core.telegram.org/bots/api/#senddice
 */
export function postSendDice(options: {
  headers?: API.TgV3Json.Main.PostSendDice.Headers;
  formData?: API.TgV3Json.Main.PostSendDice.FormData;
  body?: API.TgV3Json.Main.PostSendDice.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendDice.Response>(
    "post",
    "/sendDice",
    options,
  );
}

/**
 * Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 * @path `/sendDocument`
 * @docs https://core.telegram.org/bots/api/#senddocument
 */
export function postSendDocument(options: {
  headers?: API.TgV3Json.Main.PostSendDocument.Headers;
  formData: API.TgV3Json.Main.PostSendDocument.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendDocument.Response>(
    "post",
    "/sendDocument",
    options,
  );
}

/**
 * Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendGame`
 * @docs https://core.telegram.org/bots/api/#sendgame
 */
export function postSendGame(options: {
  headers?: API.TgV3Json.Main.PostSendGame.Headers;
  formData?: API.TgV3Json.Main.PostSendGame.FormData;
  body?: API.TgV3Json.Main.PostSendGame.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendGame.Response>(
    "post",
    "/sendGame",
    options,
  );
}

/**
 * Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendInvoice`
 * @docs https://core.telegram.org/bots/api/#sendinvoice
 */
export function postSendInvoice(options: {
  headers?: API.TgV3Json.Main.PostSendInvoice.Headers;
  formData?: API.TgV3Json.Main.PostSendInvoice.FormData;
  body?: API.TgV3Json.Main.PostSendInvoice.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendInvoice.Response>(
    "post",
    "/sendInvoice",
    options,
  );
}

/**
 * Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendLocation`
 * @docs https://core.telegram.org/bots/api/#sendlocation
 */
export function postSendLocation(options: {
  headers?: API.TgV3Json.Main.PostSendLocation.Headers;
  formData?: API.TgV3Json.Main.PostSendLocation.FormData;
  body?: API.TgV3Json.Main.PostSendLocation.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendLocation.Response>(
    "post",
    "/sendLocation",
    options,
  );
}

/**
 * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Messages](https://core.telegram.org/bots/api/#message) that were sent is returned.
 * @path `/sendMediaGroup`
 * @docs https://core.telegram.org/bots/api/#sendmediagroup
 */
export function postSendMediaGroup(options: {
  headers?: API.TgV3Json.Main.PostSendMediaGroup.Headers;
  formData: API.TgV3Json.Main.PostSendMediaGroup.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendMediaGroup.Response>(
    "post",
    "/sendMediaGroup",
    options,
  );
}

/**
 * Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendMessage`
 * @docs https://core.telegram.org/bots/api/#sendmessage
 */
export function postSendMessage(options: {
  headers?: API.TgV3Json.Main.PostSendMessage.Headers;
  formData?: API.TgV3Json.Main.PostSendMessage.FormData;
  body?: API.TgV3Json.Main.PostSendMessage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendMessage.Response>(
    "post",
    "/sendMessage",
    options,
  );
}

/**
 * Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendPhoto`
 * @docs https://core.telegram.org/bots/api/#sendphoto
 */
export function postSendPhoto(options: {
  headers?: API.TgV3Json.Main.PostSendPhoto.Headers;
  formData: API.TgV3Json.Main.PostSendPhoto.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendPhoto.Response>(
    "post",
    "/sendPhoto",
    options,
  );
}

/**
 * Use this method to send a native poll. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendPoll`
 * @docs https://core.telegram.org/bots/api/#sendpoll
 */
export function postSendPoll(options: {
  headers?: API.TgV3Json.Main.PostSendPoll.Headers;
  formData?: API.TgV3Json.Main.PostSendPoll.FormData;
  body?: API.TgV3Json.Main.PostSendPoll.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendPoll.Response>(
    "post",
    "/sendPoll",
    options,
  );
}

/**
 * Use this method to send static .WEBP or [animated](https://telegram.org/blog/animated-stickers) .TGS stickers. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendSticker`
 * @docs https://core.telegram.org/bots/api/#sendsticker
 */
export function postSendSticker(options: {
  headers?: API.TgV3Json.Main.PostSendSticker.Headers;
  formData: API.TgV3Json.Main.PostSendSticker.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendSticker.Response>(
    "post",
    "/sendSticker",
    options,
  );
}

/**
 * Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendVenue`
 * @docs https://core.telegram.org/bots/api/#sendvenue
 */
export function postSendVenue(options: {
  headers?: API.TgV3Json.Main.PostSendVenue.Headers;
  formData?: API.TgV3Json.Main.PostSendVenue.FormData;
  body?: API.TgV3Json.Main.PostSendVenue.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendVenue.Response>(
    "post",
    "/sendVenue",
    options,
  );
}

/**
 * As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
 * @path `/sendVideoNote`
 * @docs https://core.telegram.org/bots/api/#sendvideonote
 */
export function postSendVideoNote(options: {
  headers?: API.TgV3Json.Main.PostSendVideoNote.Headers;
  formData: API.TgV3Json.Main.PostSendVideoNote.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendVideoNote.Response>(
    "post",
    "/sendVideoNote",
    options,
  );
}

/**
 * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
 * @path `/sendVideo`
 * @docs https://core.telegram.org/bots/api/#sendvideo
 */
export function postSendVideo(options: {
  headers?: API.TgV3Json.Main.PostSendVideo.Headers;
  formData: API.TgV3Json.Main.PostSendVideo.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendVideo.Response>(
    "post",
    "/sendVideo",
    options,
  );
}

/**
 * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as [Audio](https://core.telegram.org/bots/api/#audio) or [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
 * @path `/sendVoice`
 * @docs https://core.telegram.org/bots/api/#sendvoice
 */
export function postSendVoice(options: {
  headers?: API.TgV3Json.Main.PostSendVoice.Headers;
  formData: API.TgV3Json.Main.PostSendVoice.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSendVoice.Response>(
    "post",
    "/sendVoice",
    options,
  );
}

/**
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns *True* on success.
 * @path `/setChatAdministratorCustomTitle`
 * @docs https://core.telegram.org/bots/api/#setchatadministratorcustomtitle
 */
export function postSetChatAdministratorCustomTitle(options: {
  headers?: API.TgV3Json.Main.PostSetChatAdministratorCustomTitle.Headers;
  formData?: API.TgV3Json.Main.PostSetChatAdministratorCustomTitle.FormData;
  body?: API.TgV3Json.Main.PostSetChatAdministratorCustomTitle.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetChatAdministratorCustomTitle.Response>(
    "post",
    "/setChatAdministratorCustomTitle",
    options,
  );
}

/**
 * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
 * @path `/setChatDescription`
 * @docs https://core.telegram.org/bots/api/#setchatdescription
 */
export function postSetChatDescription(options: {
  headers?: API.TgV3Json.Main.PostSetChatDescription.Headers;
  formData?: API.TgV3Json.Main.PostSetChatDescription.FormData;
  body?: API.TgV3Json.Main.PostSetChatDescription.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetChatDescription.Response>(
    "post",
    "/setChatDescription",
    options,
  );
}

/**
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can\_restrict\_members* admin rights. Returns *True* on success.
 * @path `/setChatPermissions`
 * @docs https://core.telegram.org/bots/api/#setchatpermissions
 */
export function postSetChatPermissions(options: {
  headers?: API.TgV3Json.Main.PostSetChatPermissions.Headers;
  formData?: API.TgV3Json.Main.PostSetChatPermissions.FormData;
  body?: API.TgV3Json.Main.PostSetChatPermissions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetChatPermissions.Response>(
    "post",
    "/setChatPermissions",
    options,
  );
}

/**
 * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
 * @path `/setChatPhoto`
 * @docs https://core.telegram.org/bots/api/#setchatphoto
 */
export function postSetChatPhoto(options: {
  headers?: API.TgV3Json.Main.PostSetChatPhoto.Headers;
  formData: API.TgV3Json.Main.PostSetChatPhoto.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetChatPhoto.Response>(
    "post",
    "/setChatPhoto",
    options,
  );
}

/**
 * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.
 * @path `/setChatStickerSet`
 * @docs https://core.telegram.org/bots/api/#setchatstickerset
 */
export function postSetChatStickerSet(options: {
  headers?: API.TgV3Json.Main.PostSetChatStickerSet.Headers;
  formData?: API.TgV3Json.Main.PostSetChatStickerSet.FormData;
  body?: API.TgV3Json.Main.PostSetChatStickerSet.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetChatStickerSet.Response>(
    "post",
    "/setChatStickerSet",
    options,
  );
}

/**
 * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
 * @path `/setChatTitle`
 * @docs https://core.telegram.org/bots/api/#setchattitle
 */
export function postSetChatTitle(options: {
  headers?: API.TgV3Json.Main.PostSetChatTitle.Headers;
  formData?: API.TgV3Json.Main.PostSetChatTitle.FormData;
  body?: API.TgV3Json.Main.PostSetChatTitle.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetChatTitle.Response>(
    "post",
    "/setChatTitle",
    options,
  );
}

/**
 * Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api/#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*.
 * @path `/setGameScore`
 * @docs https://core.telegram.org/bots/api/#setgamescore
 */
export function postSetGameScore(options: {
  headers?: API.TgV3Json.Main.PostSetGameScore.Headers;
  formData?: API.TgV3Json.Main.PostSetGameScore.FormData;
  body?: API.TgV3Json.Main.PostSetGameScore.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetGameScore.Response>(
    "post",
    "/setGameScore",
    options,
  );
}

/**
 * Use this method to change the list of the bot's commands. Returns *True* on success.
 * @path `/setMyCommands`
 * @docs https://core.telegram.org/bots/api/#setmycommands
 */
export function postSetMyCommands(options: {
  headers?: API.TgV3Json.Main.PostSetMyCommands.Headers;
  formData?: API.TgV3Json.Main.PostSetMyCommands.FormData;
  body?: API.TgV3Json.Main.PostSetMyCommands.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetMyCommands.Response>(
    "post",
    "/setMyCommands",
    options,
  );
}

/**
 * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns *True* on success.
 *
 * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
 * @path `/setPassportDataErrors`
 * @docs https://core.telegram.org/bots/api/#setpassportdataerrors
 */
export function postSetPassportDataErrors(options: {
  headers?: API.TgV3Json.Main.PostSetPassportDataErrors.Headers;
  formData?: API.TgV3Json.Main.PostSetPassportDataErrors.FormData;
  body?: API.TgV3Json.Main.PostSetPassportDataErrors.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetPassportDataErrors.Response>(
    "post",
    "/setPassportDataErrors",
    options,
  );
}

/**
 * Use this method to move a sticker in a set created by the bot to a specific position. Returns *True* on success.
 * @path `/setStickerPositionInSet`
 * @docs https://core.telegram.org/bots/api/#setstickerpositioninset
 */
export function postSetStickerPositionInSet(options: {
  headers?: API.TgV3Json.Main.PostSetStickerPositionInSet.Headers;
  formData?: API.TgV3Json.Main.PostSetStickerPositionInSet.FormData;
  body?: API.TgV3Json.Main.PostSetStickerPositionInSet.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetStickerPositionInSet.Response>(
    "post",
    "/setStickerPositionInSet",
    options,
  );
}

/**
 * Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns *True* on success.
 * @path `/setStickerSetThumb`
 * @docs https://core.telegram.org/bots/api/#setstickersetthumb
 */
export function postSetStickerSetThumb(options: {
  headers?: API.TgV3Json.Main.PostSetStickerSetThumb.Headers;
  formData: API.TgV3Json.Main.PostSetStickerSetThumb.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetStickerSetThumb.Response>(
    "post",
    "/setStickerSetThumb",
    options,
  );
}

/**
 * Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized [Update](https://core.telegram.org/bots/api/#update). In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns *True* on success.
 *
 * If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot's token, you can be pretty sure it's us.
 * @path `/setWebhook`
 * @docs https://core.telegram.org/bots/api/#setwebhook
 */
export function postSetWebhook(options: {
  headers?: API.TgV3Json.Main.PostSetWebhook.Headers;
  formData: API.TgV3Json.Main.PostSetWebhook.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostSetWebhook.Response>(
    "post",
    "/setWebhook",
    options,
  );
}

/**
 * Use this method to stop updating a live location message before *live\_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
 * @path `/stopMessageLiveLocation`
 * @docs https://core.telegram.org/bots/api/#stopmessagelivelocation
 */
export function postStopMessageLiveLocation(options: {
  headers?: API.TgV3Json.Main.PostStopMessageLiveLocation.Headers;
  formData?: API.TgV3Json.Main.PostStopMessageLiveLocation.FormData;
  body?: API.TgV3Json.Main.PostStopMessageLiveLocation.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostStopMessageLiveLocation.Response>(
    "post",
    "/stopMessageLiveLocation",
    options,
  );
}

/**
 * Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api/#poll) with the final results is returned.
 * @path `/stopPoll`
 * @docs https://core.telegram.org/bots/api/#stoppoll
 */
export function postStopPoll(options: {
  headers?: API.TgV3Json.Main.PostStopPoll.Headers;
  formData?: API.TgV3Json.Main.PostStopPoll.FormData;
  body?: API.TgV3Json.Main.PostStopPoll.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostStopPoll.Response>(
    "post",
    "/stopPoll",
    options,
  );
}

/**
 * Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be **removed** from the chat. If you don't want this, use the parameter *only\_if\_banned*. Returns *True* on success.
 * @path `/unbanChatMember`
 * @docs https://core.telegram.org/bots/api/#unbanchatmember
 */
export function postUnbanChatMember(options: {
  headers?: API.TgV3Json.Main.PostUnbanChatMember.Headers;
  formData?: API.TgV3Json.Main.PostUnbanChatMember.FormData;
  body?: API.TgV3Json.Main.PostUnbanChatMember.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostUnbanChatMember.Response>(
    "post",
    "/unbanChatMember",
    options,
  );
}

/**
 * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.
 * @path `/unpinAllChatMessages`
 * @docs https://core.telegram.org/bots/api/#unpinallchatmessages
 */
export function postUnpinAllChatMessages(options: {
  headers?: API.TgV3Json.Main.PostUnpinAllChatMessages.Headers;
  formData?: API.TgV3Json.Main.PostUnpinAllChatMessages.FormData;
  body?: API.TgV3Json.Main.PostUnpinAllChatMessages.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostUnpinAllChatMessages.Response>(
    "post",
    "/unpinAllChatMessages",
    options,
  );
}

/**
 * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.
 * @path `/unpinChatMessage`
 * @docs https://core.telegram.org/bots/api/#unpinchatmessage
 */
export function postUnpinChatMessage(options: {
  headers?: API.TgV3Json.Main.PostUnpinChatMessage.Headers;
  formData?: API.TgV3Json.Main.PostUnpinChatMessage.FormData;
  body?: API.TgV3Json.Main.PostUnpinChatMessage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostUnpinChatMessage.Response>(
    "post",
    "/unpinChatMessage",
    options,
  );
}

/**
 * Use this method to upload a .PNG file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api/#file) on success.
 * @path `/uploadStickerFile`
 * @docs https://core.telegram.org/bots/api/#uploadstickerfile
 */
export function postUploadStickerFile(options: {
  headers?: API.TgV3Json.Main.PostUploadStickerFile.Headers;
  formData: API.TgV3Json.Main.PostUploadStickerFile.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TgV3Json.Main.PostUploadStickerFile.Response>(
    "post",
    "/uploadStickerFile",
    options,
  );
}
