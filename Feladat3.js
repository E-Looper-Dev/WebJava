document.addEventListener('DOMContentLoaded', function () {
    const aOldal = document.querySelector('#aOldal');
    const bOldal = document.querySelector('#bOldal');
    const szamitas = document.querySelector('#szamitas');
    const kiiratas = document.querySelector('#kiIratas');
    
    szamitas.addEventListener('click', function() {
        const a = parseFloat(aOldal.value);
        const b = parseFloat(bOldal.value);

        kiiratas.innerHTML = `Terület: ${a * b}<br>Kerület: ${(a + b) * 2}`;
    })
})