import axios from 'axios';

const LOCAL_STORAGE_KEYS = {
    accessToken: 'spotify_access_token',
    refreshToken: 'spotify_refresh_token',
    expireTime: 'spotify_token_expire_time',
    timestamp: 'spotify_token_timestamp',
}


const LOCAL_STORAGE_VALUES = {
    accessToken: window.localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken),
    refreshToken: window.localStorage.getItem(LOCAL_STORAGE_KEYS.refreshToken),
    expireTime: window.localStorage.getItem(LOCAL_STORAGE_KEYS.expireTime),
    timestamp: window.localStorage.getItem(LOCAL_STORAGE_KEYS.timestamp),
};

// function to log the user out and clear out local storage
export const logout = () => {
    for (const property in LOCAL_STORAGE_KEYS) {
        window.localStorage.removeItem(LOCAL_STORAGE_KEYS[property]);
    }

    // take user back to the sign-in page
    window.location = window.location.origin;
}

// function to check whether the access token
const hasTokenExpired = () => {
    const { accessToken, timestamp, expireTime } = LOCAL_STORAGE_VALUES;

    if (!accessToken || !timestamp) {
        return false;
    }
    const milisecondsElapsed = Date.now() - Number(timestamp);
    return (milisecondsElapsed / 1000) > Number(expireTime);
};

const getRefreshToken =  async () => {
        if (!LOCAL_STORAGE_VALUES.refreshToken || LOCAL_STORAGE_VALUES.refreshToken === 'undefined' || (Date.now() - Number(LOCAL_STORAGE_VALUES.timestamp) / 1000) < 1000) {
            console.log('No refresh token...');
        }
        else if (LOCAL_STORAGE_VALUES.refreshToken ) {
            const { data } = await axios.get(`/refresh_token?refresh_token=${LOCAL_STORAGE_VALUES.refreshToken}`);
            window.localStorage.setItem(LOCAL_STORAGE_KEYS.accessToken, data.accessToken);
            window.localStorage.setItem(LOCAL_STORAGE_KEYS.timestamp, Date.now());

            window.location.reload();
        }  
    } 

const getAccessToken = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const queryParams = {
        [LOCAL_STORAGE_KEYS.accessToken]: urlParams.get('access_token'),
        [LOCAL_STORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
        [LOCAL_STORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
    };

    const hasError = urlParams.get('error');

    // if error or expired token, refresh the token
    if (hasError || hasTokenExpired() || LOCAL_STORAGE_VALUES.accessToken === 'undefined') {
        getRefreshToken()
    }

    // if valid access token, use it!
    if (LOCAL_STORAGE_VALUES.accessToken && LOCAL_STORAGE_VALUES.accessToken !== 'undefined') {
        return LOCAL_STORAGE_VALUES.accessToken;
    }

    // if there is a token in the URL query params, user is logging in for the first time
    if (queryParams[LOCAL_STORAGE_KEYS.accessToken]) {
        
        for (const property in queryParams) {
            window.localStorage.setItem(property, queryParams[property]);
        }

        window.localStorage.setItem(LOCAL_STORAGE_KEYS.timestamp, Date.now());

        return queryParams[LOCAL_STORAGE_KEYS.accessToken]
    }

    return false;
}

export const accessToken = getAccessToken();
export const refreshToken = getRefreshToken();


axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
axios.defaults.headers['Content-Type'] = 'application/json';

export const getAccount = () => axios.get('/me');


export const getTopArtists = interval => {
    return axios.get(`/me/top/artists?time_range=${interval}`)
}

export const getTopTracks = interval => {
    return axios.get(`/me/top/tracks?time_range=${interval}`)
}

export const getRecommendedTracks = ({ artist, genre, track }) => {
    return axios.get(`/recommendations?limit=100&seed_artists=${artist}&seed_genres=${genre}&seed_tracks=${track}`)
}

export const getTrack = (word1, word2) => {
    return axios.get(`/search?query=${word1}+${word2}&type=track&locale=en-us&offset=0&limit=20"`)
}