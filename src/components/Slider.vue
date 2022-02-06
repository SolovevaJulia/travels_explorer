<template>
    <div class="button-prev">
        <img src="../assets/img/arrow_default_left.svg" alt="" />
    </div>
    <div class="button-next">
        <img src="../assets/img/arrow_active_right.svg" alt="" />
    </div>
    <!-- <div class="container-swiper"> -->
    <div class="slider-block border border-yellow-400 mt-10 h-">
        <swiper
            :breakpoints="{
                375: {
                    slidesPerView: 1.7,
                    slidesPerColumn: 2,
                },
                768: {
                    slidesPerView: 2.7,
                    slidesPerColumn: 2,
                },
                1440: {
                    slidesPerView: 6,
                    slidesPerColumn: 2,
                },
            }"
            :observer="true"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :navigation="{ nextEl: '.button-next', prevEl: '.button-prev' }"
        >
            <swiper-slide
                ref="slider"
                v-for="(item, index) in filterCountry"
                :id="item.id"
                :key="index"
            >
                <div class="swiper-slide-left" :class="`slide-${item.city}`">
                    <div class="slide-info">
                        <p class="slide-city">{{ item.city }}</p>
                        <p class="slide-country">{{ item.country }}</p>
                    </div>
                </div>
                <!-- <div class="swiper-slide-right">
                        <p class="slide-descr">{{ item.descr }}</p>
                        <button class="slide-btn-more">Learn more</button>
                    </div> -->
            </swiper-slide>
        </swiper>
        <div class="pagination-wrapper">
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <!-- </div> -->
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
    gap: 36px
    padding-bottom: 20px
.swiper-container-multirow-column
    & > .swiper-wrapper
        flex-direction: row
.swiper-slide
    width: 170px !important
    // min-width: 20px!important
    height: 250px !important
    background-size: cover
    border-radius: 17px
    -webkit-box-shadow: 10px 10px 20px -4px rgba(0, 0, 0, 0.5)
    -moz-box-shadow: 10px 10px 20px -4px rgba(0, 0, 0, 0.5)
    box-shadow: 10px 10px 20px -4px rgba(0, 0, 0, 0.5)
    display: flex
    overflow: hidden
    transition-property: width
    transition-duration: .8s
    &:hover
        // width: 570px!important
        // overflow: visible
    &-left
        height: inherit
        min-width: 170px !important
        border-radius: 8px
        display: flex
        align-items: end
        // &:hover
        //     .swiper-slide-right
        //         max-width: 400px
    &-right
        min-width: 400px

.slide
    &-descr
        font-style: 'GolosTextWebRegular'
        font-weight: normal
        font-size: 16px
        line-height: 140%
        color: white
        height: inherit
        padding: 25px 30px 0 30px
        min-height: 139px
    &-btn-more
        background-color: #FE003D
        color: white
        padding: 13px 21px
        margin: 14px 0 14px 30px
        border-radius: 8px
    &-info
        position: absolute
        bottom: 16px
        left: 16px
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
        transition: .8s
        &:hover
            background-color: #FE003D

    &-next
        right: 49px
    &-prev
        left: 49px
.swiper-pagination
    display: none
@media screen and  (min-width: 768px) and (max-width: 1439px)
    .button
        &-prev, &-next
            display: none
    .swiper-wrapper
        // width: 1440px !important
        gap: 20px
    .swiper-slide
        width: 216px !important
        height: 317px !important
        &-left
            min-width: 216px !important
    .swiper-pagination
        margin-top: 20px
        position: relative
        left: 50%
        transform: translate(-50%, 0)
        display: flex
        justify-content: space-between
        height: 7px
        width: 58px
        align-items: center
    .swiper-pagination-bullet
        background-color: white
        opacity: 1
        &-active
            background-color: #FE003D
            border: 1px solid #FE003D
@media screen and  (min-width: 375px) and (max-width: 767px)
    .button
        &-prev, &-next
            display: none
    .swiper-wrapper
        // width: 1440px !important
        gap: 18px
    .swiper-slide
        width: 158px !important
        height: 230px !important
        &-left
            min-width: 158px !important
    .swiper-pagination
        margin-top: 20px
        position: relative
        left: 50%
        transform: translate(-50%, 0)
        display: flex
        height: 7px
    .swiper-pagination-bullet
        background-color: white
        opacity: 1
        margin-right: 10px
        &-active
            background-color: #FE003D
            border: 1px solid #FE003D
        &:last-child
            margin-right: 0
    .pagination-wrapper
        width: 100%
        display: flex
        align-items: center
</style>
