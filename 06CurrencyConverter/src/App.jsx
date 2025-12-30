import { useState } from 'react'
import './App.css'
import "tailwindcss";
import { InputBox } from './Components';
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setamount]=useState(0)
  const [from,setfrom]=useState("usd")
  const [To,setto]=useState("inr")
  const [convertedAmt,setconvertedAmt]=useState(0)
  const CurrencyInfo=useCurrencyInfo(from) //returns data which is currency key from json
  const options = Object.keys(CurrencyInfo) //all the keys are extracted through this for displaying as options
  
  const swap =()=>{
    setfrom(To) //swapping of from and to is done here
    setto(from)
    setconvertedAmt(amount)
    setamount(convertedAmt)
  }
  const convert=()=>{
    setconvertedAmt(amount*CurrencyInfo[To])
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setfrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setto(currency)}
                                selectCurrency={To}
                                amountDisable
                                onAmountChange={(amount)=>setamount(amount)}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
