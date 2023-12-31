// JS 1995 yılında Brandan Eich tarafından yazılıyor.
// Cross platform
// OOP uygun.


//single comment
/*
multiple comment
*/

// console.log("loglama");
// console.warn("warn");
// console.error("error");
// console.info("info");

// alert("pop-up bilgilendirme-1");
// window.alert("pop-up bilgilendirme-2");

// document.writeln("ekranda yazı");


//Variable

// var result = "Js öğreniyorum";
// console.log(typeof result + " => " + result);

// var result = 4423;
// console.log(typeof result + " => " + result);

// var result = 44.23;
// console.log(typeof result + " => " + result);

// var result = true;
// console.log(typeof result + " => " + result);


//Naming Convensition

// var deneme = "JS Data"
// console.log(deneme);

// var deneme44 = "JS Data"
// console.log(deneme44);

// var $deneme44 = "JS Data"
// console.log($deneme44);

// var denemeVerisi = "JS Data"
// console.log(denemeVerisi);

// whoisting
// result2 = 56;
// var result2;

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Operators
// + - * ** / %
// ! DEĞİL &&=VE ||=VEYA
// x++
// x--
// ++x
// --x

// =   ATAMA
// ==  EŞİT  (TÜRÜNE BAKMA)
// === EŞİT  (TÜRÜNE BAK)

// var number1=40;
// var number2=5;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);


//cast
//number
//String()

// var userData = Number(prompt("Lütfen sayı giriniz"));
// console.log(userData+5);

// undefined
// var result4;
// console.log(result4);

// NaN
// var result5 ="asd"/4;
// console.log(result5);

// isNaN
// var result6=5;
// console.log(isNaN(result6)); // false: sayıdır

//   Infinity
// console.log(4/0);

//////////////////////////////////////////////////////////////////////////////////////////////////

//Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(4,1,99,555,25,-100));
// console.log(Math.max(4,1,99,555,25,-100));

// console.log(Math.sqrt(16));
// console.log(Math.abs(-25));
// console.log(Math.pow(2,5));


// console.log(Math.floor(3.9)); // aşşağıya yuvarlar
// console.log(Math.ceil(3.1)); // yukarı yuvarlar
// console.log(Math.round(6.4)); // en yakına yuvarlar
// console.log(Math.round(6.5)); // en yakına yuvarlar

// console.log(Math.sin(45));
// console.log(Math.round(Math.random()*9+1));

//////////////////////////////////////////////////////////////////////////////////////////////////

// Number
// var sayi = 15000;
// console.log(sayi);

// var sayi2 = 1.5E+4;
// console.log(sayi2);

// var binary = 0b00011;
// console.log(binary);

// octal: 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7
// var octal = 0o7612;
// console.log(octal);

// decimal: 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9
// var decimal = 123456;
// console.log(decimal);

// hexdecimal: 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - A - B - C - D - E - F
// var hexadecimal = 0xffa;
// console.log(hexadecimal);

// Number() parseInt() nedir aralarındaki farklar ?
// String() data.toString nedir aralarındaki farklar ?

// Cast
// database, port, api (Stgring)
// console.log(Number("10") + 10);


// console.log(String(30) + 10);
// var number = 30;
// console.log(number.toString() + 10);

///////////////////////////////////////////////////
// var, let, const

// var data1=11;
// console.log(data1);

// var data1=22;
// console.log(data1);

// let data2=33;
// console.log(data2);

// let data3=33;
// data3=44;
// console.log(data3);

// const data4=55;
// console.log(data4);

// const data5=55;
// data5=66;
// console.log(data5);

///////////////////////////////////////////////////
// string
// let str="js ÖĞreniyorum js ";
// console.log(str);

// console.log(str.length);
// console.log(str.trim().length);

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.charAt(0));

// console.log(str.indexOf("js"));
// console.log(str.lastIndexOf("js"));

// console.log(str.concat("sona"));
// console.log(str.replace(str,"değiştir"));

// console.log(str.substring(1));
// console.log(str.substring(0,4));

// Ödev
// ÖDEV NOT:5 adımı beraber yapalım.
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

///////////////////////////////////////////////////
// Function (Normal)
// 1 retursuz Parametresiz
// function retursuzParametresiz() {
//     console.log("deneme");
// }
// retursuzParametresiz();

