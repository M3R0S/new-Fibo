import { FC } from "react";

import cl from "./index.module.scss";
import { A, Box, Span, Typography } from "shared/ui";
import { cn } from "shared/lib";

export const HeaderDeliveryInfo: FC = () => {
    return (
        <Box tag="div" className={cl.wrapper}>
            <Typography tag="h1" className={cl.title}>
                Доставка еды в<Span className={cl.title_city}>Ялте</Span>
            </Typography>
            <Box tag="div" className={cl.yandex_delivery}>
                <A
                    variant="HeaderDeliveryInfo"
                    className={cl.yandex_delivery_link}
                >
                    <Span className={cl.yandex_delivery_link_food}>
                        Яндекс еда
                    </Span>
                    <Span className={cl.yandex_delivery_link_rating}>4.8</Span>
                </A>
                <Typography
                    className={cn(
                        cl.yandex_delivery_time,
                        cl.yandex_delivery_time_left
                    )}
                    tag="h2"
                >
                    Время доставки
                </Typography>
                <Typography
                    className={cn(
                        cl.yandex_delivery_time,
                        cl.yandex_delivery_time_right
                    )}
                    tag="h2"
                >
                    от 31 мин
                </Typography>
            </Box>
        </Box>
    );
};
