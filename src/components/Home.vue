<template>
  <div>
    <Header></Header>
    <main>
      <section id="list-path">

        <h2 class="section-title"></h2>

        <!-- Liste de cartes en flex -->
        <div class="flex-container">
          <Card v-for="week of mooc" :key="week.number" :week="week"/>
        </div>

      </section>
      <article id="about-us">
        <h2 class="section-title">About Us</h2>
        <div class="article-container">
          <img class="small-img float-r" src="assets/images/team.jpg" alt="Notre photo">

          <h3>Who are we ?</h3>
          <p>Cake sugar plum fruitcake candy canes chocolate jelly beans candy biscuit lollipop. Icing jelly gummi bears pudding. Candy apple pie sweet roll. Muffin caramels I love.</p>
          <p>Icing chocolate cake chocolate topping jelly-o caramels wafer caramels brownie.
            Brownie tootsie roll I love jujubes I love I love sesame snaps. Bear claw cupcake tootsie roll tiramisu I love chocolate bar.
            Cheesecake caramels ice cream liquorice sweet cotton candy dessert brownie.</p>

          <h3>What will you learn ?</h3>
          <p>Cake sugar plum fruitcake candy canes chocolate jelly beans candy biscuit lollipop. Icing jelly gummi bears pudding. Candy apple pie sweet roll. Muffin caramels I love.</p>
          <p>Icing chocolate cake chocolate topping jelly-o caramels wafer caramels brownie.
            Brownie tootsie roll I love jujubes I love I love sesame snaps. Bear claw cupcake tootsie roll tiramisu I love chocolate bar.
            Cheesecake caramels ice cream liquorice sweet cotton candy dessert brownie.</p>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Card from "@/components/Card";
import {MoocService} from "@/assets/data/MoocService"
export default {
  name: "Home",
  components: {
    Header,
    Card
  },
  data() {
    return {
      mooc: MoocService.getAllWeeks()
    }
  }
}
</script>

<style scoped>



</style>
