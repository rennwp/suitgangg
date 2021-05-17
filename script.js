// Pilihan Komputer
let pilihanKomputer = Math.floor(Math.random() * 10) ;
let warna = document.querySelector('.game');
let warna1 = document.querySelector('.komputer');
let warna2 = document.querySelector('.player');

function nilaiKomputer(pilihanKomputer){
    if (pilihanKomputer <= 3){pilihanKomputer = 'gajah'};
    if (pilihanKomputer <= 6){pilihanKomputer = 'orang'};
    if (pilihanKomputer <= 10){pilihanKomputer = 'semut'};
    return pilihanKomputer;
};


// Mouse Interaction
document.body.addEventListener('mousemove', function(e){
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerWidth) * 255);
    warna.style.border = 'solid 5px rgb('+ xPos +', '+ yPos +', 255)';
    warna1.style.border = 'solid 5px rgb('+ xPos +', '+ yPos +', 255)'
    warna2.style.border = 'solid 5px rgb('+ xPos +', '+ yPos +', 255)'
});

// Mengambil Pilihan

let pilihanGajah = document.getElementById('gajah');
let pilihanOrang = document.getElementById('orang');
let pilihanSemut = document.getElementById('semut');
let gambarKomputer = document.querySelector('.komputer img')
let hasil = document.querySelector('.hasil');

pilihanGajah.addEventListener('click', function(){
    let pilihanKomputer = Math.floor(Math.random() * 10) ;
    let hasilKomputer = nilaiKomputer(pilihanKomputer);
    if ( hasilKomputer == 'gajah' ){
        gambarKomputer.setAttribute('src', 'img/gajah.jpg')
        hasil.innerHTML = 'SERI !!!';
    }else if( hasilKomputer == 'orang' ){
        gambarKomputer.setAttribute('src', 'img/orang.jpg')
        hasil.innerHTML = 'MENANG !!!';
    }else if( hasilKomputer == 'semut' ){
        gambarKomputer.setAttribute('src', 'img/semut.jpg')
        hasil.innerHTML = 'KALAH !!!';
    }
});

pilihanOrang.addEventListener('click', function(){
    let pilihanKomputer = Math.floor(Math.random() * 10) ;
    let hasilKomputer = nilaiKomputer(pilihanKomputer);
    if ( hasilKomputer == 'orang' ){
        gambarKomputer.setAttribute('src', 'img/orang.jpg')
        hasil.innerHTML = 'SERI !!!';
    }else if( hasilKomputer == 'semut' ){
        gambarKomputer.setAttribute('src', 'img/semut.jpg')
        hasil.innerHTML = 'MENANG !!!';
    }else if( hasilKomputer == 'gajah' ){
        gambarKomputer.setAttribute('src', 'img/gajah.jpg')
        hasil.innerHTML = 'KALAH !!!';
    }
});

pilihanSemut.addEventListener('click', function(){
    let pilihanKomputer = Math.floor(Math.random() * 10) ;
    let hasilKomputer = nilaiKomputer(pilihanKomputer);
    if ( hasilKomputer == 'semut' ){
        gambarKomputer.setAttribute('src', 'img/semut.jpg')
        hasil.innerHTML = 'SERI !!!';
    }else if( hasilKomputer == 'gajah' ){
        gambarKomputer.setAttribute('src', 'img/gajah.jpg')
        hasil.innerHTML = 'MENANG !!!';
    }else if( hasilKomputer == 'orang' ){
        gambarKomputer.setAttribute('src', 'img/orang.jpg')
        hasil.innerHTML = 'KALAH !!!';
    }
});

