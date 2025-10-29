// Selecting Empty Container

var empty = document.getElementById("empty")
var emptybtncontainer = document.getElementById("emptybtncontainer")
var emptybtn = document.getElementById("emptybtn")

// Selecting Load Container
var load = document.getElementById("load")
var loadbtn = document.getElementById("loadbtn")
var loadbackbtn = document.getElementById("loadbackbtn")
var loadnextbtn = document.getElementById("loadnextbtn")

// Selecting Box/Birds Container
var boxcontainer = document.getElementById("boxcontainer")
var boxbtn = document.getElementById("boxbtn")
var boxback = document.getElementById("boxback")
var boxnext = document.getElementById("boxnext")

// Selectin Net Weight Container
var netcontainer = document.getElementById("netcontainer")
var netbtn = document.getElementById("netbtn")
var netback = document.getElementById("netback")
var netload = document.getElementById("netload")
var netempty = document.getElementById("netempty")




emptybtn.addEventListener("click", function () {
    empty.style.display = "none"
    emptybtncontainer.style.display = "none"

    load.style.display = "flex"
    loadbtn.style.display = "flex"
})

loadbackbtn.addEventListener("click", function () {
    empty.style.display = "flex"
    emptybtncontainer.style.display = "flex"

    load.style.display = "none"
    loadbtn.style.display = "none"
})

loadnextbtn.addEventListener("click", function () {
    empty.style.display = "none"
    emptybtncontainer.style.display = "none"

    load.style.display = "none"
    loadbtn.style.display = "none"

    boxcontainer.style.display = "flex"
    boxbtn.style.display = "flex"
})

boxback.addEventListener("click", function () {
    empty.style.display = "none"
    emptybtncontainer.style.display = "none"

    load.style.display = "flex"
    loadbtn.style.display = "flex"

    boxcontainer.style.display = "none"
    boxbtn.style.display = "none"
})

boxnext.addEventListener("click", function () {
    empty.style.display = "none"
    emptybtncontainer.style.display = "none"

    load.style.display = "none"
    loadbtn.style.display = "none"

    boxcontainer.style.display = "none"
    boxbtn.style.display = "none"

    netcontainer.style.display = "flex"
    netbtn.style.display = "flex"
})

netback.addEventListener("click", function () {
    empty.style.display = "none"
    emptybtncontainer.style.display = "none"

    load.style.display = "none"
    loadbtn.style.display = "none"

    boxcontainer.style.display = "flex"
    boxbtn.style.display = "flex"

    netcontainer.style.display = "none"
    netbtn.style.display = "none"
})

netload.addEventListener("click", function () {
    empty.style.display = "none"
    emptybtncontainer.style.display = "none"

    load.style.display = "flex"
    loadbtn.style.display = "flex"

    boxcontainer.style.display = "none"
    boxbtn.style.display = "none"

    netcontainer.style.display = "none"
    netbtn.style.display = "none"
})

netempty.addEventListener("click", function () {
    empty.style.display = "flex"
    emptybtncontainer.style.display = "flex"

    load.style.display = "none"
    loadbtn.style.display = "none"

    boxcontainer.style.display = "none"
    boxbtn.style.display = "none"

    netcontainer.style.display = "none"
    netbtn.style.display = "none"
})

// Selecting Empty Input Boxes

var Einput1 = document.getElementById("Einput1")
var Einput2 = document.getElementById("Einput2")
var Einput3 = document.getElementById("Einput3")
var Einput4 = document.getElementById("Einput4")
var Einput5 = document.getElementById("Einput5")
var Einput6 = document.getElementById("Einput6")
var Einput7 = document.getElementById("Einput7")
var Einput8 = document.getElementById("Einput8")
var Einput9 = document.getElementById("Einput9")
var Einput10 = document.getElementById("Einput10")
var Einput11 = document.getElementById("Einput11")
var Einput12 = document.getElementById("Einput12")
var Einput13 = document.getElementById("Einput13")
var Einput14 = document.getElementById("Einput14")
var Einput15 = document.getElementById("Einput15")
var Einput16 = document.getElementById("Einput16")
var Einput17 = document.getElementById("Einput17")
var Einput18 = document.getElementById("Einput18")
var Einput19 = document.getElementById("Einput19")
var Einput20 = document.getElementById("Einput20")
var Einput21 = document.getElementById("Einput21")
var Einput22 = document.getElementById("Einput22")
var Einput23 = document.getElementById("Einput23")
var Einput24 = document.getElementById("Einput24")
var Einput25 = document.getElementById("Einput25")
var Einput26 = document.getElementById("Einput26")
var Einput27 = document.getElementById("Einput27")
var Einput28 = document.getElementById("Einput28")
var Einput29 = document.getElementById("Einput29")
var Einput30 = document.getElementById("Einput30")
var Einput31 = document.getElementById("Einput31")
var Einput32 = document.getElementById("Einput32")
var Einput33 = document.getElementById("Einput33")
var Einput34 = document.getElementById("Einput34")
var Einput35 = document.getElementById("Einput35")
var Einput36 = document.getElementById("Einput36")
var Einput37 = document.getElementById("Einput37")
var Einput38 = document.getElementById("Einput38")
var Einput39 = document.getElementById("Einput39")
var Einput40 = document.getElementById("Einput40")


// Selecting Load Input Boxes
var Linput1 = document.getElementById("Linput1")
var Linput2 = document.getElementById("Linput2")
var Linput3 = document.getElementById("Linput3")
var Linput4 = document.getElementById("Linput4")
var Linput5 = document.getElementById("Linput5")
var Linput6 = document.getElementById("Linput6")
var Linput7 = document.getElementById("Linput7")
var Linput8 = document.getElementById("Linput8")
var Linput9 = document.getElementById("Linput9")
var Linput10 = document.getElementById("Linput10")
var Linput11 = document.getElementById("Linput11")
var Linput12 = document.getElementById("Linput12")
var Linput13 = document.getElementById("Linput13")
var Linput14 = document.getElementById("Linput14")
var Linput15 = document.getElementById("Linput15")
var Linput16 = document.getElementById("Linput16")
var Linput17 = document.getElementById("Linput17")
var Linput18 = document.getElementById("Linput18")
var Linput19 = document.getElementById("Linput19")
var Linput20 = document.getElementById("Linput20")
var Linput21 = document.getElementById("Linput21")
var Linput22 = document.getElementById("Linput22")
var Linput23 = document.getElementById("Linput23")
var Linput24 = document.getElementById("Linput24")
var Linput25 = document.getElementById("Linput25")
var Linput26 = document.getElementById("Linput26")
var Linput27 = document.getElementById("Linput27")
var Linput28 = document.getElementById("Linput28")
var Linput29 = document.getElementById("Linput29")
var Linput30 = document.getElementById("Linput30")
var Linput31 = document.getElementById("Linput31")
var Linput32 = document.getElementById("Linput32")
var Linput33 = document.getElementById("Linput33")
var Linput34 = document.getElementById("Linput34")
var Linput35 = document.getElementById("Linput35")
var Linput36 = document.getElementById("Linput36")
var Linput37 = document.getElementById("Linput37")
var Linput38 = document.getElementById("Linput38")
var Linput39 = document.getElementById("Linput39")
var Linput40 = document.getElementById("Linput40")



