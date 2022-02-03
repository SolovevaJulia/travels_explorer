<template>
    <!-- Верстка -->
    <nav>
        <button
            @click="onClickBtnCountry(country.name)"
            :class="btnActive === country.name ? 'btn-active' : ''"
            class="btn"
            v-for="country in buttons"
            :key="country.id"
        >
            {{ country.name }}
        </button>
    </nav>
</template>

<script>
export default {
    data: () => ({
        btnActive: "All countries",
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
    methods: {
        onClickBtnCountry(payload) {
            this.btnActive = payload;
        },
    },
};
</script>

<style lang="sass">
.btn
    font-weight: normal
    font-size: 16px
    line-height: 20px
    color: white
    background-color: transparent
    padding: 8px 20px
    border-radius: 8px
    margin-right: 14px
    margin-bottom: 30px
    &:hover
        background-color: #F47685
.btn-active
    background-color: #F3475B
    &:hover
        cursor: default
        background-color: #F3475B
</style>
