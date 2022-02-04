
// Pilihan computer secara random
function pilihanComputer() {
    const comp = Math.random()              // math.randown = acak mulai 0-1

    if (comp < 0.34) return 'batu'
    if (comp >= 0.34 && comp < 0.67) return 'gunting'
    return 'kertas'
}

// perhitungan/operasi suwit
function getHasil(comp, player) {
    if (player == comp) return 'Seri!'
    if (player == 'batu') return (comp == 'gunting') ? 'Menang!' : 'Kalah!'
    if (player == 'gunting') return (comp == 'kertas') ? 'Menang!' : 'Kalah!'
    if (player == 'kertas') return (comp == 'batu') ? 'Menang!' : 'Kalah!'
}

// membuat tampilan gambar seaakn mengacak
function putar() {
    const imgComputer = document.querySelector('.hands-computer')
    const gambar = ['batu', 'gunting', 'kertas']

    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) i = 0
    }, 100)
}

let hPlayer = 0
let hComputer = 0

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function (i) {

    i.addEventListener('click', function () {

        const getPilihanComputer = pilihanComputer()    // mengambil pilihan computer pilihan computer
        const pilihanPlayer = i.className               // wadah 
        const hasil = getHasil(getPilihanComputer, pilihanPlayer)   // menagmbil hasil dari suwit player dan computer menang atau kalah

        // pilihan player dalam bentuk gambar
        const handsPlayer = document.querySelector('.hands-player')
        handsPlayer.setAttribute('src', 'img/' + pilihanPlayer + '.png')

        putar()

        // menampikan gambar computer
        setTimeout(function () {
            // gambar pilihan computer
            const handsComputer = document.querySelector('.hands-computer')
            handsComputer.setAttribute('src', 'img/' + getPilihanComputer + '.png')

            // mengeluarkan hasil suwit ke brouser
            const info = document.querySelector('.winner')
            info.innerHTML = hasil

            // tampilan hasil skore
            if (hasil == 'Menang!') hPlayer++;
            if (hasil == 'Kalah!') hComputer++;
            const p = document.querySelector('.playerS');
            const c = document.querySelector('.computers');
            p.innerHTML = hPlayer
            c.innerHTML = hComputer
        }, 1000)

    })

})
