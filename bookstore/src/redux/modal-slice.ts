import { createSlice } from '@reduxjs/toolkit';

interface ModalProps {
  shownModal: boolean;
  imageUrl: string;
}

const initialState: ModalProps = {
  shownModal: false,
  imageUrl: '',
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
    setImage: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { showModal, hideModal, setImage } = ModalSlice.actions;
export const modalReducer = ModalSlice.reducer;
