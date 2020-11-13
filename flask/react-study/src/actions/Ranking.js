import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL =
'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';

const APP_ID='dj00aiZpPXZQcldzYzd5RmhzbSZzPWNvbnN1bWVyc2VjcmV0Jng9YzI-'

const startRequest = categoryId =>({
    type:'START_RWQUEST',
    payload:{
        categoryId
    },
});

const receiveData = (categoryId, error, response) =>({
    type:'RECEIVE_DATA',
    payload:{
        categoryId,
        error,
        response
    },
});

const finishRequest = categoryId =>({
    type:'FINISH_REQUEST',
    payload:{
        categoryId
    },
});

export const fetchRanking =categoryId =>{
    return async dispatch =>{
        dispatch(startRequest(categoryId));
        const queryString = qs.stringify({
            appid:APP_ID,
            category_id:categoryId,
        });

        try{
            //const responce = await fetchJsonp('${API_URL}?${queryString}');
            const responce = await fetchJsonp('https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking?appid=dj00aiZpPXZQcldzYzd5RmhzbSZzPWNvbnN1bWVyc2VjcmV0Jng9YzI-&category_id=2494');
            console.log(API_URL + "?" + queryString);
            const data = await responce.json();
            dispatch(receiveData(categoryId, null, data));
        }catch (err){
            dispatch(receiveData(categoryId, err));
        }
        dispatch(finishRequest(categoryId));
    };
};