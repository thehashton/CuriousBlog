import Avatar from './avatar'
import Date from './date'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
      <div className="card w-full glass">
          <figure>
              <img style={{minHeight: '515px'}} src={coverImage.node.sourceUrl} alt={title} title={title}/>
          </figure>
          <div className="card-body">
              <div className={'flex justify-between'}>
                  <div className={'align-top'}>
                      <h2 className="card-title">{title}</h2>
                      <div
                          className="text-lg leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: excerpt }}
                      />
                      <div className="text-lg mb-4">
                          <Date dateString={date} />
                      </div>
                  </div>
                  <div className={'align-top'}>
                      <Avatar author={author} />
                  </div>
              </div>

              <div className="card-actions justify-end">
                  <Link href={`/posts/${slug}`} className="btn btn-primary">Read now</Link>
              </div>
          </div>
      </div>
  )
}
