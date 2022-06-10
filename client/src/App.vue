<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  background-color: #476072;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.custom-card {
    color: #334257;
    background-color: #EEEEEE;
    padding: 30px;
}

.custom-btn {
  color: #FFF;
  border: 1px solid #FFF;
  border-radius: 0.25rem;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  background-color: inherit;
}

.custom-btn:hover {
  color: #35435D;
  border: 1px solid #35435D;
  border-radius: 0.25rem;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  background-color: #FFF;
}
</style>
