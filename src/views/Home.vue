<template>
    <section class="travels">
        <div class="container">
            <h1 class="title">Our travels</h1>
            <Filter />
            <Slider />
        </div>
    </section>
</template>

<script>
import Filter from "@/components/Filter.vue";
import Slider from "@/components/Slider.vue";

export default {
    name: "Home",
    components: {
        Filter,
        Slider,
    },
};
</script>

<style lang="sass">
.container
    max-width: 1200px
    margin: 0 auto
    padding: 0 15px
.travels
    padding: 45px 0 134px 0
    position: relative
.title
    font-family: "GolosTextWebMedium"
    font-size: 36px
    line-height: 53px
    color: white
    margin-bottom: 18px
@media screen and  (min-width: 768px) and (max-width: 1439px)
    .container
        width: 688px
        padding: 0 40px
    .title
        font-family: "GolosTextWebRegular"
@media screen and  (min-width: 375px) and (max-width: 767px)
    .container
        max-width: 335px
        padding: 0 20px
    .title
        font-size: 30px
        font-family: "GolosTextWebRegular"
</style>
