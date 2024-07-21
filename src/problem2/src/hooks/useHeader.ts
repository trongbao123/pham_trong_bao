import { useState } from "react";
import Notification from "../components/common/notification";
import { useLoading } from "../contexts/loadingContext";
import delay from "../utils/delay";

const FIXED_HEIGHT = 80;
const useHeader = () => {
    const [navbar, setNavBar] = useState(false);
    const { setIsLoading } = useLoading();

    window.addEventListener("scroll", () => {
        if (window.scrollY > FIXED_HEIGHT) setNavBar(true);
        else setNavBar(false);
    });

    const handleBuyNow = async () => {
        setIsLoading(true);
        try {
            await delay(2000);
            Notification({
                type: 'warning',
                message: 'Functionality is evolving!'
            })
        } catch (error) {
            Notification({
                type: 'error',
                message: error as any,
            })
        } finally {
            setIsLoading(false);
        }
    };

    return {
        navbar,
        handleBuyNow
    }
}

export default useHeader