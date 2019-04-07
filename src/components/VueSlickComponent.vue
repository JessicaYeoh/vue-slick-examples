<template>
    <div>
        <slick ref="slick" :options="slickOptions">
            <slot></slot>
        </slick>
    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: 'VueSlickComponent',
        components: {
            Slick,
        },
        props: {
            slidesToShow: Number,
            vertical: {
                type: Boolean,
                default: false,
            },
            verticalSwiping: {
                type: Boolean,
                default: false,
            },
            infinite: {
                type: Boolean,
                default: false,
            },
            autoplay: {
                type: Boolean,
                default: false,
            },
            variableWidth: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                slickOptions: {
                    slidesToShow: this.slidesToShow,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    swipeToSlide: true,
                    arrows: false,
                    infinite: this.infinite,
                    vertical: this.vertical,
                    verticalSwiping: this.verticalSwiping,
                    autoplay: this.autoplay,
                    autoplaySpeed: 2000,
                    variableWidth: this.variableWidth,
                },
            }
        },
    }
</script>
