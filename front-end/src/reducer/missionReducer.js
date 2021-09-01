
const initState = {
  missions_ar: []
}

export const missionsReducer = (state = initState, action) => {
 if (action.type === "updateList") {
    return { ...state, missions_ar: action.data }
  }
  else {
    return state;
  }
}