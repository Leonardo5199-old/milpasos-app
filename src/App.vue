<template>
    <div class="layout-content">
        <app-topbar @menubutton-click="onMenuButtonClick"/>
        <app-menu :active="sidebarActive"/>
        <div :class="['layout-mask', {'layout-mask-active': sidebarActive}]" @click="onMaskClick"></div>
        <div class="layout-content">
        <router-view/>
        <app-footer />
        </div>
    </div>
</template>

<script>
import AppTopBar from '@/AppTopBar.vue';
import AppFooter from '@/AppFooter.vue';
import AppMenu from '@/AppMenu.vue';

export default {
    data() {
        return {
            sidebarActive: false
        }
    },
    components: {
        'app-topbar': AppTopBar,
        'app-footer': AppFooter,
        'app-menu': AppMenu
    },
    watch: {
        $route() {
            this.sidebarActive = false;
        }
    },
    methods: {
        onMenuButtonClick() {
            this.sidebarActive = !this.sidebarActive;
        },
        onMaskClick() {
            this.sidebarActive = false;
        }
    },
}
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
