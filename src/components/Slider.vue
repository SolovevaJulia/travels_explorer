<template>
    <div>
        <div class="button-prev">
            <img src="../assets/img/arrow_default_left.svg" alt="" />
        </div>
        <div class="button-next">
            <img src="../assets/img/arrow_active_right.svg" alt="" />
        </div>
        <div class="slider-block border border-yellow-400 mt-10 h-">
            <swiper
                :breakpoints="{
                    0: {
                        pagination: true,
                    },
                    780: {
                        pagination: false,
                    },
                }"
                :slidesPerView="6"
                :slidesPerColumn="2"
                :grid="{
                    rows: 2,
                }"
                :pagination="{
                    clickable: true,
                }"
                :navigation="{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                }"
                class="mySwiper w-1/4"
            >
                <swiper-slide
                    ref="slider"
                    v-for="(item, index) in filterCountry"
                    :id="item.id"
                    :key="index"
                >
                    <div
                        class="swiper-slide-left"
                        :class="`slide-${item.city}`"
                    >
                        <div class="slide-info">
                            <p class="slide-city">{{ item.city }}</p>
                            <p class="slide-country">{{ item.country }}</p>
                        </div>
                    </div>
                    <div class="swiper-slide-right">
                        <!-- <p class="slide-descr">{{ item.descr }}</p> -->
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default {
    computed: { ...mapGetters(["filterCountry"]) },
    components: {
        Swiper,
        SwiperSlide,
    },
    beforeMount() {
        this.$store.dispatch("set_filter_countries", "All countries");
    },
};
</script>

<style lang="sass">
.swiper-wrapper
    gap: 30px
    padding-bottom: 20px
.swiper-container-multirow-column
    & > .swiper-wrapper
        flex-direction: row
.swiper-slide
    max-width: 170px !important
    // min-width: 20px!important
    height: 250px !important
    background-size: cover
    border-radius: 8px
    -webkit-box-shadow: 10px 10px 20px -4px rgba(0, 0, 0, 0.5)
    -moz-box-shadow: 10px 10px 20px -4px rgba(0, 0, 0, 0.5)
    box-shadow: 10px 10px 20px -4px rgba(0, 0, 0, 0.5)
    // display: flex
    // overflow: hidden
    // &:hover
    //     max-width: 570px!important
    //     overflow: visible
    &-left
        height: inherit
        min-width: 170px !important
        border-radius: 8px
        display: flex
        align-items: end
        // &:hover
        //     .swiper-slide-right
        //         max-width: 400px
    // &-right
    //     width: 400px
.slide
    &-descr
        font-style: normal
        font-weight: normal
        font-size: 16px
        line-height: 140%
        color: white
        width: 400px
        height: inherit
    &-info
        padding-bottom: 16px
        padding-left: 16px
    &-city
        color: white
        font-family: "GolosTextWebDemiBold"
        font-size: 16px
        line-height: 19px
        text-transform: capitalize
    &-country
        font-family: "GolosTextWebRegular"
        color: white
        font-size: 16px
        line-height: 19px
        text-transform: capitalize
    &-Milan
        background-image: url('../assets/img/1x/Milan.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Milan2x.jpg')
    &-Freiburg
        background-image: url('../assets/img/1x/Freiburg.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Freiburg2x.jpg')
    &-Lisbon
        background-image: url('../assets/img/1x/Lisbon.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Lisbon2x.jpg')
    &-Vicenza
        background-image: url('../assets/img/1x/Vicenza.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Vicenza2x.jpg')
    &-Barcelona
        background-image: url('../assets/img/1x/Barcelona.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Barcelona2x.jpg')
    &-Porto
        background-image: url('../assets/img/1x/Porto.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Porto2x.jpg')
    &-Athens
        background-image: url('../assets/img/1x/Athens.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Athens2x.jpg')
    &-Kash
        background-image: url('../assets/img/1x/Kash.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Kash2x.jpg')
    &-Madrid
        background-image: url('../assets/img/1x/Madrid.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Madrid2x.jpg')
    &-Berlin
        background-image: url('../assets/img/1x/Berlin.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Berlin2x.jpg')
    &-Antalya
        background-image: url('../assets/img/1x/Antalya.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Antalya2x.jpg')
    &-Venice
        background-image: url('../assets/img/1x/Venice.jpg')
        @media (min-resolution: 2dppx)
            background-image: url('../assets/img/Retina/Venice2x.jpg')
.button
    &-prev, &-next
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        top: 50%
        cursor: pointer
        background-color: transparent
        border: none
        border-radius: 50%
        width: 40px
        height: 40px
        &:hover
            background-color: #FE003D
    &-next
        right: 1%
    &-prev
        left: 1%
</style>
