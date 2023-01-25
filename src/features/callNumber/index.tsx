import { FC } from "react";

import cl from "./index.module.scss";
import { CallNumberProps } from "./types";
import { Button } from "shared/ui";
import { cn } from "shared/lib";
import { useCopyText } from "shared/lib/hooks";

export const CallNumber: FC<CallNumberProps> = (props) => {
    const { className } = props;

    const { copyText, value } = useCopyText({
        defaultText: "+7 (978)-779-08-23",
        writeText: "+79787790823",
    });

    const handleCopyTest = () => {
        copyText(3000);
    };

    return (
        <Button
            onClick={handleCopyTest}
            className={cn(cl.call_number_root, className)}
        >
            {value}
        </Button>
    );
};
