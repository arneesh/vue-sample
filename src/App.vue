<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <component :is="this.$route.meta.layout || 'div'">
        <transition name="slide">
          <router-view />
        </transition>
      </component>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";

export default {
  data() {
    return {};
  },
  components: {
    "top-header": TopHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  min-height: 100vh;
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
</style>
