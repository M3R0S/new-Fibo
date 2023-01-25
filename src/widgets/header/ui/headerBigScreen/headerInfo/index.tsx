import { FC } from "react";

import cl from "./index.module.scss";
import { Box, Container } from "shared/ui";
import { CallNumber, NavigateHomeInLogo, OrderCall } from "features";
import { HeaderDeliveryInfo } from "./headerDeliveryInfo";

export const HeaderInfo: FC = () => {
    return (
        <Container tag="section" className={cl.container}>
            <Box tag="div" className={cl.wrapper}>
                <NavigateHomeInLogo />
                <HeaderDeliveryInfo />
            </Box>
            <Box tag="div" className={cl.wrapper}>
                <OrderCall />
                <CallNumber className={cl.call_number} />
            </Box>
        </Container>
    );
};
