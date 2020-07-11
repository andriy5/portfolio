<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
      <a href="#aboutme">À propos</a>
      <a href="#projects">Projets</a>
      <a :href="`${publicPath}CV_DéveloppeurWeb_Andriy_Shakh.pdf`">CV</a>

      <a id="initiale" class="emphasis">ANDRIY SHAKH</a>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway&family=Yanone+Kaffeesatz:wght@400;700&display=swap");
$raleway: "Raleway", sans-serif;
$yanone: "Yanone Kaffeesatz", sans-serif;

html {
  scroll-behavior: smooth;
}

html body {
  padding: 0;
  margin: 0;
  background-color: #1d1d1d;
}

#app {
  font-family: $raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;
  margin-bottom: 15px;

  a {
    float: right;
    font-weight: bold;
    color: #ececec;
    text-decoration: none;
    margin: 0 2rem;
  }

  #initiale {
    font-family: $yanone;
    font-size: 24px;
    color: #fff;
    float: left;

    background: linear-gradient(to right, #ffbb00 0%, #da1b1b 150%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

// #nav a.router-link-exact-active {
//   color: #42b983;
// }

#name {
  /* font-size: 20px; */
  float: left;
  vertical-align: middle;
}

h1 {
  font-family: $yanone;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 3vmax;
}

h2 {
  font-family: $yanone;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2vmax;
}

@media only screen and (max-width: 992px) {
  .part {
    margin: 0 !important;
  }

  #nav a {
    margin: 0 1rem;
  }

  #presentation__right__links {
    width: 50%;
    float: right;
    display: block;
  }
}

@media only screen and (max-width: 768px) {
  #picture {
    display: none;
  }

  #initiale

  .type {
    width: 44%;
  }

  .type-me {
    width: 100%;
    margin-bottom: 20px;

    ul {
      padding: 0;

      li {
        text-align: center !important;
      }
    }
  }
}

.emphasis {
  background: linear-gradient(to right, #ffbb00 40%, #da1b1b 70%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
