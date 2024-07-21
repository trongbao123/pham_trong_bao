import { useState } from "react";

type Options = {
    [key: string]: any
}
const useFAQS = (options: Options) => {

    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return {
        activeTab,
        handleTabClick
    }
}

export default useFAQS;