// 2 retursuz Parametresiz
// function retursuzParametreli(adi) { // parametre: adi
//     console.log("deneme " + adi);
// }
// retursuzParametreli("HamitM") // argüman: "HamitM"

// 3 retursuz Parametresiz
// function returnluParametresiz() {
//     return "deneme55";
// }
// let result3 = returnluParametresiz();
// console.log(result3);

// 4 retursuz Parametresiz
// function returnluParametreli(soyadi) {
//     return "deneme66 " + soyadi;
// }
// let result4 = returnluParametreli("Mizrak");
// console.log(result4);

///////////////////////////////////////////////////

// Normal Function
// function normal() { }

// Anonymous (Function)
// let anonymous = function () { }

// Arrow (Function)
// let arrow = () => { }

///////////////////////////////////////////////////
// let veya const
// arrow function

///////////////////////////////////////////////////
// function deneme1(){
//     console.log("normal function");
// }
// deneme1();

// const deneme2= function (){
//     console.log("anonymous function");
// }
// deneme2();

// const deneme3= ()=>{
//     console.log("arrow function function");
// }
// deneme3();

// Immedia Function ()();
// (function(){
//     console.log("deneme4");
// })();

///////////////////////////////////////////////////

// condition (karar merkezi)

const condi = () => {
    let number = 4;
    if (number >= 2) {
        console.log("Büyüktür");
    }
    else {
        console.log("Küçüktür");
    }
}

// condi()

const condi2 = () => {
    let number = 4;
    if (number >= 2)
        console.log("Büyüktür");
    else
        console.log("Küçüktür");

}

// condi2()


const condi3 = () => {
    let number = 4;

    let result = (number >= 2) ? "Büyüktür" : "Küçüktür";
    console.log(result)
}

// condi3()

const condi4 = () => {
    let number = 4;
    console.log((number >= 2) ? "Büyüktür" : "Küçüktür");
}

// condi4()

const condi5 = () => {
    let number = 4;
    if (number == 1) {
        console.log("1");
    }
    else if (number == 2) {
        console.log("2");
    }
    else if (number == 3) {
        console.log("3");
    }
    else if (number == 4) {
        console.log("4");
    }
    else {
        console.log("sayı 1<= x <= 4 ün dışında");
    }
}

// condi5()

const condi6 = () => {
    let number = 4;
    //break : döngü kırmak
    //return : metot kırmak
    //continue : 1 kereye mahsus es geç sonra döngüye devam et

    switch (number) {

        case 1:
            console.log("1");
            break; // döndü kırmak

        case 2:
            console.log("2");
            break;

        case 3:
            console.log("3");
            break;

        case 4:
            console.log("4");
            break;
        default:
            console.log("sayı 1<= x <= 4 ün dışında");
    }

}

// condi6()

///////////////////////////////////////////////////////
// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

let isOddEven = () => {
    const result = 4;
    if (result % 2 == 0)
        console.log("çifttir");
    else
        console.log("tektir");
}
// isOddEven()

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

////////////////////////////////////////////////////////
// loop

// for
let loop = () => {
    for (let i = 1; i <= 10; i++) {
        document.writeln(i + " ");
    }
}
// loop();

// while
let loop2 = () => {
    let i = 1;
    while (i <= 10) {
        document.writeln(i + " ");
        i++;
    }
}
// loop2();

// do while
let loop3 = () => {
    let i = 1;;
    do {
        document.writeln(i + " ");
        i++;
    }
    while (i <= 10);
}
// loop3();

//////////////////////////////////////////////////////////////
// try catch (Error Handling)
let tryCatchTuto = () => {
    try {
        alertx("pop-pup");
    } catch (error) {
        console.log("hata mesajı: " + error.message);
        console.log("hata mesajı: " + error.name);
        console.error(error);
    } finally {
        console.log("db.close");
        console.log("port.close");
    }
    console.log("son satır");
}

// tryCatchTuto();

////////////////////////////////////////////////////////
// debug nedir ?
// 1 ile 10 dahil olmak üzere toplama işlemi yapan JS algoritmasını yazınız 

const debugData = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = sum + i;
    }
    console.log("Toplam: " + sum);
}
// debugData()

////////////////////////////////////////////////////////
// return break continue ?
// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// SORU 1<=userData<=50 
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği 
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ? 
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan JS program?

