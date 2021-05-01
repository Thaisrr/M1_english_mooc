class QuizService {


    static calculate(quiz, answers) {
        /* Each user answer are based on this scheme : question_index/answer_index to string */
        let score = 0;
        let total_answers = 0;
        let total_points = 0;
        /* First : get total of good user answers */
        answers.forEach(a => {
            const table = a.split('/');
            const question = table[0];
            const answer = table[1];
            const isCorrect = quiz[question].answers[answer].isCorrect;
            if(isCorrect) score++;
        });

        /* Two : get total of possible point ( right answers ) for the quiz */
        quiz.forEach(q => {
            q.answers.forEach(a => {
                if(a.isCorrect) total_points ++;
                total_answers++;
            })
        });

        /* Try to get a moyenne ? */
        let temp_score = score * total_answers / total_points;
        let real_score = temp_score * quiz.length / total_answers;
        return real_score;

    }

}

export default QuizService;
