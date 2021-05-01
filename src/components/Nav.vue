<template>
  <nav id="mainNav">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link :to="{name: 'home'}" class="nav-link" active-class="nav-active">
          <span class="round"></span>
          <span class="text">Home</span>
        </router-link>
      </li>
      <li v-for="(week, index) of weeks" :key="index"  class="nav-item">
        <router-link  class="nav-link" :to="{name: 'week', params: {id: week.number}}"  active-class="nav-active">
          <span class="round"></span>
          <span class="text">{{number_week(week)}} Week</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import MoocService from "@/assets/data/MoocService";

export default {
  name: "Nav",
  data() {
    return {
      weeks: MoocService.getAllWeeks()
    }
  },
  methods: {
    number_week(week) {
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
  padding: 20px 0;
  background-color: white;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-list {
  margin: auto;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  height: 100%;
  width: 90%;
}

.nav-item {
  height: 50px;
}


.nav-link {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--dark);
  padding: 5px;
  font-family: var(--main-font);
  margin: 10px;
  position: relative;
}


.round {
  width: 40px;
  height: 40px;
  position: absolute;
  background-color: #D4AF37;
  border-radius: 50%;
  top: calc( 50% - 20px );
  display: none;
}


.nav-link:hover .round, .nav-active .round {
  display: block;
}

.text {
  z-index: 1;
}

</style>
