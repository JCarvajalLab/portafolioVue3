import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        title: "Proyecto 1",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        description: "Descripción detallada del proyecto 1. Aquí puedes explicar en qué consiste, qué tecnologías se utilizaron y cuál fue el objetivo.",
        languages: ["HTML", "CSS", "JavaScript", "Vue", "Vuetify"],
      },
      {
        id: 2,
        title: "Proyecto 2",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        description: "Descripción detallada del proyecto 2. Aquí puedes explicar en qué consiste, qué tecnologías se utilizaron y cuál fue el objetivo.",
        languages: ["HTML", "CSS", "JavaScript", "Vue", "Vuetify"],
      },
      {
        id: 3,
        title: "Proyecto 3",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        description: "Descripción detallada del proyecto 3. Aquí puedes explicar en qué consiste, qué tecnologías se utilizaron y cuál fue el objetivo.",
        languages: ["HTML", "CSS", "JavaScript", "Vue", "Vuetify"],
      },
      {
        id: 4,
        title: "Proyecto 4",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        description: "Descripción detallada del proyecto 4. Aquí puedes explicar en qué consiste, qué tecnologías se utilizaron y cuál fue el objetivo.",
        languages: ["HTML", "CSS", "JavaScript", "Vue", "Vuetify"],
      },
    ],
  },
  getters: {
    getProjects: (state) => state.projects,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
