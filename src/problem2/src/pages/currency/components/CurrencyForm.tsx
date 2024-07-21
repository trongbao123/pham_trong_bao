import { Form, Input, Select } from 'antd'
import React from 'react'
import ButtonCustom from '../../../components/common/button'
import useCurrency from '../../../hooks/useCurrency';
import { Controller } from 'react-hook-form';
import { tokenIcon } from '../../../data/mockData';

const CurrencyForm = () => {

    const {
        tokenPrices,
        handleSubmit,
        control,
        errors,
        estimatedAmount,
        onSubmit
    } = useCurrency();

    const renderOptionCurrency = () => {
        return tokenPrices.map((item: any, index) => {
            return <Select.Option
                value={item.price}
                key={`${item.currency}-${index}`}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='token-icon'>
                        <img src={tokenIcon[item.currency]} alt="img" />
                    </div>
                    {item.currency}
                    <span style={{ marginLeft: '10px' }}>{item.price}</span>
                </div>
            </Select.Option>
        })
    };

    return (
        <div id="form-currency" className="form">
            <h3>Exchange To Currency Calculator</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="quform-elements">
                    <Form.Item >
                        <Controller
                            rules={{ required: { value: true, message: 'Please select currency!' } }}
                            name="fromCurrency"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    defaultValue={"Select Currency"}
                                    value={field.value}
                                    onChange={field.onChange}
                                >
                                    {renderOptionCurrency()}
                                </Select>
                            )} />
                        {errors.fromCurrency && <span className="error">{(errors as any)?.fromCurrency?.message}</span>}
                    </Form.Item>

                    <Form.Item >
                        <Controller
                            rules={{ required: { value: true, message: 'Please select currency!' } }}
                            name="toCurrency"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    defaultValue={"Select Currency"}
                                    value={field.value}
                                    onChange={field.onChange}
                                >
                                    {renderOptionCurrency()}
                                </Select>
                            )} />
                        {errors.toCurrency && <span className="error">{(errors as any)?.toCurrency?.message}</span>}
                    </Form.Item>

                    <Form.Item >
                        <Controller
                            rules={{ required: { value: true, message: 'Please enter amount!' } }}
                            name={"amount" as any}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="number"
                                    onChange={field.onChange}
                                    value={(field as any).value}
                                    placeholder="Enter Amount"
                                />
                            )}
                        />
                        {(errors as any).amount && <span className="error">{(errors as any)?.amount?.message}</span>}
                    </Form.Item>

                    {estimatedAmount && <div className="results">
                        <p>Estimated Amount:</p>
                        <p>{estimatedAmount}</p>
                    </div>}
                    <ButtonCustom width={"100%"} type="submit">CONVERT</ButtonCustom>
                </div>
            </form>
        </div>
    )
}

export default
    CurrencyForm