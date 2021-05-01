export const Dessert = {
    number: 4,
    name: "Dessert",
    image: require('../images/dessert.png'),
    description: "Congratulation, you own a reward : it's dessert time !",
    recipes: [
        {
            rank: 1,
            name: "First Recipe",
            image: require('../images/dessert.png'),
            intro: "Carrot cake powder tart gingerbread. Marzipan ice cream gingerbread lollipop topping. Sweet I love wafer tart soufflé muffin. Jelly beans sweet roll donut.",
            persons: 4,
            video: "https://youtu.be/N2G6YNtLUOg",
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
            conclusion: "Cake toffee jelly donut cotton candy cotton candy sweet roll tootsie roll. Gingerbread cake candy canes sweet gummies. Candy canes chupa chups pie bear claw tiramisu chocolate cake candy canes cake halvah."
        }
    ]
}
