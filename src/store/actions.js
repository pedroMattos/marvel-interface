export const updateData = (data) => {
  return {
    type: 'UPDATE_DATA',
    payload: data,
  }
}
export const createDefaultAgent = (data) => {
  return {
    type: 'CREATE_DEFAULT',
    payload: data,
  }
}