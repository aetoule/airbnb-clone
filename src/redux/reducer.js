
const initialState = {
    homeInformation: [],
    hostNewHome: [],
    homesWithoutImgs: [],
    homes: [],
    cityHomes: [],
    startDate: '',
    endDate: '',
    total: 0,
    city: '',
    userEmail: [],
    tripLength: 0,
    hostImgs: [],
    // homeInfo:{}
    // guests: 0
    hostMaxGuests: 0,
    hostCity: '',
    hostAddress: '',
    hostLat: 0,
    hostLong: 0,
    hostDescribeMain: '',
    hostDescribeSpace: '',
    hostDescribeGuestAccess: '',
    hostDescribeInteraction: '',
    hostDescribeOther: '',
    hostHomeName: '',
    hostHomePrice: '',
    user: {}
}

const GET_CURR_HOME = "GET_CURR_HOME";
const GET_ALL_HOMES = "GET_ALL_HOMES";
const GET_CITY_HOMES = "GET_CITY_HOMES";
const GET_START_DATE = "GET_START_DATE";
const GET_END_DATE = "GET_END_DATE";
const GET_TOTAL = "GET_TOTAL";
const GET_CITY = "GET_CITY";
const GET_USERS_EMAIL = 'GET_USERS_EMAIL';
const GET_TRIP_LENGTH = 'GET_TRIP_LENGTH';
const ADD_HOST_IMGS = 'ADD_HOST_IMGS'
// const GET_ONE_HOME = 'GET_ONE_HOME';
const GET_HOST_MAX_GUESTS = 'GET_HOST_MAX_GUESTS';
const GET_HOST_CITY = 'GET_HOST_CITY';
const GET_HOST_ADDRESS = 'GET_HOST_ADDRESS';
const GET_HOST_LATITUDE = 'GET_HOST_LATITUDE';
const GET_HOST_LONGITUDE = 'GET_HOST_LONGITUDE';
const GET_HOST_DESCRIBE_MAIN = 'GET_HOST_DESCRIBE_MAIN';
const GET_HOST_DESCRIBE_SPACE = 'GET_HOST_DESCRIBE_SPACE';
const GET_HOST_DESCRIBE_GUEST_ACCESS = 'GET_HOST_DESCRIBE_GUEST_ACCESS';
const GET_HOST_DESCRIBE_INTERACTION = 'GET_HOST_DESCRIBE_INTERACTION';
const GET_HOST_DESCRIBE_OTHER = 'GET_HOST_DESCRIBE_OTHER';
const GET_HOST_HOME_NAME = 'GET_HOST_HOME_NAME';
const GET_HOST_HOME_PRICE = 'GET_HOST_HOME_PRICE';
const GET_ALL_HOMES_WITHOUT_IMGS = 'GET_ALL_HOMES_WITHOUT_IMGS';
const GET_HOST_NEW_HOME = 'GET_HOST_NEW_HOME';
const LOGGED_IN = "LOGGED_IN";
const LOGGED_OUT = "LOGGED_OUT";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURR_HOME: {
            return { ...state, homeInformation: action.payload}
        }
        case GET_ALL_HOMES:
            return { ...state, homes: action.payload }
        case GET_CITY_HOMES:
            return { ...state, cityHomes: action.payload }
        case GET_START_DATE:
            return { ...state, startDate: action.payload }
        case GET_END_DATE:
            return { ...state, endDate: action.payload }
        case GET_TOTAL:
            return { ...state, total: action.payload }
        case GET_CITY:
            return { ...state, city: action.payload }
        case GET_USERS_EMAIL:
            return { ...state, userEmail: action.payload }
        case GET_TRIP_LENGTH:
            return { ...state, tripLength: action.payload }
        case ADD_HOST_IMGS:
            return { ...state, hostImgs: action.payload }
            return { ...state, tripLength: action.payload }
        case GET_HOST_MAX_GUESTS:
            return { ...state, hostMaxGuests: action.payload }
        case GET_HOST_CITY:
            return { ...state, hostCity: action.payload }
        case GET_HOST_ADDRESS:
            return { ...state, hostAddress: action.payload }
        case GET_HOST_LATITUDE:
            return { ...state, hostLat: action.payload }
        case GET_HOST_LONGITUDE:
            return { ...state, hostLong: action.payload }
        case GET_HOST_DESCRIBE_MAIN:
            return { ...state, hostDescribeMain: action.payload }
        case GET_HOST_DESCRIBE_SPACE:
            return { ...state, hostDescribeSpace: action.payload }
        case GET_HOST_DESCRIBE_GUEST_ACCESS:
            return { ...state, hostDescribeGuestAccess: action.payload }
        case GET_HOST_DESCRIBE_INTERACTION:
            return { ...state, hostDescribeInteraction: action.payload }
        case GET_HOST_DESCRIBE_OTHER:
            return { ...state, hostDescribeOther: action.payload }
        case GET_HOST_HOME_NAME:
            return { ...state, hostHomeName: action.payload }
        case GET_HOST_HOME_PRICE:
            return { ...state, hostHomePrice: action.payload }
        case GET_ALL_HOMES_WITHOUT_IMGS:
            return { ...state, homesWithoutImgs: action.payload }
        case GET_HOST_NEW_HOME:
            return { ...state, hostNewHome: action.payload }
        case LOGGED_IN:
            return {...state, user: action.payload}
        case LOGGED_OUT:
            return {...state, user: null}
        default:
            return { ...state }
    }
}

