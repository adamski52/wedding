class WhatToExpectHandler {
    static INITIAL_STATE = {
        questions: [{
            isOpen: false,
            question: "Is anything going on before?",
            anchor: "whats-going-on-before",
            answer: [
                `We will be having a pre-wedding barbecue at the West Woods Park, 9465 Kinsman Road, at the Deer Run Shelter, on Friday at 5pm.`,
                `This is directly across the street from the wedding venue, so you'll know exactly where to go on Saturday.`,
                `At 4pm, there will be a dog walk with Baloo, Franklin, and Jasmine through the park's trails.`,
                `Both events are open to all!`,
                `Please include in the RSVP if you will be attending this portion of the festivities so we know how much to bring.`
            ]
        }, {
            isOpen: false,
            question: "What's there to do nearby?",
            anchor: "whats-nearby",
            answer: [
                `The Chagrin Falls downtown area is very cute, with restaurants and boutique shopping and a beautiful waterfall in the center of it all. We highly recommend you spend an evening or afternoon here if your schedule allows.`, 
                `Solon, where the hotel is, has plenty to do as well in the shopping and eating categories (we may be biased but we really adore Chagrin Falls so if you only have one block of free time, visit Chagrin Falls).`,
                `Outside of our nearby towns, you can venture to Cleveland for some Hall of Fame action (Rock and Roll) or stroll through lakeside neighborhoods. Or head south and check out Canton for a different Hall of Fame (Football).`
            ]
        }, {
            isOpen: false,
            question: "What do Jon and Megan recommend in Chagrin Falls?",
            anchor: "recommendations",
            answer: [
                `Get bagels at Einstein's.`,
                `Walk in the park (there are a ton around the area).`,
                `Grab something from Heinens (grocery store, with grab-and-go options, a pizza oven, and rotating menu - they even have a wine and craft beer bar, and you can drink while getting groceries).`,
                `Do brunch at Washington Street Diner (traditional breakfast diner).`,
                `Eat on the patio overlooking the waterfalls at Jekyll's (bar, sushi, pizza) for happy hour.`,
                `Eat at FlipSide (fancy burgers).`,
                `Eat Jeni's ice cream - they offer as many samples as you like - and then you can take it to-go and walk over to the falls.`
            ]
        }, {
            isOpen: false,
            question: "How do I get there?",
            anchor: "how-do-i-get-there",
            answer: [
                `If you are travelling from afar, flying into Cleveland Hopkins is the easiest major airport.`,
                `If you are staying at Springhill Suites and would like to shuttle to the venue, <a href='#rsvp'>please sign up</a> - space is limited.`,
                `If you plan to use Uber, Lyft or any other ride sharing service, it is recommended to arrange services ahead of time due to limited availability of such services near the venue.`
            ]
        }, {
            isOpen: false,
            question: "Where do I stay?",
            anchor: "where-do-i-stay",
            answer: [
                `A room block is setup under the <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Lilley-Adamski%20Wedding%5Eclesh%60LAWLAWA%7CLAWLAWB%60109.00-119.00%60USD%60false%605%609/21/18%609/23/18%608/24/18&app=resvlink&stop_mobi=yes" target="_blank">Lilley-Adamski wedding at the Marriott Springhill Suites Cleveland-Solon</a>.`,
                `All rooms are suites, with WiFi and a buffet breakfast included.`,
                `<a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Lilley-Adamski%20Wedding%5Eclesh%60LAWLAWA%7CLAWLAWB%60109.00-119.00%60USD%60false%605%609/21/18%609/23/18%608/24/18&app=resvlink&stop_mobi=yes" target="_blank">Register online</a> to be part of our room block discount (approx $109/night).`
            ]
        }, {
            isOpen: false,
            question: "What should I wear?",
            anchor: "what-should-i-wear",
            answer: [
                `The venue is a natural setting, almost like a nature reserve, so please feel free to wear "garden casual".`,
                `Grounds may we wet and seating is outdoors, so don't wear anything which would be ruined if it got dirty.`,
                `Heels are <strong>not</strong> recommended.`,
                `Jeans are underdressed.`,
                `Megan will be in a traditional white wedding dress.`,
                `Jon will be in a light gray suit (not a tuxedo).`,
                `There is no wedding party to coordinate with/against, but decorations and flowers are pistachio and pink.`,
            ]
        }, {
            isOpen: false,
            question: "What is the agenda?",
            anchor: "what-is-the-agenda",
            answer: [
                `First -- yes, our dogs will be there.`,
                `An outdoor ceremony (weather permitting) will begin at approximately 5:00pm, led by Jenna (Megan's sister).  The ceremony will last approximately 30 minutes.  All are welcome.`,
                `Following the ceremony, there will be a happy hour (open bar, but beer/wine only).`,
                `Dinner will be served at approximately 6:30pm, and will include roast top sirloin, penne pasta, plus sides and desserts.`,
                `Cake cutting will be at approximately 8:00pm.`,
                `The bar and indoor reception area is open until approximately 10:00pm.`,
                `When departing, please be proactive about the <a href="#how-do-i-get-there">limited shuttle service and ride sharing services</a>.  <strong>You've been warned:</strong> Police in the area are omnipresent.  Really.  No, <em>really</em>-really.  Don't speed.  At all.  We're not exaggerating.  Find a ride if you're drinking.  They <strong>will</strong> stop you.`,
                `Shuttles are only available for Springhill Suite guests, and space/departure time is limited.`
            ]
        }]
    };

    static ON_TOGGLE = "WHAT_TO_EXPECT_TOGGLE";
    static onToggle(item) {
        return {
            type: WhatToExpectHandler.ON_TOGGLE,
            item: item
        };
    }

    static reducer(state = WhatToExpectHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case WhatToExpectHandler.ON_TOGGLE:
                let match = state.questions.find((question) => {
                    return question.anchor === action.item.anchor;
                });

                if(!match) {
                    return state;
                }

                let result = {
                    ...state
                };

                result.questions = result.questions.map((question) => {
                    if(question.anchor === action.item.anchor) {
                        return {
                            ...question,
                            isOpen: !question.isOpen
                        };
                    }

                    return question;
                });

                return result;

            default:
                return state;
        }
    }
}

export default WhatToExpectHandler;