let sumExamplesData = () => {
    let commonSum = 0;
    let oddSum = 0, oddCounter = 0, oddNumber = "";
    let evenSum = 0, evenCounter = 0, evenNumber = "";
    // user data
    let user = Number(prompt("Lütfen Bitiş sayısını yazınız"));

    for (let i = 1; i <= user; i++) {
        if (user === 44) {
            console.log("secret key number failed  " + user);
            break;
        }

        if (i === 50) {
            console.log("en fazla 50 sayısına kadar hesaplanır " + user);
            break;
        }

        if (i === 7) {
            console.log("7 sayısını toplama !!! " + user);
            continue;
        }
        if (i % 2 == 0) {
            //evenSum = evenSum+i;
            evenSum += i;
            evenCounter++;
            evenNumber = evenNumber + " " + i;
        } else {
            oddSum += i;
            oddCounter++;
            oddNumber = oddNumber + " " + i;
        }
        commonSum += i;
    } // end for
    console.log("Toplam: " + commonSum);

    console.log("Tek sayılar: " + oddNumber);
    console.log("Tek sayı adedi: " + oddCounter);
    console.log("Tek sayı toplam: " + oddSum);

    console.log("Çift sayılar: " + evenNumber);
    console.log("Çift sayı adedi: " + evenCounter);
    console.log("Çift sayı toplam: " + evenSum);
} // end sumExamplesData
// sumExamplesData()


////////////////////////////////////////////////////////
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))


////////////////////////////////////////////////////////
// ÖDEV
// kullanıcıdan aldığımız isim alınsın
// kullanıcıdan aldığımız soyisim alınsın
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

// let usernameAndSurnameMasking = () => {
//     const usernameAndSurname = prompt("Lütfen adınızı ve soyadınızı giriniz");

//     const userIndex = usernameAndSurname.indexOf(" ");
//     let username = usernameAndSurname.substring(0, userIndex);
//     for (let i = 1; i < username.length; i++) {
//         username = username.replace(username.charAt(i), "*");
//     }
//     username = username.toUpperCase()
//     console.log(username.toUpperCase());

//     let surname = usernameAndSurname.substring(userIndex + 1, usernameAndSurname.length).toUpperCase();
//     for (let i = 1; i <= username.length; i++) {
//         surname = surname.replace(surname.charAt(i), "*");
//     }
//     console.log(surname);
//     console.log(username.concat(" ").concat(surname));
// }
// usernameAndSurnameMasking();

////////////////////////////////////////////////////////////////////////

// Monad

// const birinci = () => {
//     let user = Number(prompt("Lütfens sayı giriniz"));
//     return user;
// }

// const ikinci = () => {
//     let data = birinci();
//     console.log(Math.sqrt(data));
// }

// ikinci();

////////////////////////////////////////////////////////

// setTimeOut(),setInterval()

// Belirli bir zaman sonra tek bir kere çalışır ve durur
// setTimeout(function(){
//     console.log("setTimeout çalıştı");
// },2000);

// Belirli bir zaman çalışır ve sonsuza kadar tekrar eder
// setInterval(function(){
//     console.log("setInterval çalıştı");
// },3000);

////////////////////////////////////////////////////////

// callbackfunction

const birinci = (data) => {
    return Math.pow(2, data);
}

const ikinci = (callbackFunction) => {
    let user = Number(prompt("Lütfens sayı giriniz"));
    let data = callbackFunction(user);
    console.log(data);
}

// ikinci(birinci)

////////////////////////////////////////////////////////

//promise

const promTutorials = () => {
    //catch 1 tane olmak zorunda
    let data = new Promise((resolve, reject) => {
        let status = 200;
        if (status == 400)
            resolve("Çalıştı");
        else
            reject("Çalışmadı");

    }).then(
        () => { console.log("olumlu"); }
    ).catch(
        (err) => { console.error(err); }
    );
}
// promTutorials()

////////////////////////////////////////////////////////

// dizi, Iterative for, for in, for of, forEach, map, filter , fill

let arr = () => {
    const numbers = [3, 5, 6, "str", true];
    console.log(numbers);
}
// arr();


// DİZİLERE DEVAM EDİCEZ
////////////////////////////////////////////////////////

// callback promise örneği

