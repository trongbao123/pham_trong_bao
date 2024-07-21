
/**
    *Unnecessary Re-computations:
    *getPriority:
      -This function is called multiple times within the useMemo hook and the map function for each balance. 
      -This leads to redundant calculations, especially if the getPriority function is computationally expensive.
    *sortedBalances: 
      -The useMemo hook is used to memoize the sortedBalances array, but the dependency array includes prices, which is unnecessary. 
      -The sorting logic relies only on balances, so prices should be excluded.
    *Inefficient Sorting:
    *sort: 
      -The sorting logic within the useMemo hook uses a nested if statement and multiple calls to getPriority. 
      -This could be simplified and potentially optimized by using a single comparison function.
    *Redundant Mapping:
    *formattedBalances: 
      -This array is created by mapping over sortedBalances to add a formatted property. 
      -However, this formatting can be done directly within the map function that creates the rows array, eliminating the need for a separate mapping step.
*/

//The code has been revised
interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string;
}

interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
    usdValue: number;
}

interface Props extends BoxProps {
    children?: React.ReactNode;
}

const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();

    const priorityMap = {
        'Osmosis': 100,
        'Ethereum': 50,
        'Arbitrum': 30,
        'Zilliqa': 20,
        'Neo': 20,
    };

    const getPriority = (blockchain: string): number => {
        return priorityMap[blockchain] || -99;
    };

    const sortedBalances = useMemo(() => {
        return balances
            .filter((balance: WalletBalance) => {
                const balancePriority = getPriority(balance.blockchain);
                return balancePriority > -99 && balance.amount > 0;
            })
            .sort((lhs: WalletBalance, rhs: WalletBalance) => {
                const leftPriority = getPriority(lhs.blockchain);
                const rightPriority = getPriority(rhs.blockchain);
                return rightPriority - leftPriority;
            });
    }, [balances]);

    const rows = sortedBalances.map((balance: WalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
            <WalletRow
                className={classes.row}
                key={index}
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.amount.toFixed()}
            />
        );
    });

    return (
        <div {...rest}>
            {rows}
        </div>
    );
};