import { lazy, Suspense } from "react";
import Loading from "../loading";

const lazyLoad = (importFunc: any) => {
    const Component = lazy(importFunc);
    return (props: any) => (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    );
};

export default lazyLoad;