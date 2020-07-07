import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


let state = {
    receivedItems: [],
    stores: ["amazon", "ebay"],
    items: [
        {
            "name": "iPhone 11",
            "store": "amazon",
            "price": "23.56 (USD Only)",
            "date": "01/12/2020",
            "id": "1"
        },
        {
            "name": "iPhone 12",
            "store": "ebay",
            "price": "29.55 (NIS Only)",
            "date": "02/12/2020",
            "id": "2"
        },
        {
            "name": "iPhone 10",
            "store": "ebay",
            "price": "29.55 (NIS Only)",
            "date": "02/12/2020",
            "id": "3"
        }
    ],

};
let mutations = {
    received: (item) => {
        state.receivedItems.push(item);
    },
};
let getters = {
    itemToItemList() {
        let updatedItems = [];
        if (state.receivedItems.length < 1) {
            return state.items;
        }
        state.items.forEach(item => {
            let isInReceivedItems = false;
            state.receivedItems.forEach(receivedItem => {
                if (item.id == receivedItem.id) {
                    isInReceivedItems = true;
                }
            });
            if (!isInReceivedItems) {
                updatedItems.push(item);
            }
        });
        return updatedItems;
    },
    getStores() {
        let storesData = {};
        state.stores.forEach(store => {
            storesData[store] = 0;
        });
        state.receivedItems.forEach(item => {
            storesData[item.store] ++;
        });
        return storesData;
    },
}


export const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters
})