let callbackFunctionComputer = () => {


    // dizi objesi içerisinde 5 tane random obje olsun
    const computerArray = [];

    for (let index = 0; index < 5; index++) {

        let computerObject = {
            computerName: `computer ${index + 1}`,
            price: `${index + 1}` * `${Number(100)}`
        };
        computerArray.push(computerObject);
    }
    console.log(computerArray);

    // bu dizi içindeki sadece computer name bileşenlerini gösterin (Map)
    const arrayInComputerName = () => {
        computerArray.map((temp) => {
            // console.log(`${temp.computerName}`);
        })
    }
    arrayInComputerName();

    // call back function
    const arrayInComputerObject = (obj, callbackFnc) => {
        computerArray.push(obj);
        callbackFnc();
    }

    arrayInComputerObject({ computerName: "computer 6", price: 600 }, arrayInComputerName)

}
// callbackFunctionComputer();


/////////////////////////////////////////////////////////////////
// Json nedir ? XML nedir ? arasındaki fark ?

let objecttutorials = () => {

    // object
    const personObj = {
        name: "Enes",
        surname: "Kadumi",
        number: "21",
        isLogin: true,
        software: ["Html5", "Css", "javascript"],
        fullName: function () {
            return this.name + " " + this.surname
        }
    };

    console.log(personObj);

    //variable
    console.log(personObj.name);
    console.log(personObj.surname);

    //variable nested
    console.log(personObj["name"]);
    console.log(personObj["surname"]);

    //Array
    console.log(personObj.software[2]);

    const objectToString = JSON.stringify(personObj);
    console.log(objectToString);

    const stringToObject = JSON.parse(objectToString);
    console.log(stringToObject.name);

    // Object variable
    personObj.language = "english";
    console.log(personObj.language);

    // function callback
    console.log(personObj.fullName());

}

//objecttutorials();

// object constructor

let objectConstructor = () => {
    let personConstructor = function (name, surname) {
        this.name = name; //obje
        this.surname = surname; // obje
        console.log(this); // this komutu objeyi işaret ediyor
    }

    let personResult = new personConstructor("Enes", "Kadumi")
    console.log(personResult.name, personResult.surname);
}

// objectConstructor ();

////////////////////////////////////////////
// call, apply, bind
// anonymous function ile arrow function arasındaki farka bakmanızı istiyoruz.

let noParameterCallApplyBind = () => {

    // function
    let functionOtherObject = function () {
        document.writeln(`Parametresiz Function: ${this.adi}<br/>`)
    }

    // object
    let objectData = {
        adi: "Spora gidiyorum"
    }

    functionOtherObject.call(objectData)
    functionOtherObject.apply(objectData)
    let deneme = functionOtherObject.bind(objectData);
    deneme();
}
// noParameterCallApplyBind();
// document.writeln(`<br/>`)

let parameterCallApplyBind = () => {

    // function
    let functionOtherObject = function (surname) {
        document.writeln(`Parametresiz Function: ${this.adi} => ${surname}<br/>`)
    }

    // object
    let objectData = {
        adi: "Spora gidiyorum"
    }

    functionOtherObject.call(objectData, "Kadumi")
    functionOtherObject.apply(objectData, ["Kadumi"])
    let deneme = functionOtherObject.bind(objectData, "Kadumi");
    deneme();
}
// parameterCallApplyBind();

///////////////////////////////////////////////////////////////
// event

let eventFunction = () => {
    alert("deneme")
}

///////////////////////////////////////////////////////////////
// DOM

let newDataDate = () => {

    // let now = document.getElementById("text_data")

    // now.innerHTML = "<b><i><mark>" + new Date().getFullYear() + "</i></b></mark>"

    // now.innerHTML = `<b><i><mark> ${new Date().getFullYear()} </i></b></mark>`

    // QUERYSELECTOR id = # / class = .

    let now = document.querySelector("#text_data")

    // TEXT

    // now.innerText = `<b><i><mark> ${new Date().getFullYear()} </i></b></mark>`
    now.innerText = `${new Date().getFullYear()}`


    // Css
    now.style.color = "white";
    now.style.backgroundColor = "purple"
    now.style.padding = "5rem"

}


let domData2 = () => {
    // alert("domData2")

    // ID
    // let domUserData = document.getElementById("dom_id").innerText = "ID"

    //class
    // let domUserData = document.getElementsByClassName("dom_class")[0].innerText = "class"


    // Tag name
    // let domUserData = document.getElementsByTagName("p")[1].innerText = "class"


}

