import { FC } from "react";

import "./index.scss";
import { WithRouter } from "./providers";
import { Routing } from "pages";

// import { Layout } from "components";
// import { AppRouter } from "routes";

export const App: FC = () => (
    <WithRouter>
        <Routing />
    </WithRouter>
);
