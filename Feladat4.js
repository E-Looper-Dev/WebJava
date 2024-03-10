document.addEventListener('DOMContentLoaded', function () {
    const szamBevitel = document.querySelector('#szamBevitel')
    const szamol = document.querySelector('#szamol')
    const napok = ['Hétfő','Kedd','Szerda','Csütörtök','Péntek','Szombat','Vasárnap']
    const Kiir = document.querySelector('#kiIratas')

    szamol.addEventListener('click', function() {
        const nap = parseInt(szamBevitel.value);
        if (nap >= 1 && nap <= 7) {
            Kiir.textContent = napok[nap-1]

        }
        else {
            Kiir.textContent = '1 és 7 között adjon meg számot! Próbálja újra!';
        }
    })
})