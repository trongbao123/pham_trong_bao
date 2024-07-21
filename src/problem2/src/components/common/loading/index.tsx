import { useEffect, useState } from "react";
import { Spin } from 'antd';

type IAppProps = {

}
const Loading = (props: IAppProps) => {

    const [percent, setPercent] = useState(-50);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPercent((v) => {
                const nextPercent = v + 5;
                return nextPercent > 150 ? -50 : nextPercent;
            });
        }, 100);
        return () => {
            clearTimeout(timeout);
        };
    }, [percent]);


    return (
        <Spin spinning={true} size='large' tip="Loading..." fullscreen />
    );
}

export default Loading;