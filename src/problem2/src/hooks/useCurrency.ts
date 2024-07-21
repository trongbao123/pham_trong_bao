import { useState, useEffect } from 'react';
import pricesApi from '../services/prices';
import Notification from '../components/common/notification';
import { useLoading } from '../contexts/loadingContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import delay from '../utils/delay';
interface TokenPrice {
    currency: string;
    date: string;
    price: number;
}
const useCurrency = () => {
    const [tokenPrices, setTokenPrices] = useState<TokenPrice[]>([]);
    const [estimatedAmount, setEstimatedAmount] = useState('');

    const { setIsLoading } = useLoading();

    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: yupResolver(yup.object({
            amount: yup
                .number()
                .required('Please enter an amount'),
            fromCurrency: yup
                .string()
                .required('Please select a currency')
                .notOneOf([yup.ref('toCurrency')], 'Currencies must be different'),
            toCurrency: yup
                .string()
                .required('Please select a currency')
                .notOneOf([yup.ref('fromCurrency')], 'Currencies must be different'),
        })),
    });

    const fetchPrices = async () => {
        setIsLoading(true);
        try {
            const response: any = await pricesApi({});
            if (response) {
                const uniqueCurrencies = response.reduce((unique: TokenPrice[], current: TokenPrice) => {
                    if (!unique.some(item => item.currency === current.currency)) unique.push(current);
                    return unique;
                }, []);
                setTokenPrices(uniqueCurrencies);
            } else throw response
        } catch (error: any) {
            Notification({
                type: 'error',
                message: `${error}`
            })
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPrices();
    }, []);

    const calculateExchangeRate = (fromCurrency: string, toCurrency: string) => {
        if (fromCurrency && toCurrency) {
            const rate = parseFloat(toCurrency) / parseFloat(fromCurrency);
            return rate;
        } else return 0;
    };
    const onSubmit = async (data: any) => {
        const { fromCurrency, toCurrency, amount } = data;
        setIsLoading(true);
        try {
            const exchangeRate = calculateExchangeRate(fromCurrency, toCurrency);
            await delay(2000);
            if (exchangeRate !== null) {
                const estimatedValue = (parseFloat(amount) * exchangeRate).toFixed(4);
                setEstimatedAmount(estimatedValue);
            }

            Notification({
                type: 'success',
                message: 'Swap successful!',
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
        tokenPrices,
        estimatedAmount,
        handleSubmit,
        control,
        errors,
        onSubmit
    }
}

export default useCurrency;