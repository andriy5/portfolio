<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
      <a href="#aboutme">À propos</a>
      <a href="#projects">Projets</a>
      <a href="#">CV</a>

      <a id="initiale">A S</a>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

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
    color: #d8d8d8;
    text-decoration: none;
    margin: 0 2rem;
  }
 
  #initiale {
    font-family: $yanone;
    font-size: 24px;
    // font-weight: 400;
    float: left;
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

// #picture {
//   position: absolute;
//   width: 50vw;
//   height: auto;
//   z-index: -1;
//   left: 0;
//   top: 50px;
//   // -webkit-filter: grayscale(100%);
//   // filter: grayscale(100%);
// }
</style>