// Selecting Empty Add Button & Empty total 
var EAddbtn = document.getElementById("EAddbtn")
var Emptyweight = document.getElementById("Etotal")
var Enetweight = document.getElementById("Enetweight")

// Selecting Load Add button & Load total
var LAddbtn = document.getElementById("LAddbtn")
var Loadweight = document.getElementById("Loadweight")
var Lnetweight = document.getElementById("Lnetweight")

var Totalnet = document.getElementById("Totalnet")

EAddbtn.addEventListener("click", function () {
    var Einput1value = Number(Einput1.value)
    var Einput2value = Number(Einput2.value)
    var Einput3value = Number(Einput3.value)
    var Einput4value = Number(Einput4.value)
    var Einput5value = Number(Einput5.value)
    var Einput6value = Number(Einput6.value)
    var Einput7value = Number(Einput7.value)
    var Einput8value = Number(Einput8.value)
    var Einput9value = Number(Einput9.value)
    var Einput10value = Number(Einput10.value)
    var Einput11value = Number(Einput11.value)
    var Einput12value = Number(Einput12.value)
    var Einput13value = Number(Einput13.value)
    var Einput14value = Number(Einput14.value)
    var Einput15value = Number(Einput15.value)
    var Einput16value = Number(Einput16.value)
    var Einput17value = Number(Einput17.value)
    var Einput18value = Number(Einput18.value)
    var Einput19value = Number(Einput19.value)
    var Einput20value = Number(Einput20.value)
    var Einput21value = Number(Einput21.value)
    var Einput22value = Number(Einput22.value)
    var Einput23value = Number(Einput23.value)
    var Einput24value = Number(Einput24.value)
    var Einput25value = Number(Einput25.value)
    var Einput26value = Number(Einput26.value)
    var Einput27value = Number(Einput27.value)
    var Einput28value = Number(Einput28.value)
    var Einput29value = Number(Einput29.value)
    var Einput30value = Number(Einput30.value)
    var Einput31value = Number(Einput31.value)
    var Einput32value = Number(Einput32.value)
    var Einput33value = Number(Einput33.value)
    var Einput34value = Number(Einput34.value)
    var Einput35value = Number(Einput35.value)
    var Einput36value = Number(Einput36.value)
    var Einput37value = Number(Einput37.value)
    var Einput38value = Number(Einput38.value)
    var Einput39value = Number(Einput39.value)
    var Einput40value = Number(Einput40.value)

    var Emptytotal = Einput1value + Einput2value + Einput3value + Einput4value + Einput5value +
        Einput6value + Einput7value + Einput8value + Einput9value + Einput10value + Einput11value + Einput12value + Einput13value + Einput14value + Einput15value +
        Einput16value + Einput17value + Einput18value + Einput19value + Einput20value + Einput21value + Einput22value + Einput23value + Einput24value + Einput25value +
        Einput26value + Einput27value + Einput28value + Einput29value + Einput30value + Einput31value + Einput32value + Einput33value + Einput34value + Einput35value +
        Einput36value + Einput37value + Einput38value + Einput39value + Einput40value

    Emptyweight.textContent = ("Empty Total : " + Emptytotal.toFixed(1))
    Enetweight.textContent = ("Empty Weight : " + Emptytotal.toFixed(1))

})

