<template>
<nav class="navbar">
    <ul>
        <li :class="{ active: activeSection === 'home' }" @click="scrollTo('home')">Home</li>
        <li :class="{ active: activeSection === 'about' }" @click="scrollTo('about')">About</li>
        <li :class="{ active: activeSection === 'experience' }" @click="scrollTo('experience')">Experience</li>
        <li :class="{ active: activeSection === 'projects' }" @click="scrollTo('projects')">Projects</li>
        <li :class="{ active: activeSection === 'skills' }" @click="scrollTo('skills')">Skills</li>
    </ul>
</nav>
</template>

<script>
export default {
    data() {
        return {
            activeSection: 'home',
        };
    },
    methods: {
        scrollTo(section) {
            this.activeSection = section;
            document.getElementById(section).scrollIntoView({
                behavior: 'smooth'
            });
        },
        handleScroll() {
            const sections = ['home', 'about', 'experience', 'projects', 'skills'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        this.activeSection = section;
                        break;
                    }
                }
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333;
    color: white;
    padding: 10px;
    z-index: 1000;
}

.navbar ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.navbar li {
    margin: 0 15px;
    cursor: pointer;
}

.navbar li.active {
    font-weight: bold;
    color: #42b983;
}
</style>
