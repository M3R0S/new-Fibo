import { FC } from "react";

import "./index.scss";
import { WithRouter, WidthStore } from "./providers";
import { Routing } from "pages";

// import { Layout } from "components";
// import { AppRouter } from "routes";

export const App: FC = () => (
    <WidthStore>
        <WithRouter>
            <Routing />
        </WithRouter>
    </WidthStore>
);