LAddbtn.addEventListener("click", function () {
    var Linput1value = Number(Linput1.value)
    var Linput2value = Number(Linput2.value)
    var Linput3value = Number(Linput3.value)
    var Linput4value = Number(Linput4.value)
    var Linput5value = Number(Linput5.value)
    var Linput6value = Number(Linput6.value)
    var Linput7value = Number(Linput7.value)
    var Linput8value = Number(Linput8.value)
    var Linput9value = Number(Linput9.value)
    var Linput10value = Number(Linput10.value)
    var Linput11value = Number(Linput11.value)
    var Linput12value = Number(Linput12.value)
    var Linput13value = Number(Linput13.value)
    var Linput14value = Number(Linput14.value)
    var Linput15value = Number(Linput15.value)
    var Linput16value = Number(Linput16.value)
    var Linput17value = Number(Linput17.value)
    var Linput18value = Number(Linput18.value)
    var Linput19value = Number(Linput19.value)
    var Linput20value = Number(Linput20.value)
    var Linput21value = Number(Linput21.value)
    var Linput22value = Number(Linput22.value)
    var Linput23value = Number(Linput23.value)
    var Linput24value = Number(Linput24.value)
    var Linput25value = Number(Linput25.value)
    var Linput26value = Number(Linput26.value)
    var Linput27value = Number(Linput27.value)
    var Linput28value = Number(Linput28.value)
    var Linput29value = Number(Linput29.value)
    var Linput30value = Number(Linput30.value)
    var Linput31value = Number(Linput31.value)
    var Linput32value = Number(Linput32.value)
    var Linput33value = Number(Linput33.value)
    var Linput34value = Number(Linput34.value)
    var Linput35value = Number(Linput35.value)
    var Linput36value = Number(Linput36.value)
    var Linput37value = Number(Linput37.value)
    var Linput38value = Number(Linput38.value)
    var Linput39value = Number(Linput39.value)
    var Linput40value = Number(Linput40.value)

    var Loadtotal = Linput1value + Linput2value + Linput3value + Linput4value + Linput5value +
        Linput6value + Linput7value + Linput8value + Linput9value + Linput10value + Linput11value + Linput12value + Linput13value + Linput14value + Linput15value +
        Linput16value + Linput17value + Linput18value + Linput19value + Linput20value + Linput21value + Linput22value + Linput23value + Linput24value + Linput25value +
        Linput26value + Linput27value + Linput28value + Linput29value + Linput30value + Linput31value + Linput32value + Linput33value + Linput34value + Linput35value +
        Linput36value + Linput37value + Linput38value + Linput39value + Linput40value

    Loadweight.textContent = ("Load Total : " + Loadtotal.toFixed(1))
    Lnetweight.textContent = ("Load Weight : " + Loadtotal.toFixed(1))

    // Sending to Net Weight

    var Einput1value = Number(Einput1.value)
    var Einput2value = Number(Einput2.value)
    var Einput3value = Number(Einput3.value)
    var Einput4value = Number(Einput4.value)
    var Einput5value = Number(Einput5.value)
    var Einput6value = Number(Einput6.value)
    var Einput7value = Number(Einput7.value)
    var Einput8value = Number(Einput8.value)
    var Einput9value = Number(Einput9.value)
    var Einput10value = Number(Einput10.value)
    var Einput11value = Number(Einput11.value)
    var Einput12value = Number(Einput12.value)
    var Einput13value = Number(Einput13.value)
    var Einput14value = Number(Einput14.value)
    var Einput15value = Number(Einput15.value)
    var Einput16value = Number(Einput16.value)
    var Einput17value = Number(Einput17.value)
    var Einput18value = Number(Einput18.value)
    var Einput19value = Number(Einput19.value)
    var Einput20value = Number(Einput20.value)
    var Einput21value = Number(Einput21.value)
    var Einput22value = Number(Einput22.value)
    var Einput23value = Number(Einput23.value)
    var Einput24value = Number(Einput24.value)
    var Einput25value = Number(Einput25.value)
    var Einput26value = Number(Einput26.value)
    var Einput27value = Number(Einput27.value)
    var Einput28value = Number(Einput28.value)
    var Einput29value = Number(Einput29.value)
    var Einput30value = Number(Einput30.value)
    var Einput31value = Number(Einput31.value)
    var Einput32value = Number(Einput32.value)
    var Einput33value = Number(Einput33.value)
    var Einput34value = Number(Einput34.value)
    var Einput35value = Number(Einput35.value)
    var Einput36value = Number(Einput36.value)
    var Einput37value = Number(Einput37.value)
    var Einput38value = Number(Einput38.value)
    var Einput39value = Number(Einput39.value)
    var Einput40value = Number(Einput40.value)

    var Emptytotal = Einput1value + Einput2value + Einput3value + Einput4value + Einput5value +
        Einput6value + Einput7value + Einput8value + Einput9value + Einput10value + Einput11value + Einput12value + Einput13value + Einput14value + Einput15value +
        Einput16value + Einput17value + Einput18value + Einput19value + Einput20value + Einput21value + Einput22value + Einput23value + Einput24value + Einput25value +
        Einput26value + Einput27value + Einput28value + Einput29value + Einput30value + Einput31value + Einput32value + Einput33value + Einput34value + Einput35value +
        Einput36value + Einput37value + Einput38value + Einput39value + Einput40value

    var TotalnetWeight = Loadtotal - Emptytotal
    Totalnet.textContent = ("Net Weight : " + TotalnetWeight.toFixed(1) + "Kg")

})

// Selecting Box & Birds container

var Bo1 = document.getElementById("Bo1")
var Bo2 = document.getElementById("Bo2")
var Bo3 = document.getElementById("Bo3")
var Bo4 = document.getElementById("Bo4")
var Bo5 = document.getElementById("Bo5")

var Br1 = document.getElementById("Br1")
var Br2 = document.getElementById("Br2")
var Br3 = document.getElementById("Br3")
var Br4 = document.getElementById("Br4")
var Br5 = document.getElementById("Br5")

//Selecting Birds Add button

var BrAddbtn1 = document.getElementById("BrAddbtn1")
var BrAddbtn2 = document.getElementById("BrAddbtn2")
var BrAddbtn3 = document.getElementById("BrAddbtn3")
var BrAddbtn4 = document.getElementById("BrAddbtn4")
var BrAddbtn5 = document.getElementById("BrAddbtn5")

var TotalBB = document.getElementById("TotalBB")
var Netavg = document.getElementById("Netavg")

