import { FC } from "react";

import cl from "./index.module.scss";
import { OrderCallProps } from "./types";
import { Button } from "shared/ui";
import { cn } from "shared/lib";

export const OrderCall: FC<OrderCallProps> = (props) => {
    const { className } = props;

    const call = () => {
        console.log("Звонок заказан");
    };

    return (
        <Button onClick={call} className={cn(cl.order_call_root, className)}>
            Заказать звонок
        </Button>
    );
};

//todo Добавить реализацию
