const getIsLoggedIn = state => state.auth.IsLoggedIn;
const getuserName = state => state.auth.name;

const authSelectors = {
    getIsLoggedIn,
    getuserName
}

export default authSelectors;