BrAddbtn1.addEventListener("click", function () {
    var Bo1value = Number(Bo1.value)
    var Br1value = Number(Br1.value)

    var multiple1 = Bo1value * Br1value

    TotalBB.textContent = ("Total Number Of Birds: " + multiple1)
    BBcount.textContent = ("No.Birds : " + multiple1)

    var Linput1value = Number(Linput1.value)
    var Linput2value = Number(Linput2.value)
    var Linput3value = Number(Linput3.value)
    var Linput4value = Number(Linput4.value)
    var Linput5value = Number(Linput5.value)
    var Linput6value = Number(Linput6.value)
    var Linput7value = Number(Linput7.value)
    var Linput8value = Number(Linput8.value)
    var Linput9value = Number(Linput9.value)
    var Linput10value = Number(Linput10.value)
    var Linput11value = Number(Linput11.value)
    var Linput12value = Number(Linput12.value)
    var Linput13value = Number(Linput13.value)
    var Linput14value = Number(Linput14.value)
    var Linput15value = Number(Linput15.value)
    var Linput16value = Number(Linput16.value)
    var Linput17value = Number(Linput17.value)
    var Linput18value = Number(Linput18.value)
    var Linput19value = Number(Linput19.value)
    var Linput20value = Number(Linput20.value)
    var Linput21value = Number(Linput21.value)
    var Linput22value = Number(Linput22.value)
    var Linput23value = Number(Linput23.value)
    var Linput24value = Number(Linput24.value)
    var Linput25value = Number(Linput25.value)
    var Linput26value = Number(Linput26.value)
    var Linput27value = Number(Linput27.value)
    var Linput28value = Number(Linput28.value)
    var Linput29value = Number(Linput29.value)
    var Linput30value = Number(Linput30.value)
    var Linput31value = Number(Linput31.value)
    var Linput32value = Number(Linput32.value)
    var Linput33value = Number(Linput33.value)
    var Linput34value = Number(Linput34.value)
    var Linput35value = Number(Linput35.value)
    var Linput36value = Number(Linput36.value)
    var Linput37value = Number(Linput37.value)
    var Linput38value = Number(Linput38.value)
    var Linput39value = Number(Linput39.value)
    var Linput40value = Number(Linput40.value)

    var Loadtotal = Linput1value + Linput2value + Linput3value + Linput4value + Linput5value +
        Linput6value + Linput7value + Linput8value + Linput9value + Linput10value + Linput11value + Linput12value + Linput13value + Linput14value + Linput15value +
        Linput16value + Linput17value + Linput18value + Linput19value + Linput20value + Linput21value + Linput22value + Linput23value + Linput24value + Linput25value +
        Linput26value + Linput27value + Linput28value + Linput29value + Linput30value + Linput31value + Linput32value + Linput33value + Linput34value + Linput35value +
        Linput36value + Linput37value + Linput38value + Linput39value + Linput40value

    var Einput1value = Number(Einput1.value)
    var Einput2value = Number(Einput2.value)
    var Einput3value = Number(Einput3.value)
    var Einput4value = Number(Einput4.value)
    var Einput5value = Number(Einput5.value)
    var Einput6value = Number(Einput6.value)
    var Einput7value = Number(Einput7.value)
    var Einput8value = Number(Einput8.value)
    var Einput9value = Number(Einput9.value)
    var Einput10value = Number(Einput10.value)
    var Einput11value = Number(Einput11.value)
    var Einput12value = Number(Einput12.value)
    var Einput13value = Number(Einput13.value)
    var Einput14value = Number(Einput14.value)
    var Einput15value = Number(Einput15.value)
    var Einput16value = Number(Einput16.value)
    var Einput17value = Number(Einput17.value)
    var Einput18value = Number(Einput18.value)
    var Einput19value = Number(Einput19.value)
    var Einput20value = Number(Einput20.value)
    var Einput21value = Number(Einput21.value)
    var Einput22value = Number(Einput22.value)
    var Einput23value = Number(Einput23.value)
    var Einput24value = Number(Einput24.value)
    var Einput25value = Number(Einput25.value)
    var Einput26value = Number(Einput26.value)
    var Einput27value = Number(Einput27.value)
    var Einput28value = Number(Einput28.value)
    var Einput29value = Number(Einput29.value)
    var Einput30value = Number(Einput30.value)
    var Einput31value = Number(Einput31.value)
    var Einput32value = Number(Einput32.value)
    var Einput33value = Number(Einput33.value)
    var Einput34value = Number(Einput34.value)
    var Einput35value = Number(Einput35.value)
    var Einput36value = Number(Einput36.value)
    var Einput37value = Number(Einput37.value)
    var Einput38value = Number(Einput38.value)
    var Einput39value = Number(Einput39.value)
    var Einput40value = Number(Einput40.value)

    var Emptytotal = Einput1value + Einput2value + Einput3value + Einput4value + Einput5value +
        Einput6value + Einput7value + Einput8value + Einput9value + Einput10value + Einput11value + Einput12value + Einput13value + Einput14value + Einput15value +
        Einput16value + Einput17value + Einput18value + Einput19value + Einput20value + Einput21value + Einput22value + Einput23value + Einput24value + Einput25value +
        Einput26value + Einput27value + Einput28value + Einput29value + Einput30value + Einput31value + Einput32value + Einput33value + Einput34value + Einput35value +
        Einput36value + Einput37value + Einput38value + Einput39value + Einput40value

    var TotalnetWeight = Loadtotal - Emptytotal
    var Average = TotalnetWeight/multiple1
    Netavg.textContent=("Birds Average : "+Average.toFixed(3))
})


BrAddbtn2.addEventListener("click", function () {
    var Bo1value = Number(Bo1.value)
    var Br1value = Number(Br1.value)
    var Bo2value = Number(Bo2.value)
    var Br2value = Number(Br2.value)

    var multiple1 = Bo1value * Br1value
    var multiple2 = Bo2value * Br2value + multiple1

    TotalBB.textContent = ("Total Number Of Birds: " + multiple2)
    BBcount.textContent = ("No.Birds : " + multiple2)

        var Linput1value = Number(Linput1.value)
    var Linput2value = Number(Linput2.value)
    var Linput3value = Number(Linput3.value)
    var Linput4value = Number(Linput4.value)
    var Linput5value = Number(Linput5.value)
    var Linput6value = Number(Linput6.value)
    var Linput7value = Number(Linput7.value)
    var Linput8value = Number(Linput8.value)
    var Linput9value = Number(Linput9.value)
    var Linput10value = Number(Linput10.value)
    var Linput11value = Number(Linput11.value)
    var Linput12value = Number(Linput12.value)
    var Linput13value = Number(Linput13.value)
    var Linput14value = Number(Linput14.value)
    var Linput15value = Number(Linput15.value)
    var Linput16value = Number(Linput16.value)
    var Linput17value = Number(Linput17.value)
    var Linput18value = Number(Linput18.value)
    var Linput19value = Number(Linput19.value)
    var Linput20value = Number(Linput20.value)
    var Linput21value = Number(Linput21.value)
    var Linput22value = Number(Linput22.value)
    var Linput23value = Number(Linput23.value)
    var Linput24value = Number(Linput24.value)
    var Linput25value = Number(Linput25.value)
    var Linput26value = Number(Linput26.value)
    var Linput27value = Number(Linput27.value)
    var Linput28value = Number(Linput28.value)
    var Linput29value = Number(Linput29.value)
    var Linput30value = Number(Linput30.value)
    var Linput31value = Number(Linput31.value)
    var Linput32value = Number(Linput32.value)
    var Linput33value = Number(Linput33.value)
    var Linput34value = Number(Linput34.value)
    var Linput35value = Number(Linput35.value)
    var Linput36value = Number(Linput36.value)
    var Linput37value = Number(Linput37.value)
    var Linput38value = Number(Linput38.value)
    var Linput39value = Number(Linput39.value)
    var Linput40value = Number(Linput40.value)

    var Loadtotal = Linput1value + Linput2value + Linput3value + Linput4value + Linput5value +
        Linput6value + Linput7value + Linput8value + Linput9value + Linput10value + Linput11value + Linput12value + Linput13value + Linput14value + Linput15value +
        Linput16value + Linput17value + Linput18value + Linput19value + Linput20value + Linput21value + Linput22value + Linput23value + Linput24value + Linput25value +
        Linput26value + Linput27value + Linput28value + Linput29value + Linput30value + Linput31value + Linput32value + Linput33value + Linput34value + Linput35value +
        Linput36value + Linput37value + Linput38value + Linput39value + Linput40value

    var Einput1value = Number(Einput1.value)
    var Einput2value = Number(Einput2.value)
    var Einput3value = Number(Einput3.value)
    var Einput4value = Number(Einput4.value)
    var Einput5value = Number(Einput5.value)
    var Einput6value = Number(Einput6.value)
    var Einput7value = Number(Einput7.value)
    var Einput8value = Number(Einput8.value)
    var Einput9value = Number(Einput9.value)
    var Einput10value = Number(Einput10.value)
    var Einput11value = Number(Einput11.value)
    var Einput12value = Number(Einput12.value)
    var Einput13value = Number(Einput13.value)
    var Einput14value = Number(Einput14.value)
    var Einput15value = Number(Einput15.value)
    var Einput16value = Number(Einput16.value)
    var Einput17value = Number(Einput17.value)
    var Einput18value = Number(Einput18.value)
    var Einput19value = Number(Einput19.value)
    var Einput20value = Number(Einput20.value)
    var Einput21value = Number(Einput21.value)
    var Einput22value = Number(Einput22.value)
    var Einput23value = Number(Einput23.value)
    var Einput24value = Number(Einput24.value)
    var Einput25value = Number(Einput25.value)
    var Einput26value = Number(Einput26.value)
    var Einput27value = Number(Einput27.value)
    var Einput28value = Number(Einput28.value)
    var Einput29value = Number(Einput29.value)
    var Einput30value = Number(Einput30.value)
    var Einput31value = Number(Einput31.value)
    var Einput32value = Number(Einput32.value)
    var Einput33value = Number(Einput33.value)
    var Einput34value = Number(Einput34.value)
    var Einput35value = Number(Einput35.value)
    var Einput36value = Number(Einput36.value)
    var Einput37value = Number(Einput37.value)
    var Einput38value = Number(Einput38.value)
    var Einput39value = Number(Einput39.value)
    var Einput40value = Number(Einput40.value)

    var Emptytotal = Einput1value + Einput2value + Einput3value + Einput4value + Einput5value +
        Einput6value + Einput7value + Einput8value + Einput9value + Einput10value + Einput11value + Einput12value + Einput13value + Einput14value + Einput15value +
        Einput16value + Einput17value + Einput18value + Einput19value + Einput20value + Einput21value + Einput22value + Einput23value + Einput24value + Einput25value +
        Einput26value + Einput27value + Einput28value + Einput29value + Einput30value + Einput31value + Einput32value + Einput33value + Einput34value + Einput35value +
        Einput36value + Einput37value + Einput38value + Einput39value + Einput40value

    var TotalnetWeight = Loadtotal - Emptytotal
    var Average = TotalnetWeight/multiple2
    Netavg.textContent=("Birds Average : "+Average.toFixed(3))
})

