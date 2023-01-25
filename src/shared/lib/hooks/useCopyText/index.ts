import { useState } from "react";
import { UseCopyText, CopyText } from "./types";

export const useCopyText: UseCopyText = ({ defaultText, writeText }) => {
    const [value, setValue] = useState<string>(defaultText);

    const copyText: CopyText = (duration = 3000) => {
        navigator.clipboard.writeText(writeText ? writeText : defaultText);

        setValue("Cкопировано");
        //todo Ограничить запуск таймеров
        setTimeout(() => {
            setValue(defaultText);
        }, duration);
    };
    return { value, copyText };
};
