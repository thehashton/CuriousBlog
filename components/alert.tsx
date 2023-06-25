import Container from './container'
import cn from 'classnames'

export default function Alert() {
  return (
      <div
          className={cn('border-b', {
              'bg-accent-7 border-accent-7 text-white': '',
              'bg-accent-1 border-accent-2': '',
          }, 'p-2')}
      >
          <Container>
              <div className="py-2 text-center text-sm">
                  <p className={'text-base text-lg'}>New course out on the 23rd about learning how to grow and peel bananas within 30 days! 🍌</p>
              </div>
          </Container>
      </div>
  )
}
