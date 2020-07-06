<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway&family=Yanone+Kaffeesatz:wght@400;700&display=swap");
$raleway: "Raleway", sans-serif;
$yanone: "Yanone Kaffeesatz", sans-serif;

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
}

#nav a {
  float: right;
  font-weight: bold;
  color: #d8d8d8;
  text-decoration: none;
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