//////////////////////////////////////////////////////////
// Butona tıkladığımızda kullanıcıya soru sorsun
// farklı bir sayfaya gitmek istermisiniz ?
// evet farklı bir sayfaya redirect
// değilse alert versin

let outSite = () => {
    let userInformation = window.confirm("Farklı bir sayfaya gitmek ister misiniz ?")
        ? window.location = "https://www.ecodation.com"
        : window.alert("Bu sayfada kaldınız")

    // if else ile

    // let userInformation = window.confirm("Farklı bir sayfaya gitmek ister misiniz ?")

    // if (userInformation == true) {
    //     window.location = "https://www.ecodation.com"
    // }
    // else
    //     window.alert("Bu sayfada kaldınız")

}

// listener

let userListener = () => {
    let listenerParag = document.getElementById("parag_list")
    listenerParag.addEventListener("click", function (e) {
        // alert(e.preventDefault + " " + e.target)
        document.getElementById("log_admin").innerHTML = "takip edildi"
        // $("#log_admin").html("Takip edildi")



    })
}
// userListener()


////////////////////////////////////////////////////

// LocalStorage

let localStorageData = () => {
    // const name = localStorage.setItem("name",prompt("Adınızı giriniz"))
    // const surname = localStorage.setItem("surname",prompt("Soyadınızı giriniz"))
    // console.log(localStorage)

    const getName = localStorage.getItem("name")
    alert(getName)

    // RemoveItem
    // localStorage.removeItem("name")

    //clear
    // localStorage.clear()

}
// localStorageData()

/////////////////////////////////////////////////////////////////////
// Jquery hangi tuşa bastım bana söylesin

let userJqueryKey = () => {

    // Jquery hazırlanması 
    $(document).ready(function () {

        $(document).keydown(function (userButton) {

            console.log(userButton)
            console.log(userButton.keyCode);
            // keyCode (13) => ENTER 

            // Browser sen birşey yapma, yaparsam ben yaparım
            userButton.preventDefault()

            // ENTER BASILDI
            if (userButton.keyCode == 13) {
                alert("ENTER Bastınız")
            }



        }) // end keydown

    }) // end document.ready

} // end userJqueryKey
// userJqueryKey()

///////////////////////////////////////////////////////
// V.K.I (LocalStorage); acronym
// Vucüt Kitle Index (VKI) 
// Kullanıcıdan alınan Kilo ve Boy verileri formda inputtan aldıktan sonra
// Formül: Kilo/((Boy)/100)^2
// eğer bu formülde;
// 18>X     çıkarsa: Düşük Kilolu (Doktora gidiniz)
// 18<=X<24 çıkarsa: Normal Kilolu
// 24<=X<29 çıkarsa: Fazla Kilolu
// 29<=X<32 çıkarsa: Obez Kilolu
// X>=32    çıkarsa: Aşırı Obez Kilolu (Doktora gidiniz)

// VKI Butonu olsun. bu  butona bastığımızda (modal) Form açılsın.
// input: kilo
// input: boy
// submit button
// NOT: Kilo(weight), Boy(height), formül sonucu(formulaResult) ve Sonuç(result) LocalStorage olarak saklansın.

