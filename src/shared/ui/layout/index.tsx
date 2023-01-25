import { FC } from "react";

import { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return <>{children}</>;
};
