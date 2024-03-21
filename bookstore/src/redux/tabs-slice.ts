import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabsProps {
  value: string;
}

const initialState: TabsProps = {
  value: 'tab1',
};

export const TabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTabs: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setTabs } = TabsSlice.actions;
export const tabsReducer = TabsSlice.reducer;
