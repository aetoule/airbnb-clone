
const initialState = {
    homes: [],
    cityHomes: []
}

const GET_ALL_HOMES = "GET_ALL_HOMES";
const GET_CITY_HOMES = "GET_CITY_HOMES";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_HOMES:
            return { ...state, homes: action.payload }
        case GET_CITY_HOMES:
            return { ...state, cityHomes: action.payload }
        default:
            return { ...state }
    }
}

export function getAllHomes(homes) {
    return {
        type: GET_ALL_HOMES,
        payload: homes
    }
}

export function getCityHomes(city) {
    return {
        type: GET_CITY_HOMES,
        payload: city
    }
}