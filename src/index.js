import './css/styles.css';
import Notiflix from 'notiflix';
import {fetchCountries} from './js/fetchCountries.js'
// let Handlebars = require("handlebars");
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const template = Handlebars.templates;

input.addEventListener('input', debounce(inputHandler, 350));
// fetchCountries('sw');

function inputHandler(event){
    const inputVal = event.target.value;
    fetchCountries(`${inputVal.toLowerCase()}`.trim())
    .then((data)=>{
        console.log(data)
        if(data.length > 1 && data.length <= 10){
            markupArr(data)
        } else if (data.length === 1){
            markupCountry(data);
        }
    })
    .catch(error => {
        console.log('error', error);
        document.querySelector('.country-list').innerHTML = '';
        Notiflix.Notify.failure("Oops, there is no country with that name");
    });
}

function markupArr(data){
    countryInfo.innerHTML = '';
    let arr = data;
    console.log('markup arr', arr);
    countryList.innerHTML = template.array({arr});
}

function markupCountry(data){
    countryList.innerHTML = '';
    const obj = data[0];
    countryInfo.innerHTML = template.country({obj});
}
// Notiflix.Notify.success('Sol lucet omnibus');
// const template = Handlebars.templates.example;
// document.querySelector('.country-info').innerHTML = template({doesWhat: 'rocks!'})
//   console.log(window.Handlebars)