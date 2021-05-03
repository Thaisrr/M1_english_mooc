export const Dessert = {
    number: 4,
    name: "Dessert",
    image: require('../images/dessert.png'),
    description: "Congratulation, you own a reward : it's dessert time !",
    recipes: [
        {
            rank: 1,
            name: "Sablé with lemon curd : part 1",
            image: require('../images/dessert.png'),
            intro: "Carrot cake powder tart gingerbread. Marzipan ice cream gingerbread lollipop topping. Sweet I love wafer tart soufflé muffin. Jelly beans sweet roll donut.",
            persons: 4,
            video: "https://www.youtube.com/embed/tQ23MXOHr7k",
            ingredients: [
                {
                    quantity: 3,
                    unity: "g",
                    name: "potatoes"
                },
                {
                    quantity: 3,
                    unity: "g",
                    name: "scallions"
                }
            ],
            steps: [
                {
                    number: 1,
                    text: "Danish dragée lollipop jelly beans jelly beans brownie sweet dragée. Sweet croissant sugar plum cake halvah. Marshmallow bonbon croissant jujubes apple pie. Tiramisu lemon drops marzipan."
                },
            ],
        },
        {
            rank: 2,
            name: "Sablé with lemon curd : part 2",
            image: require('../images/dessert.png'),
            intro: "Carrot cake powder tart gingerbread. Marzipan ice cream gingerbread lollipop topping. Sweet I love wafer tart soufflé muffin. Jelly beans sweet roll donut.",
            persons: 4,
            video: "https://www.youtube.com/embed/KyYVdWTCFr4",
            ingredients: [
                {
                    quantity: 3,
                    unity: "g",
                    name: "potatoes"
                },
                {
                    quantity: 3,
                    unity: "g",
                    name: "scallions"
                }
            ],
            steps: [
                {
                    number: 1,
                    text: "Danish dragée lollipop jelly beans jelly beans brownie sweet dragée. Sweet croissant sugar plum cake halvah. Marshmallow bonbon croissant jujubes apple pie. Tiramisu lemon drops marzipan."
                },
            ],
        }
    ],
    quiz: [
        {
            question: "What can Kill the action of the yeast? ",
            answers: [
                { text: "Egg yoks", isCorrect: false},
                { text: "Flour", isCorrect: false},
                { text: "Butter", isCorrect: false},
                { text: "Salt", isCorrect: true},
            ]
        },

        {
            question: "What part of the lemon do we use ?",
            answers: [
                { text: "The juice ", isCorrect: false},
                { text: "The zest", isCorrect: false},
                { text: "The juice and the zest", isCorrect: true},
                { text: "There is no lemon in this recipe.", isCorrect: false},
            ]
        },
        {
            question: "What tool is used to flatten the sable dough ?",
            answers: [
                { text: "A rolling pin", isCorrect: true},
                { text: "A knife", isCorrect: false},
                { text: "A pasta sheeter", isCorrect: false},
                { text: "Your hands", isCorrect: false},
            ]
        },
        {
            question: "At what temperature should the lemon curd be cooked ?",
            answers: [
                { text: "70°C", isCorrect: false},
                { text: "80°C", isCorrect: true},
                { text: "90°C", isCorrect: false},
                { text: "100°C", isCorrect: false},
            ]
        },
        {
            question: "At what temperature and for how long should you bake the sablé ?",
            answers: [
                { text: "165°C for 20 minutes", isCorrect: false},
                { text: "160°C for 12 minutes", isCorrect: true},
                { text: "180°C for 8 minutes", isCorrect: false},
                { text: "200°C for 5 minutes", isCorrect: false},
            ]
        }
    ],
}
