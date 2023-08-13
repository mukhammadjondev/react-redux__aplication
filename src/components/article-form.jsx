import { useSelector } from 'react-redux'
import { Input, TextArea } from '../ui'

const ArticleForm = props => {
  const {isLoading} = useSelector(state => state.article)
  const {title, setTitle, description, setDescription, body, setBody, formSubmit} = props

  return (
    <div className="w-75 mx-auto">
        <form onSubmit={formSubmit}>
          <Input label={'Title'} state={title} setState={setTitle} />
          <TextArea label={'Description'} state={description} setState={setDescription} />
          <TextArea label={'Body'} state={body} setState={setBody} height={'200px'} />
          <button type="submit" className="w-100 btn btn-lg btn-primary mt-2" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Create'}
          </button>
        </form>
      </div>
  )
}

export default ArticleForm