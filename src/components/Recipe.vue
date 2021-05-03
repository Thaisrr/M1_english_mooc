<template>
  <div>
    <div id="all">
      <div id="image" :style="`background-image: url('${recipe.image}')`">

      </div>
      <div id="text">
        <div class="frame">
          <div class="border">
            <h2>{{recipe.name}}</h2>
            <p>{{recipe.intro}}</p>
          </div>
        </div>
        <section class="section">
          <div class="media-container">
            <iframe class="video" :src="recipe.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </section>

          <v-expansion-panels class="expansion" >
            <v-expansion-panel v-if="recipe.transcription" class="panel">
                <v-expansion-panel-header class="header">Video Transcription</v-expansion-panel-header>
                <v-expansion-panel-content class="content">
                  <h3>Transcription</h3>
                  <div v-html="recipe.transcription"></div>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="panel">
              <v-expansion-panel-header class="header">Recipe</v-expansion-panel-header>
              <v-expansion-panel-content class="content">
                <h3>Ingredients</h3>
                <p>Persons :
                  <button class="bold" :disabled="nbPersons < 2" v-on:click="changeNbPersons(-1)">-</button>
                  {{nbPersons}}
                  <button class="bold" v-on:click="changeNbPersons(+1)">+</button>
                </p>
                <ul>
                  <li v-for="(ing, index) of recipe.ingredients" :key="index"><span class="bold">{{getQuantity(ing)}}{{ing.unity}}</span> {{ing.name}}</li>
                </ul>
                <h3>Recipe</h3>
                <ul>
                  <li v-for="(step, index) of recipe.steps" :key="index">
                    <span class="bold">{{step.number}}. </span> {{step.text}}</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

      </div>
      <div class="buttons">
        <router-link  @click="scrollTop()" class="btn-link" :to="{name: 'week', params: {id: week.number}}">
          <v-icon class="icon" large>mdi-chevron-left</v-icon>
          <span>Return to Summary</span>
        </router-link>
        <router-link  @click="scrollTop()" v-if="isThisTheEnd()" class="btn-link" :to="{name: 'end', params: {week: week.number}}">
          <span>Finish Lesson</span>
          <v-icon class="icon" large>mdi-chevron-right</v-icon>
        </router-link>
        <router-link @click="scrollTop()" v-else class="btn-link" :to="{name: 'recipe', params: {week: week.number, recipe: week.recipes.indexOf(recipe) + 1}}">
          <span>Next Lesson</span>
          <v-icon class="icon" large>mdi-chevron-right</v-icon>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Recipe",
  data() {
    return {
      video: ``,
      length: 3,
      window: 0,
      nbPersons: this.recipe.persons
    }
  },
  props: {
    recipe: Object,
    week: Object
  },
  methods: {
    getQuantity(ingredient) {
      let result;
      switch (ingredient.unity) {
        case 'ml' || 'l' || 'cl' || 'g' || 'kg' || 'cup' :
          console.log('decimal')
          result = Math.round(((ingredient.quantity / this.recipe.persons) * this.nbPersons) * 100) / 100 ;
          return (result <= 0) ? 0.1 : result;
        default:
          console.log('default')
          result = Math.round((ingredient.quantity / this.recipe.persons) * this.nbPersons)
          return  (result <= 0) ? 1 : result;
      }
    },
    scrollTop() {
      window.scrollTo(0,0);
    },
    changeNbPersons(changer) {
      this.nbPersons += changer;
    },
    isThisTheEnd() {
      const recipe_index = this.week.recipes.indexOf(this.recipe);
      console.log(this.week.recipes);
      console.log('index : ', recipe_index)
      return !this.week.recipes[recipe_index + 1];
    }
  },
}
</script>

<style scoped>


#image {
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

.section {
  margin: 0 auto;
  height: auto;
  overflow: hidden;
}

.media-container {
  margin: auto;
  width: 40vw;
  height: calc(60vh * 7 / 9);
}

iframe {
  width: 100% !important;
  height: 90% !important;
}

.media-container img {
  width: 100%;
}

section {
  width: 100%;
}
h3 {
  margin: 30px 0;
  color: var(--dark);
  font-family: var(--secondary-font);
  letter-spacing: 1px;
}

.panel:first-child {
  margin-top: 30px;
}

.expansion ul {
  padding-left: 30px;
}

.expansion {
  width: 40vw;
  margin: auto;
}

.content {
  color: var(--dark) !important;
  padding: 0 30px 50px;

}

.header {
  color: #D4AF37;
  font-size: 1.2em;
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
