import { FC } from "react";
import { useNavigate } from "react-router";

import cl from "./index.module.scss";
import { NavigateHomeInLogoProps } from "./types";
import { Button, Logo } from "shared/ui";
import { cn } from "shared/lib";

export const NavigateHomeInLogo: FC<NavigateHomeInLogoProps> = (props) => {
    const { classNames } = props;

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/home");
    };

    return (
        <Button
            onClick={navigateHome}
            className={cn(cl.navigateHomeInLogo_root, classNames)}
        >
            <Logo />
        </Button>
    );
};
