import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserEmail } from '../utils/localStorage';

interface UserEmail {
  userEmail: string[];
}

const initialState: UserEmail = {
  userEmail: getUserEmail(),
};

export const SubscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    setSubscribe: (state, action: PayloadAction<string>) => {
      state.userEmail.push(action.payload);
      localStorage.setItem('userEmail', JSON.stringify(state.userEmail));
    },
  },
});

export const { setSubscribe } = SubscribeSlice.actions;
export const subscribReducer = SubscribeSlice.reducer;
