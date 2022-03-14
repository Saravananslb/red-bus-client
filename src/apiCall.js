import Cookies from 'universal-cookie';
import axios from 'axios';

export const cookie = new Cookies();
axios.defaults.baseURL = 'http://localhost:8000/api/v1';

export const signUpUser = async(user) => {
    return await axios.post('/auth/signup', user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const signInUser = async(user) => {
    return await axios.post('/auth/signin', user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const getBuses = async(from, to, date) => {
    return await axios.get(`/bus/get?from=${from}&to=${to}&date=${date}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const bookBusTicket = async(body) => {
    return await axios.post(`/bus/create`, body, {
        headers: {
            'Content-Type': 'application/json',
            authorization: cookie.get('Authorization')
        }
    });
}

export const getBookings = async() => {
    return await axios.get(`/bus/bookings`, {
        headers: {
            'Content-Type': 'application/json',
            authorization: cookie.get('Authorization')
        }
    });
}