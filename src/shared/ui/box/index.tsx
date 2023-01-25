import { FC } from "react";

import cl from "./index.module.scss";
import { BoxProps, BoxAccordance } from "./types";
import { cn } from "shared/lib";

export const Box: FC<BoxProps> = (props) => {
    const { children, className, tag } = props;

    const boxAccordance: BoxAccordance = {
        article: (
            <article {...props} className={cn(cl.article_root, className)}>
                {children}
            </article>
        ),
        div: (
            <div {...props} className={cn(cl.div_root, className)}>
                {children}
            </div>
        ),
        figure: (
            <figure {...props} className={cn(cl.figure_root, className)}>
                {children}
            </figure>
        ),
    };

    const element = boxAccordance[tag];

    return element;
};
