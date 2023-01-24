import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { store, rootReducer } from ".";

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
