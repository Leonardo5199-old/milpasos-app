<template>
    <div :class="['layout-sidebar', {'active': active}]" v-if="active">
        <div class="layout-menu">
            <a>
                <router-link to="/inscribirse">Cómo inscribirse</router-link>
            </a>
            <a>
                <router-link to="/conocenos">Conócenos</router-link>
            </a>
            <a>
                <router-link to="/politicas">Políticas del centro</router-link>
            </a>
            <a>
                <router-link to="/contactos">Contactos</router-link>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        active: Boolean
    },
    data() {
        return {
            activeMenuIndex: null
        }
    },
    methods: {
        toggleMenu(event, index) {
            this.activeMenuIndex = (this.activeMenuIndex === index) ? null : index;
        }
    }
}
</script>
