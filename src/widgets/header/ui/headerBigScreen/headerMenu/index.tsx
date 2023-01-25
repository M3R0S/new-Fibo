import { FC } from "react";

import cl from "./index.module.scss";
import { Container } from "shared/ui";

export const HeaderMenu: FC = () => {
    return (
        <Container tag="section" className={cl.container}>
            <NavbarMenuList className={cl.nav} />
            <ButtonNavigateLogin />
            <ButtonNavigateBasket />
        </Container>
    );
};
