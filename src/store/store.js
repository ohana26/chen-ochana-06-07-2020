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
            "price": "23.56",
            "date": "01/12/2020",
            "id": "1"
        },
        {
            "name": "iPhone 12",
            "store": "ebay",
            "price": "29.55",
            "date": "02/25/2020",
            "id": "2"
        },
        {
            "name": "iPhone 10",
            "store": "ebay",
            "price": "29.55",
            "date": "02/23/2020",
            "id": "3"
        },
        {
            "name": "iPhone 10",
            "store": "amazon",
            "price": "29.55",
            "date": "02/12/2020",
            "id": "4"
        },
        {
            "name": "shiomi",
            "store": "walla",
            "price": "291.55",
            "date": "02/11/2020",
            "id": "5"
        },
        {
            "name": "iPhone 6",
            "store": "ebay",
            "price": "277.5775",
            "date": "07/12/2020",
            "id": "6"
        },
        {
            "name": "bamba",
            "store": "ebay",
            "price": "297.5577",
            "date": "05/12/2020",
            "id": "7"
        }
    ],

};
let mutations = {
    received(state, item) {
        state.receivedItems.push(item);
    },
    remove(state, item) {
        let index = -1;
        for (let i = 0; i < state.receivedItems.length; i++) {
            if (item.id == state.receivedItems[i].id) {
                index = i;
            }
        }
        if (index > -1) {
            state.receivedItems.splice(index, 1);
        }
        return state.receivedItems;
    },
};
let getters = {
    getItemToItemList(state) {
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
    getStores(state) {
        let storesData = {};
        state.stores.forEach(store => {
            storesData[store] = 0;
        });
        state.receivedItems.forEach(item => {
            storesData[item.store]++;
        });
        return storesData;
    },
    getStoresTotalSum(state) {
        let sum = 0;
        state.receivedItems.forEach(item => {
            sum += parseFloat(item.price);
        });
        return sum;
    },
    getReceivedItems(state) {
        return state.receivedItems;
    },
}


export const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters
})