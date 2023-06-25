import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
      <Link className="card w-full h-full glass" href={`/posts/${slug}`}>
        <figure><img className={'w-full'} src={coverImage.node.sourceUrl} alt={title} title={title}/></figure>
        <div className="card-body">
          <div className={'flex justify-between'}>
            <div>
              <h2 className="card-title text-4xl">{title}</h2>
              <div className="mb-4 md:mb-0 text-lg">
                <Date dateString={date} />
              </div>
            </div>
            <Avatar author={author} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href={`/posts/${slug}`}>Read now</Link>
          </div>
        </div>
      </Link>
  )
}