BrAddbtn3.addEventListener("click", function () {
    var Bo1value = Number(Bo1.value)
    var Br1value = Number(Br1.value)
    var Bo2value = Number(Bo2.value)
    var Br2value = Number(Br2.value)
    var Bo3value = Number(Bo3.value)
    var Br3value = Number(Br3.value)

    var multiple1 = Bo1value * Br1value
    var multiple2 = Bo2value * Br2value
    var multiple3 = Bo3value * Br3value + multiple1 + multiple2

    TotalBB.textContent = ("Total Number Of Birds : " + multiple3)
    BBcount.textContent = ("No.Birds : " + multiple3)

        var Linput1value = Number(Linput1.value)
    var Linput2value = Number(Linput2.value)
    var Linput3value = Number(Linput3.value)
    var Linput4value = Number(Linput4.value)
    var Linput5value = Number(Linput5.value)
    var Linput6value = Number(Linput6.value)
    var Linput7value = Number(Linput7.value)
    var Linput8value = Number(Linput8.value)
    var Linput9value = Number(Linput9.value)
    var Linput10value = Number(Linput10.value)
    var Linput11value = Number(Linput11.value)
    var Linput12value = Number(Linput12.value)
    var Linput13value = Number(Linput13.value)
    var Linput14value = Number(Linput14.value)
    var Linput15value = Number(Linput15.value)
    var Linput16value = Number(Linput16.value)
    var Linput17value = Number(Linput17.value)
    var Linput18value = Number(Linput18.value)
    var Linput19value = Number(Linput19.value)
    var Linput20value = Number(Linput20.value)
    var Linput21value = Number(Linput21.value)
    var Linput22value = Number(Linput22.value)
    var Linput23value = Number(Linput23.value)
    var Linput24value = Number(Linput24.value)
    var Linput25value = Number(Linput25.value)
    var Linput26value = Number(Linput26.value)
    var Linput27value = Number(Linput27.value)
    var Linput28value = Number(Linput28.value)
    var Linput29value = Number(Linput29.value)
    var Linput30value = Number(Linput30.value)
    var Linput31value = Number(Linput31.value)
    var Linput32value = Number(Linput32.value)
    var Linput33value = Number(Linput33.value)
    var Linput34value = Number(Linput34.value)
    var Linput35value = Number(Linput35.value)
    var Linput36value = Number(Linput36.value)
    var Linput37value = Number(Linput37.value)
    var Linput38value = Number(Linput38.value)
    var Linput39value = Number(Linput39.value)
    var Linput40value = Number(Linput40.value)

    var Loadtotal = Linput1value + Linput2value + Linput3value + Linput4value + Linput5value +
        Linput6value + Linput7value + Linput8value + Linput9value + Linput10value + Linput11value + Linput12value + Linput13value + Linput14value + Linput15value +
        Linput16value + Linput17value + Linput18value + Linput19value + Linput20value + Linput21value + Linput22value + Linput23value + Linput24value + Linput25value +
        Linput26value + Linput27value + Linput28value + Linput29value + Linput30value + Linput31value + Linput32value + Linput33value + Linput34value + Linput35value +
        Linput36value + Linput37value + Linput38value + Linput39value + Linput40value

    var Einput1value = Number(Einput1.value)
    var Einput2value = Number(Einput2.value)
    var Einput3value = Number(Einput3.value)
    var Einput4value = Number(Einput4.value)
    var Einput5value = Number(Einput5.value)
    var Einput6value = Number(Einput6.value)
    var Einput7value = Number(Einput7.value)
    var Einput8value = Number(Einput8.value)
    var Einput9value = Number(Einput9.value)
    var Einput10value = Number(Einput10.value)
    var Einput11value = Number(Einput11.value)
    var Einput12value = Number(Einput12.value)
    var Einput13value = Number(Einput13.value)
    var Einput14value = Number(Einput14.value)
    var Einput15value = Number(Einput15.value)
    var Einput16value = Number(Einput16.value)
    var Einput17value = Number(Einput17.value)
    var Einput18value = Number(Einput18.value)
    var Einput19value = Number(Einput19.value)
    var Einput20value = Number(Einput20.value)
    var Einput21value = Number(Einput21.value)
    var Einput22value = Number(Einput22.value)
    var Einput23value = Number(Einput23.value)
    var Einput24value = Number(Einput24.value)
    var Einput25value = Number(Einput25.value)
    var Einput26value = Number(Einput26.value)
    var Einput27value = Number(Einput27.value)
    var Einput28value = Number(Einput28.value)
    var Einput29value = Number(Einput29.value)
    var Einput30value = Number(Einput30.value)
    var Einput31value = Number(Einput31.value)
    var Einput32value = Number(Einput32.value)
    var Einput33value = Number(Einput33.value)
    var Einput34value = Number(Einput34.value)
    var Einput35value = Number(Einput35.value)
    var Einput36value = Number(Einput36.value)
    var Einput37value = Number(Einput37.value)
    var Einput38value = Number(Einput38.value)
    var Einput39value = Number(Einput39.value)
    var Einput40value = Number(Einput40.value)

    var Emptytotal = Einput1value + Einput2value + Einput3value + Einput4value + Einput5value +
        Einput6value + Einput7value + Einput8value + Einput9value + Einput10value + Einput11value + Einput12value + Einput13value + Einput14value + Einput15value +
        Einput16value + Einput17value + Einput18value + Einput19value + Einput20value + Einput21value + Einput22value + Einput23value + Einput24value + Einput25value +
        Einput26value + Einput27value + Einput28value + Einput29value + Einput30value + Einput31value + Einput32value + Einput33value + Einput34value + Einput35value +
        Einput36value + Einput37value + Einput38value + Einput39value + Einput40value

    var TotalnetWeight = Loadtotal - Emptytotal
    var Average = TotalnetWeight/multiple3
    Netavg.textContent=("Birds Average : "+Average.toFixed(2))
})

