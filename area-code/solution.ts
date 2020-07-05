export const areaCode = (text: string): string => {
  const AREA_CODE_REGEX = new RegExp(/(?<=\()\d+(?=\))/)

  return (text.match(AREA_CODE_REGEX) || [])[0]
}
