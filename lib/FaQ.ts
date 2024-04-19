interface FAQItem {
    Q: string;
    A: { __html: string | TrustedHTML };
}

interface FAQs {
    feesAndProcess: FAQItem[];
    generalMortgageQuestions: FAQItem[];
    fhaAndFirstTimeHomebuyers: FAQItem[];
}

export const FaQs: FAQs = {
    feesAndProcess: [
        {
            Q: "What fees are involved in obtaining a mortgage?",
            A: { __html: "<p>Common fees include appraisal fees, title insurance, and closing costs. Budget 2%-3% of the purchase price to cover these fees.</p><p>At Goldwater, we provide transparency regarding all associated fees and help clients understand their financial obligations upfront to avoid any surprises during the closing process.</p>" }
        },
        {
            Q: "What is the process of getting a mortgage with Goldwater like?",
            A: { __html: "<p>At Goldwater, our process begins with a thorough consultation to assess your financial goals and determine the best mortgage options for your needs.</p><p>We guide you through the application, pre-approval, and underwriting stages, providing personalized support and expert advice along the way.</p><p>Our goal is to make the mortgage process seamless and stress-free, empowering you to achieve your homeownership dreams with confidence.</p>" }
        }
    ],
    generalMortgageQuestions: [
        {
            Q: "What are the benefits of working with a mortgage broker like Goldwater?",
            A: { __html: "<p>As a mortgage broker, Goldwater has access to a wide network of lenders and loan products, allowing us to find the best financing options tailored to your specific needs and circumstances.</p><p>We offer personalized guidance, competitive rates, and streamlined processes to simplify your home buying journey.</p>" }
        },
        {
            Q: "What is the difference between a fixed-rate and adjustable-rate mortgage (ARM)?",
            A: { __html: "<p>A fixed-rate mortgage maintains the same interest rate for the entire loan term, providing predictable monthly payments.</p><p>In contrast, an adjustable-rate mortgage (ARM) features an interest rate that may fluctuate over time, typically starting lower than fixed-rate options but potentially adjusting higher in the future.</p><p>Goldwater Mortgage assists clients in understanding the pros and cons of each option and selecting the most suitable mortgage for their needs.</p>" }
        },
        {
            Q: "How long does the mortgage process take from application to closing?",
            A: { __html: "<p>The timeline for the mortgage process can vary depending on factors such as the complexity of the loan, the efficiency of document submission, and the lender's processing times.</p><p>On average, the process takes between 30 to 45 days from application to closing. Goldwater Mortgage provides proactive communication and works diligently to expedite the process whenever possible.</p>" }
        }
    ],

    fhaAndFirstTimeHomebuyers: [
        {
            Q: "What is a FHA loan, and how can Goldwater Mortgage help first-time homebuyers secure one?",
            A: { __html: "<p>An FHA loan is a mortgage insured by the Federal Housing Administration, designed to make homeownership more accessible, particularly for first-time buyers.</p><p>At Goldwater, we specialize in FHA loans and guide first-time homebuyers through the entire process, offering expert advice and personalized assistance every step of the way.</p>" }
        },
        {
            Q: "What credit score do I need to qualify for a mortgage?",
            A: { __html: "<p>While specific credit score requirements vary depending on the type of loan and lender, generally a credit score of 620 or higher is recommended for conventional mortgages.</p><p>However, FHA loans accept lower credit scores, making them accessible to more borrowers. At Goldwater, we work with clients to improve their credit scores and explore all available options. We never say no, we help you get there.</p>" }
        },
        {
            Q: "How much of a down payment is required to buy a home?",
            A: { __html: "<p>The amount of down payment required depends on the type of loan and lender. Conventional loans typically require a down payment of at least 3% to 5% of the home's purchase price, while FHA loans require as little as 3.5% down.</p><p>Goldwater Mortgage assists clients in determining the best down payment strategy based on their financial situation and loan preferences.</p>" }
        },
        {
            Q: "Can I get pre-approved for a mortgage?",
            A: { __html: "<p>Absolutely! Getting pre-approved for a mortgage is highly recommended as it gives you a clear understanding of your budget and strengthens your offer when shopping for a home.</p><p>Goldwater offers pre-approval services that do not adversely affect your credit, helping you navigate the pre-approval process efficiently and confidently.</p>" }
        },
        {
            Q: "What documents do I need to apply for a mortgage?",
            A: { __html: "<p>Commonly required documents include proof of income, such as pay stubs or tax returns, proof of assets, such as bank statements, and documentation of employment history.</p><p>At Goldwater Mortgage, we provide a comprehensive checklist and guide clients through the document submission process to ensure a smooth application process.</p>" }
        }
    ]
}