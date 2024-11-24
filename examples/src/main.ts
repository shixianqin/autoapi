import { getGists } from '@/apis/github-v3-json/gists'
import { getListWorkflowRuns, postCreateRepoVariable } from '@/apis/github-v3-json/actions'

getGists({
  pathParams: {
    gist_id: '',
  },
}).then((res) => {
  res.data.history?.map((item) => item.url)
})

postCreateRepoVariable({
  pathParams: {
    owner: '',
    repo: '',
  },
  body: {
    name: '',
    value: '',
  },
})

getListWorkflowRuns({
  pathParams: {
    owner: '',
    repo: '',
    workflow_id: '',
  },
  queryParams: {
    status: 'queued',
  },
  config: {
  },
})
