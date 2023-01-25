import { ClassNames } from "./types";

const classNames: ClassNames = (...classArray) => {
    return classArray.filter((className) => className !== undefined).join(" ");
};

export { classNames as cn };
