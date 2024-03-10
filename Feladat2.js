document.addEventListener('DOMContentLoaded', function (){
    const vezeteknev = document.querySelector('#Bevitel1');
    const keresztnev = document.querySelector('#Bevitel2');
    const eletkor = document.querySelector('#Bevitel3');
    const bekezdes = document.querySelector('#Bekezdes');

    function modositas() {
        bekezdes.textContent = `${vezeteknev.value} ${keresztnev.value} (${eletkor.value} év)`;
    }
    vezeteknev.addEventListener('change', modositas);
    keresztnev.addEventListener('change', modositas);
    eletkor.addEventListener('change', modositas);
})