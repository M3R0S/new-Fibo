import { FC } from "react";

import cl from "./index.module.scss";
import { cn } from "shared/lib";
import { ImageProps } from "./types";

export const Image: FC<ImageProps> = (props) => {
    const { src, alt, className } = props;

    return (
        <img
            {...props}
            src={src}
            alt={alt}
            className={cn(cl.image_root, className)}
        />
    );
};