let vkiFormule = () => {
    $(document).ready(function () {
        // EVENT
        $("#vki_submit_id").click(function (event) {

            // 
            event.preventDefault();

            // Boy ve Kilo
            let weight, height, vkiResult;

            // Local Storage
            let getLocalWeight, getLocalHeight, getLocalVkiNumberResult, getLocalVkiResult;

            // KİLO
            weight = jQuery.trim($("#weight_id").val());
            // alert(weight);
            // validation
            // eğer input içinde değer varsa hata mesajı silinsin.
            if (weight == "") {
                $('#validation_weight').html("Kilosu boş geçilemez");
            } else if (jQuery.isNumeric(weight) == false) {
                // Kullanıcı Sayı girmezse sayı girmediniz hatasını versin (REGEX)
                $('#validation_weight').html("Sayı girmelisiniz");
            } else {
                // LocalStorage => // NOT: Kilo(weight), Boy(height), formül sonucu(formulaResult) ve Sonuç(result) LocalStorage olarak saklansın.
                localStorage.setItem("weight", weight);
                console.log(localStorage);
                getLocalWeight = localStorage.getItem("weight");
                console.log(`Local Weight:  ${getLocalWeight}`);
                //CAST NUMBER
                getLocalWeight = Number(getLocalWeight);
            }

            // BOY DOM
            height = jQuery.trim(document.getElementById("height_id").value);
            //alert(height);
            // validation
            if (height == "") {
                $('#validation_height').html("Boy boş geçilemez");
            } else if ($.isNumeric(weight) == false) {
                // Kullanıcı Sayı girmezse sayı girmediniz hatasını versin (REGEX)
                $('#validation_weight').html("Sayı girmelisiniz");
            } else {
                // LocalStorage => // NOT: Kilo(weight), Boy(height), formül sonucu(formulaResult) ve Sonuç(result) LocalStorage olarak saklansın.
                localStorage.setItem("height", height);
                console.log(localStorage);
                getLocalHeight = localStorage.getItem("height");
                console.log(`Local Height:  ${getLocalHeight}`);
                //CAST NUMBER
                getLocalHeight = Number(getLocalHeight);
            }
            // eğer input içinde değer varsa hata mesajı silinsin.

            // FORMULE
            // Kullanıcıdan alınan Kilo ve Boy verileri formda inputtan aldıktan sonra
            // Formül: Kilo/((Boy)/100)^2
            vkiResult = Math.round(getLocalWeight / Math.pow((getLocalHeight / 100), 2));

            // Local
            localStorage.setItem("vki_number_result", vkiResult);
            getLocalVkiNumberResult = localStorage.getItem("vki_number_result");


            // eğer bu formülde;
            // 18>X     çıkarsa: Düşük Kilolu (Doktora gidiniz)
            // 18<=X<24 çıkarsa: Normal Kilolu
            // 24<=X<29 çıkarsa: Fazla Kilolu
            // 29<=X<32 çıkarsa: Obez Kilolu
            // X>=32    çıkarsa: Aşırı Obez Kilolu (Doktora gidiniz)
            // DISPLAY RESULT
            //$('#result_number_id').html(getLocalVkiNumberResult).css("color","blue");

            // switch-case
            if (getLocalVkiNumberResult < 18) {
                $("#result_vki_id").html(`<b><i>${getLocalVkiNumberResult}:Düşük Kilolu </i></b>`);
                localStorage.setItem("vki_result", "düşük kilolu");
            } else if (18 <= getLocalVkiNumberResult && getLocalVkiNumberResult < 24) {
                $("#result_vki_id").html(`<b><i>${getLocalVkiNumberResult}:Normal Kilolu </i></b>`);
                localStorage.setItem("vki_result", "Normal kilolu");
            } else if (24 <= getLocalVkiNumberResult && getLocalVkiNumberResult < 29) {
                $("#result_vki_id").html(`<b><i>${getLocalVkiNumberResult}:Fazla Kilolu </i></b>`);
                localStorage.setItem("vki_result", "Fazla kilolu");
            } else if (29 <= getLocalVkiNumberResult && getLocalVkiNumberResult < 32) {
                $("#result_vki_id").html(`<b><i>${getLocalVkiNumberResult}:Obez Kilolu </i></b>`);
                localStorage.setItem("vki_result", "Obez kilolu");
            } else if (getLocalVkiNumberResult >= 32) {
                $("#result_vki_id").html(`<b><i>${getLocalVkiNumberResult}:Aşırı Obez Kilolu (Doktora gidiniz) </i></b>`);
                localStorage.setItem("vki_result", "Aşırı Obez kilolu");
            } else {
                $("#result_vki_id").html(`<b><i>${getLocalVkiNumberResult}:Sen insan değilsin :) </i></b>`);
                localStorage.setItem("vki_result", "Sen insan değilsin");
            }

            // Local
            getLocalVkiResult = localStorage.getItem("vki_result");

            // Local Storage Temizle

        }); // click
    }) // end document ready
};
vkiFormule();


// LocalStorage Cleaner
let clearLocaleStorageData=()=>{
    //alert("Silinecek")
    if(window.confirm("Local Storage'ı silmek istediğinizden emin misiniz ?")){
        localStorage.clear();
       alert("silindi");
    }else{
        alert("Silinmedi !!!");
    }
}
// $(function () {
    //$("#vki_hesapla").on("click", function () {
//}});