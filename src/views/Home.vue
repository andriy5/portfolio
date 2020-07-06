<template>
  <div class="home">
    <Navbar />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Presentation />
    <Parcours />
    <Projets />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "@/components/Presentation.vue";
import Parcours from "@/components/Parcours.vue";
import Projets from "@/components/Projets.vue";

export default {
  name: "Home",
  components: {
    Presentation,
    Parcours,
    Projets
  }
};
</script>
