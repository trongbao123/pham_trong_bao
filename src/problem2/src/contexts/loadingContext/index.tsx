
import React, { createContext, useContext, ReactNode, useState } from 'react';
import Loading from '../../components/common/loading';


interface LoadingContextProps {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextProps>({
    isLoading: false,
    setIsLoading: () => { },
});

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading === true && <Loading />}
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = (): LoadingContextProps => useContext(LoadingContext);