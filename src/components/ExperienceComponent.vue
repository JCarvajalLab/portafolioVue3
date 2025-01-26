<template>
  <v-timeline>
    <v-timeline-item size="small">
      <template v-slot:icon>
        <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Junio 2024</span>
      </template>
      <v-card class="elevation-5">
        <v-card-title class="text-h6">
          Desarrollador Web FullStack
        </v-card-title>
        <v-card-text>Encargado del desarrollo de interfaces para la plataforma y de implementar funcionalidades en Frontend y Backend, utilizando las tecnologías como Nextjs y Expressjs.</v-card-text>
        <v-card-actions>
          <a href="https://www.linkedin.com/in/tu-perfil/" target="_blank">Saber más</a>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      experiences: [{
        year: "2024",
        title: "Desarrollador Web FullStack",
        description: "Encargado del desarrollo de interfaces para la plataforma y de implementar funcionalidades en Frontend y Backend, utilizando las tecnologías como Nextjs y Expressjs.",
        color: "primary",
      }],
    };
  },
};
</script>

<style scoped>
#experience {
  padding: 2rem;
  background-color: #f5f5f5;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

.v-timeline {
  max-width: 800px;
  max-height: 500px;
  margin: 0 auto;
}

.v-timeline-item {
  padding: 1rem;
}

.v-card {
  padding: 1rem;
}

.v-card-title {
  font-size: 1.2rem;
}

.v-card-text {
  font-size: 1rem;
}

.v-card-actions {
  padding: 1rem;
}
</style>