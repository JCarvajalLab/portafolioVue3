<template>
<NavbarComponent />
<div id="home">
    <div class="content">
        <h1 class="title">Bienvenido a mi Portafolio</h1>
        <p class="description">Aquí encontrarás información sobre mí, mis proyectos y habilidades.</p>
    </div>

    <div id="about">
        <AboutmeComponent class="my-12" id="about" />
    </div>
    <div id="experience">
        <ExperienceComponent class="my-12" id="experience" />
    </div>
    <div id="projects">
        <ProyectsComponent class="my-12" id="projects" />
    </div>
    <div id="skills">
        <SkillsComponent class="my-12" id="skills" />
    </div>
</div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import AboutmeComponent from '../components/AboutmeComponent.vue';
import ExperienceComponent from '../components/ExperienceComponent.vue';
import ProyectsComponent from '../components/ProyectsComponent.vue';
import SkillsComponent from '../components/SkillsComponent.vue';

export default {
    name: 'HomeView',
    components: {
        NavbarComponent,
        AboutmeComponent,
        ExperienceComponent,
        ProyectsComponent,
        SkillsComponent,
    },
};
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}


#about,
#experience,
#skills {
    padding-top: 64px;
    /* espacio entre componentes */
    padding-bottom: 64px;
    /* espacio entre componentes */
    height: 100vh;
    /* altura de la pantalla */
    overflow: hidden;
    /* oculta el contenido que sobrepasa la altura */
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 64px);
    color: rgb(126, 50, 50);
    text-align: center;
}

.title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.description {
    font-size: 1.2rem;
}
</style>
