<template>
<div class="container">
    <div class="header">
        <i class="fas fa-user"></i>
        <h1>Sobre mi</h1>
    </div>
    <div class="content">
        <p>
            Me llamo Jordan soy desarrollador Frontend, casi
            <span class="highlight-orange">siempre motivado por explorar las infinitas posibilidades del desarrollo web</span>
            y cómo hacer que las ideas cobren vida, también cuento con conocimientos en
            <span class="highlight-yellow">Backend</span>.
        </p>
        <p>
            Mi objetivo es seguir especializándome en
            <span class="highlight-orange">crear interfaces atractivas y fáciles de usar</span>
            y aplicar las mejores prácticas en el desarrollo web.
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: 'AboutmeComponent',
};
</script>

<style scoped>
body {
    background-color: #0d1b2a;
    color: #ffffff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.header i {
    font-size: 24px;
    margin-right: 10px;
}

.header h1 {
    font-size: 24px;
    margin: 0;
}

.content p {
    font-size: 18px;
    line-height: 1.6;
}

.highlight-orange {
    color: #fca311;
}

.highlight-yellow {
    color: #e85d04;
}
</style>