BrAddbtn4.addEventListener("click", function () {
    var Bo1value = Number(Bo1.value)
    var Br1value = Number(Br1.value)
    var Bo2value = Number(Bo2.value)
    var Br2value = Number(Br2.value)
    var Bo3value = Number(Bo3.value)
    var Br3value = Number(Br3.value)
    var Bo4value = Number(Bo4.value)
    var Br4value = Number(Br4.value)

    var multiple1 = Bo1value * Br1value
    var multiple2 = Bo2value * Br2value
    var multiple3 = Bo3value * Br3value
    var multiple4 = Bo4value * Br4value + multiple1 + multiple2 + multiple3
    TotalBB.textContent = ("Total Number Of Birds: " + multiple4)
    BBcount.textContent = ("No.Birds : " + multiple4)

        var Linput1value = Number(Linput1.value)
    var Linput2value = Number(Linput2.value)
    var Linput3value = Number(Linput3.value)
    var Linput4value = Number(Linput4.value)
    var Linput5value = Number(Linput5.value)
    var Linput6value = Number(Linput6.value)
    var Linput7value = Number(Linput7.value)
    var Linput8value = Number(Linput8.value)
    var Linput9value = Number(Linput9.value)
    var Linput10value = Number(Linput10.value)
    var Linput11value = Number(Linput11.value)
    var Linput12value = Number(Linput12.value)
    var Linput13value = Number(Linput13.value)
    var Linput14value = Number(Linput14.value)
    var Linput15value = Number(Linput15.value)
    var Linput16value = Number(Linput16.value)
    var Linput17value = Number(Linput17.value)
    var Linput18value = Number(Linput18.value)
    var Linput19value = Number(Linput19.value)
    var Linput20value = Number(Linput20.value)
    var Linput21value = Number(Linput21.value)
    var Linput22value = Number(Linput22.value)
    var Linput23value = Number(Linput23.value)
    var Linput24value = Number(Linput24.value)
    var Linput25value = Number(Linput25.value)
    var Linput26value = Number(Linput26.value)
    var Linput27value = Number(Linput27.value)
    var Linput28value = Number(Linput28.value)
    var Linput29value = Number(Linput29.value)
    var Linput30value = Number(Linput30.value)
    var Linput31value = Number(Linput31.value)
    var Linput32value = Number(Linput32.value)
    var Linput33value = Number(Linput33.value)
    var Linput34value = Number(Linput34.value)
    var Linput35value = Number(Linput35.value)
    var Linput36value = Number(Linput36.value)
    var Linput37value = Number(Linput37.value)
    var Linput38value = Number(Linput38.value)
    var Linput39value = Number(Linput39.value)
    var Linput40value = Number(Linput40.value)

    var Loadtotal = Linput1value + Linput2value + Linput3value + Linput4value + Linput5value +
        Linput6value + Linput7value + Linput8value + Linput9value + Linput10value + Linput11value + Linput12value + Linput13value + Linput14value + Linput15value +
        Linput16value + Linput17value + Linput18value + Linput19value + Linput20value + Linput21value + Linput22value + Linput23value + Linput24value + Linput25value +
        Linput26value + Linput27value + Linput28value + Linput29value + Linput30value + Linput31value + Linput32value + Linput33value + Linput34value + Linput35value +
        Linput36value + Linput37value + Linput38value + Linput39value + Linput40value

    var Einput1value = Number(Einput1.value)
    var Einput2value = Number(Einput2.value)
    var Einput3value = Number(Einput3.value)
    var Einput4value = Number(Einput4.value)
    var Einput5value = Number(Einput5.value)
    var Einput6value = Number(Einput6.value)
    var Einput7value = Number(Einput7.value)
    var Einput8value = Number(Einput8.value)
    var Einput9value = Number(Einput9.value)
    var Einput10value = Number(Einput10.value)
    var Einput11value = Number(Einput11.value)
    var Einput12value = Number(Einput12.value)
    var Einput13value = Number(Einput13.value)
    var Einput14value = Number(Einput14.value)
    var Einput15value = Number(Einput15.value)
    var Einput16value = Number(Einput16.value)
    var Einput17value = Number(Einput17.value)
    var Einput18value = Number(Einput18.value)
    var Einput19value = Number(Einput19.value)
    var Einput20value = Number(Einput20.value)
    var Einput21value = Number(Einput21.value)
    var Einput22value = Number(Einput22.value)
    var Einput23value = Number(Einput23.value)
    var Einput24value = Number(Einput24.value)
    var Einput25value = Number(Einput25.value)
    var Einput26value = Number(Einput26.value)
    var Einput27value = Number(Einput27.value)
    var Einput28value = Number(Einput28.value)
    var Einput29value = Number(Einput29.value)
    var Einput30value = Number(Einput30.value)
    var Einput31value = Number(Einput31.value)
    var Einput32value = Number(Einput32.value)
    var Einput33value = Number(Einput33.value)
    var Einput34value = Number(Einput34.value)
    var Einput35value = Number(Einput35.value)
    var Einput36value = Number(Einput36.value)
    var Einput37value = Number(Einput37.value)
    var Einput38value = Number(Einput38.value)
    var Einput39value = Number(Einput39.value)
    var Einput40value = Number(Einput40.value)

    var Emptytotal = Einput1value + Einput2value + Einput3value + Einput4value + Einput5value +
        Einput6value + Einput7value + Einput8value + Einput9value + Einput10value + Einput11value + Einput12value + Einput13value + Einput14value + Einput15value +
        Einput16value + Einput17value + Einput18value + Einput19value + Einput20value + Einput21value + Einput22value + Einput23value + Einput24value + Einput25value +
        Einput26value + Einput27value + Einput28value + Einput29value + Einput30value + Einput31value + Einput32value + Einput33value + Einput34value + Einput35value +
        Einput36value + Einput37value + Einput38value + Einput39value + Einput40value

    var TotalnetWeight = Loadtotal - Emptytotal
    var Average = TotalnetWeight/multiple4
    Netavg.textContent=("Birds Average : "+Average.toFixed(3))
})

