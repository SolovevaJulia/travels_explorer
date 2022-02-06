<template>
    <div>
        <button
            @click="onClickBtnCountry(country.name)"
            :class="btnActive === country.name ? 'btn-active' : ''"
            class="btn"
            v-for="country in uniqumeCountryBtn"
            :key="country.id"
        >
            {{ country.name }}
        </button>
        <div class="selected" @click="openMenu = true">
            <p>{{ btnActive }}</p>
            <img
                v-if="openMenu"
                src="../assets/img/arrow_up.svg"
                alt="стрелка наверх"
            />
            <img v-else src="../assets/img/arrow_down.svg" alt="стрелка вниз" />
        </div>
        <div class="selected-menu" v-if="openMenu">
            <div
                :class="
                    btnActive === country.name ? 'selected-overlay-active' : ''
                "
                @click="onClickBtnCountry(country.name)"
                class="selected-overlay"
                v-for="country in uniqumeCountryBtn"
                :key="country.id"
            >
                <img
                    v-if="btnActive === country.name"
                    src="../assets/img/menu-icon.svg"
                    alt="icon"
                    class="menu-icon"
                />
                <p
                    :style="
                        btnActive === country.name
                            ? 'margin-left: 0'
                            : 'margin-left: 40px'
                    "
                    class="menu-item"
                >
                    {{ country.name }}
                </p>
            </div>
        </div>
    </div>
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
        openMenu: false,
    }),
    methods: {
        onClickBtnCountry(payload) {
            this.btnActive = payload;
            this.openMenu = false;
            this.$store.dispatch("set_filter_countries", payload);
        },
    },
    mounted() {
        this.$store.dispatch("set_filter_btns");
    },
};
</script>

<style lang="sass">
.selected, .selected-menu
    display: none
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
    transition: .8s
    &:hover
        background-color: #F47685
.btn-active
    background-color: #F3475B
    &:hover
        cursor: default
        background-color: #F3475B
@media screen and  (min-width: 375px) and (max-width: 767px)
    .btn
        display: none
    .selected
        display: block
        width: 100%
        display: flex
        justify-content: space-between
        color: white
        background-color: #212121
        position: relative
        font-family: "GolosTextWebRegular"
        margin-bottom: 33px
    .selected-overlay
        display: flex
        width: 100%
        padding: 9px 0
        & > p
            color: white
            font-family: "GolosTextWebRegular"

    .selected-overlay-active
        background-color: #FE003D
    .selected-menu
        padding: 5px 0 24px 0
        background-color: #313131
        width: 334px
        display: block
        margin-bottom: 35px
        border-radius: 0px 0px 8px 8px
    .menu-icon
        margin: 0 14px
</style>
