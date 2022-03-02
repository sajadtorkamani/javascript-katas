const songDecoder = song => {
  return song
    .split('WUB')
    .filter(word => word)
    .join(' ')
}

export default songDecoder
