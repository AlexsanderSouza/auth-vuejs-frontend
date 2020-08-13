<template>
    <div id="app" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
        <div class="app">
            <div class="container">
                <router-view />
            </div>
            <sidebar @toggleCollapse="collapsed = $event" @onResize="onResize($event)" />
            <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" />
        </div>
    </div>
</template>
<script>
import sidebar from '@/components/menu/sidebar'
export default {
    name: 'app',
    components: { sidebar },
    data() {
        return {
            collapsed: false,
            isOnMobile: false
        }
    },
    methods: {
        onResize(event) {
            this.isOnMobile = event.isOnMobile
            this.collapsed = event.collapsed
        }
    }
}
</script>
<style lang="scss">
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

body,
html {
    margin: 0;
    padding: 0;
}
#app {
    padding-left: 350px;
    transition: 0.3s ease;
}
#app.collapsed {
    padding-left: 50px;
}
#app.onmobile {
    padding-left: 50px;
}
.sidebar-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    z-index: 900;
}
.app {
    padding: 50px;
}
.container {
    max-width: 900px;
}
pre {
    font-family: Consolas, monospace;
    color: #000;
    background: #fff;
    border-radius: 2px;
    padding: 15px;
    line-height: 1.5;
    overflow: auto;
}
</style>
