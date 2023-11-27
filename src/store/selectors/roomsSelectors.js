export const getRoomsState = (state) => Object.values(state.rooms);
export const getSingleRoom = (state, id) => state.rooms[id];
