<template>
  <main>
    <h2>{{recipe.name}}</h2>
    <p>{{recipe.intro}}</p>

    <div class="r_section">
      <h3>Video</h3>
      <Video :video_link="recipe.video" :title="recipe.name"/>
    </div>
    <div class="r_section">
      <h3>Ingredients</h3>
      <p>Ingredients for {{recipe.persons}} persons</p>
      <ul class="ingredients">
        <li v-for="ing of recipe.ingredients" :key="ing.name">
          <span>{{ing.quantity}} {{ing.unity}}</span>
          {{ing.name}}
        </li>
      </ul>
    </div>

    <div class="r_section">
      <ul class="steps">
        <li v-for="step of recipe.steps" :key="step.number">
          <span>{{step.number}}</span>
          {{step.text}}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import Video from "@/components/Video";
export default {
  name: "Recipe",
  components: {Video},
  props: {
    recipe: Object
  }
}
</script>

<style scoped>

</style>
