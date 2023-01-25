import { FC } from "react";

import "./index.scss";
import { WithRouter, WidthStore } from "./providers";
import { Routing } from "pages";
import { Header } from "widgets";
import { Layout, Main } from "shared/ui";

// import { Layout } from "components";
// import { AppRouter } from "routes";

export const App: FC = () => (
    <WidthStore>
        <WithRouter>
            <Layout>
                <Header />
                <Main>
                    <Routing />
                </Main>
            </Layout>
        </WithRouter>
    </WidthStore>
);
