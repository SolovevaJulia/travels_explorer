export default {
    state: {
        filterBtns: [{ name: "All countries" }],
        filterCountry: [],
        imgList: [
            {
                id: 0,
                country: "Italy",
                city: "Milan",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 1,
                country: "Germany",
                city: "Freiburg",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 2,
                country: "Portugal",
                city: "Lisbon",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 3,
                country: "Italy",
                city: "Vicenza",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 4,
                country: "Spain",
                city: "Barcelona",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 5,
                country: "Portugal",
                city: "Porto",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 6,
                country: "Italy",
                city: "Venice",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 7,
                country: "Greece",
                city: "Athens",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 8,
                country: "Turkey",
                city: "Kash",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 9,
                country: "Spain",
                city: "Madrid",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 10,
                country: "Germany",
                city: "Berlin",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 11,
                country: "Turkey",
                city: "Antalya",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 12,
                country: "Italy",
                city: "Venice",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
            {
                id: 13,
                country: "Italy",
                city: "Venice",
                descr: "Freiburg im Breisgau is a vibrant university town in the Black Forest in southwestern Germany, known for its temperate climate and the medieval Old Town rebuilt after the war.",
            },
        ],
    },

    mutations: {
        FILTER_COUNTRIES(state, country) {
            if (country === "All countries") {
                state.filterCountry = state.imgList;
            } else {
                state.filterCountry = state.imgList.filter(
                    (city) => country === city.country
                );
            }
        },
        FILTER_BTNS(state) {
            state.imgList.forEach((country) => {
                state.filterBtns = [
                    ...state.filterBtns,
                    { name: country.country },
                ];
            });
        },
    },

    actions: {
        set_filter_countries({ commit }, payload) {
            commit("FILTER_COUNTRIES", payload);
        },
        set_filter_btns({ commit }) {
            commit("FILTER_BTNS");
        },
    },

    getters: {
        filterCountry: (country) => country.filterCountry,
        filterBtns: (btn) => btn.filterBtns,
    },
};

// filterBtns: [{ name: "All countries" }],

// NEW_BTN_FILTER(state) {
//     state.imgList.forEach((item) => {
//         state.filterBtns = [
//             ...state.filterBtns,
//             { name: item.country },
//         ];
//     });
// },

// set_create_btns_filter({ commit }) {
//     commit("NEW_BTN_FILTER");
// },

// filterBtns: (btn) => btn.filterBtns,
