const fix = paragraph => {
  return paragraph
    .split('. ')
    .map(sentence => sentence.replace(/^\w/, m => m.toUpperCase()))
    .join('. ')
}

export default fix
