import { FC } from "react";

import cl from "./index.module.scss";
import { cn } from "shared/lib";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = (props) => {
    const { children, className } = props;

    return (
        <button {...props} className={cn(cl.button_root, className)}>
            {children}
        </button>
    );
};
