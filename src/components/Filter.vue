<template>
    <!-- Верстка -->
    <nav>
        <button class="btn" v-for="city in buttons" :key="city.id">
            {{ city.name }}
        </button>
    </nav>
</template>

<script>
export default {
    data: () => ({
        buttons: [
            { name: "All countries", id: 0 },
            { name: "Italy", id: 1 },
            { name: "Germany", id: 2 },
            { name: "Greece", id: 3 },
            { name: "Turkey", id: 4 },
            { name: "Spain", id: 5 },
            { name: "Portugal", id: 6 },
        ],
    }),
    methods: {},
};
</script>

<style lang="sass">
.btn
    font-weight: normal
    font-size: 16px
    line-height: 20px
    color: white
    background-color: #F3475B
    padding: 8px 20px
    border-radius: 8px
    margin-right: 14px
</style>
