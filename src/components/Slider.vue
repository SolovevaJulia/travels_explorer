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
                :slidesPerView="6"
                :grid="{
                    rows: 2,
                }"
                :spaceBetween="30"
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
                    :class="`slide-${item.city}`"
                    v-for="(item, index) in imgList"
                    :key="index"
                    ><div class="slide-info">
                        <p class="slide-city">{{ item.city }}</p>
                        <p class="slide-country">{{ item.country }}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
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
    components: {
        Swiper,
        SwiperSlide,
    },
    data: () => ({
        imgList: [
            {
                id: 0,
                country: "italy",
                city: "milan",
            },
            {
                id: 1,
                country: "germany",
                city: "freiburg",
            },
            {
                id: 2,
                country: "portugal",
                city: "lisbon",
            },
            {
                id: 3,
                country: "italy",
                city: "vicenza",
            },
            {
                id: 4,
                country: "spain",
                city: "barcelona",
            },
            {
                id: 5,
                country: "portugal",
                city: "porto",
            },
            {
                id: 6,
                country: "greece",
                city: "athens",
            },
            {
                id: 7,
                country: "turkey",
                city: "kash",
            },
            {
                id: 8,
                country: "spain",
                city: "madrid",
            },
            {
                id: 9,
                country: "germany",
                city: "berlin",
            },
            {
                id: 10,
                country: "turkey",
                city: "antalya",
            },
            {
                id: 11,
                country: "italy",
                city: "venice",
            },
        ],
    }),
};
</script>

<style lang="sass">
.swiper-slide
    width: 170px !important
    height: 250px !important
    background-size: cover
    border-radius: 8px
    // background: linear-gradient(0deg, rgba(18, 24, 42, 0.5) 0%, rgba(139, 141, 147, 0) 71%)
    // filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25))
.slide
    &-info
        padding: 193px 16px 16px 16px
    &-city
        color: white
        font-weight: 900
        font-size: 16px
        line-height: 19px
        text-transform: capitalize
    &-country
        color: white
        font-weight: normal
        font-size: 16px
        line-height: 19px
        text-transform: capitalize
    &-milan
        background-image: url('../assets/img/Milan.jpg')
    &-freiburg
        background-image: url('../assets/img/Freiburg.jpg')
    &-lisbon
        background-image: url('../assets/img/Lisbon.jpg')
    &-vicenza
        background-image: url('../assets/img/Vicenza.jpg')
    &-barcelona
        background-image: url('../assets/img/Barcelona.jpg')
    &-porto
        background-image: url('../assets/img/Porto.jpg')
    &-athens
        background-image: url('../assets/img/Athens.jpg')
    &-kash
        background-image: url('../assets/img/Kash.jpg')
    &-madrid
        background-image: url('../assets/img/Madrid.jpg')
    &-berlin
        background-image: url('../assets/img/Berlin.jpg')
    &-antalya
        background-image: url('../assets/img/Antalya.jpg')
    &-venice
        background-image: url('../assets/img/Venice.jpg')
.button
    &-prev, &-next
        position: absolute
        top: 50%
        cursor: pointer
    &-next
        right: 0
    &-prev
        left: 0
</style>
