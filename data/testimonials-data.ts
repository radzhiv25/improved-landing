const IMAGE_BASE =
  "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page/testimonials";

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image?: string;
  fallbackLetter?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Abhipsha Jana",
    title: "Product Management @TATA Communications",
    quote:
      "If you're thinking of buying a house and are daunted by the whole process of searching, setting up visits and deciding which property is worthy of your investment, you should reach out to them. The real-estate market is full of brokers that will spam call you to death, who only want to sell you a property, sometimes even without taking your requirements into consideration. PropSoch takes a refreshing approach with the buyer's requirement at the centre, and the entire home buying journey becomes hassle-free to the point of being enjoyable.",
    image: `${IMAGE_BASE}/1.png`,
  },
  {
    name: "Ankur Anand",
    title: "Intelligent Homebuyer",
    quote:
      "Had a great experience with them. They were with me throughout the journey, right from the sourcing of the options, going over the pros and cons, site visits and then helping my shortlist based on my requirements. Prashant and Stuti were very prompt in their communications, answered my query with patience and the right details and always helped me move forward with the right facts and details about each project. Would highly recommend them for anyone starting their real estate investment journey",
    fallbackLetter: "A",
  },
  {
    name: "Arjun Singh",
    title: "Intelligent Homebuyer",
    quote:
      "Propsoch team helped a lot in finalizing my property. Rashmi from the team was especially helpful with timely insights and inputs that made my experience really smooth.",
    fallbackLetter: "A",
  },
  {
    name: "Vivek Locheb",
    title: "CEO @Pincode",
    quote:
      "I found Ashish very helpful and knowledgeable, he simplifies all the steps of home buying, someone you want in your corner.",
    image: `${IMAGE_BASE}/32.png`,
  },
  {
    name: "Bhavana Rao Dravid",
    title: "Managing Director @ Accenture",
    quote: "Excellent service and decision making support!",
    image: `${IMAGE_BASE}/38.png`,
  },
  {
    name: "Nikky Agarwal",
    title: "Senior Manager @Grant Thornton International",
    quote:
      "I was randomly moving around the city with different channel partners which only led me to exhaustion. One of my friend suggested Propsoch and to my surprise, it has been a very pleasant experience from the very first day with the team. Propsoch took the time to understand my needs and non-negotiables. They did not let me take any rash decision and informed me about all the pros and cons of the builder, location, price, timeline, etc. Getting all the services at one place is very difficult and Propsoch has it all. In a few days of my engagement with the team, i booked my first house. I hope to book another house in Bangalore within a year or two and now i know this is the place.",
    image: `${IMAGE_BASE}/14.png`,
  },
  {
    name: "Pratik Dongaonkar",
    title: "Marketing Director @TMRW",
    quote:
      "Fantastic team, they simplify and ease the process of decision making. Ashish along with his team Stuti and Prashanth were very helpful in enabling our decision. They have a very refreshing approach to home searching and at no point were they salesy or pushing you for vested interests. In fact they called out certain no-gos that helped. Anyone who is serious about house searching should look no further",
    image: `${IMAGE_BASE}/11.png`,
  },
  {
    name: "Harviish Rao",
    title: "Senior Product Manager @ThoughtSpot",
    quote:
      "I love the concept. Saw ad on insta immediately liked the idea behind this startup. And the experience didn't disappoint. From the very initial proposal to booking the property in just 3 weeks. Still can't believe how easy it was. Shout out to Akshaya for being a incredible point person for us.",
    image: `${IMAGE_BASE}/12.png`,
  },
  {
    name: "Ankit Khemka",
    title: "Vice President @Controller",
    quote:
      "Let me start by saying this is not a typical \"property broker / consultant service\" and much more beyond it. We had a very specific need in terms of budget, locality, etc as well as timeline and it was worth getting connected with them. Akshaya was able to provide a good comparison of options available, thorough insights in which unit is better within a project and quick liaise with other supplementary teams after project finalisation. Prashant was able to suggest a better project while visiting selected sites and did quite a good negotiation on our behalf, probably to a point I am sure I couldn't have gotten without him. Co-founder kept a constant connect throughout the project. Overall, outstanding service delivered and highly recommended for home buyers in Bengaluru.",
    image: `${IMAGE_BASE}/9.png`,
  },
  {
    name: "Bharat Singh",
    title: "Senior Investment Professional",
    quote:
      "Great service!!! We had a great experience with Propsoch. They truely help you to find the house of your dreams. Their methodical approach pushes you to think about the criteria which you may not have considered. They don't force sell, what is available. Rather, they arrive at your dreamhouse framework with you and then find the best possible property based on that framework.",
    image: `${IMAGE_BASE}/59.png`,
  },
];
