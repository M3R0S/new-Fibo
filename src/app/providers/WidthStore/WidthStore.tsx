import { FC } from "react";
import { Provider } from "react-redux";

import { WidthStoreProps } from ".";
import { store } from "./configureStore";

export const WidthStore: FC<WidthStoreProps> = (props) => {
    const { children } = props;

    return <Provider store={store}>{children}</Provider>;
};
