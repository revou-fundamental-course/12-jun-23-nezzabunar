var nilai = document.getElementById("nilai");
var hasil = document.getElementById('hasil');
var label = document.getElementById('label');
var labelCelcius = document.getElementById("labelCelcius");
var labelFahrenheit = document.getElementById("labelFahrenheit");
var notif = document.getElementById("notif");
var button = document.getElementById('konversiCelcius');

function konversiKeCelcius() {
    // validasi jika input kosong

    if (nilai.value == '') {
        notif.innerHTML = 'Nilai Tidak Boleh Kosong';
    } else {
        notif.innerHTML = '';
        label.value = '';

        // perhitungan untukk konversi celcisu ke fahrenheit

        result = nilai.value * 9 / 5 + 32;
        label.value = result.toFixed(2);
        hasil.value = `Nilai ${nilai.value}°C * (9/5) + 32 = ${result.toFixed(2)}°F`;

        // hasil.value = `Nilai ${nilai.value}°C = ${result.toFixed(2)}°F`;
    }
}

function konversiKeFahrenheit() {
    // validasi jika input kosong

    if (nilai.value == '') {
        notif.innerHTML = 'Nilai Tidak Boleh Kosong';
    } else {
        notif.innerHTML = '';
        label.value = '';

        // perhitungan untukk konversi celcisu ke fahrenheit

        result = (nilai.value - 32) * 5 / 9;
        label.value = result.toFixed(2);
        hasil.value = `Nilai ${nilai.value}°F - 32 * (5/9) = ${result.toFixed(2)}°C`;
    }
}

function reset() {

    // function untuk mereset ulang input dan label

    nilai.value = '';
    hasil.value = '';
    label.value = '';
    notif.innerHTML = '';
}

function reverse() {
    // function reverse membalikan konversi dari celcis ke Fahrenheit atau sebaliknya

    if (button.name === 'konversiCelcius') {

        // cek apakah button name sekakrang adalah konver ke celcius 
        // atau fahrenheit untuk mengubah pemangilan function pada tombol
        // konversi

        button.setAttribute("onclick", "konversiKeFahrenheit()");
        labelCelcius.innerHTML = 'Fahrenheit °F';
        labelFahrenheit.innerHTML = 'Celcius °C';
        button.name = 'konversifahrenheit'
    } else {
        button.setAttribute("onclick", "konversiKeCelcius()");
        labelCelcius.innerHTML = 'Celcius °C';
        labelFahrenheit.innerHTML = 'Fahrenheit °F';
        button.name = 'konversiCelcius'

    }
    reset();
}