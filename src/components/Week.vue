<template>
  <div id="router">
    <div id="absolute">
      <div id="corner">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/55/21/35/food.jpg">
      </div>
      <header class="centered-flex">
        <div class="text">
          <h2>First Week : {{week.name}}</h2>
          <p>{{week.description}}</p>
          <h3>{{week.recipes.length > 1 ? 'Recipes' : 'Recipe'}} you'll learn :</h3>
          <nav>
            <ul>
              <li v-for="(recipe, index) of week.recipes" :key="index">
                <router-link :to="{name: 'recipe', params: {week: week.number, recipe: index}}">{{recipe.name}}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
  height: 70vh;
  overflow: hidden;
}
#corner img {
  width: 100%;
}

header {
  width: 40%;
  padding: 30px;
  position: absolute;
  top: 8vw;
  left: 15vw;
  background: #D4AF37;
  z-index: 15;
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


</style>
