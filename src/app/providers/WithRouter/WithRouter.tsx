import { FC, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { WithRouterProps } from ".";

export const WithRouter: FC<WithRouterProps> = ({ children }) => (
    <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
    </BrowserRouter>
);

//todo #1 ЗАМЕНИТЬ ЛОАДЕР
