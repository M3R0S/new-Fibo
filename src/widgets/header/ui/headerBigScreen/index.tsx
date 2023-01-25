import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import cl from "./index.module.scss";
import { TIMEOUT_ANIMATION_SCROLL_HEADER } from "widgets/header/lib/constants";
import { setShowHeaderInfo } from "widgets/header/model/showHeaderInfoSlice";
import { useAppDispatch, useAppSelector, useScrollDirection } from "shared/lib/hooks";
import { Container } from "shared/ui"; 
import { HeaderInfo } from "./headerInfo";

export const HeaderBigScreen: FC = () => {
    const dispatch = useAppDispatch();
    const isShowHeaderInfo = useAppSelector(state => state.showHeaderInfo.isShowHeaderInfo)
    const { isScrollDown } = useScrollDirection();

    const onEnabledHeaderInfo = () => {
        dispatch(setShowHeaderInfo(true));
    };

    const onDisabledHeaderInfo = () => {
        dispatch(setShowHeaderInfo(false));
    }

    const transitionClassNames: CSSTransitionClassNames = {
        enterActive: cl.header_enter_active,
        exitActive: cl.header_exit_active,
    };

    return (
        <CSSTransition
            in={isScrollDown}
            timeout={TIMEOUT_ANIMATION_SCROLL_HEADER}
            onExiting={onEnabledHeaderInfo}
            onEntered={onDisabledHeaderInfo}
            classNames={transitionClassNames}
        >
            <Container tag="header" className={cl.header}>
                {isShowHeaderInfo && <HeaderInfo />}
                {/* <HeaderMenu /> */}
            </Container>
        </CSSTransition>
    );
};
