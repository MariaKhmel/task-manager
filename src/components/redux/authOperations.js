import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {

    try {
        const { data } = await axios.post('users/signup', credentials);

    } catch (error) {
        console.log(error)
    }
}
)