import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shownModal: false,
};

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: state => {
      state.shownModal = true;
    },
    hideModal: state => {
      state.shownModal = false;
    },
  },
});

export const { showModal, hideModal } = ModalSlice.actions;
export const modalReducer = ModalSlice.reducer;
