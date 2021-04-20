<template>
  <main>
    <h2>Welcome to the {{ number_week }} week !</h2>
    <p>Lets talk about the {{week.name}}</p>

    <ul>Summary
      <li v-for="recipe of week.recipes" :key="recipe.name">
        <router-link :to="{name: 'recipe', query: {recipe: JSON.stringify(recipe)}}">{{recipe.name}}</router-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "Week",
  props: {
    week: Object
  },
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

</style>
