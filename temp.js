let ojciec = {
    imie: 'Adam',
    nazwisko: 'Walanus',
    wiek: 110,
    wnuki: ['Witek', 'Gabi', 'Kinga'],
    przedstawiaSie: function () {
        alert("Nazywam się " + this.imie + ". Mam wnuki: " + this.wnuki[0] + ", " + this.wnuki[1] + " i " + this.wnuki[2] + " i " + this.wiek + " lat.");
    }
}

ojciec.przedstawiaSie();