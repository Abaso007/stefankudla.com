import markdownStyles from './markdown-styles.module.css'

const PostBody: React.FC<{ content: string }> = ({ content }) => (
  <div className="max-w-2xl mx-auto">
    <div
      className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)
export default PostBody
