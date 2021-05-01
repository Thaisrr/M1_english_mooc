<template>

  <footer>
    <div class="flex-container">
      <section v-for="(week, index) of weeks" :key="index">
        <h4>Week {{index + 1}}</h4>
        <ul>
          <li v-for="(recipe, index) of week.recipes" :key="index">
            <router-link class="links" :to="{name: 'recipe', query: {recipe: JSON.stringify(recipe)}}">{{recipe.name}}</router-link>
          </li>
        </ul>
      </section>
    </div>
    <p><i>Copyright - 2021</i> | <i>Université Catholique de Lille</i></p>
  </footer>
</template>

<script>
import MoocService from "@/assets/data/MoocService.js"

export default {
  name: "Footer",
  data() {
    return {
      weeks : MoocService.getAllWeeks()
    }
  }
}
</script>

<style scoped>


footer {
  width: 100%;
  padding: 30px;
  background-color: var(--dark);
  color: white;
}

footer .flex-container {
  display: flex;
  justify-content: space-between;
  margin: 20px auto 30px;
  width: 80%;
  align-items: flex-start;
}

footer h4 {
  color: white;
  border-bottom: thin solid white;
  margin-bottom: 20px;
}

footer ul {
  padding: 0;
  margin: 0;
  padding-inline-start: 0;
}

footer li {
  list-style: none;
}

footer p {
  width: 100%;
  text-align: center;
  margin-bottom: 0;
}

footer section {
  width: 20%;
}

.links:link, .links:visited {
  color: #D4AF37;
  text-decoration: none;
}

.links:hover {
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}

</style>
