import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';
import educationReducer from './educationSlice';
import experienceReducer from './experienceSlice';
import extraDetailsReducer from './extraDetailsSlice';
import profileReducer from './profileSlice';
import projectReducer from './projectSlice';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profileDetails', 'educationDetails', 'projectDetails', 'experienceDetails', 'extraDetails', 'user'],
};

const rootReducer = combineReducers({
  profileDetails: profileReducer,
  educationDetails: educationReducer,
  projectDetails: projectReducer,
  experienceDetails: experienceReducer,
  extraDetails: extraDetailsReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 👇 ignore redux-persist non-serializable actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
