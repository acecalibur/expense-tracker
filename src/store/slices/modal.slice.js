import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalType: null,
    modalProps: {},
    modalVisibility: false,
  },
  reducers: {
    openModal(draft, action) {
      draft.modalType = action.payload.modalType;
      draft.modalProps = action.payload.modalProps;
      draft.modalVisibility = true;
    },
    closeModal(draft, action) {
      draft.modalType = action.payload;
      draft.modalProps = {};
      draft.modalVisibility = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalSelector = (state) => state.modal;
export default modalSlice.reducer;
