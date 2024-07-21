import { Route, Routes, useLocation, useNavigate } from "react-router";
import pages from './page';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import React, { useEffect, useMemo } from "react";
import RouterString from "./routerString";
import { LoadingProvider } from "../contexts/loadingContext";

const RenderHeader = (isHeader: boolean) => {
    if (!isHeader) return <Header />;
};

const RenderFooter = (isFooter: boolean) => {
    if (!isFooter) return <Footer />;
};
const Routers = () => {
    const location = useLocation();
    const pathname = location.pathname;

    let navigate = useNavigate();

    useEffect(() => {
        const pageNotFound = pages.find((e) => e.path === pathname);
        if (!pageNotFound) return navigate(RouterString.PageNotFound);
    }, [pathname, navigate]);

    const isHistoryCheck = useMemo(() => {
        if (pathname.toLowerCase() !== RouterString.PageNotFound) return false;
        return true;
    }, [pathname]);

    return (
        <LoadingProvider>
            {RenderHeader(isHistoryCheck)}
            <Routes>
                {pages.map((item: any) => {
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={<item.component />}
                        />
                    );
                })}
            </Routes>
            {RenderFooter(isHistoryCheck)}
        </LoadingProvider>
    )

}

export default Routers

