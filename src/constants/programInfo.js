import logo from "../images/logo_calpoly.png" // add school logo to images folder and import here

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Cal Poly Extended Education"

export const schoolURL = 'https://bootcamp-extended.calpoly.edu/' // update with url of school's website

export const headline = "Learn to Code at Cal Poly Extended Education" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} helps students build programming skills with their part-time, online program. ${schoolName} partners with Skills Fund to offer tuition and cost of living financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Cal Poly focuses excusively on its coding bootcamp, powered by Fullstack Academy."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'calpolyfullstack_contact'

export const GATracking = 'UA-99445258-42'

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO ***** 

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "Coding Bootcamp",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKFSRIMM18",
        loanInfo: { 
            maxLoanAmt: 11910,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 8, 
                apr36: 10.94, 
                apr60: 12.41
            },
            '1': null
        }
    }
]


export const defaultLoanAmount = 10000
export const placeholder = '$10,000'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
}

export const hubspotFormId = "033b18d3-61b7-4070-ae77-fcb5142f4a50" // create Hubspot form, get form id after publishing

export const selectAProgram = "program_name" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to $11,910 for Cal Poly's Coding Bootcamp tuition."

export const paymentTable = {
    headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
    data: [
        {
            name: "PROGRAM 1",
            tuition: "$13,495",
            col: "$6,000",
            max: "$19,495"
        },
        {
            name: "PROGRAM 2",
            tuition: "$16,495",
            col: "$6,000",
            max: "$22,495"
        },
        {
            name: "PROGRAM 3",
            tuition: "$13,495",
            col: "--",
            max: "$13,495"
        },
    ],
    show: false
}

// ***** END LOAN CALC TEXT INFO *****

// ***** END LOAN APP AND CALC INFO ***** 


// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '10.94%',
    APRRange60: '12.41%',
    interestOnly: [{
        programName: '',
        APR36: '10.94%',
        financeCharge36: '$2,527.38',
        IOPayment36: '$77.91',
        FullMonthlyPayment36: '$330.67',
        APR60: '12.41%',
        financeCharge60: '$4,326.13',
        IOPayment60: '$95.25',
        FullMonthlyPayment60: '$226.07',
        LoanExampleAmt: '$10.400',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
        programLength: '6' // program length in months
    }],
    immediateRepayment: [{ 
        programName: 'PROGRAM NAME',
        APR36: 'XX.XX%',
        financeCharge36: '$X,XXX.XX',
        FullMonthlyPayment36: '$XXX.XX',
        APR60: 'XX.XX%',
        financeCharge60: '$X,XXX.XX',
        FullMonthlyPayment60: '$XXX.XX',
        LoanExampleAmt: '$XX,XXX',
        LoanExampleOFeeAmt: '$XXX',
        LoanExampleAmtPlusOFee: '$XX,XXX',
    }]
}

export const faq = {
    costOfLiving: false, // true if at least one program has cost of living included
    costOfLivingPrograms: 'Program1 and Program2', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: false, // true if immediate repayment is an option
    multipleLoanLengths: true, // true if 36 and 60 month options are both available
    multipleLoanTypes: false, // true if both IR and IO are available
    multiPrograms: false, // only true if there are multiple programs
    origFee: 0.04,

    // interest payment FAQ info
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APR36: '10.94%',
    APR60: '12.41%',
    IOPayment36: '$77.91',
    IOPayment60: '$95.25',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "For Cal Poly Extended Education's Coding Bootcamp",
            maxAmount: "$11,910",
            col: false,
            colAmount: "$6,000"
        }
    ]
}

// ***** END TERMS AND FAQ INFO ***** 

