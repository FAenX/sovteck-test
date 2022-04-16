import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const selectedCharacter = createSlice({
  name: "selectedCharacter",
  initialState: {
    charater: {
        name: '',
        height: '',
        homeWorld: '',
        gender: '',
        mass: ''

    }
    
  },
  reducers: {
    setCharacter(state, action: PayloadAction<any>) {
      state.charater = action.payload
    },
    
  }
})

export const { setCharacter } = selectedCharacter.actions
export const character = selectedCharacter
