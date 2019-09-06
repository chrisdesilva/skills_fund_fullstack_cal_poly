import React, { useState } from 'react'
import LoanCalcPaymentTable from './loancalcpaymenttable'
import { UnmountClosed as Collapse } from 'react-collapse'
import { 
    defaultLoanAmount, 
    faq,
    interestRates,
    paymentTable,
    placeholder,
    programLoanInfo,
    programMaxText
} from '../constants/programInfo'

const LoanCalculator = () => {

    const [loanAmount, setLoanAmount] = useState(defaultLoanAmount)
    const [loanOptions, showLoanOptions] = useState(false)
    const minLoanAmt = 2000
    const [interestPayment, setInterestPayment] = useState({ payment36: null, payment60: null })
    const [monthlyPayment, setMonthlyPayment] = useState({ payment36: null, payment60: null })
    const [loanType, setLoanType] = useState('0') // default to 0 for interest-only, 1 for immediate repayment
    const [multiMetros, showMetros] = useState(false)
    const [loanInformation, setLoanInformation] = useState(programLoanInfo[0].loanInfo)
    const [programName, setProgramName] = useState(programLoanInfo[0].name)

 const selectProgram = e => {
    let program = e.target.value
    switch(program) {
        case programLoanInfo[0].name: // use this info for default case at bottom
            setLoanInformation(programLoanInfo[0].loanInfo)
            setLoanType('0')
            setProgramName(programLoanInfo[0].name)
            break;
        case programLoanInfo[1].name: 
            setLoanInformation(programLoanInfo[1].loanInfo)
            setLoanType('0')
            setProgramName(programLoanInfo[1].name)
            showMetros('Program 2')
            break;
        case programLoanInfo[2].name: 
            setLoanInformation(programLoanInfo[2].loanInfo)
            setLoanType('0')
            setProgramName(programLoanInfo[2].name)
            showMetros('Program 3')
            break;
        default: // info below needs to match info from first program
            setLoanInformation(programLoanInfo[0].loanInfo)
            setLoanType('0')
            setProgramName(programLoanInfo[0].name)
            showMetros(false)
            break;
    }
}

 const selectMetro = e => {
    let metro = e.target.value
    if(programName === "Program 2"){
        switch(metro){
            case "Metro 1":
                setLoanInformation({
                    maxLoanAmt: 10995,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 11.16, 
                        apr60: 12.51
                    },
                    '1': {
                        apr36: 11.25,
                        apr60: 12.55
                    }
                })
                break;
            case "Metro 2":
                setLoanInformation({
                    maxLoanAmt: 9995,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 10.16, 
                        apr60: 11.51
                    },
                    '1': {
                        apr36: 10.25,
                        apr60: 11.55
                    }
                })
                break;
            default:
                setLoanInformation({
                    maxLoanAmt: 10995,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 11.16, 
                        apr60: 12.51
                    },
                    '1': {
                        apr36: 11.25,
                        apr60: 12.55
                    }
                })
                break;   
        }
    }
    if(programName === "Program 3"){
        switch(metro){
            case "Metro 1":
                setLoanInformation({
                    maxLoanAmt: 15995,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 11.16, 
                        apr60: 12.51
                    },
                    '1': null
                })
                break;
            case "Metro 2":
                setLoanInformation({
                    maxLoanAmt: 8995,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 9.16, 
                        apr60: 10.51
                    },
                    '1': null
                })
                break; 
            default:
                setLoanInformation({
                    maxLoanAmt: 15995,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 11.16, 
                        apr60: 12.51
                    },
                    '1': null
                })
                break;  
        }
    }
}


    const updateLoanAmount = e => {
        setLoanAmount(Number(e.target.value))
    }

    const calculateMonthlyPayment = () => {
        const monthlyRate36 = (interestRates.ir36 / 100) / 12
        const monthlyRate60 = (interestRates.ir60 / 100) / 12
        const borrowedAmount = loanAmount || defaultLoanAmount
        const totalLoan = borrowedAmount * (1 + faq.origFee)
        let pv = totalLoan
        let payment36 = Number((monthlyRate36 * pv) / (1 - (1 / Math.pow(1 + monthlyRate36, 36)))).toFixed(2)
        let payment60 = Number((monthlyRate60 * pv) / (1 - (1 / Math.pow(1 + monthlyRate60, 60)))).toFixed(2)
        setMonthlyPayment({ payment36: payment36, payment60: payment60 })
        setLoanAmount(borrowedAmount)
        calculateInterest()
        showLoanOptions(true)
    }

    const calculateInterest = () => {
        let interest36 = (loanAmount * (1 + faq.origFee) / 12 * (8.99 / 100)).toFixed(2)
        let interest60 = (loanAmount * (1 + faq.origFee) / 12 * (10.99 / 100)).toFixed(2)
        setInterestPayment({payment36: interest36, payment60: interest60})
    }

    const calculateUpdatedAmount = () => {
        setLoanAmount(defaultLoanAmount)
        showLoanOptions(false)
    }

    return (
        <div className="flex flex-col justify-center m-2 lg:m-10">
            <div className="shadow-xl rounded h-auto p-8 flex flex-col items-center">
                <h3 className="text-center">Calculate Your Monthly Payments</h3>

                {/* UPDATE LOAN AMOUNTS AND COST OF LIVING BY PROGRAM BELOW */}
                <p className="text-center">{programMaxText}</p>
                {paymentTable.show && <LoanCalcPaymentTable />}

                <div className="flex flex-col justify-center w-full md:w-1/3">
                
                {/* ADD OR REMOVE PROGRAMS BELOW */}
                {faq.multiPrograms &&
                    <>
                        <label className="text-xs text-center">Select a Program:</label>
                        <select className="rounded border-2 border-primary mb-5 bg-white text-primary text-center" onChange={selectProgram}>
                            {programLoanInfo.map(program => {
                                return <option key={program.name} value={program.name}>{program.name}</option>
                            })}
                        </select>
                    </>
                }

                {/* ADD OR REMOVE METROS BELOW */}
                    <Collapse isOpened={multiMetros === 'Program 2'} springConfig={{stiffness: 150, damping: 30}}>
                        <div className="flex flex-col">
                            <label className="text-xs text-center">Select a Metro:</label>
                            <select className="rounded border-2 border-primary mb-5 bg-white text-primary text-center" onChange={selectMetro}>
                                <option value="Metro 1">Metro 1</option>
                                <option value="Metro 2">Metro 2</option>
                            </select>
                        </div>
                    </Collapse>

                    <Collapse isOpened={multiMetros === 'Program 3'} springConfig={{stiffness: 150, damping: 30}}>
                        <div className="flex flex-col">
                            <label className="text-xs text-center">Select a Metro:</label>
                            <select className="rounded border-2 border-primary mb-5 bg-white text-primary text-center" onChange={selectMetro}>
                                <option value="Metro 1">Metro 1</option>
                                <option value="Metro 2">Metro 2</option>
                            </select>
                        </div>
                    </Collapse>
                
                </div>


                {/* DROPDOWN MENU FOR LOAN TYPES */}
                {loanInformation['0'] && loanInformation['1'] &&
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <label className="text-xs text-center">Select a Loan Type:</label>
                        <select className="rounded border-2 border-primary mb-5 bg-white text-primary text-center" onChange={(e) => setLoanType(e.target.value)}>
                            <option value="0">Interest-Only</option>
                            <option value="1">Immediate Repayment</option>
                        </select>
                    </div>
                }

                {/* LOAN AMOUNT INPUT */}
                <div className="flex flex-col justify-center items-center w-1/2 md:w-1/3">
                    <Collapse isOpened={!loanOptions}>
                        <label className="text-xs text-center">Enter a loan amount:</label>
                    </Collapse>
                    <Collapse isOpened={loanOptions}>
                        <label className="text-center">Loan amount entered: {loanAmount}</label>
                    </Collapse>
                    <Collapse isOpened={!loanOptions}>
                        <input type="number" onChange={updateLoanAmount} className="rounded border-2 border-primary p-3 mb-5 text-primary text-center text-2xl" maxLength="6" placeholder={placeholder} />
                    </Collapse>
                </div>

                <Collapse isOpened={minLoanAmt > loanAmount || loanAmount > loanInformation.maxLoanAmt}>
                    <p className="text-red-500 text-xs m-0 pb-4">Please enter a number between {minLoanAmt} and {loanInformation.maxLoanAmt}</p>
                </Collapse>
                {!loanOptions ? 
                    <button className="opacityApply uppercase bg-primary p-3 mb-4 lg:ml-4 w-48 rounded-full shadow-lg text-white" onClick={calculateMonthlyPayment}>Calculate payments</button> :
                    <button className="opacityApply uppercase bg-black p-3 mb-4 lg:ml-4 w-48 rounded-full shadow-lg text-white" onClick={calculateUpdatedAmount}>Update Amount</button>
                }

                <p className="m-0 text-center">Students may borrow from ${minLoanAmt} to ${loanInformation.maxLoanAmt}</p>
                {loanType === "0" && <p className="text-xs text-center hidden lg:inline mb-2">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>}
                {loanType === "1" && <p className="text-xs text-center hidden lg:inline mb-2">Start making full payments (interest + principal) about one month after disbursement.</p>}
                <Collapse isOpened={loanOptions} springConfig={{stiffness: 150, damping: 40}}>
                    <div className="px-4 md:px-12 pt-8 flex flex-col lg:flex-row">
                        
                        {/* OPTION 1, 36 MONTHS */}
                        {loanInformation.loanTerm36 &&
                            <div className={loanInformation.loanTerm60 ? "flex flex-col mb-8 lg:mb-0 lg:mx-6" : "flex flex-col"}>
                                <h3 className="text-primary text-center font-normal">Option 1</h3>
                                <h4 className="text-primary text-center font-normal">36-Month Fixed Rate Loan</h4>
                                <p className="m-0 text-center">{interestRates.ir36}% Interest Rate, {loanInformation[loanType]['apr36']}% APR*</p>
                                {loanType === "0" && <p className="text-xs text-center lg:hidden mb-2">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>}
                                {loanType === "1" && <p className="text-xs text-center lg:hidden mb-2">Start making full payments (interest + principal) about one month after disbursement.</p>}
                                <p className="font-bold text-center my-4">Payments:</p>
                                    <div className="flex justify-around">
                                        {loanType === "0" && 
                                            <div className="flex flex-col items-center">
                                                <h4 className="border-primary border-b text-center font-normal mx-5 mb-3">Interest-Only Period</h4>
                                                {loanAmount > minLoanAmt && loanAmount < loanInformation.maxLoanAmt ?
                                                    <p className="text-primary text-2xl mb-0">${interestPayment.payment36}</p>
                                                        :
                                                    <p className="text-primary text-2xl mb-0">--</p>
                                                }
                                                <p className="text-xs">per month</p>
                                            </div>
                                        }
                                        <div className="flex flex-col items-center">
                                            <h4 className="border-primary border-b text-center font-normal mx-5 mb-3">Full Payment Period</h4>
                                            {loanAmount > minLoanAmt && loanAmount < loanInformation.maxLoanAmt ?
                                                    <p className="text-primary text-2xl mb-0">${monthlyPayment.payment36}</p>
                                                        :
                                                    <p className="text-primary text-2xl mb-0">--</p>
                                                }
                                            <p className="text-xs">per month</p>
                                        </div>
                                    </div>
                            </div>
                        }

                        {/* OPTION 2, 60 MONTHS */}
                        {loanInformation.loanTerm60 &&
                            <div className="flex flex-col lg:mx-6">
                                <h3 className="text-primary text-center lg:mt-0 font-normal">{loanInformation.loanTerm36 && loanInformation.loanTerm60 ? "Option 2" : "Option 1"}</h3>
                                <h4 className="text-primary text-center lg:mt-0 font-normal">60-Month Fixed Rate Loan</h4>
                                <p className="m-0 text-center">{interestRates.ir60}% Interest Rate, {loanInformation[loanType]['apr60']}% APR*</p>
                                <p className="text-xs text-center lg:hidden">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>
                                <p className="font-bold text-center my-4">Payments:</p>
                                <div className="flex justify-around">
                                        {loanType === "0" && 
                                            <div className="flex flex-col items-center">
                                                <h4 className="border-primary border-b text-center font-normal mx-5 mb-3">Interest-Only Period</h4>
                                                {loanAmount > minLoanAmt && loanAmount < loanInformation.maxLoanAmt ?
                                                    <p className="text-primary text-2xl mb-0">${interestPayment.payment60}</p>
                                                        :
                                                    <p className="text-primary text-2xl mb-0">--</p>
                                                }
                                                <p className="text-xs">per month</p>
                                            </div>
                                        }
                                        <div className="flex flex-col items-center">
                                            <h4 className="border-primary border-b text-center font-normal mx-5 mb-3">Full Payment Period</h4>
                                            {loanAmount > minLoanAmt && loanAmount < loanInformation.maxLoanAmt ?
                                                    <p className="text-primary text-2xl mb-0">${monthlyPayment.payment60}</p>
                                                        :
                                                    <p className="text-primary text-2xl mb-0">--</p>
                                                }
                                            <p className="text-xs">per month</p>
                                        </div>
                                    </div>
                            </div>
                        }

                    </div>
                </Collapse>
                <Collapse isOpened={loanOptions} springConfig={{stiffness: 150, damping: 40}}>
                    <p className="text-center text-xs m-0 p-3"><i>*The Annual Percentage Rate (APR) shown is estimated based on the loan type, origination fee, and approximate program length. The actual APR may be slightly different than the example provided based on loan type and program length. To learn how an Annual Percentage Rate (APR) is calculated, <a href="https://skills.fund/resources/how-is-an-apr-calculated" rel="noreferrer noopener">visit our blog.</a></i></p>
                </Collapse>
            </div>
        </div>
    )
}


export default LoanCalculator