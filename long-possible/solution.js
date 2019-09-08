const longestPossible = (songs, maxLength) => {
  const candidates = songs
    .map(song => ({ ...song, length: getSeconds(song.playback) }))
    .filter(song => song.length < maxLength);

  return candidates.length
    ? candidates.sort((a, b) => b.length - a.length)[0].title
    : false;
};

export const getSeconds = time => {
  return time.slice(0, 2) * 60 + Number(time.slice(-2));
};

export default longestPossible;
