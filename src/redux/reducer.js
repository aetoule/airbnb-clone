
const initialState = {
    homes: [],
    cityHomes: [],
    startDate: '',
    endDate: ''
}

const GET_ALL_HOMES = "GET_ALL_HOMES";
const GET_CITY_HOMES = "GET_CITY_HOMES";
const GET_START_DATE = "GET_START_DATE";
const GET_END_DATE = "GET_END_DATE";


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_HOMES:
            return { ...state, homes: action.payload }
        case GET_CITY_HOMES:
            return { ...state, cityHomes: action.payload }
        case GET_START_DATE: 
            return {...state, getStartDate: action.payload}
        case GET_END_DATE: 
            return {...state, getEndDate: action.payload}   
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

export function getStartDate(startDate) {
    console.log('fasdfdsff', startDate._d);
    return {
        type: GET_START_DATE,
        payload: startDate
    }
}

export function getEndDate(endDate) {
    console.log('sdfadsfadsfds', endDate._d);
    return {
        type: GET_END_DATE,
        payload: endDate
    }
}