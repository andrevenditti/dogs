import React from 'react'
import { FeedPhotos } from './FeedPhotos'
import { FeedModal } from './FeedModal'

export const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    function infititeScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }
    window.addEventListener('wheel', infititeScroll)
    window.addEventListener('scroll', infititeScroll)
    return () => {
      window.removeEventListener('wheel', infititeScroll)
      window.removeEventListener('scroll', infititeScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          onClickPhoto={setModalPhoto}
          setInfinite={setInfinite}
          totalItems={3}
        />
      ))}
    </div>
  )
}
