import Notification from "../components/common/notification";
import { useLoading } from "../contexts/loadingContext";
import delay from "../utils/delay";

const useContact = () => {
    const { setIsLoading } = useLoading();

    const handleSubmit = async (e: any) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            await delay(2000);
            Notification({
                type: 'success',
                message: 'Thank you for your message! We will get back to you as soon as possible.',
            })
        } catch (error) {
            Notification({
                type: 'error',
                message: error as any,
            })
        } finally {
            setIsLoading(false);
        }
    }

    return {
        handleSubmit
    }
}

export default useContact;