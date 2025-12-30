import React from 'react'
import { useId } from 'react';
//as in this projects 2 exactly sam etype of boxes are reuired ie from and to ...so instead of making 2 times we have made a modular component so that we can reuse it
function InputBox({ //these are values which needs to be given for this fn as parameter
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   
    const amtinputid=useId() //only for optimization..generates random strings for binding
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amtinputid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amtinputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))} //and operator is used to make sure that fn will only run when some value is passed
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
                    
                >
                    
                        {currencyOptions.map((currency)=>( //here loop is implemented on currencyoption
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;