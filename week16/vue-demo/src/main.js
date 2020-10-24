import HelloWorld from "./HelloWorld.vue";
import Vue from "Vue";

new Vue({
  el: "#app",
  // template: "<HellWorld/>",
  // components: { App }
  render: h => h(HelloWorld)
});