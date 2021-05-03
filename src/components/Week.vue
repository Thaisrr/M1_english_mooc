<template>
  <div id="router">
    <div id="absolute">
      <div id="corner" :style="`background-image: url(${week.image})`">
      <header class="centered-flex">
        <div class="text">
          <h2>Week {{week.number}}: {{week.name}}</h2>
          <p>{{week.description}}</p>
          <h3>{{week.recipes.length > 1 ? 'Recipes' : 'Recipe'}} you'll learn :</h3>
          <nav>
            <ul>
              <li class="recipes" v-for="(recipe, index) of week.recipes" :key="index">
                <router-link class="links" :to="{name: 'recipe', params: {week: week.number, recipe: index}}">{{recipe.name}}</router-link>
              </li>
            </ul>
          </nav>
          <nav>
            <router-link class="go" :to="{name: 'recipe', params: {week: week.number, recipe: 0}}">
              <span>Go to the first lesson !</span>
              <v-icon class="icon" large>mdi-chevron-right</v-icon>
            </router-link>
          </nav>
        </div>
      </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Week",
  props: {
    week: Object
  },
  data: () => ({
    length: 3,
    window: 0,
  }),
  computed: {
    number_week() {
      if(this.week) console.log(this.week)
      else console.log('no week')
      if(this.week.number === 1) return '1rst'
      else if (this.week.number === 2) return '2nd'
      else if (this.week.number === 3) return '3rd'
      else return `${this.week.number}th`
    }
  }
}
</script>

<style scoped>

#router { min-height: 80vh}
#absolute {min-height: 45vh}
/*
#corner {
  width: 33vw;
  height: 20vw;
  margin-top: -100px;
  position: absolute;
  z-index: 11;
}
*/

#corner {
  width: 100%;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
}
#corner img {
  width: 100%;
}

header {
  width: 40%;
  padding: 30px;

  background: #D4AF37;

}

header .text {
  padding: 40px;
  border: solid 2px white;
}

header h2 {
  font-size: 2em;
  margin-bottom: 30px;
}

header h3 {
  color: var(--dark);
  margin: 20px 0;
  font-size: 1.2em;
}

header p {
  font-size: 1.2em;
  color: var(--dark);
}

.recipes {
  display: inline-block;
  padding-right: 15px;
}

.links:link, .links:visited {
  color: var(--dark);
}

.icon {
  color: white;
}

.go:link, .go:visited {
  display: block;
  margin: 30px 0;
  padding: 15px;
  background: #28536B;
  color: white;
  width: auto;
  text-align: center;
  font-size: 1.3em;
  text-decoration: none;
}


.go:hover span {
  text-decoration: underline;
  font-weight: bold;
}

</style>
