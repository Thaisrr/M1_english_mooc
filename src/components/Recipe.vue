<template>
  <div>
    <div id="main">
      <div id="image">
      </div>
      <div id="text">
        <h2>{{recipe.name}}</h2>
        <p>{{recipe.intro}}</p>

        <section id="video">
          <h3>Video</h3>
          <div v-html="video"></div>
        </section>

          <v-expansion-panels flat>
            <v-expansion-panel flat>
                <v-expansion-panel-header>Video Transcription</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <h3>Transcription</h3>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Recipe</v-expansion-panel-header>
              <v-expansion-panel-content>
                <h3>Ingredients</h3>
                <p>Persons : 2</p>
                <ul>
                  <li v-for="(ing, index) of recipe.ingredients" :key="index"><span class="bold">{{ing.quantity}}{{ing.quantity}}</span> {{ing.name}}</li>
                </ul>
                <h3>Recipe</h3>
                <ul>
                  <li v-for="(step, index) of recipe.steps" :key="index">
                    <span class="bold">{{step.number}}</span> {{step.text}}</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        <section>

        </section>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Recipe",
  data() {
    return {
      video: `<iframe src="https://www.youtube.com/embed/iMg_YrqCsng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      length: 3,
      window: 0,
    }
  },
  props: {
    recipe: Object
  }
}
</script>

<style scoped>
#main {
  display: flex;
  justify-content: space-between;
}
#image {
  height: calc(100vh - 100px);
  width: 30%;
  overflow: hidden;
  background-image: url("https://static.youmiam.com/images/recipe/1500x1000/raviolis-panais-bleu-1364910?placeholder=web_recipe&sig=470d911dd5d8bdc1ce44eb940c4cf3bb87e8e546&v3");
  background-position: center;
}

#text {
  width: 60%;
  padding-right: 100px ;
}

section { width: 100%}
section > * {width: 100%}
h2, h3 {
  margin: 30px 0;
}

section ul {
  padding-left: 30px;
}

</style>
