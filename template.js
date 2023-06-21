// alert("deneme")

// Dark Mode

let darkMode = () => {
    // alert("Dark mode on");
    window.document.classList.toggle("dark_mode")
}

// input search
$(document).ready(function () {
    const searchApi = ["İstanbul", "Balıkesir", "İzmir", "Denizli", "Edirne", "Antalya", "Trabzon", "Erzurum"];
    $("#tags").autocomplete({
        source: searchApi
    })
}); //end


//Footer
let newDate = () => {
    const date = new Date().getFullYear()
// JS DOM
//document.getElementById("date_id").innerHTML=new Date().getFullYear()

// Jquery DOM
$("#date_id").html(date)
}
newDate()
