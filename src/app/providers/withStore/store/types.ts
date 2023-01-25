import { rootReducer } from "./constants";
import { store } from ".";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
