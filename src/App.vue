<template>
    <div id="app">
        <h2>Vue Slick</h2>

        <h4>Horizontal Quantity selector</h4>
        <vue-slick class="slick-horizontal" :slides-to-show="5" :variable-width="true">
            <button class="slick_button_class" v-for="i in 100">
                {{ i }}
            </button>
        </vue-slick>

        <hr/>

        <h4>Vertical Quantity selector</h4>
        <vue-slick :slides-to-show="1" :vertical="true" :vertical-swiping="true">
            <button class="slick_button_class" v-for="i in 100">
                {{ i }}
            </button>
        </vue-slick>

        <hr/>

        <h4>Image Carousel Autoplay</h4>
        <vue-slick :slides-to-show="3" :infinite="true" :autoplay="true">
            <img src="./assets/bordercollie.jpg"/>
            <img src="./assets/husky.jpg"/>
            <img src="./assets/jackrussell.jpg"/>
            <img src="./assets/labrador.jpg"/>
            <img src="./assets/miniature-dachshund2.jpg"/>
            <img src="./assets/spitz.jpeg"/>
        </vue-slick>

        <hr/>
    </div>
</template>

<script>
    import VueSlick from './components/VueSlickComponent.vue';

    export default {
        name: 'app',
        components: {
            VueSlick,
        }
    }
</script>

<style lang="scss" src="./styles/main.scss"></style>
