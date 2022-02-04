class FlashCard {
    constructor(question, answer){
        this.number1 = question.number1;
        this.number2 = question.number2;
        this.operator = question.operator;
        this.answer = answer;
    }

    DoesAnswerMatch(enteredText){
        return (enteredText == this.answer);
    }
}