<template>
  <div>
    <Header class="header"></Header>
    <main class="main">
      <section class="flex-container">
        <!-- Liste de cartes en flex -->
          <Card v-for="week of mooc" :key="week.number" :week="week"/>
      </section>
      <section class="mooc">
        <div class="media-container centered-flex">
          <iframe class="video" src="https://www.youtube.com/embed/SIpfve9nu98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="text centered-flex">
          <article>
            <h2>What will you learn ?</h2>
            <p>During this MOOC, you will learn how to make a complete festive vegetarian menu step by step.
              You will learn many different cooking techniques and at the end you will be able to cook a complete full course for your friends or your family like we do in France. </p>
            <p>The MOOC is divided into 4 weeks based on each part of the menu. The first week is dedicated to the appetizers and the dips.
              The second week is about the starter. The third week is about the main dish and the last week is dedicated to the dessert. </p>
          </article>
        </div>
      </section>
      

      <section id="about-us" class="mooc">
        <div class="text centered-flex">
          <article>
            <h2 class="section-title">About Us</h2>
            <h3>The fellowship of the food</h3>
            <p>We are four IT students of the <i>Université Catholique</i> of Lille.</p>
            <p>Pierre and Morgan are the two cooks of our group, while Chiara is our dedicated boom operator and one of the camerawomen,
              alongside with Thaïs, who is also the poorly skilled photographer.</p>

          </article>
        </div>
        <div class="media-container">
          <img src="https://mvistatic.com/photosmvi/2020/06/09/P23028309D4128945G.jpg" alt="Notre photo">
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Card from "@/components/Card";
import MoocService from "@/assets/data/MoocService"
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
/*** Z-index are setted so the card are above the header, and not behind */
.main { z-index: 1; }
.header { z-index: -1; }
.flex-container {
  margin: -150px auto 100px;
  width: 70%;
}

.mooc {
  margin: 0 auto;
  height: auto;
  display: flex;
  background: var(--highligth);
  overflow: hidden;
}

.media-container {
  width: 40%;
}

.video {
  width: 90%;
  height: 90%;
}

.media-container img {
  width: 100%;
}

.mooc .text {
  width: 60%;
  height: auto;
  padding: 40px 20px;
  color: #28536B;
  flex-flow: column;
}

.text article {
  width: 90%;
  height: auto;
  padding: 70px;
  border: solid 2px white;
}
.text article h2 {
  margin: 0 0 30px;
}

.text article h3 {
  margin: 15px 0;
  color: var(--dark);
}

.img-banner {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.img-banner img {
  width: 100%;
}

#about-us {
  background: white;
}

#about-us article {
  border-color: #D4AF37;
}




</style>
