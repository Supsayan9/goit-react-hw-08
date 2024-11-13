import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ContactsReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";
import { FiltersReducer } from "./filters/slice";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

const rootReducer = {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: ContactsReducer,
    filter: FiltersReducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);