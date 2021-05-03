export const MainCourse = {
    number: 3,
    name: "Main Course",
    image: require('../images/eggs.png'),
    description: "Let's talk seriously ! It's time to make the main course",
    recipes: [
        {
            rank: 1,
            name: "Low temperature eggs, lentils and gingerbread",
            image: require('../images/lentils.png'),
            intro: "For the main dish of our holiday menu, we will cook a low temperature egg and serve it with green lentils, gingerbread crumble and enoki mushrooms.",
            persons: 4,
            video: "https://www.youtube.com/embed/_Rwym4sx8xw",
            ingredients: [
                {
                    quantity: 4,
                    unity: "",
                    name: "room temperature eggs"
                },
                {
                    quantity: 20,
                    unity: "g",
                    name: "butter"
                },
                {
                    quantity: 1,
                    unity: " bunch",
                    name: "enoki mushrooms"
                },
                {
                    quantity: 100,
                    unity: "g",
                    name: "gingerbread"
                },
                {
                    quantity: 1,
                    unity: "",
                    name: "red onion"
                },
                {
                    quantity: 2,
                    unity: "tablespoon",
                    name: "olive oil"
                },
                {
                    quantity: 1,
                    unity: "pinch",
                    name: "salt and pepper"
                },
                {
                    quantity: 150,
                    unity: "g",
                    name: "lentils"
                },
                {
                    quantity: 1,
                    unity: "",
                    name: "carrot"
                },
                {
                    quantity: 1,
                    unity: "",
                    name: "onion"
                },
                {
                    quantity: 1,
                    unity: "",
                    name: "celery stick"
                },
            ],
            steps: [
                {
                    number: 1,
                    text: "Take the carrot, peel it with a peeler, cut it roughly into pieces and put it into a sauce pan. Do the same thing with the onion and the celery"
                },
                {
                    number: 2,
                    text: "Cover with water, add salt and put the pan on high heat up to a boil. Then, reduce heat to medium and let cook for 20 minutes. "
                },
                {
                    number: 3,
                    text: "Take a large pan, pour glass of water into it. Take each egg and break them gently in the pan without piercing them. "
                },
                {
                    number: 4,
                    text: "Cover them with water and put the pan on low heat. Heat the water to 64°C, check regularly, and let it cook for 45 minutes. "
                },
                {
                    number: 5,
                    text: "Pre-heat the oven to 200 degrees Celsius."
                },
                {
                    number: 6,
                    text: "Cut the gingerbread crust. Cut the butter into small dice, crumble the gingerbread and mix them together."
                },
                {
                    number: 7,
                    text: "Take a baking tray, put a sheet of baking paper and spread the mixture on it. Put the tray in the oven and cook it for 10 minutes. When it’s done, take it off the oven and let it rest for 10 minutes. "
                },
                {
                    number: 8,
                    text: "Peel the red onion, take a board and chop it very finely. "
                },
                {
                    number: 9,
                    text: "Take a plate, spread the lentils on it. Put the egg, the crumble, some enoki mushrooms. Season the dish with some olive oil, salt and pepper. "
                },
            ],
            transcription: "<p>For the main dish of our holiday menu, we will cook a low temperature egg and serve it with green lentils, gingerbread crumble and enoki mushrooms.</p>\n" +
                "<p>Let&rsquo;s start.</p>\n" +
                "<p>&nbsp;<br />We will start with the lentils because it takes a long time to cook, and it needs to cool down while we cook the eggs. So, take the carrot peel with a peeler, cut it roughly into pieces and put it into a sauce pan. Then, do the same thing with the onion and the celery. Cover with water, add salt and put the pan on high heat up to a boil. Then, reduce heat to medium and let cook for 20 minutes.&nbsp;</p>\n" +
                "<p><br />Now the tricky part. We will need to be precise and careful. Take a large pan, pour&nbsp;glass of water&nbsp;into it. Take each egg and break them gently&nbsp;in the pan&nbsp;without piercing them. Cover them with water and put the pan on low heat.&nbsp;Heat the water to 64&deg;C, check regularly, and let it cook for 45 minutes.</p>\n" +
                "<p>&nbsp;<br />Pre-heat the oven to 200 degrees&nbsp;Celsius.&nbsp;Meanwhile, cut the gingerbread crust.&nbsp;Cut the butter into small dice, crumble the&nbsp;gingerbread&nbsp;and&nbsp;mix&nbsp;them together.&nbsp;Take a baking tray, put a sheet of baking&nbsp;paper&nbsp;and spread the mixture on it.&nbsp;Put the tray in the oven and cook it for 10 minutes. Watch it, the crumble should not burn. When&nbsp;it&rsquo;s&nbsp;done, take it off the oven and let it rest for 10 minutes.&nbsp;</p>\n" +
                "<p><br />Peel the red onion, take a&nbsp;board&nbsp;and chop it very finely.&nbsp;&nbsp;<br />Take a plate, spread the lentils on it. Put the egg, the crumble, some enoki mushrooms. Season the dish with some olive oil,&nbsp;salt&nbsp;and pepper.&nbsp;</p>" ,
        },
    ],
    quiz: [
        {
            question: "What kind of mushroom do we need ?",
            answers: [
                { text: "White button mushroom", isCorrect: false},
                { text: "Portobello mushroom", isCorrect: false},
                { text: "I hate mushroom", isCorrect: false},
                { text: "Enoki mushroom", isCorrect: true},
            ]
        },
        {
            question: "What's the right temperature for the perfect egg? ",
            answers: [
                { text: "60°C", isCorrect: false},
                { text: "64°C", isCorrect: true},
                { text: "54°C", isCorrect: false},
                { text: "52°C", isCorrect: false},
            ]
        },
        {
            question: "And for how long ?",
            answers: [
                { text: "45 minutes", isCorrect: true},
                { text: "40 minutes", isCorrect: false},
                { text: "1 hour", isCorrect: false},
                { text: "Half an hour", isCorrect: false},
            ]
        },
        {
            question: "How much lentils we need for this recipe ? ",
            answers: [
                { text: "150g", isCorrect: true},
                { text: "200g", isCorrect: false},
                { text: "50g", isCorrect: false},
                { text: "250g", isCorrect: false},
            ]
        }
    ],
}
