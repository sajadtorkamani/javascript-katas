export const meeting = rooms => {
  const emptyRoomIndex = rooms.indexOf('O')

  return emptyRoomIndex > -1 ? emptyRoomIndex : 'None available!'
}