export function getCurrHome(homeInformation) {
    return {
        type: GET_CURR_HOME,
        payload: homeInformation
    }
}

export function getAllHomes(homes) {
    return {
        type: GET_ALL_HOMES,
        payload: homes
    }
}

export function getHostNewHome(hostNewHome) {
    return {
        type: GET_HOST_NEW_HOME,
        payload: hostNewHome
    }
}

export function getAllHomesWithoutImgs(homesWithoutImgs) {
    return {
        type: GET_ALL_HOMES_WITHOUT_IMGS,
        payload: homesWithoutImgs
    }
}

export function getCityHomes(cityHomes) {
    return {
        type: GET_CITY_HOMES,
        payload: cityHomes
    }
}

export function getStartDate(startDate) {
    // console.log('startDate in getStartDate reducer', typeof startDate);
    return {
        type: GET_START_DATE,
        payload: startDate
    }
}

export function getEndDate(endDate) {
    // console.log('endDate in getEndDate reducer', endDate);
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

export function getUsersEmail(userEmail) {
    return {
        type: GET_USERS_EMAIL,
        payload: userEmail
    }
}


export function getTripLength(tripLength) {
    return {
        type: GET_TRIP_LENGTH,
        payload: tripLength
    }
}

export function addHostImgs(hostImgs) {
    return {
        type: ADD_HOST_IMGS,
        payload: hostImgs
    }

}
export function getHostMaxGuests(hostMaxGuests) {
    return {
        type: GET_HOST_MAX_GUESTS,
        payload: hostMaxGuests
    }
}

export function getHostCity(hostCity) {
    return {
        type: GET_HOST_CITY,
        payload: hostCity

    }
}

export function getHostAddress(hostAddress) {
    return {
        type: GET_HOST_ADDRESS,
        payload: hostAddress
    }
}

export function getHostLat(hostLat) {
    return {
        type: GET_HOST_LATITUDE,
        payload: hostLat
    }
}

export function getHostLong(hostLong) {
    return {
        type: GET_HOST_LONGITUDE,
        payload: hostLong
    }
}

export function getHostDescribeMain(hostDescribeMain) {
    return {
        type: GET_HOST_DESCRIBE_MAIN,
        payload: hostDescribeMain
    }
}

export function getHostDescribeSpace(hostDescribeSpace) {
    return {
        type: GET_HOST_DESCRIBE_SPACE,
        payload: hostDescribeSpace
    }
}

export function getHostDescribeGuestAccess(hostDescribeGuestAccess) {
    return {
        type: GET_HOST_DESCRIBE_GUEST_ACCESS,
        payload: hostDescribeGuestAccess
    }
}

export function getHostDescribeInteraction(hostDescribeInteraction) {
    return {
        type: GET_HOST_DESCRIBE_INTERACTION,
        payload: hostDescribeInteraction
    }
}

export function getHostDescribeOther(hostDescribeOther) {
    return {
        type: GET_HOST_DESCRIBE_OTHER,
        payload: hostDescribeOther
    }
}

export function getHostHomeName(hostHomeName) {
    return {
        type: GET_HOST_HOME_NAME,
        payload: hostHomeName
    }
}

export function getHostHomePrice(hostHomePrice) {
    return {
        type: GET_HOST_HOME_PRICE,
        payload: hostHomePrice
    }
}

export function login(user) {
    return {
        type: LOGGED_IN,
        payload: user
    }
}

export function logout() {
    return {
        type: LOGGED_OUT
    }
}