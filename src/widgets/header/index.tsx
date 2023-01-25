import { FC } from "react";

import { HeaderBigScreen } from "./ui";
import { useScreenSize } from "shared/lib/hooks";

export const Header: FC = () => {

    const { screenWidth } = useScreenSize();

    if (screenWidth >= 1200) {
        return <HeaderBigScreen />;
    } else {
        // return <NavbarSmallScreen />;
        return <div></div>;
    }
};
