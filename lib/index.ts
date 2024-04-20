export const formatNumber = (value: number): string => {
    const suffixes = ["", "K", "M", "B"];

    for (let index = suffixes.length - 1; index >= 0; index--) {
        const magnitude = Math.pow(1000, index);

        if (value >= magnitude) {
            const formattedValue = (value/magnitude).toFixed(index !== 0 && value % magnitude !== 0 ? 2 : 0);
            const result = formattedValue + suffixes[index]
            return result;
        }
    }
    return value.toString();
}

type reviewStructure = {
    uid: string,
    avatar: string,
    fullname: string,
    profession: string,
    reviewTitle: string,
    reviewContent: { __html: string | TrustedHTML }
}

export const reviewsData: reviewStructure[] = [
    {
        "uid": "1",
        "avatar": "https://golden-gates.sirv.com/pexels-david-kwewum-2743754.jpg",
        "fullname": "Max England",
        "profession": "Home owner",
        "reviewTitle": "Exceptional Service at Goldwater Home Loans",
        "reviewContent": {__html: `
        Everyone at Goldwater Home Loans has been incredible. The home buying process can be one of the most stressful times in an adult's life, but the partners and associates at this company will help make one of the biggest decisions in your life incredibly easy.
        <br/><br/>

        They are very knowledgeable about different types of loans and financing, and they are some of the nicest and most professional gentlemen I have met in this industry.
        <br/><br/>
        
        You will be well taken care of, and they will always fight for you like you are family. Give them a shot, and you will not regret it.
        `}
    },
    {
        "uid": "2",
        "avatar": "https://golden-gates.sirv.com/pexels-craig-adderley-3658708.jpg",
        "fullname": "Gabriella Bryson",
        "profession": "Home owner",
        "reviewTitle": "Exceptional Equity Access Assistance from Goldwater",
        "reviewContent": {__html: `
        Hi! Goldwater went above and beyond with helping me access equity in my home!
        <br/>
        <br/>
        Previously I thought I'd only be able to use the $$ towards home renovations or things of that nature, but Goldwater did a phenomenal job of educating me on the process and how I could use the funds. Goldwater's team was extremely patient and kind. Goldwater assisted me with customizing my loan term, so I did not have to start my loan over! If you are in the market to buy a new home or are seeking extra cash on hand, I highly recommend them. 10/10!! Thank you, Goldwater!!!!
        `}
    },
    {
        "uid": "3",
        "avatar": "https://golden-gates.sirv.com/model-2.jpg",
        "fullname": "Richard Appiah",
        "profession": "Home owner",
        "reviewTitle": "A Lifesaver in Mortgage Troubles",
        "reviewContent": {__html: `
            Goldwater is the lender you must choose. I was in desperate times because my previous lender out of nowhere decided to bump up my interest rate from 2.75 to 3.75 and luckily for me I met Calvin on facebook and he assured me all will be fine.
            <br/> <br/> He worked tirelessly to get me back the previous rate of 2.75 and I was able to close on time. I would definitely recommend Calvin and his team. He possesses this great work ethics and professionalism that is out of this world and on top of that he really cares about his clients. Look no further and let Goldwater take you to your new home!
        `}
    },
    {
        "uid": "4",
        "avatar": "https://golden-gates.sirv.com/man02.jpg",
        "fullname": "Samuel McDaniel",
        "profession": "Educator",
        "reviewTitle": "Strategic Financing Planning with Goldwater Homes",
        "reviewContent": {__html: "Goldwater Homes has helped me set up a great financing plan for future real estate investments. They did a great job understanding my needs and were very accessible. When I decide to get into the market I will definitely use their services!"}
    },
    {
        "uid": "5",
        "avatar": "https://golden-gates.sirv.com/man01.jpg",
        "fullname": "Angelisa Hall",
        "profession": "Entrepreneur",
        "reviewTitle": "Outstanding Service: A Testament to Professionalism",
        "reviewContent": {__html: "I have had an awesome experience with this company. The gentlemen are knowledgeable and professional with their interactions with me. They responded in a timely manner. More importantly, they get the job done. I highly recommend them to first-time homeowners and formal homeowners."}
    },
    {
        "uid": "6",
        "avatar": "https://golden-gates.sirv.com/couple.jpg",
        "fullname": "Alexis Rogers",
        "profession": "Realtor",
        "reviewTitle": "A Realtor's Trusted Partner",
        "reviewContent": {__html: "As a Realtor serving Metro Atlanta and surrounding neighborhoods, I make it a point to always direct my clients to Goldwater Home Loans! My first client sent their way was immediately approved for $10-15k more than the first lender she spoke with as well as provided a much better rate. I’m so confident in their skill set and service that I have even referred my mother to refinance her home, where she was able to save a few hundred dollars on her monthly mortgage :) 10/10 would definitely recommend 👍🏽"}
    }
]