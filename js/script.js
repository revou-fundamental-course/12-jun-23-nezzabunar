
function konversi() {
    let nilai = document.getElementById("nilai").value;
    let hasil = document.getElementById('hasil');
    let fahrenheit = document.getElementById('fahrenheit');

    // validasi jika input kosong
    if (nilai == '') {
        document.getElementById("notif").innerHTML = 'Nilai Tidak Boleh Kosong';
    } else {
        document.getElementById("notif").innerHTML = '';
        document.getElementById('fahrenheit').value = '';

        // perhitungan untukk konversi celcisu ke fahrenheit
        result = nilai * 9 / 5 + 32;

        fahrenheit.value = result;
        hasil.value = `Nilai ${nilai}°C = ${result.toFixed(2)}°F`;
    }
}

function reset() {
    document.getElementById("nilai").value = '';
    document.getElementById("hasil").value = '';
    document.getElementById("fahrenheit").value = '';
    document.getElementById("notif").innerHTML = '';
}

function reverse() {
    let nilai = document.getElementById("nilai").value;
    let hasil = document.getElementById('hasil');

    // validasi jika input kosong
    if (nilai == '' || nilai == NaN) {
        document.getElementById("notif").innerHTML = 'Nilai Tidak Boleh Kosong';
    } else {
        document.getElementById("notif").innerHTML = '';
        result = nilai - 32 / 1.8;

        // perhitungan untukk konversi fahrenheit ke celcius
        // dengan result ditampikan padaa textarea
        hasil.value = `Nilai ${nilai}°F = ${result.toFixed(2)}°C`;
    }
}