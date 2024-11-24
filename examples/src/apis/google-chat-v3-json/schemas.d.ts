declare namespace API {
  namespace GoogleChatV3Json {
    namespace $schemas {
      /**
       * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.
       */
      interface ActionParameter {
        /**
         * The name of the parameter for the action script.
         */
        key?: string;
        /**
         * The value of the parameter.
         */
        value?: string;
      }

      /**
       * Parameters that a Chat app can use to configure how its response is posted.
       */
      interface ActionResponse {
        /**
         * Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
         */
        dialogAction?: $schemas.DialogAction;
        /**
         * Input only. The type of Chat app response.
         */
        type?:
          | "DIALOG"
          | "NEW_MESSAGE"
          | "REQUEST_CONFIG"
          | "TYPE_UNSPECIFIED"
          | "UPDATE_MESSAGE"
          | "UPDATE_USER_MESSAGE_CARDS";
        /**
         * Input only. URL for users to auth or config. (Only for REQUEST_CONFIG response types.)
         */
        url?: string;
      }

      /**
       * Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).
       */
      interface ActionStatus {
        /**
         * The status code.
         */
        statusCode?:
          | "ABORTED"
          | "ALREADY_EXISTS"
          | "CANCELLED"
          | "DATA_LOSS"
          | "DEADLINE_EXCEEDED"
          | "FAILED_PRECONDITION"
          | "INTERNAL"
          | "INVALID_ARGUMENT"
          | "NOT_FOUND"
          | "OK"
          | "OUT_OF_RANGE"
          | "PERMISSION_DENIED"
          | "RESOURCE_EXHAUSTED"
          | "UNAUTHENTICATED"
          | "UNAVAILABLE"
          | "UNIMPLEMENTED"
          | "UNKNOWN";
        /**
         * The message to send users about the status of their request. If unset, a generic message based on the `status_code` is sent.
         */
        userFacingMessage?: string;
      }

      /**
       * Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```
       */
      interface Annotation {
        /**
         * Length of the substring in the plain-text message body this annotation corresponds to.
         * @format int32
         */
        length?: number;
        /**
         * Annotation metadata for slash commands (/).
         */
        slashCommand?: $schemas.SlashCommandMetadata;
        /**
         * Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.
         * @format int32
         */
        startIndex?: number;
        /**
         * The type of this annotation.
         */
        type?: "ANNOTATION_TYPE_UNSPECIFIED" | "SLASH_COMMAND" | "USER_MENTION";
        /**
         * Annotation metadata for user mentions (@).
         */
        userMention?: $schemas.UserMentionMetadata;
      }

      /**
       * An attachment in Google Chat.
       */
      interface Attachment {
        attachmentDataRef?: $schemas.AttachmentDataRef;
        /**
         * The original file name for the content, not the full path.
         */
        contentName?: string;
        /**
         * The content type (MIME type) of the file.
         */
        contentType?: string;
        /**
         * Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps should not use this URL to download attachment content.
         */
        downloadUri?: string;
        /**
         * A reference to the data of a drive attachment.
         */
        driveDataRef?: $schemas.DriveDataRef;
        /**
         * Resource name of the attachment, in the form "spaces/*\/messages/*\/attachments/*".
         */
        name?: string;
        /**
         * The source of the attachment.
         */
        source?: "DRIVE_FILE" | "SOURCE_UNSPECIFIED" | "UPLOADED_CONTENT";
        /**
         * Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps should not use this URL to download attachment content.
         */
        thumbnailUri?: string;
      }

      interface AttachmentDataRef {
        /**
         * The resource name of the attachment data. This is used with the media API to download the attachment data.
         */
        resourceName?: string;
      }

      /**
       * A button. Can be a text button or an image button.
       */
      interface Button {
        /**
         * An image button with an onclick action.
         */
        imageButton?: $schemas.ImageButton;
        /**
         * A button with text and onclick action.
         */
        textButton?: $schemas.TextButton;
      }

      /**
       * A card is a UI element that can contain UI widgets such as texts, images.
       */
      interface Card {
        /**
         * The actions of this card.
         */
        cardActions?: $schemas.CardAction[];
        header?: $schemas.CardHeader;
        /**
         * Name of the card.
         */
        name?: string;
        /**
         * Sections are separated by a line divider.
         */
        sections?: $schemas.Section[];
      }

      /**
       * A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.
       */
      interface CardAction {
        /**
         * The label used to be displayed in the action menu item.
         */
        actionLabel?: string;
        /**
         * An onclick action (e.g. open a link).
         */
        onClick?: $schemas.OnClick;
      }

      interface CardHeader {
        /**
         * The image's type (e.g. square border or circular border).
         */
        imageStyle?: "AVATAR" | "IMAGE" | "IMAGE_STYLE_UNSPECIFIED";
        /**
         * The URL of the image in the card header.
         */
        imageUrl?: string;
        /**
         * The subtitle of the card header.
         */
        subtitle?: string;
        /**
         * The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines.
         */
        title?: string;
      }

      /**
       * Widgets for Chat apps to specify.
       */
      interface CardWithId {
        /**
         * Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a "contact card" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```
         */
        card?: $schemas.GoogleAppsCardV1Card;
        /**
         * Required for `cardsV2` messages. Chat app-specified identifier for this widget. Scoped within a message.
         */
        cardId?: string;
      }

      /**
       * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...
       */
      interface Color {
        /**
         * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
         * @format float
         */
        alpha?: number;
        /**
         * The amount of blue in the color as a value in the interval [0, 1].
         * @format float
         */
        blue?: number;
        /**
         * The amount of green in the color as a value in the interval [0, 1].
         * @format float
         */
        green?: number;
        /**
         * The amount of red in the color as a value in the interval [0, 1].
         * @format float
         */
        red?: number;
      }

      /**
       * Wrapper around the card body of the dialog.
       */
      interface Dialog {
        /**
         * Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a "contact card" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```
         */
        body?: $schemas.GoogleAppsCardV1Card;
      }

      /**
       * Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
       */
      interface DialogAction {
        /**
         * Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).
         */
        actionStatus?: $schemas.ActionStatus;
        /**
         * Wrapper around the card body of the dialog.
         */
        dialog?: $schemas.Dialog;
      }

      /**
       * A reference to the data of a drive attachment.
       */
      interface DriveDataRef {
        /**
         * The id for the drive file, for use with the Drive API.
         */
        driveFileId?: string;
      }

      /**
       * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
       */
      interface Empty {}

      /**
       * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
       */
      interface FormAction {
        /**
         * The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. The same method name can be used for several elements that trigger a common behavior if desired.
         */
        actionMethodName?: string;
        /**
         * List of action parameters.
         */
        parameters?: $schemas.ActionParameter[];
      }

      /**
       * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
       */
      interface GoogleAppsCardV1Action {
        /**
         * A custom function to invoke when the containing element is clicked or othrwise activated. For example usage, see [Create interactive cards](https://developers.google.com/chat/how-tos/cards-onclick).
         */
        function?: string;
        /**
         * Optional. Required when opening a [dialog](https://developers.google.com/chat/how-tos/dialogs). What to do in response to an interaction with a user, such as a user clicking button on a card message. If unspecified, the app responds by executing an `action` - like opening a link or running a function - as normal. By specifying an `interaction`, the app can respond in special interactive ways. For example, by setting `interaction` to `OPEN_DIALOG`, the app can open a [dialog](https://developers.google.com/chat/how-tos/dialogs). When specified, a loading indicator is not shown. Supported by Chat apps, but not Google Workspace Add-ons. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
         */
        interaction?: "INTERACTION_UNSPECIFIED" | "OPEN_DIALOG";
        /**
         * Specifies the loading indicator that the action displays while making the call to the action.
         */
        loadIndicator?: "NONE" | "SPINNER";
        /**
         * List of action parameters.
         */
        parameters?: $schemas.GoogleAppsCardV1ActionParameter[];
        /**
         * Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. To let the user make changes while the action is being processed, set [LoadIndicator](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `NONE`. For [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) in Chat apps, you must also set the action's [ResponseType](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#responsetype) to `UPDATE_MESSAGE` and use the same [`card_id`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#CardWithId) from the card that contained the action. If `false`, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set [LoadIndicator](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `SPINNER`.
         */
        persistValues?: boolean;
      }

      /**
       * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters. To learn more, see [CommonEventObject](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject).
       */
      interface GoogleAppsCardV1ActionParameter {
        /**
         * The name of the parameter for the action script.
         */
        key?: string;
        /**
         * The value of the parameter.
         */
        value?: string;
      }

      /**
       * The style options for the border of a card or widget, including the border type and color.
       */
      interface GoogleAppsCardV1BorderStyle {
        /**
         * The corner radius for the border.
         * @format int32
         */
        cornerRadius?: number;
        /**
         * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...
         */
        strokeColor?: $schemas.Color;
        /**
         * The border type.
         */
        type?: "BORDER_TYPE_UNSPECIFIED" | "NO_BORDER" | "STROKE";
      }

      /**
       * A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action.
       */
      interface GoogleAppsCardV1Button {
        /**
         * The alternative text used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat".
         */
        altText?: string;
        /**
         * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...
         */
        color?: $schemas.Color;
        /**
         * If `true`, the button is displayed in an inactive state and doesn't respond to user actions.
         */
        disabled?: boolean;
        /**
         * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
         */
        icon?: $schemas.GoogleAppsCardV1Icon;
        /**
         * Represents how to respond when users click an interactive element on a card, such as a button.
         */
        onClick?: $schemas.GoogleAppsCardV1OnClick;
        /**
         * The text displayed inside the button.
         */
        text?: string;
      }

      /**
       * A list of buttons layed out horizontally.
       */
      interface GoogleAppsCardV1ButtonList {
        /**
         * An array of buttons.
         */
        buttons?: $schemas.GoogleAppsCardV1Button[];
      }

      /**
       * Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a "contact card" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```
       */
      interface GoogleAppsCardV1Card {
        /**
         * The card's actions. Actions are added to the card's toolbar menu. Because Chat app cards have no toolbar, `cardActions[]` is not supported by Chat apps. For example, the following JSON constructs a card action menu with Settings and Send Feedback options: ``` "card_actions": [ { "actionLabel": "Settings", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" } ], "loadIndicator": "LoadIndicator.SPINNER" } } }, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" } } } ] ```
         */
        cardActions?: $schemas.GoogleAppsCardV1CardAction[];
        /**
         * In Google Workspace add-ons, sets the display properties of the `peekCardHeader`. Not supported by Chat apps.
         */
        displayStyle?: "DISPLAY_STYLE_UNSPECIFIED" | "PEEK" | "REPLACE";
        /**
         * A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. Supported by Google Workspace Add-ons and Chat apps. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/message-formats/cards).
         */
        fixedFooter?: $schemas.GoogleAppsCardV1CardFixedFooter;
        /**
         * Represents a card header.
         */
        header?: $schemas.GoogleAppsCardV1CardHeader;
        /**
         * Name of the card. Used as a card identifier in card navigation. Because Chat apps don't support card navigation, they ignore this field.
         */
        name?: string;
        /**
         * Represents a card header.
         */
        peekCardHeader?: $schemas.GoogleAppsCardV1CardHeader;
        /**
         * Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider.
         */
        sections?: $schemas.GoogleAppsCardV1Section[];
      }

      /**
       * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. Not supported by Chat apps.
       */
      interface GoogleAppsCardV1CardAction {
        /**
         * The label that displays as the action menu item.
         */
        actionLabel?: string;
        /**
         * Represents how to respond when users click an interactive element on a card, such as a button.
         */
        onClick?: $schemas.GoogleAppsCardV1OnClick;
      }

      /**
       * A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. Supported by Google Workspace Add-ons and Chat apps. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/message-formats/cards).
       */
      interface GoogleAppsCardV1CardFixedFooter {
        /**
         * A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action.
         */
        primaryButton?: $schemas.GoogleAppsCardV1Button;
        /**
         * A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action.
         */
        secondaryButton?: $schemas.GoogleAppsCardV1Button;
      }

      /**
       * Represents a card header.
       */
      interface GoogleAppsCardV1CardHeader {
        /**
         * The alternative text of this image which is used for accessibility.
         */
        imageAltText?: string;
        /**
         * The shape used to crop the image.
         */
        imageType?: "CIRCLE" | "SQUARE";
        /**
         * The HTTPS URL of the image in the card header.
         */
        imageUrl?: string;
        /**
         * The subtitle of the card header. If specified, appears on its own line below the `title`.
         */
        subtitle?: string;
        /**
         * Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.
         */
        title?: string;
      }

      /**
       * Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
       */
      interface GoogleAppsCardV1DateTimePicker {
        /**
         * The text that prompts users to enter a date, time, or datetime. Specify text that helps the user enter the information your app needs. For example, if users are setting an appointment, then a label like "Appointment date" or "Appointment date and time" might work well.
         */
        label?: string;
        /**
         * The name by which the datetime picker is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
         */
        name?: string;
        /**
         * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
         */
        onChangeAction?: $schemas.GoogleAppsCardV1Action;
        /**
         * The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If not set, it uses the user's time zone setting on the client side.
         * @format int32
         */
        timezoneOffsetDate?: number;
        /**
         * What kind of date and time input the datetime picker supports.
         */
        type?: "DATE_AND_TIME" | "DATE_ONLY" | "TIME_ONLY";
        /**
         * The value displayed as the default value before user input or previous user input, represented in milliseconds ([Epoch time](https://en.wikipedia.org/wiki/Unix_time)). For `DATE_AND_TIME` type, the full epoch value is used. For `DATE_ONLY` type, only date of the epoch time is used. For `TIME_ONLY` type, only time of the epoch time is used. For example, to represent 3:00 AM, set epoch time to `3 * 60 * 60 * 1000`.
         * @format int64
         */
        valueMsEpoch?: string;
      }

      /**
       * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
       */
      interface GoogleAppsCardV1DecoratedText {
        /**
         * The text that appears below `text`. Always truncates.
         */
        bottomLabel?: string;
        /**
         * A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action.
         */
        button?: $schemas.GoogleAppsCardV1Button;
        /**
         * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
         */
        endIcon?: $schemas.GoogleAppsCardV1Icon;
        /**
         * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
         */
        icon?: $schemas.GoogleAppsCardV1Icon;
        /**
         * Represents how to respond when users click an interactive element on a card, such as a button.
         */
        onClick?: $schemas.GoogleAppsCardV1OnClick;
        /**
         * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
         */
        startIcon?: $schemas.GoogleAppsCardV1Icon;
        /**
         * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget.
         */
        switchControl?: $schemas.GoogleAppsCardV1SwitchControl;
        /**
         * Required. The primary text. Supports simple formatting. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
         */
        text?: string;
        /**
         * The text that appears above `text`. Always truncates.
         */
        topLabel?: string;
        /**
         * The wrap text setting. If `true`, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to `text`, not `topLabel` and `bottomLabel`.
         */
        wrapText?: boolean;
      }

      /**
       * Displays a divider between widgets, a horizontal line. For example, the following JSON creates a divider: ``` "divider": {} ```
       */
      interface GoogleAppsCardV1Divider {}

      /**
       * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ```
       */
      interface GoogleAppsCardV1Grid {
        /**
         * The style options for the border of a card or widget, including the border type and color.
         */
        borderStyle?: $schemas.GoogleAppsCardV1BorderStyle;
        /**
         * The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).
         * @format int32
         */
        columnCount?: number;
        /**
         * The items to display in the grid.
         */
        items?: $schemas.GoogleAppsCardV1GridItem[];
        /**
         * Represents how to respond when users click an interactive element on a card, such as a button.
         */
        onClick?: $schemas.GoogleAppsCardV1OnClick;
        /**
         * The text that displays in the grid header.
         */
        title?: string;
      }

      /**
       * Represents a single item in the grid layout.
       */
      interface GoogleAppsCardV1GridItem {
        /**
         * A user-specified identifier for this grid item. This identifier is returned in the parent Grid's onClick callback parameters.
         */
        id?: string;
        /**
         * Represents an image.
         */
        image?: $schemas.GoogleAppsCardV1ImageComponent;
        /**
         * The layout to use for the grid item.
         */
        layout?: "GRID_ITEM_LAYOUT_UNSPECIFIED" | "TEXT_ABOVE" | "TEXT_BELOW";
        /**
         * The grid item's subtitle.
         */
        subtitle?: string;
        /**
         * The grid item's title.
         */
        title?: string;
      }

      /**
       * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
       */
      interface GoogleAppsCardV1Icon {
        /**
         * Optional. A description of the icon used for accessibility. If unspecified, the default value "Button" is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, `A user's account portrait`, or `Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat`. If the icon is set in a Button, the `altText` appears as helper text when the user hovers over the button. However, if the button also sets `text`, the icon's `altText` is ignored.
         */
        altText?: string;
        /**
         * Display a custom icon hosted at an HTTPS URL. For example: ``` "iconUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png" ``` Supported file types include `.png` and `.jpg`.
         */
        iconUrl?: string;
        /**
         * The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a built-in icon.
         */
        imageType?: "CIRCLE" | "SQUARE";
        /**
         * Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify `AIRPLANE`. For a bus, specify `BUS`. For a full list of supported icons, see [built-in icons](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons).
         */
        knownIcon?: string;
      }

      /**
       * An image that is specified by a URL and can have an `onClick` action.
       */
      interface GoogleAppsCardV1Image {
        /**
         * The alternative text of this image, used for accessibility.
         */
        altText?: string;
        /**
         * The `https` URL that hosts the image. For example: ``` https://developers.google.com/chat/images/quickstart-app-avatar.png ```
         */
        imageUrl?: string;
        /**
         * Represents how to respond when users click an interactive element on a card, such as a button.
         */
        onClick?: $schemas.GoogleAppsCardV1OnClick;
      }

      /**
       * Represents an image.
       */
      interface GoogleAppsCardV1ImageComponent {
        /**
         * The accessibility label for the image.
         */
        altText?: string;
        /**
         * The style options for the border of a card or widget, including the border type and color.
         */
        borderStyle?: $schemas.GoogleAppsCardV1BorderStyle;
        /**
         * Represents the crop style applied to an image. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
         */
        cropStyle?: $schemas.GoogleAppsCardV1ImageCropStyle;
        /**
         * The image URL.
         */
        imageUri?: string;
      }

      /**
       * Represents the crop style applied to an image. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
       */
      interface GoogleAppsCardV1ImageCropStyle {
        /**
         * The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
         * @format double
         */
        aspectRatio?: number;
        /**
         * The crop type.
         */
        type?:
          | "CIRCLE"
          | "IMAGE_CROP_TYPE_UNSPECIFIED"
          | "RECTANGLE_4_3"
          | "RECTANGLE_CUSTOM"
          | "SQUARE";
      }

      /**
       * Represents how to respond when users click an interactive element on a card, such as a button.
       */
      interface GoogleAppsCardV1OnClick {
        /**
         * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
         */
        action?: $schemas.GoogleAppsCardV1Action;
        /**
         * Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a "contact card" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```
         */
        card?: $schemas.GoogleAppsCardV1Card;
        /**
         * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
         */
        openDynamicLinkAction?: $schemas.GoogleAppsCardV1Action;
        /**
         * Represents an `onClick` event that opens a hyperlink.
         */
        openLink?: $schemas.GoogleAppsCardV1OpenLink;
      }

      /**
       * Represents an `onClick` event that opens a hyperlink.
       */
      interface GoogleAppsCardV1OpenLink {
        /**
         * Whether the client forgets about a link after opening it, or observes it until the window closes. Not supported by Chat apps.
         */
        onClose?: "NOTHING" | "RELOAD";
        /**
         * How to open a link. Not supported by Chat apps.
         */
        openAs?: "FULL_SIZE" | "OVERLAY";
        /**
         * The URL to open.
         */
        url?: string;
      }

      /**
       * A section contains a collection of widgets that are rendered vertically in the order that they are specified.
       */
      interface GoogleAppsCardV1Section {
        /**
         * Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`.
         */
        collapsible?: boolean;
        /**
         * Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
         */
        header?: string;
        /**
         * The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`.
         * @format int32
         */
        uncollapsibleWidgetsCount?: number;
        /**
         * All the widgets in the section. Must contain at least 1 widget.
         */
        widgets?: $schemas.GoogleAppsCardV1Widget[];
      }

      /**
       * A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). To collect undefined or abstract data from users, use the TextInput widget.
       */
      interface GoogleAppsCardV1SelectionInput {
        /**
         * An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items.
         */
        items?: $schemas.GoogleAppsCardV1SelectionItem[];
        /**
         * The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".
         */
        label?: string;
        /**
         * The name that identifies the selection input in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
         */
        name?: string;
        /**
         * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
         */
        onChangeAction?: $schemas.GoogleAppsCardV1Action;
        /**
         * The type of items that are displayed to users in a `SelectionInput` widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu.
         */
        type?: "CHECK_BOX" | "DROPDOWN" | "RADIO_BUTTON" | "SWITCH";
      }

      /**
       * An item that users can select in a selection input, such as a checkbox or switch.
       */
      interface GoogleAppsCardV1SelectionItem {
        /**
         * When `true`, more than one item is selected. If more than one item is selected for radio buttons and dropdown menus, the first selected item is received and the ones after are ignored.
         */
        selected?: boolean;
        /**
         * The text that identifies or describes the item to users.
         */
        text?: string;
        /**
         * The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
         */
        value?: string;
      }

      /**
       * One suggested value that users can enter in a text input field.
       */
      interface GoogleAppsCardV1SuggestionItem {
        /**
         * The value of a suggested input to a text input field. This is equivalent to what users would enter themselves.
         */
        text?: string;
      }

      /**
       * Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing "Jav", the list of suggestions filters to show just Java and JavaScript. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter "javascript" and others "java script". Suggesting "JavaScript" can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it is set to `MULTIPLE_LINE`.
       */
      interface GoogleAppsCardV1Suggestions {
        /**
         * A list of suggestions used for autocomplete recommendations in text input fields.
         */
        items?: $schemas.GoogleAppsCardV1SuggestionItem[];
      }

      /**
       * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget.
       */
      interface GoogleAppsCardV1SwitchControl {
        /**
         * How the switch appears in the user interface.
         */
        controlType?: "CHECKBOX" | "CHECK_BOX" | "SWITCH";
        /**
         * The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
         */
        name?: string;
        /**
         * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
         */
        onChangeAction?: $schemas.GoogleAppsCardV1Action;
        /**
         * When `true`, the switch is selected.
         */
        selected?: boolean;
        /**
         * The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
         */
        value?: string;
      }

      /**
       * A field in which users can enter text. Supports suggestions and on-change actions. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget.
       */
      interface GoogleAppsCardV1TextInput {
        /**
         * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
         */
        autoCompleteAction?: $schemas.GoogleAppsCardV1Action;
        /**
         * Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if `label` is unspecified. Otherwise, optional.
         */
        hintText?: string;
        /**
         * Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing "Jav", the list of suggestions filters to show just Java and JavaScript. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter "javascript" and others "java script". Suggesting "JavaScript" can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it is set to `MULTIPLE_LINE`.
         */
        initialSuggestions?: $schemas.GoogleAppsCardV1Suggestions;
        /**
         * The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write "surname" instead of "name". Required if `hintText` is unspecified. Otherwise, optional.
         */
        label?: string;
        /**
         * The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
         */
        name?: string;
        /**
         * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
         */
        onChangeAction?: $schemas.GoogleAppsCardV1Action;
        /**
         * How a text input field appears in the user interface. For example, whether the field is single or multi-line.
         */
        type?: "MULTIPLE_LINE" | "SINGLE_LINE";
        /**
         * The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
         */
        value?: string;
      }

      /**
       * A paragraph of text that supports formatting. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
       */
      interface GoogleAppsCardV1TextParagraph {
        /**
         * The text that's shown in the widget.
         */
        text?: string;
      }

      /**
       * Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.
       */
      interface GoogleAppsCardV1Widget {
        /**
         * A list of buttons layed out horizontally.
         */
        buttonList?: $schemas.GoogleAppsCardV1ButtonList;
        /**
         * Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
         */
        dateTimePicker?: $schemas.GoogleAppsCardV1DateTimePicker;
        /**
         * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
         */
        decoratedText?: $schemas.GoogleAppsCardV1DecoratedText;
        /**
         * Displays a divider between widgets, a horizontal line. For example, the following JSON creates a divider: ``` "divider": {} ```
         */
        divider?: $schemas.GoogleAppsCardV1Divider;
        /**
         * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ```
         */
        grid?: $schemas.GoogleAppsCardV1Grid;
        /**
         * An image that is specified by a URL and can have an `onClick` action.
         */
        image?: $schemas.GoogleAppsCardV1Image;
        /**
         * A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). To collect undefined or abstract data from users, use the TextInput widget.
         */
        selectionInput?: $schemas.GoogleAppsCardV1SelectionInput;
        /**
         * A field in which users can enter text. Supports suggestions and on-change actions. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget.
         */
        textInput?: $schemas.GoogleAppsCardV1TextInput;
        /**
         * A paragraph of text that supports formatting. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
         */
        textParagraph?: $schemas.GoogleAppsCardV1TextParagraph;
      }

      /**
       * An image that is specified by a URL and can have an onclick action.
       */
      interface Image {
        /**
         * The aspect ratio of this image (width/height). This field allows clients to reserve the right height for the image while waiting for it to load. It's not meant to override the native aspect ratio of the image. If unset, the server fills it by prefetching the image.
         * @format double
         */
        aspectRatio?: number;
        /**
         * The URL of the image.
         */
        imageUrl?: string;
        /**
         * An onclick action (e.g. open a link).
         */
        onClick?: $schemas.OnClick;
      }

      /**
       * An image button with an onclick action.
       */
      interface ImageButton {
        /**
         * The icon specified by an enum that indices to an icon provided by Chat API.
         */
        icon?:
          | "AIRPLANE"
          | "BOOKMARK"
          | "BUS"
          | "CAR"
          | "CLOCK"
          | "CONFIRMATION_NUMBER_ICON"
          | "DESCRIPTION"
          | "DOLLAR"
          | "EMAIL"
          | "EVENT_PERFORMER"
          | "EVENT_SEAT"
          | "FLIGHT_ARRIVAL"
          | "FLIGHT_DEPARTURE"
          | "HOTEL"
          | "HOTEL_ROOM_TYPE"
          | "ICON_UNSPECIFIED"
          | "INVITE"
          | "MAP_PIN"
          | "MEMBERSHIP"
          | "MULTIPLE_PEOPLE"
          | "OFFER"
          | "PERSON"
          | "PHONE"
          | "RESTAURANT_ICON"
          | "SHOPPING_CART"
          | "STAR"
          | "STORE"
          | "TICKET"
          | "TRAIN"
          | "VIDEO_CAMERA"
          | "VIDEO_PLAY";
        /**
         * The icon specified by a URL.
         */
        iconUrl?: string;
        /**
         * The name of this image_button which will be used for accessibility. Default value will be provided if developers don't specify.
         */
        name?: string;
        /**
         * An onclick action (e.g. open a link).
         */
        onClick?: $schemas.OnClick;
      }

      /**
       * A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
       */
      interface KeyValue {
        /**
         * The text of the bottom label. Formatted text supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
         */
        bottomLabel?: string;
        /**
         * A button. Can be a text button or an image button.
         */
        button?: $schemas.Button;
        /**
         * The text of the content. Formatted text supported and always required. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
         */
        content?: string;
        /**
         * If the content should be multiline.
         */
        contentMultiline?: boolean;
        /**
         * An enum value that will be replaced by the Chat API with the corresponding icon image.
         */
        icon?:
          | "AIRPLANE"
          | "BOOKMARK"
          | "BUS"
          | "CAR"
          | "CLOCK"
          | "CONFIRMATION_NUMBER_ICON"
          | "DESCRIPTION"
          | "DOLLAR"
          | "EMAIL"
          | "EVENT_PERFORMER"
          | "EVENT_SEAT"
          | "FLIGHT_ARRIVAL"
          | "FLIGHT_DEPARTURE"
          | "HOTEL"
          | "HOTEL_ROOM_TYPE"
          | "ICON_UNSPECIFIED"
          | "INVITE"
          | "MAP_PIN"
          | "MEMBERSHIP"
          | "MULTIPLE_PEOPLE"
          | "OFFER"
          | "PERSON"
          | "PHONE"
          | "RESTAURANT_ICON"
          | "SHOPPING_CART"
          | "STAR"
          | "STORE"
          | "TICKET"
          | "TRAIN"
          | "VIDEO_CAMERA"
          | "VIDEO_PLAY";
        /**
         * The icon specified by a URL.
         */
        iconUrl?: string;
        /**
         * An onclick action (e.g. open a link).
         */
        onClick?: $schemas.OnClick;
        /**
         * The text of the top label. Formatted text supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
         */
        topLabel?: string;
      }

      interface ListMembershipsResponse {
        /**
         * List of memberships in the requested (or first) page.
         */
        memberships?: $schemas.Membership[];
        /**
         * A token that can be sent as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
         */
        nextPageToken?: string;
      }

      interface ListSpacesResponse {
        /**
         * A token that can be sent as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
         */
        nextPageToken?: string;
        /**
         * List of spaces in the requested (or first) page.
         */
        spaces?: $schemas.Space[];
      }

      /**
       * A matched url in a Chat message. Chat apps can preview matched URLs. For more information, refer to [Preview links](https://developers.google.com/chat/how-tos/preview-links).
       */
      interface MatchedUrl {
        /**
         * Output only. The url that was matched.
         */
        url?: string;
      }

      /**
       * Media resource.
       */
      interface Media {
        /**
         * Name of the media resource.
         */
        resourceName?: string;
      }

      /**
       * Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
       */
      interface Membership {
        /**
         * Output only. The creation time of the membership, such as when a member joined or was invited to join a space.
         * @format google-datetime
         */
        createTime?: string;
        /**
         * A user in Google Chat.
         */
        member?: $schemas.User;
        /**
         * Resource name of the membership, assigned by the server. Format: spaces/{space}/members/{member}
         */
        name?: string;
        /**
         * Output only. User's role within a Chat space, which determines their permitted actions in the space.
         */
        role?: "MEMBERSHIP_ROLE_UNSPECIFIED" | "ROLE_MANAGER" | "ROLE_MEMBER";
        /**
         * Output only. State of the membership.
         */
        state?:
          | "INVITED"
          | "JOINED"
          | "MEMBERSHIP_STATE_UNSPECIFIED"
          | "NOT_A_MEMBER";
      }

      /**
       * A message in Google Chat.
       */
      interface Message {
        /**
         * Parameters that a Chat app can use to configure how its response is posted.
         */
        actionResponse?: $schemas.ActionResponse;
        /**
         * Output only. Annotations associated with the text in this message.
         */
        annotations?: $schemas.Annotation[];
        /**
         * Output only. Plain-text body of the message with all Chat app mentions stripped out.
         */
        argumentText?: string;
        /**
         * User-uploaded attachment.
         */
        attachment?: $schemas.Attachment[];
        /**
         * Deprecated: Use `cards_v2` instead. Rich, formatted and interactive cards that can be used to display UI elements such as: formatted texts, buttons, clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.
         */
        cards?: $schemas.Card[];
        /**
         * Richly formatted and interactive cards that display UI elements and editable widgets, such as: - Formatted text - Buttons - Clickable images - Checkboxes - Radio buttons - Input widgets. Cards are usually displayed below the text body of a Chat message, but can situationally appear other places, such as [dialogs](https://developers.google.com/chat/how-tos/dialogs). Each card can have a maximum size of 32 KB. The `cardId` is a unique identifier among cards in the same message and for identifying user input values. Currently supported widgets include: - `TextParagraph` - `DecoratedText` - `Image` - `ButtonList` - `Divider` - `TextInput` - `SelectionInput` - `Grid`
         */
        cardsV2?: $schemas.CardWithId[];
        /**
         * A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
         */
        clientAssignedMessageId?: string;
        /**
         * Output only. The time at which the message was created in Google Chat server.
         * @format google-datetime
         */
        createTime?: string;
        /**
         * A plain-text description of the message's cards, used when the actual cards cannot be displayed (e.g. mobile notifications).
         */
        fallbackText?: string;
        /**
         * Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.
         * @format google-datetime
         */
        lastUpdateTime?: string;
        /**
         * A matched url in a Chat message. Chat apps can preview matched URLs. For more information, refer to [Preview links](https://developers.google.com/chat/how-tos/preview-links).
         */
        matchedUrl?: $schemas.MatchedUrl;
        /**
         * Resource name in the form `spaces/*\/messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
         */
        name?: string;
        /**
         * A user in Google Chat.
         */
        sender?: $schemas.User;
        /**
         * A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
         */
        slashCommand?: $schemas.SlashCommand;
        /**
         * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
         */
        space?: $schemas.Space;
        /**
         * Plain-text body of the message. The first link to an image, video, web page, or other preview-able item generates a preview chip.
         */
        text?: string;
        /**
         * A thread in Google Chat.
         */
        thread?: $schemas.Thread;
        /**
         * Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`.
         */
        threadReply?: boolean;
      }

      /**
       * An onclick action (e.g. open a link).
       */
      interface OnClick {
        /**
         * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
         */
        action?: $schemas.FormAction;
        /**
         * A link that opens a new window.
         */
        openLink?: $schemas.OpenLink;
      }

      /**
       * A link that opens a new window.
       */
      interface OpenLink {
        /**
         * The URL to open.
         */
        url?: string;
      }

      /**
       * A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
       */
      interface Section {
        /**
         * The header of the section. Formatted text is supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
         */
        header?: string;
        /**
         * A section must contain at least 1 widget.
         */
        widgets?: $schemas.WidgetMarkup[];
      }

      /**
       * A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
       */
      interface SlashCommand {
        /**
         * The id of the slash command invoked.
         * @format int64
         */
        commandId?: string;
      }

      /**
       * Annotation metadata for slash commands (/).
       */
      interface SlashCommandMetadata {
        /**
         * A user in Google Chat.
         */
        bot?: $schemas.User;
        /**
         * The command id of the invoked slash command.
         * @format int64
         */
        commandId?: string;
        /**
         * The name of the invoked slash command.
         */
        commandName?: string;
        /**
         * Indicating whether the slash command is for a dialog.
         */
        triggersDialog?: boolean;
        /**
         * The type of slash command.
         */
        type?: "ADD" | "INVOKE" | "TYPE_UNSPECIFIED";
      }

      /**
       * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
       */
      interface Space {
        /**
         * Output only. Whether the Chat app was installed by a Google Workspace administrator. Administrators can install a Chat app for their domain, organizational unit, or a group of users. Administrators can only install Chat apps for direct messaging between users and the app. To support admin install, your app must feature direct messaging.
         */
        adminInstalled?: boolean;
        /**
         * The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). For direct messages, this field may be empty. Supports up to 128 characters.
         */
        displayName?: string;
        /**
         * Resource name of the space. Format: spaces/{space}
         */
        name?: string;
        /**
         * Optional. Whether the space is a DM between a Chat app and a single human.
         */
        singleUserBotDm?: boolean;
        /**
         * Details about the space including description and rules.
         */
        spaceDetails?: $schemas.SpaceDetails;
        /**
         * Output only. The threading state in the Chat space.
         */
        spaceThreadingState?:
          | "GROUPED_MESSAGES"
          | "SPACE_THREADING_STATE_UNSPECIFIED"
          | "THREADED_MESSAGES"
          | "UNTHREADED_MESSAGES";
        /**
         * Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space.
         */
        threaded?: boolean;
        /**
         * Output only. Deprecated: Use `singleUserBotDm` or `spaceType` (developer preview) instead. The type of a space.
         */
        type?: "DM" | "ROOM" | "TYPE_UNSPECIFIED";
      }

      /**
       * Details about the space including description and rules.
       */
      interface SpaceDetails {
        /**
         * Optional. A description of the space. It could describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters.
         */
        description?: string;
        /**
         * Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters.
         */
        guidelines?: string;
      }

      /**
       * A button with text and onclick action.
       */
      interface TextButton {
        /**
         * An onclick action (e.g. open a link).
         */
        onClick?: $schemas.OnClick;
        /**
         * The text of the button.
         */
        text?: string;
      }

      /**
       * A paragraph of text. Formatted text supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
       */
      interface TextParagraph {
        text?: string;
      }

      /**
       * A thread in Google Chat.
       */
      interface Thread {
        /**
         * Resource name of the thread. Example: spaces/{space}/threads/{thread}
         */
        name?: string;
        /**
         * Optional. Opaque thread identifier. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/crudl/messages#start_or_reply_to_a_message_thread). For other requests, this is an output only field.
         */
        threadKey?: string;
      }

      /**
       * A user in Google Chat.
       */
      interface User {
        /**
         * Output only. The user's display name.
         */
        displayName?: string;
        /**
         * Unique identifier of the user's Google Workspace domain.
         */
        domainId?: string;
        /**
         * Output only. When `true`, the user is deleted or their profile is not visible.
         */
        isAnonymous?: boolean;
        /**
         * Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `{person_id`} for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API, where the Person `resource_name` is `people/{person_id}`. For example, `users/123456789` in Chat API represents the same person as `people/123456789` in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API.
         */
        name?: string;
        /**
         * User type.
         */
        type?: "BOT" | "HUMAN" | "TYPE_UNSPECIFIED";
      }

      /**
       * Annotation metadata for user mentions (@).
       */
      interface UserMentionMetadata {
        /**
         * The type of user mention.
         */
        type?: "ADD" | "MENTION" | "TYPE_UNSPECIFIED";
        /**
         * A user in Google Chat.
         */
        user?: $schemas.User;
      }

      /**
       * A widget is a UI element that presents texts, images, etc.
       */
      interface WidgetMarkup {
        /**
         * A list of buttons. Buttons is also `oneof data` and only one of these fields should be set.
         */
        buttons?: $schemas.Button[];
        /**
         * An image that is specified by a URL and can have an onclick action.
         */
        image?: $schemas.Image;
        /**
         * A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
         */
        keyValue?: $schemas.KeyValue;
        /**
         * A paragraph of text. Formatted text supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons.
         */
        textParagraph?: $schemas.TextParagraph;
      }
    }
  }
}
