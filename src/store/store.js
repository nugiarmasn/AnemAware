import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import screeningReducer from './slices/screeningSlice';
import officerReducer from './slices/officerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    screening: screeningReducer,
    officer: officerReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
}); 