import {defineStore} from 'pinia'

export const useModeStore = defineStore("mode",{
  state: () => ({
    value: "light",
  }),
  getters: {
    isLight: (state) => (state.value == "light" ? true : false),
    mainClasses : (state) => 
    (state.isLight
    ?"light-color light-bg"
    : "dark-color dark-bg"),
    bottomClass: (state) =>
      (state.isLight
        ? "light-bottom"
        : "dark-bottom"),
    borderClass : (state) =>
    (state.isLight
        ? "light-border"
        : "dark-border"),
    switchClasses: (state) =>
      (state.isLight
        ? "start light-border light-contrast"
        : "end dark-border dark-contrast"),
    bgClass: (state) =>
      (state.isLight
        ? "light-bg"
        : "dark-bg"),
  },
  actions: {
    changeMode() {
      this.value = this.value === "light" ? "dark" : "light";
    },
  },
});
