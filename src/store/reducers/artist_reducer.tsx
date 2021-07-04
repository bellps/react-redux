import { PayloadAction } from '@reduxjs/toolkit';

export default (state = {}, action: PayloadAction<object>) => {
  switch (action.type) {
    default:
      return state;
  }
};
