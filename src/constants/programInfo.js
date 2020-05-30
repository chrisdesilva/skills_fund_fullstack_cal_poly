import logo from "../images/logo_calpoly.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"
export const showPopup = false

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Cal Poly Extended Education"

export const schoolURL = "https://bootcamp-extended.calpoly.edu/" // update with url of school's website

export const skfURL = "https://calpolyextendedbootcamp.skills.fund/" // update with Skills Fund url

export const headline = "Learn to Code at Cal Poly Extended Education" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} helps students build programming skills with their part-time, online program. ${schoolName} partners with Skills Fund to offer tuition financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Coding Bootcamp and Cyber Bootcamp, powered by Fullstack Academy.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "calpolyfullstack_contact"

export const GATracking = "UA-68312423-1"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Coding Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SKFSRIMM18",
    loanInfo: {
      maxLoanAmt: 11910,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 9,
        apr36: 11.34,
        apr60: 12.73,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          maxLoanAmt: 11910,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 9,
            apr36: 11.34,
            apr60: 12.73,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Cyber Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SKFSCPEECB20",
    loanInfo: {
      maxLoanAmt: 11910,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 9,
        apr36: 11.34,
        apr60: 12.73,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          maxLoanAmt: 11910,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 9,
            apr36: 11.34,
            apr60: 12.73,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
]

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}

export const hubspotFormId = "9a79478a-e29c-429c-a1c7-291bb8fac14f" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_calypoly_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $11,910 for Cal Poly's Coding Bootcamp or Cyber Bootcamp tuition."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** END LOAN APP AND CALC INFO *****

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.34%",
  APRRange60: "12.73%",
  interestOnly: [
    {
      programName: "",
      APR36: "10.94%",
      financeCharge36: "$2,527.38",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "12.41%",
      financeCharge60: "$4,326.13",
      IOPayment60: "$95.25",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10.400",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "6", // program length in months
    },
  ],
  immediateRepayment: [
    {
      programName: "PROGRAM NAME",
      APR36: "XX.XX%",
      financeCharge36: "$X,XXX.XX",
      FullMonthlyPayment36: "$XXX.XX",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$XX,XXX",
      LoanExampleOFeeAmt: "$XXX",
      LoanExampleAmtPlusOFee: "$XX,XXX",
    },
  ],
}

export const interestRateCards = {
  // 3 month program, 3 months grace for term details section
  APR36: "8.79 - 16.30%",
  APR60: "9.41 - 16.84%",
  immediateRepayment: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "9.82% - 17.21%",
    // APR60: "10.34% - 17.24%",
  },
  interestOnly: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "8.87 - 16.29%",
    // APR60: "9.96 - 16.87%",
  },
  deferred: {
    int36: "7.00 - 14.25%",
    int60: "8.75 - 15.50%",
    // APR36: "9.24 - 16.43%",
    // APR60: "9.90 - 16.68%",
  },
}

export const previewText = {
  headline: "Simple. Flexible.",
  subheadline:
    "We offer loans tailored to your needs. Preview your options and select the right financing solution for you.",
  // headline: "Simple. Clear.",
  // subheadline:
  //   "We offer a straightforward loan so you can focus on your program and transform your future.",
  cards: [
    {
      heading: "Deferred Repayment",
      body: "Make no payments while you study and for three months after.",
    },
    {
      heading: "Interest Only",
      body:
        "Make low interest-only payments while you study and for three months after completing your program.",
    },
    // {
    //   heading: "Immediate Repayment",
    //   body: "Start paying your loan back one month after your program begins.",
    // },
    // {
    //   heading: "36-Month Loan",
    //   // body:
    //   //   "Pay off your loan faster. Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    //   body:
    //     "Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    // },
    // {
    //   heading: "60-Month Loan",
    //   body:
    //     "Make smaller monthly payments. Start paying your loan back one month after your program begins, and make 60 monthly payments until your loan is repaid.",
    // },
  ],
}

export const faq = {
  costOfLiving: false, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: false, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: false, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  origFee: 0.05,

  // interest payment FAQ info
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.34%",
  APR60: "12.37%",
  IOPayment36: "$78.66",
  IOPayment60: "$96.16",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName:
        "For Cal Poly Extended Education's Coding Bootcamp and Cyber Bootcamp",
      maxAmount: "$11,910",
      col: false,
      colAmount: "$6,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****
