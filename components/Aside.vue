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
                { label: 'Historia', href: '/marca#historia' },
                { label: 'Principios', href: '/marca#principios' },
                { label: 'Misión', href: '/marca#mision' },
                { label: 'Visión', href: '/marca#vision' },
                { label: 'Valores', href: '/marca#valores' },
                { label: 'Tono', href: '/marca#tono' },
                { label: 'Voz', href: '/marca#voz' },
            ]" />

            <MenuButton label="Logo" to="/logo" :submenu="[ 
                { label: 'Isotipo', href: '/logo#isotipo' },
                { label: 'Logotipo', href: '/logo#logotipo' },
                { label: 'Logo dinámico', href: '/logo#dinamico' },
                { label: 'Área de respeto', href: '/logo#area' },
                { label: 'Submarcas', href: '/logo#submarcas' },
                { label: 'Mosca', href: '/logo#mosca' },
                { label: 'Color', href: '/logo#logocolor' },
            ]" />

            <MenuButton label="Tipografía" to="/tipografia" :submenu="[
                { label: 'Tipografía principal', href: '/tipografia#tprincipal' },
                { label: 'Tipografía secundaria', href: '/tipografia#tsecundaria' },
                { label: 'Pesos', href: '/tipografia#pesos' },
                { label: 'Jerarquía de tipos', href: '/tipografia#jerarquia' },
                { label: 'Aplicaciones', href: '/tipografia#taplicaciones' },
            ]" />
            <MenuButton label="Color" to="/color" :submenu="[
                { label: 'Colores principales', href: '/color#cprincipales' },
                { label: 'Colores secundarios', href: '/color#csecundarios' },
                { label: 'Escala de grises', href: '/color#grises' },
                { label: 'Color submarca', href: '/color#csubmarca' },
            ]" />

            <MenuButton label="Layout" to="/layout" :submenu="[
                { label: 'Visión general', href: '/layout#visiong' },
                { label: 'Retícula', href: '/layout#reticula' },
                { label: 'Recomendaciones', href: '/layout#recomendaciones' },

            ]" />

            <MenuButton label="Formas y patrones" to="/formas" :submenu="[
                { label: 'Formas', href: '/formas#formas' },
                { label: 'Uso', href: '/formas#uso' },
                { label: 'Patrones', href: '/formas#patrones' },
                { label: 'Comportamientos', href: '/formas#fcomportamientos' },
            ]" />

            <MenuButton label="Fotografía" to="/fotografia" :submenu="[
                { label: 'Tipo de fotografía', href: '/fotografia#tipofoto' },
                { label: 'Edición', href: '/fotografia#edicionfoto' },
            ]" />

            <MenuButton label="Motion" to="/motion" :submenu="[
                { label: 'Modos', href: '/motion#modos' },
                { label: 'Comportamientos', href: '/motion#comportamientos' },
            ]" />

            <MenuButton label="Aplicaciones" to="/aplicaciones" :submenu="[
                { label: 'Publicidad', href: '/aplicaciones#publicidad' },
                { label: 'Papelería corporativa', href: '/aplicaciones#papeleria' },
                { label: 'Merchandising', href: '/aplicaciones#merch' },
                { label: 'Redes sociales', href: '/aplicaciones#redessociales' },
                { label: 'Web', href: '/aplicaciones#web' },
                { label: 'Campaña', href: '/aplicaciones#campaña' },
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
