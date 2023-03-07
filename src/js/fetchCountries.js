export function fetchCountries(name){
    return fetch(`https://restcountries.com/v2/name/${name}?fullText=false`)
    .then((response) => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => console.log('error', error));
}
// fetchCountries('sw');