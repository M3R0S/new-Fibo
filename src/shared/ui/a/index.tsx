import { FC } from "react";

import cl from "./index.module.scss";
import { cn } from "shared/lib";
import { aAccordance } from "./constants";
import { AProps } from "./types";

export const A: FC<AProps> = (props) => {
    const { children, variant, className } = props;

    const { src, target } = aAccordance[variant];

    return (
        <a
            {...props}
            href={src}
            target={target}
            className={cn(cl.root_a, className)} //todo Добавить рут класс
        >
            {children}
        </a>
    );
};