BrAddbtn5.addEventListener("click", function () {
    var Bo1value = Number(Bo1.value)
    var Br1value = Number(Br1.value)
    var Bo2value = Number(Bo2.value)
    var Br2value = Number(Br2.value)
    var Bo3value = Number(Bo3.value)
    var Br3value = Number(Br3.value)
    var Bo4value = Number(Bo4.value)
    var Br4value = Number(Br4.value)
    var Bo5value = Number(Bo5.value)
    var Br5value = Number(Br5.value)

    var multiple1 = Bo1value * Br1value
    var multiple2 = Bo2value * Br2value
    var multiple3 = Bo3value * Br3value
    var multiple4 = Bo4value * Br4value
    var multiple5 = Bo5value * Br5value + multiple1 + multiple2 + multiple3 + multiple4
    TotalBB.textContent = ("Total Number Of Birds: " + multiple5)
    BBcount.textContent = ("No.Birds : " + multiple5)

        var Linput1value = Number(Linput1.value)
    var Linput2value = Number(Linput2.value)
    var Linput3value = Number(Linput3.value)
    var Linput4value = Number(Linput4.value)
    var Linput5value = Number(Linput5.value)
    var Linput6value = Number(Linput6.value)
    var Linput7value = Number(Linput7.value)
    var Linput8value = Number(Linput8.value)
    var Linput9value = Number(Linput9.value)
    var Linput10value = Number(Linput10.value)
    var Linput11value = Number(Linput11.value)
    var Linput12value = Number(Linput12.value)
    var Linput13value = Number(Linput13.value)
    var Linput14value = Number(Linput14.value)
    var Linput15value = Number(Linput15.value)
    var Linput16value = Number(Linput16.value)
    var Linput17value = Number(Linput17.value)
    var Linput18value = Number(Linput18.value)
    var Linput19value = Number(Linput19.value)
    var Linput20value = Number(Linput20.value)
    var Linput21value = Number(Linput21.value)
    var Linput22value = Number(Linput22.value)
    var Linput23value = Number(Linput23.value)
    var Linput24value = Number(Linput24.value)
    var Linput25value = Number(Linput25.value)
    var Linput26value = Number(Linput26.value)
    var Linput27value = Number(Linput27.value)
    var Linput28value = Number(Linput28.value)
    var Linput29value = Number(Linput29.value)
    var Linput30value = Number(Linput30.value)
    var Linput31value = Number(Linput31.value)
    var Linput32value = Number(Linput32.value)
    var Linput33value = Number(Linput33.value)
    var Linput34value = Number(Linput34.value)
    var Linput35value = Number(Linput35.value)
    var Linput36value = Number(Linput36.value)
    var Linput37value = Number(Linput37.value)
    var Linput38value = Number(Linput38.value)
    var Linput39value = Number(Linput39.value)
    var Linput40value = Number(Linput40.value)

    var Loadtotal = Linput1value + Linput2value + Linput3value + Linput4value + Linput5value +
        Linput6value + Linput7value + Linput8value + Linput9value + Linput10value + Linput11value + Linput12value + Linput13value + Linput14value + Linput15value +
        Linput16value + Linput17value + Linput18value + Linput19value + Linput20value + Linput21value + Linput22value + Linput23value + Linput24value + Linput25value +
        Linput26value + Linput27value + Linput28value + Linput29value + Linput30value + Linput31value + Linput32value + Linput33value + Linput34value + Linput35value +
        Linput36value + Linput37value + Linput38value + Linput39value + Linput40value

    var Einput1value = Number(Einput1.value)
    var Einput2value = Number(Einput2.value)
    var Einput3value = Number(Einput3.value)
    var Einput4value = Number(Einput4.value)
    var Einput5value = Number(Einput5.value)
    var Einput6value = Number(Einput6.value)
    var Einput7value = Number(Einput7.value)
    var Einput8value = Number(Einput8.value)
    var Einput9value = Number(Einput9.value)
    var Einput10value = Number(Einput10.value)
    var Einput11value = Number(Einput11.value)
    var Einput12value = Number(Einput12.value)
    var Einput13value = Number(Einput13.value)
    var Einput14value = Number(Einput14.value)
    var Einput15value = Number(Einput15.value)
    var Einput16value = Number(Einput16.value)
    var Einput17value = Number(Einput17.value)
    var Einput18value = Number(Einput18.value)
    var Einput19value = Number(Einput19.value)
    var Einput20value = Number(Einput20.value)
    var Einput21value = Number(Einput21.value)
    var Einput22value = Number(Einput22.value)
    var Einput23value = Number(Einput23.value)
    var Einput24value = Number(Einput24.value)
    var Einput25value = Number(Einput25.value)
    var Einput26value = Number(Einput26.value)
    var Einput27value = Number(Einput27.value)
    var Einput28value = Number(Einput28.value)
    var Einput29value = Number(Einput29.value)
    var Einput30value = Number(Einput30.value)
    var Einput31value = Number(Einput31.value)
    var Einput32value = Number(Einput32.value)
    var Einput33value = Number(Einput33.value)
    var Einput34value = Number(Einput34.value)
    var Einput35value = Number(Einput35.value)
    var Einput36value = Number(Einput36.value)
    var Einput37value = Number(Einput37.value)
    var Einput38value = Number(Einput38.value)
    var Einput39value = Number(Einput39.value)
    var Einput40value = Number(Einput40.value)

    var Emptytotal = Einput1value + Einput2value + Einput3value + Einput4value + Einput5value +
        Einput6value + Einput7value + Einput8value + Einput9value + Einput10value + Einput11value + Einput12value + Einput13value + Einput14value + Einput15value +
        Einput16value + Einput17value + Einput18value + Einput19value + Einput20value + Einput21value + Einput22value + Einput23value + Einput24value + Einput25value +
        Einput26value + Einput27value + Einput28value + Einput29value + Einput30value + Einput31value + Einput32value + Einput33value + Einput34value + Einput35value +
        Einput36value + Einput37value + Einput38value + Einput39value + Einput40value

    var TotalnetWeight = Loadtotal - Emptytotal
    var Average = TotalnetWeight/multiple5
    Netavg.textContent=("Birds Average : "+Average.toFixed(3))
})

