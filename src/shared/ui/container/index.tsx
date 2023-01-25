import { FC } from "react";
import { cn } from "shared/lib";

import cl from "./index.module.scss";
import { ContainerAccordance, ContainerProps } from "./types";

export const Container: FC<ContainerProps> = (props) => {
    const { children, className, tag } = props;

    const containerAccordance: ContainerAccordance = {
        footer: (
            <footer {...props} className={cn(cl.footer_root, className)}>
                {children}
            </footer>
        ),
        header: (
            <header {...props} className={cn(cl.header_root, className)}>
                {children}
            </header>
        ),
        main: (
            <main {...props} className={cn(cl.main_root, className)}>
                {children}
            </main>
        ),
        nav: (
            <nav {...props} className={cn(cl.nav_root, className)}>
                {children}
            </nav>
        ),
        section: (
            <section {...props} className={cn(cl.section_root, className)}>
                {children}
            </section>
        ),
    };

    const element = containerAccordance[tag];

    return element;
};
