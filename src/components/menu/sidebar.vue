<template>
    <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
    >
        <div slot="footer">
            <b-button squared class="button-logout" @click="logout">
                <i class="fa fa-sign-out-alt fa-flip-horizontal"></i> Sair
            </b-button>
        </div>
    </sidebar-menu>
</template>

<script>
import { mapActions } from 'vuex'
const separator = {
    template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}
export default {
    name: 'sidebar',
    data() {
        return {
            menu: [
                {
                    header: true,
                    title: 'Getting Started',
                    hiddenOnCollapse: true
                },
                {
                    href: '/workarea',
                    title: 'Início',
                    icon: 'fa fa-home'
                },
                {
                    href: '/basic-usage',
                    title: 'Basic Usage',
                    icon: 'fa fa-code'
                },
                {
                    header: true,
                    title: 'Usage',
                    hiddenOnCollapse: true
                },
                {
                    href: '/props',
                    title: 'Props',
                    icon: 'fa fa-cogs'
                },
                {
                    href: '/events',
                    title: 'Events',
                    icon: 'fa fa-bell'
                },
                {
                    href: '/styling',
                    title: 'Styling',
                    icon: 'fa fa-palette'
                },
                {
                    component: separator
                },
                {
                    header: true,
                    title: 'Example',
                    hiddenOnCollapse: true
                },
                {
                    href: '/disabled',
                    title: 'Disabled page',
                    icon: 'fa fa-lock',
                    disabled: true
                },
                {
                    title: 'Badge',
                    icon: 'fa fa-cog',
                    badge: {
                        text: 'new',
                        class: 'vsm--badge_default'
                    }
                },
                {
                    href: '/page',
                    title: 'Dropdown Page',
                    icon: 'fa fa-list-ul',
                    child: [
                        {
                            href: '/page/sub-page-1',
                            title: 'Sub Page 01',
                            icon: 'fa fa-file-alt'
                        },
                        {
                            href: '/page/sub-page-2',
                            title: 'Sub Page 02',
                            icon: 'fa fa-file-alt'
                        }
                    ]
                },
                {
                    title: 'Multiple Level',
                    icon: 'fa fa-list-alt',
                    child: [
                        {
                            title: 'page'
                        },
                        {
                            title: 'Level 2 ',
                            child: [
                                {
                                    title: 'page'
                                },
                                {
                                    title: 'Page'
                                }
                            ]
                        },
                        {
                            title: 'Page'
                        },
                        {
                            title: 'Another Level 2',
                            child: [
                                {
                                    title: 'Level 3',
                                    child: [
                                        {
                                            title: 'Page'
                                        },
                                        {
                                            title: 'Page'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            collapsed: false,
            themes: [
                {
                    name: 'Default theme',
                    input: ''
                },
                {
                    name: 'White theme',
                    input: 'white-theme'
                }
            ],
            selectedTheme: 'Default theme'
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    methods: {
        ...mapActions('auth', ['sendLogoutRequest']),
        onToggleCollapse(collapsed) {
            this.$emit('toggleCollapse', collapsed)
            this.collapsed = collapsed
        },
        onResize() {
            if (window.innerWidth <= 767) {
                this.isOnMobile = true
                this.collapsed = true
            } else {
                this.isOnMobile = false
                this.collapsed = false
            }
            this.$emit('onResize', { isOnMobile: this.isOnMobile, collapsed: this.collapsed })
        },
        async logout() {
            await this.sendLogoutRequest()
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
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

.button-logout {
    width: 100%;
}
</style>
