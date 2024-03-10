document.addEventListener('DOMContentLoaded', function (){
    const szamBevitel = document.querySelector('#szamBevitel');
    const Hozzaad = document.querySelector('#Hozzaad');
    const Kiir = document.querySelector('#Kiir');
    const kiIratas = document.querySelector('#kiIratas')
 
    const szamok = []
 
    Hozzaad.addEventListener('click', function(){
        const ertek = szamBevitel.value
        szamok.push(ertek)
        szamBevitel.value = ""
        console.log(ertek);
    })
    Kiir.addEventListener('click', function(){
        let szoveg = ''
        for (const szam of szamok.reverse()) {
            szoveg += szam + ', ';
        }
        szoveg = szoveg.slice(0,-2);
        kiIratas.textContent = szoveg;
    });
});