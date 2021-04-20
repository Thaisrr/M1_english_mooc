<template>
  <nav id="mainNav">
    <ul class="nav-list flex-container">
      <li class="nav-item">
        <router-link to="home" class="nav-link">Home</router-link>
      </li>
      <li v-for="(week, index) of weeks" :key="index"  class="nav-item">
        <router-link  class="nav-link" :to="{name: 'week', query: {week: JSON.stringify(week)}}">{{number_week(week)}} Week</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {MoocService} from "@/assets/data/MoocService";

export default {
  name: "Nav",
  data() {
    return {
      weeks: MoocService.getAllWeeks()
    }
  },
  methods: {
    number_week(week) {
      console.log("coucou from nav -> number _week");
      console.log(week);
      if(week.number === 1) return '1rst'
      else if (week.number === 2) return '2nd'
      else if (week.number === 3) return '3rd'
      else return `${week.number}th`
    }
  }
}
</script>

<style scoped>
#mainNav {
  width: 100%;
  height: 60px;
  background-color: white;
  font-size: 1.5rem;
  -webkit-box-shadow: 0px 1px 5px 0px var(--dark);
  -moz-box-shadow: 0px 1px 5px 0px var(--dark);
  box-shadow: 0px 1px 5px 0px var(--dark);
  position: sticky;
  top: 0;
  z-index: 1;
}

.nav-list {
  list-style: none;
  height: 100%;
  width: 70%;
  justify-content: flex-end;
}

.nav-item {
  display: inline-block;
  padding: 0 0 0 20px;

}

.nav-link {
  text-decoration: none;
  color: var(--main);
  padding: 5px;
  font-family: var(--main-font);
  margin: 10px;
}

.nav-link:hover {
  color: var(--light);
  border-top: var(--dark) solid;
  border-bottom: none;
}
</style>
