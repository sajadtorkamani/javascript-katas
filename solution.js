export const switcheroo = str => {
  return str
    .replace(/a/g, 'A')
    .replace(/b/g, 'B')
    .replace(/A/g, 'b')
    .replace(/B/g, 'a')
};