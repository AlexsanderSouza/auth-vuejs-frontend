<template>
    <div id="app" :class="[{ collapsed: collapsed && user }, { onmobile: isOnMobile }, { padding: user }]">
        <div :class="{ app: this.user }">
            <div :class="{ container: this.user }">
                <router-view />
            </div>
            <sidebar v-if="user" @toggleCollapse="collapsed = $event" @onResize="onResize($event)" />
            <div v-if="isOnMobile && !collapsed && user" class="sidebar-overlay" @click="collapsed = true" />
        </div>
    </div>
</template>
<script>
import sidebar from '@/components/menu/sidebar'
import { mapGetters } from 'vuex'
export default {
    name: 'app',
    components: { sidebar },
    data() {
        return {
            collapsed: this.user,
            isOnMobile: false
        }
    },
    computed: {
        ...mapGetters('auth', ['user'])
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

body,
html {
    margin: 0;
    padding: 0;
}
#app {
    transition: 0.3s ease;
}
#app.padding {
    padding-left: 350px;
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
    padding: 30px;
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
