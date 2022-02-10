var optdurum = false;
var opt = "";
var sonuc = 0;
var numbtn = document.querySelectorAll(".btnnum");
var ekran = document.querySelector("#gosterge")
var btnopt = document.querySelectorAll(".btn2op")
var islem = document.getElementById("islem")
var btnc = document.querySelector(".btnc")
var btnac = document.querySelector(".btnac")
var btnesit = document.querySelector(".btnesit")
var btnnokta = document.querySelector(".btn2nokta")

var control = true;



numbtn.forEach(function (element) {



    element.onclick = function () {
        if (ekran.textContent == "0" || optdurum) {   //numaraları ekrana yazmak için
            ekran.textContent = "";
            control = false;
        }
        

        ekran.textContent += this.textContent;
        optdurum = false;
    }
});

btnopt.forEach(function (element) {
    element.onclick = function () {
        
        if(ekran.textContent==""&&islem.textContent==""){
            islem.textContent="0"
        }


        if (opt != "" && control == true) { // operator degıstırme kısmı silinirse ardarda islemler yapılıyor

            var yeniislem = islem.textContent.slice(0, islem.textContent.length - 1)
            islem.textContent = yeniislem + this.textContent;
            ekran.textContent = "";
            opt = this.textContent;


            //-------------------

            


            //----------------


            console.log("control'e giriyor")
            console.log(yeniislem)

        }
        else {

            control=true;
            optdurum = true;
            var optyeni = this.textContent;




            islem.textContent = islem.textContent + " " + ekran.textContent + " " + optyeni;



            switch (opt) {
                case "+": ekran.textContent = (sonuc + Number(ekran.textContent)); break;
                case "-": ekran.textContent = (sonuc - Number(ekran.textContent)); break;
                case "*": ekran.textContent = (sonuc * Number(ekran.textContent)); break;
                case "/": ekran.textContent = (sonuc / Number(ekran.textContent)); break;
                default: break;
            }

            sonuc = (Number(ekran.textContent));
            opt = optyeni;
            if (ekran.textContent == "NaN") {
                ekran.textContent = "Sonuç tanımsız!"
                console.log(islem.textContent);
                islem.textContent = "";
            }
            if (ekran.textContent == "Infinity") {
                ekran.textContent = "Sıfıra Bölünemez!"
                islem.textContent = "";
                console.log("infiniti gördu")
            }



        }
    }
});

btnac.onclick = function () {
    ekran.textContent = ekran.textContent.slice(0, ekran.textContent.length - 1)

}

btnc.onclick = function () {
    ekran.textContent = "";
    islem.textContent = "";
    sonuc = 0;
    opt = "";
}

btnesit.onclick = function esit() {





    optdurum = true;
    switch (opt) {
        case "+": ekran.textContent = (sonuc + Number(ekran.textContent)); break;
        case "-": ekran.textContent = (sonuc - Number(ekran.textContent)); break;
        case "*": ekran.textContent = (sonuc * Number(ekran.textContent)); break;
        case "/": ekran.textContent = (sonuc / Number(ekran.textContent)); break;
        default: break;

    }
    sonuc = (Number(ekran.textContent));
    ekran.textContent = sonuc;
    sonuc = 0;
    opt = "";
    if (ekran.textContent == "Infinity") {
        ekran.textContent = "Sıfıra Bölünemez!"
    }
    if (ekran.textContent == "NaN") {
        ekran.textContent = "Sonuç tanımsız!"
    }
    islem.textContent = "";
}
btnnokta.onclick = function () {
    if (ekran.textContent == "") {
        console.log("nulla girdi")
        ekran.textContent = "0";
    }
    if (ekran.textContent == "0") {
        ekran.textConten = "0.";
    }

    if (!optdurum && !ekran.textContent.includes(".")) {
        ekran.textContent += ".";
    }
    else if (optdurum) {
        ekran.textContent = "0";
    }
    if (!ekran.textContent.includes(".")) {
        ekran.textContent += ".";
    }

    optdurum = false;

}