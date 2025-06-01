<script setup>
import MenuButton from './MenuButton.vue'

</script>

<template>
    <div class="aside">
        <div class="asideLogo">
            <a href="intro"><video src="/img/Cesida_Logo.webm" autoplay loop muted playsinline></video></a>
        </div>

        <div class="asideNav">
            <MenuButton label="Intro" to="/intro" />

            <MenuButton label="Marca" to="/marca" :submenu="[
                { label: 'Historia', href: '#historia' },
                { label: 'Principios', href: '#principios' },
                { label: 'Misión', href: '#mision' },
                { label: 'Visión', href: '#vision' },
                { label: 'Valores', href: '#valores' },
                { label: 'Tono', href: '#tono' },
                { label: 'Voz', href: '#voz' },
            ]" />

            <MenuButton label="Logo" to="/logo" :submenu="[
                { label: 'Visión general', href: '#visiongeneral' },
                { label: 'Isotipo', href: '#isotipo' },
                { label: 'Logotipo', href: '#logotipo' },
                { label: 'Logo dinámico', href: '#dinamico' },
                { label: 'Área de respeto', href: '#area' },
                { label: 'Submarcas', href: '#submarcas' },
                { label: 'Mosca', href: '#mosca' },
                { label: 'Color', href: '#logocolor' },
            ]" />

            <MenuButton label="Tipografía" to="/tipografia" :submenu="[
                { label: 'Tipografía principal', href: '#tprincipal' },
                { label: 'Tipografía secundaria', href: '#tsecundaria' },
                { label: 'Pesos', href: '#pesos' },
                { label: 'Jerarquía de tipos', href: '#jerarquia' },
                { label: 'Aplicaciones', href: '#taplicaciones' },
            ]" />
            <MenuButton label="Color" to="/color" :submenu="[
                { label: 'Colores principales', href: '#cprincipales' },
                { label: 'Colores secundarios', href: '#csecundarios' },
                { label: 'Escala de grises', href: '#grises' },
                { label: 'Color submarca', href: '#csubmarca' },
            ]" />

            <MenuButton label="Layout" to="/layout" :submenu="[
                { label: 'Retícula', href: '#reticula' },

            ]" />

            <MenuButton label="Formas y patrones" to="/formas" :submenu="[
                { label: 'Formas', href: '#formas' },
                { label: 'Patrones', href: '#patrones' },
                { label: 'Comportamientos', href: '#fcomportamientos' },
            ]" />

            <MenuButton label="Fotografía" to="/fotografia" :submenu="[
                { label: 'Tipo de fotografía', href: '#tipofoto' },
                { label: 'Edición', href: '#edicionfoto' },
            ]" />

            <MenuButton label="Motion" to="/motion" :submenu="[
                { label: 'Modos', href: '#modos' },
                { label: 'Comportamientos', href: '#comportamientos' },
            ]" />

            <MenuButton label="Aplicaciones" to="/aplicaciones" :submenu="[
                { label: 'Publicidad', href: '#publicidad' },
                { label: 'Papelería corporativa', href: '#papeleria' },
                { label: 'Merchandising', href: '#merch' },
                { label: 'Redes sociales', href: '#redessociales' },
                { label: 'Web', href: '#web' },
            ]" />


        </div>
    </div>

</template>

<style scoped lang="scss">
.aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 15rem;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    z-index: 1000;

    .asideLogo {
        padding: 2rem 1rem;

        video {
            height: 3.5rem;
            margin-left: 0.5rem;
        }
    }

    .asideNav {
        padding: 1rem;
        color: white;
    }

}
</style>
