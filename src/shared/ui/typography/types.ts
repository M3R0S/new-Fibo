import { ReactElement, HTMLAttributes } from "react";

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TypographyProps extends HTMLAttributes<HTMLHeadElement> {
    tag: TypographyTag;
}

export type TitleTagAccordance = {
    [key in TypographyTag]: ReactElement<HTMLHeadingElement>;
};
