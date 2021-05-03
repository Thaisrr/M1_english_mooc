<template>
  <div v-if="week">
    <div id="image" :style="`background-image: url(${week.image})`"></div>
    <div id="text">
      <div class="frame">
        <div class="border">
          <h2>End of the "{{week.name}}" part !</h2>
          <p>Congratulation, you just finished the {{number_week()}} week !</p>
          <p>Time to test your new knowledge !</p>
        </div>
      </div>

      <v-card class="card">
          <v-card-title class="title">
            Quiz Time !
          </v-card-title>
        <p class="subtitle">For each question, check the answer you think is true, then, when you're ready, validate the quiz to calculate your score</p>


          <v-card-text>
            <div v-for="(question, index) of week.quiz" :key="index" class="question-group">
              <p class="question"><span class="bold">{{index + 1}}</span> {{ question.question }}</p>
              <v-checkbox v-for="(answer, a_index) of question.answers" :key="a_index" class="checkbox" :ref="`${index}/${a_index}`" :class="getClass(`${index}/${a_index}`)"
                  v-model="selected"
                  :label="answer.text"
                  :value="`${index}/${a_index}`"
              ></v-checkbox>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="error" dark large v-on:click="getScore">
              Validate the quiz and check my results
            </v-btn>
          </v-card-actions>

        <div v-if="isFinish" class="results">
          <h2>Results: </h2>
          <p>Your score is : {{this.score}} on {{week.quiz.length}}</p>
          <p v-if="this.score > week.quiz.length / 2">Congratulation ! Keep working, and become a true Chef !</p>
          <div v-else>
            <p>You failed, but that's ok. Keep working, watch the videos again, and, most importantly : enjoy !</p>
            <p>( But please, don't poison your friends and family )</p>
          </div>
        </div>

      </v-card>
    </div>
    <div class="buttons">
      <router-link class="btn-link" :to="{name: 'week', params: {id: week.number}}">
        <v-icon class="icon" large>mdi-chevron-left</v-icon>
        <span>Return to Summary</span>
      </router-link>
      <router-link v-if="isThisTheEnd()" class="btn-link" :to="{name: 'home'}">
        <span>End of the Mooc : congratulations ( return Home )</span>
        <v-icon class="icon" large>mdi-chevron-right</v-icon>
      </router-link>
      <router-link v-else class="btn-link" :to="{name: 'week', params: {id: week.number + 1}}">
        <span>Next Lesson</span>
        <v-icon class="icon" large>mdi-chevron-right</v-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
import QuizService from "@/services/QuizService.js";
import MoocService from "@/assets/data/MoocService.js";

export default {

  name: "EndLesson",
  data() {
    return {
      selected: [],
      isFinish: false,
      score: "",
      week: undefined
    }
  },
  mounted() {
    this.week = MoocService.getWeekById(this.$route.params.week)
  },
  methods: {
    number_week() {
      if(this.week.number === 1) return '1rst'
      else if (this.week.number === 2) return '2nd'
      else if (this.week.number === 3) return '3rd'
      else return `${this.week.number}th`
    },
    isThisTheEnd() {
      return !MoocService.getWeekById(this.week.number + 1);
    },
    getScore() {
      this.score = QuizService.calculate(this.week.quiz, this.selected);
      this.isFinish = true;
    },
    getClass(el) {
      console.log(el)
      if(!this.isFinish) {
        return "black-text"
      } else {
        const table = el.split('/');
        const question = table[0];
        const answer = table[1];
        const isCorrect = this.week.quiz[question].answers[answer].isCorrect;
        if(isCorrect && this.selected.indexOf(el) !== -1 ) return "success-text";
        else if (!isCorrect && this.selected.indexOf(el) !== -1 ) return "error-text";
        else return "black-text"
      }
    }
  }
}
</script>

<style scoped>

.success-text /deep/ .theme--light.v-label {
  color: #64DD17;
}

.error-text /deep/ .theme--light.v-label {
  color: #DD2C00;
  text-decoration: line-through;
}

#image {
  background-size: cover;
  background-position: center;
}

#text {
  width: 70%;
  margin: 10px auto 0;
  padding: 0 50px 50px;
  background: var(--dark);
}

#text > * {
  margin-top: -5vh;
}

.card {
  padding: 50px;
}

.title {
  color: #28536B;
  font-size: 1.5em;
  font-family: var(--secondary-font);
  letter-spacing: 2px;
  font-weight: bold;
}

.subtitle {
  margin: 0 0 50px;
  padding-top: 30px !important;

  font-family: var(--main-font);
  font-size: 1.3em;
}

.question-group {
  color: var(--dark);
  margin-bottom: 50px;
}

.question {
  font-size: 1.4em;
  margin-bottom: 20px;
}

.checkbox {
  margin: 0;
}

.results {
  margin-top: 50px;
}

.buttons {
  width: 70%;
  margin: auto;

}

.btn-link:link, .btn-link:visited {
  width: 70%;
  background: #D4AF37;
  color: #28536B;
  font-size: 1.5em;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  padding: 20px 0;
}

.btn-link:first-child {
  width: 30%;
  background: white;
  color: #D4AF37;
}

.btn-link:hover span {
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
}

.btn-link .icon {
  color: var(--dark);
}

.btn-link:first-child .icon {
  color: #D4AF37;
}

.btn-link:hover .icon {
  text-decoration: none !important;
}

</style>
