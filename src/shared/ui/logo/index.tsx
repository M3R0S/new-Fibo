import { FC } from "react";
import { cn } from "shared/lib";
import { Image } from "../image";
import { logoAccordance } from "./constants";

import cl from "./index.module.scss";
import { LogoProps } from "./types";

export const Logo: FC<LogoProps> = (props) => {
    const { className } = props;

    const { alt, src } = logoAccordance;

    return <Image src={src} alt={alt} className={cn(cl.logo_root, className)} />;
    //todo Добавить стандартный стиль
};
