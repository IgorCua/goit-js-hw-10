import './css/styles.css';
import Notiflix from 'notiflix';
import {fetchCountries} from './js/fetchCountries.js'

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const template = Handlebars.templates;

input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(event){
    const inputVal = event.target.value;

    if (inputVal.length === 0){
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return;
    }
    
    fetchCountries(`${inputVal.toLowerCase()}`.trim())
    .then((data)=>{
        if (data.length > 10) {
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
        } else if(data.length > 1 && data.length <= 10){
            markupArr(data)
        } else if (data.length === 1){
            markupCountry(data);
        }
    })
    .catch(error => {
        console.log('error', error);
        
        if(inputVal.length > 0){
            Notiflix.Notify.failure("Oops, there is no country with that name");
        }
    });
}

function markupArr(data){
    countryInfo.innerHTML = '';
    let arr = data;
    // console.log('markup arr', arr);
    countryList.innerHTML = template.array({arr});
}

function markupCountry(data){
    countryList.innerHTML = '';
    const obj = data[0];
    countryInfo.innerHTML = template.country({obj});
}