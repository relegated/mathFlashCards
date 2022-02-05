const PLUS = 0;
const MINUS = 1;
const MULTIPLY = 2;
const DIVIDE = 3;

class CardDeck {

    constructor(deckSize, maxOperator){
        this.deckSize = deckSize;
        this.maxOperator = maxOperator;
        this.cards = [];
    }

    GenerateDeck(){
        for(var i = 0; i < this.deckSize; i++){
            let currentQuestion = GetCurrentQuestion();
            let currentAnswer = GetCurrentAnswer(currentQuestion);

            this.cards.push(new FlashCard(currentQuestion, currentAnswer));
        }
    }

    GetCurrentQuestion(){
        let number1 = parseInt(Math.random() * 10, 10);
        let number2 = parseInt(Math.random() * 10, 10);
        let operator = parseInt(Math.random() * this.maxOperator, 10);
        
        //handle subtraction order
        if (operator == MINUS && number1 < number2){
            let temp = number2;
            number2 = number1;
            number1 = temp;
        }

        //handle division order
        if (operator == DIVIDE){
            let product = number1 * number2;
            
            //handle divide by 0
            if (product == 0){
                if (number2 == 0 && number1 !=0){
                    number2 = number1;
                    number1 = 0;
                } else if (number2 == 0 && number1 == 0) {
                    number2 = 7;
                }
            } else {
                number1 = product;
            }
        }

        return ({number1: number1, number2: number2, operator: operator});
    }

    GetCurrentAnswer(question){
        switch (question.operator) {
            case PLUS:
                return question.number1 + question.number2;
            case MINUS:
                return question.number1 - question.number2;
            case MULTIPLY:
                return question.number1 * question.number2;
            case DIVIDE:
                return question.number1 / question.number2;
            default:
                return 0;
        }
    }
}