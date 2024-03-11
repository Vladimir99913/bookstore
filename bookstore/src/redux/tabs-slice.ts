import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'tab1',
}

export const TabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTabs: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setTabs } = TabsSlice.actions
export const tabsReducer = TabsSlice.reducer

