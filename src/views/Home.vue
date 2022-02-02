<template>
    <section class="travels">
        <div class="container">
            <h1 class="title">Our travels</h1>
            <!-- КОМПОНЕНТ ФИЛЬТР КНОПОК -->
            <Filter />
            <!--TODO КОМПОНЕНТ СЛАЙДЕР -->
        </div>
    </section>
</template>

<script>
import Filter from "@/components/Filter.vue";

export default {
    name: "Home",
    components: {
        Filter,
    },
};
</script>

<style lang="sass">
.container
    width: 1200px
    margin: 0 auto
    padding: 0 15px
.travels
    padding: 45px 0 134px 0
.title
    font-weight: bold
    font-size: 36px
    line-height: 53px
    color: white
    margin-bottom: 18px
</style>
