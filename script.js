var perintah = Math.random() * 600;
var main = confirm('apakah anda mau main pilih warna?')
let tombol = document.getElementById('tombol')


    if(main == true) {
        if( perintah < 100 ) {
        alert("Pilihlah Warna merah");
        let container = document.querySelector('.all')
    container.addEventListener('click', function(e) {
         if (e.target.className == 'container empat') {
            alert('Papa jelek Pilih Warna Yang Benar')
        } else {
            alert('Papa jelek Pilih Warna Yang Salah')
        }
    });
    }
    
    if( perintah < 200 && perintah > 100 ) {
        alert("Pilihlah Warna Hijau");
        let container = document.querySelector('.all')
    container.addEventListener('click', function(e) {
         if (e.target.className == 'container tiga') {
            alert('Papa jelek Pilih Warna Yang Benar')
        } else {
            alert('Papa jelek Pilih Warna Yang Salah')
        }
    });
    }
    
    if( perintah < 300 && perintah > 200 ) {
        alert("Pilihlah Warna Kuning");
        let container = document.querySelector('.all')
    container.addEventListener('click', function(e) {
         if (e.target.className == 'container enam') {
            alert('Papa jelek Pilih Warna Yang Benar')
        } else {
            alert('Papa jelek Pilih Warna Yang Salah')
        }
    });
    }
    
    if( perintah < 400 && perintah > 300 ) {
        alert("Pilihlah Warna Biru");
        let container = document.querySelector('.all')
    container.addEventListener('click', function(e) {
         if (e.target.className == 'container lima') {
            alert('Papa jelek Pilih Warna Yang Benar')
         } else {
            alert('Papa jelek Pilih Warna Yang Salah')
        }
    });
    }
    
    if( perintah < 500 && perintah > 400 ) {
        alert("Pilihlah Warna Pink / Merah Muda");
        let container = document.querySelector('.all')
    container.addEventListener('click', function(e) {
        if(e.target.className == 'container satu') {
            alert('Papa jelek Pilih Warna Yang Benar')
         } else {
            alert('Papa jelek Pilih Warna Yang Salah')
        }
    });
    }
    
    if( perintah < 600 && perintah > 500 ) {
        alert("Pilihlah Warna hitam");
        let container = document.querySelector('.all')
    container.addEventListener('click', function(e) {
        if(e.target.className == 'container satu') {
            alert('Papa jelek Pilih Warna Yang Salah')
        } else if (e.target.className == 'container dua') {
            alert('Papa jelek Pilih Warna Yang Benar')
        } else {
            alert('Papa jelek Pilih Warna Yang Salah')
        }
    });
    }
    }

    tombol.addEventListener('click', function() {
        main = confirm('Apakah anda yakin mau main lagi?')
    });