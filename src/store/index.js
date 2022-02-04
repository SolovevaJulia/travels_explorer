import filter from "../store/filter.js";
import { createStore } from "vuex";

export default createStore({
    modules: {
        filter,
    },
});
