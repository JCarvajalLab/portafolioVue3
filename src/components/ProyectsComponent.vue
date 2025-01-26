<template>
<div>
    <!-- Contenedor de filas y columnas -->
    <v-row >
        <!-- Iterar sobre los proyectos -->
        <v-col v-for="project in projects" :key="project.id" cols="12" sm="6" md="6" lg="6" xl="6">
            <v-card :disabled="loading" :loading="loading" class="mx-auto my-12" max-width="374">
                <template v-slot:loader="{ isActive }">
                    <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
                </template>

                <!-- Imagen del proyecto -->
                <v-img height="250" :src="project.image" cover></v-img>

                <!-- Título y subtítulo del proyecto -->
                <v-card-item>
                    <v-card-title>{{ project.title }}</v-card-title>
                </v-card-item>
                <v-spacer></v-spacer>

                <!-- Lenguajes de programación -->
                <v-card-text>
                    <v-row align="center" class="mx-0" style="flex-wrap: wrap;">
                        <div v-for="(language, index) in project.languages" :key="index" class="d-inline-block mx-2">
                            <v-icon left>{{ getLanguageIcon(language) }}</v-icon>
                            {{ language }}
                        </div>
                    </v-row>
                    <br />
                    <!-- Descripción del proyecto -->
                    <div class="my-1 text-subtitle-1">
                        {{ project.description }}
                    </div>
                </v-card-text>

                <!-- Botones de Código y Demo -->
                <v-card-actions class="justify-space-evenly">
                    <v-btn color="deep-purple-lighten-2" text="Código" border @click="goToCode(project.id)">
                        <v-icon left>mdi-git</v-icon>
                        Código
                    </v-btn>
                    <v-btn color="deep-purple-lighten-2" text="Demo" border @click="goToDemo(project.id)">
                        <v-icon left>mdi-open-in-new</v-icon>
                        Demo
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    data: () => ({
        loading: false,
        selection: 1, // Selección de lenguajes
    }),

    computed: {
        ...mapState({
            projects: (state) => state.projects, // Obtener proyectos desde el store
        }),
    },

    methods: {
        // Método para obtener el ícono del lenguaje
        getLanguageIcon(language) {
            const icons = {
                HTML: 'mdi-language-html5',
                CSS: 'mdi-language-css3',
                JavaScript: 'mdi-language-javascript',
                Vue: 'mdi-vuejs',
                Vuetify: 'mdi-vuetify',
            };
            return icons[language] || 'mdi-help-circle'; // Ícono por defecto
        },

        // Método para ir al código (Git)
        goToCode(projectId) {
            this.loading = true;
            setTimeout(() => (this.loading = false), 2000);
            console.log(`Ir al código del proyecto ${projectId}`);
        },

        // Método para ir a la demo
        goToDemo(projectId) {
            this.loading = true;
            setTimeout(() => (this.loading = false), 2000);
            console.log(`Ir a la demo del proyecto ${projectId}`);
        },
    },
};
</script>

<style scoped>
/* Estilos personalizados si los necesitas */
</style>

