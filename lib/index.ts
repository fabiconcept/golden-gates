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
    reviewContent: string
}

export const reviewsData: reviewStructure[] = [
    {
        "uid": "1",
        "avatar": "https://golden-gates.sirv.com/pexels-david-kwewum-2743754.jpg",
        "fullname": "Jamal Thompson",
        "profession": "Software Engineer",
        "reviewTitle": "Quick pre-approval",
        "reviewContent": "Quick pre-approval, invaluable agent support, and a smooth transition to my dream home. Exceptional service from start to finish!"
    },
    {
        "uid": "2",
        "avatar": "https://golden-gates.sirv.com/pexels-craig-adderley-3658708.jpg",
        "fullname": "Maria Rodriguez",
        "profession": "Financial Analyst",
        "reviewTitle": "Effortless pre-approval",
        "reviewContent": "Effortless pre-approval, expert guidance, and a seamless move-in process. This mortgage service delivers a five-star home buying experience!"
    },
    {
        "uid": "3",
        "avatar": "https://golden-gates.sirv.com/model-2.jpg",
        "fullname": "Kelsey White",
        "profession": "Marketing Specialist",
        "reviewTitle": "Top-notch experience",
        "reviewContent": "Top-notch experience! Efficient pre-approval, outstanding agent guidance, and a joyful move-in. Highly recommend for a pleasant home buying journey!"
    },
    {
        "uid": "4",
        "avatar": "https://golden-gates.sirv.com/man02.jpg",
        "fullname": "Alejandro Rodriguez",
        "profession": "Educator",
        "reviewTitle": "Stress-free process",
        "reviewContent": "The entire process, from pre-approval to closing, was stress-free and efficient. I highly recommend this mortgage company for a smooth and positive home buying experience."
    },
    {
        "uid": "5",
        "avatar": "https://golden-gates.sirv.com/man01.jpg",
        "fullname": "David Miller",
        "profession": "Entrepreneur",
        "reviewTitle": "Excellent communication",
        "reviewContent": "I was impressed by the excellent communication throughout the entire process. The team kept me informed and answered all my questions promptly and thoroughly. Highly satisfied!"
    },
    {
        "uid": "6",
        "avatar": "https://golden-gates.sirv.com/couple.jpg",
        "fullname": "Emily Garcia",
        "profession": "Healthcare professional",
        "reviewTitle": "Highly recommend",
        "reviewContent": "From pre-qualification to closing, the process was smooth and efficient. The team was professional, knowledgeable, and always available to answer my questions. I highly recommend this mortgage company!"
    }
]