var price = document.getElementById("price")
var PriceAddbtn = document.getElementById("PriceAddbtn")
var amount = document.getElementById("amount")

PriceAddbtn.addEventListener("click",function(){
            var Linput1value = Number(Linput1.value)
    var Linput2value = Number(Linput2.value)
    var Linput3value = Number(Linput3.value)
    var Linput4value = Number(Linput4.value)
    var Linput5value = Number(Linput5.value)
    var Linput6value = Number(Linput6.value)
    var Linput7value = Number(Linput7.value)
    var Linput8value = Number(Linput8.value)
    var Linput9value = Number(Linput9.value)
    var Linput10value = Number(Linput10.value)
    var Linput11value = Number(Linput11.value)
    var Linput12value = Number(Linput12.value)
    var Linput13value = Number(Linput13.value)
    var Linput14value = Number(Linput14.value)
    var Linput15value = Number(Linput15.value)
    var Linput16value = Number(Linput16.value)
    var Linput17value = Number(Linput17.value)
    var Linput18value = Number(Linput18.value)
    var Linput19value = Number(Linput19.value)
    var Linput20value = Number(Linput20.value)
    var Linput21value = Number(Linput21.value)
    var Linput22value = Number(Linput22.value)
    var Linput23value = Number(Linput23.value)
    var Linput24value = Number(Linput24.value)
    var Linput25value = Number(Linput25.value)
    var Linput26value = Number(Linput26.value)
    var Linput27value = Number(Linput27.value)
    var Linput28value = Number(Linput28.value)
    var Linput29value = Number(Linput29.value)
    var Linput30value = Number(Linput30.value)
    var Linput31value = Number(Linput31.value)
    var Linput32value = Number(Linput32.value)
    var Linput33value = Number(Linput33.value)
    var Linput34value = Number(Linput34.value)
    var Linput35value = Number(Linput35.value)
    var Linput36value = Number(Linput36.value)
    var Linput37value = Number(Linput37.value)
    var Linput38value = Number(Linput38.value)
    var Linput39value = Number(Linput39.value)
    var Linput40value = Number(Linput40.value)

    var Loadtotal = Linput1value + Linput2value + Linput3value + Linput4value + Linput5value +
        Linput6value + Linput7value + Linput8value + Linput9value + Linput10value + Linput11value + Linput12value + Linput13value + Linput14value + Linput15value +
        Linput16value + Linput17value + Linput18value + Linput19value + Linput20value + Linput21value + Linput22value + Linput23value + Linput24value + Linput25value +
        Linput26value + Linput27value + Linput28value + Linput29value + Linput30value + Linput31value + Linput32value + Linput33value + Linput34value + Linput35value +
        Linput36value + Linput37value + Linput38value + Linput39value + Linput40value

    var Einput1value = Number(Einput1.value)
    var Einput2value = Number(Einput2.value)
    var Einput3value = Number(Einput3.value)
    var Einput4value = Number(Einput4.value)
    var Einput5value = Number(Einput5.value)
    var Einput6value = Number(Einput6.value)
    var Einput7value = Number(Einput7.value)
    var Einput8value = Number(Einput8.value)
    var Einput9value = Number(Einput9.value)
    var Einput10value = Number(Einput10.value)
    var Einput11value = Number(Einput11.value)
    var Einput12value = Number(Einput12.value)
    var Einput13value = Number(Einput13.value)
    var Einput14value = Number(Einput14.value)
    var Einput15value = Number(Einput15.value)
    var Einput16value = Number(Einput16.value)
    var Einput17value = Number(Einput17.value)
    var Einput18value = Number(Einput18.value)
    var Einput19value = Number(Einput19.value)
    var Einput20value = Number(Einput20.value)
    var Einput21value = Number(Einput21.value)
    var Einput22value = Number(Einput22.value)
    var Einput23value = Number(Einput23.value)
    var Einput24value = Number(Einput24.value)
    var Einput25value = Number(Einput25.value)
    var Einput26value = Number(Einput26.value)
    var Einput27value = Number(Einput27.value)
    var Einput28value = Number(Einput28.value)
    var Einput29value = Number(Einput29.value)
    var Einput30value = Number(Einput30.value)
    var Einput31value = Number(Einput31.value)
    var Einput32value = Number(Einput32.value)
    var Einput33value = Number(Einput33.value)
    var Einput34value = Number(Einput34.value)
    var Einput35value = Number(Einput35.value)
    var Einput36value = Number(Einput36.value)
    var Einput37value = Number(Einput37.value)
    var Einput38value = Number(Einput38.value)
    var Einput39value = Number(Einput39.value)
    var Einput40value = Number(Einput40.value)

    var Emptytotal = Einput1value + Einput2value + Einput3value + Einput4value + Einput5value +
        Einput6value + Einput7value + Einput8value + Einput9value + Einput10value + Einput11value + Einput12value + Einput13value + Einput14value + Einput15value +
        Einput16value + Einput17value + Einput18value + Einput19value + Einput20value + Einput21value + Einput22value + Einput23value + Einput24value + Einput25value +
        Einput26value + Einput27value + Einput28value + Einput29value + Einput30value + Einput31value + Einput32value + Einput33value + Einput34value + Einput35value +
        Einput36value + Einput37value + Einput38value + Einput39value + Einput40value

    var TotalnetWeight = Loadtotal - Emptytotal

    var pricevalue = Number(price.value)

    var cost = TotalnetWeight* pricevalue

    amount.textContent=("Amount : "+cost.toFixed(0))
})