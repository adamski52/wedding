class OurStoryHandler {
    static INITIAL_STATE = {
        stories: [{
            date: "May, 2013",
            title: "Matched on eHarmony",
            summary: [
                "First date soon follows."
            ]
        }, {
            date: "June, 2013",
            title: "Second Date",
            summary: [
                "Grand Rapids Zoo, where it rained the entire time.  Then Melting Pot where we sat in the coldest booth, with AC blowing on us.",
                "Later that day, Jon met Franklin and the wedding planning started."
            ]
        }, {
            date: "August, 2013",
            title: "First Home Improvement Project",
            summary: [
                "Our first of many to come -- a 500sqft shed roof"
            ]
        }, {
            date: "May, 2014",
            title: "The King Finds His Throne",
            summary: [
                "We rescued Aslan from ARC in Mecosta County, north of Grand Rapids, MI.",
                "He smelled like a barn but he didn't care -- he was finally going home."
            ]
        }, {
            date: "April, 2016",
            title: "Proposal",
            summary: [
                "Jon got down on one knee, at the ARC walk (from where we rescued Aslan).",
                "Aslan, Franklin and Zelda helped by pulling every which way."
            ]
        }, {
            date: "August, 2016",
            title: "First House",
            summary: [
                "We move in to our first \"together\" home in Flat Rock, MI.",
                "Work on finishing the basement and flooring begins shortly after."
            ]
        }, {
            date: "March, 2017",
            title: "The Tribe Grows",
            summary: [
                "Baloo joins the family from the same shelter which brought us Aslan",
                "She immediately demonstrates her mastery of tug and fetch.  Dropping is a work in progress."
            ]
        }, {
            date: "February, 2018",
            title: "Fixer-Upper",
            summary: [
                "We buy the \"fixer upper\" in Chagrin Falls, OH.",
                "Cute town, amazing wooded lot, and a self-filling indoor swimming pool in the basement.",
                "Renovations began immediately and will complete approximately October, 2077."
            ]
        }, {
            date: "February, 2018",
            title: "Another Unit",
            summary: [
                "Jasmine joins the family, again from ARC (the shelter from which we rescued Aslan and Baloo).",
                "She is as gumpy as a newborn deer."
            ]
        }, {
            date: "September, 2017",
            title: "Wedding Day",
            summary: [
                "You are here."
            ]
        }]
    };

    static reducer(state = OurStoryHandler.INITIAL_STATE, action) {
        return state;
    }
}

export default OurStoryHandler;
