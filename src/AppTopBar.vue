<template>
    <div class="layout-topbar">
        <a class="menu-button" @click="$emit('menubutton-click')">
            <i class="pi pi-bars"></i>
        </a>
        <router-link to="/" class="logo navbar-brand text-dark">
            <img alt="logo" src="./assets/images/Mil-Pasos_Negro.png">
            Mil Pasos
        </router-link>
        <ul class="topbar-menu">
            <li><router-link to="/inscribirse">Cómo inscribirse</router-link></li>
            <li><router-link to="/conocenos">Conócenos</router-link></li>
            <li><router-link to="/politicas">Políticas del centro</router-link></li>
            <li><router-link to="/contactos">Contactos</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>
