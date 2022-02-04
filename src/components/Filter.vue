<template>
    <!-- Верстка -->
    <nav>
        <button
            @click="onClickBtnCountry(country.name)"
            :class="btnActive === country.name ? 'btn-active' : ''"
            class="btn"
            v-for="country in uniqumeCountryBtn"
            :key="country.id"
        >
            {{ country.name }}
        </button>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["filterBtns"]),
        uniqumeCountryBtn() {
            let res = this.filterBtns.reduce((accumulator, currentValue) => {
                if (
                    accumulator.every(
                        (item) => !(item.name === currentValue.name)
                    )
                )
                    accumulator.push(currentValue);
                return accumulator;
            }, []);
            return res;
        },
    },

    data: () => ({
        btnActive: "All countries",
    }),
    methods: {
        onClickBtnCountry(payload) {
            this.btnActive = payload;
            this.$store.dispatch("set_filter_countries", payload);
        },
    },
    mounted() {
        this.$store.dispatch("set_filter_btns");
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

// computed: { // ...mapGetters(["filterBtns"]), // uniqumeCountryBtn() { // let
res = this.filterBtns.reduce((accumulator, currentValue) => { // if ( //
accumulator.every( // (item) => !(item.name === currentValue.name) // ) // ) //
accumulator.push(currentValue); // return accumulator; // }, []); // return res;
// }, // }, // mounted() { // this.$store.dispatch("set_create_btns_filter"); //
},
