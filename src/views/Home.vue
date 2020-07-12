<template>
  <div class="home">
    <!-- <Navbar /> -->
    <Presentation />
    <Parcours />
    <Competence />
    <Projets />
    <AboutMe />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "@/components/Presentation.vue";
import Parcours from "@/components/Parcours.vue";
import Projets from "@/components/Projets.vue";
import Competence from "@/components/Competence.vue";
import AboutMe from "@/components/AboutMe.vue";
import ContactMe from "@/components/ContactMe.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Presentation,
    Parcours,
    Projets,
    Competence,
    AboutMe,
    ContactMe,
    Footer
  }
};
</script>
