
const initialState = {
    homes: [],
    cityHomes: [],
    startDate: '',
    endDate: '',
    total: 0,
    city: ''
    // guests: 0
}

const GET_ALL_HOMES = "GET_ALL_HOMES";
const GET_CITY_HOMES = "GET_CITY_HOMES";
const GET_START_DATE = "GET_START_DATE";
const GET_END_DATE = "GET_END_DATE";
const GET_TOTAL = "GET_TOTAL";
const GET_CITY = "GET_CITY";


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_HOMES:
            return { ...state, homes: action.payload }
        case GET_CITY_HOMES:
            return { ...state, cityHomes: action.payload }
        case GET_START_DATE: 
            return {...state, startDate: action.payload}
        case GET_END_DATE: 
            return {...state, endDate: action.payload}   
        case GET_TOTAL:
            return {...state, total: action.payload}
        case GET_CITY:
            return {...state, city: action.payload}
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

export function getCityHomes(cityHomes) {
    return {
        type: GET_CITY_HOMES,
        payload: cityHomes
    }
}

export function getStartDate(startDate) {
    console.log('startDate in getStartDate reducer', typeof startDate);
    return {
        type: GET_START_DATE,
        payload: startDate
    }
}

export function getEndDate(endDate) {
    console.log('endDate in getEndDate reducer', endDate);
    return {
        type: GET_END_DATE,
        payload: endDate
    }
}

export function getTotal(total) {
    return {
        type: GET_TOTAL,
        payload: total
    }
}

export function getCity(city) {
    return {
        type: GET_CITY,
        payload: city
    }
}