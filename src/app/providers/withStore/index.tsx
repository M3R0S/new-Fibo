import { FC } from "react";
import { Provider } from "react-redux";

import { WidthStoreProps } from "./types";
import { store } from "./store";

export const WidthStore: FC<WidthStoreProps> = (props) => {
    const { children } = props;

    return <Provider store={store}>{children}</Provider>;
};
