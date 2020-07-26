<template>
  <div class="home">
    <!-- <Navbar /> -->
    <Presentation />
    <Competence />
    <Projets />
    <Parcours />
    <AboutMe />
    <ContactMe />
    <Footer />
    <PageTop />
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
import PageTop from "@/components/PageTop.vue";

export default {
  name: "Home",
  components: {
    Presentation,
    Parcours,
    Projets,
    Competence,
    AboutMe,
    ContactMe,
    Footer,
    PageTop
  }
};
</script>
