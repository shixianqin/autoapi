import { defineConfig } from '@autoapi/cli'
import { allDocs } from './config-all'
import { configCustomizeApis } from './config-customize-apis'
import { configCustomizeFilter } from './config-customize-filter'
import { configCustomizeName } from './config-customize-name'
import { configCustomizeParseUnsuccessfulResponses } from './config-customize-parse-unsuccessful-responses'
import { configCustomizeResponseReturnPath } from './config-customize-response-return-path'
import { configCustomizeResponseWrapper } from './config-customize-response-wrapper'
import { configCustomizeResponses } from './config-customize-responses'
import { configCustomizeTagAndName } from './config-customize-tag-and-name'

export default defineConfig({
  sharedOptions: {
    adapter: '@/adapter',
  },
  docs: [
    ...allDocs,
    configCustomizeApis,
    configCustomizeFilter,
    configCustomizeName,
    configCustomizeParseUnsuccessfulResponses,
    configCustomizeResponseReturnPath,
    configCustomizeResponseWrapper,
    configCustomizeResponses,
    configCustomizeTagAndName,
  ],
})
