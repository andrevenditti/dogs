import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null)

  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      //sempre que adicionar um evento no window
      //e importante limpar no retorno, caso ele saia da tela,
      //e importante que o evento tambem saia
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return match
}

export default useMedia
