document.addEventListener("DOMContentLoaded", function(){
    const teljesnev = document.querySelector("#nev")
    const telefon = document.querySelector("#telefonszam")
    const lakcim = document.querySelector("#lakcim")
    const alap = document.querySelector("#alap")
    const feltet = document.querySelector("#feltet")
    const megjegyzes = document.querySelector("#megjegyzes")
    const felvetel = document.querySelector("#felvetel")

    felvetel.addEventListener('click', function() {
        const feltetek = feltet.selectedOptions
        const kivalasztott_feltetek = Array.from(feltetek).map(function(option) {
            return option.value
        })
        const adatok = {
            megrendelo_adatai: {
                teljesnev: teljesnev.value,
                telefon: telefon.value,
                lakcim: lakcim.value,
            },
            pizza_adatai: {
                alap: alap.value,
                feltet: kivalasztott_feltetek,
            },
            egyeb_adat: {
                megjegyzes: megjegyzes.value,
            },
        }
        console.log(adatok);
    })
})