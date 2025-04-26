let input =   document.getElementById("inputAngka");
let kedollar =document.getElementById("RupiahToDollar");
let kerupiah =document.getElementById("DollarToRupiah");
let hasil=document.getElementById("hasil");


function Konversi(){
    if(kedollar.checked){
        if(input.value === ""){
            hasil.textContent = "Pastikan Mengisi Angka"
        }else{
            let dollar = 16355;
            
            let konversi = (Number(input.value) / dollar).toFixed(2);
            hasil.textContent = konversi + "$";
        }
    }else if(kerupiah.checked){

        if(input.value === ""){
            hasil.textContent = "Pastikan Mengisi Angka"
        }else{
            let dollar = 16355;
            
            let konversi = (Number(input.value) * dollar).toFixed(2);
            hasil.textContent = "Rp"+konversi;
        }
    }else{
        hasil.textContent = "Pilih Salah Satu Opsi";
    }
};