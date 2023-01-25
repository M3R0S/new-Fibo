import { FC } from "react";

import cl from "./index.module.scss";
import { MainProps } from "./types";

export const Main: FC<MainProps> = (props) => {
    const { children } = props;

    return (
        //todo Задать стили классу
        <main className={cl.main}>{children}</main>
    );
};
