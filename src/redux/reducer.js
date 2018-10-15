import axios from 'axios';

const initialState = {
    homes:[],
    cityHomes: []
}

const GET_ALL_HOMES = "GET_ALL_HOMES";
// const GET_CITY_HOMES = "GET_CITY_HOMES";

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case `${GET_ALL_HOMES}_FULFILLED`:
            return {...state, homes: action.payload}
        // case `${GET_CITY_HOMES}_FULFILLED`:
        //     return {...state, cityHomes: action.payload}
    }
}

export function getAllHomes() {
    return {
        type: GET_ALL_HOMES,
        payload: axios.get('/api/homes').then(res => {
            return res.data
        })
    }
}

// export function getCityHomes(city) {
//     return {
//         type: GET_CITY_HOMES,
//         payload: axios.get(`/api/homes-results/${city}`, ).then(res => {
//             return res.data
//         })
//     }
// }