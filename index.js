$(document).ready(() => {

    //initial theme
    if (localStorage.getItem("theme")) {
        $(".frame__prewrapper").toggleClass("tog__theme")
    }


    //theme toggler
    $("#togThemeBtn").on("click", () => {
        
        if (localStorage.getItem("theme")) {
            localStorage.removeItem("theme")
        } else {
            localStorage.setItem("theme", "tog")
        }
        $(".frame__prewrapper").toggleClass("tog__theme")
    })


    //changeTicketPhoto
    $(".grid__ticket__gallery a").on("click", (e) => {
        e.preventDefault()
        let tmp = e.target.getAttribute("src")
        e.target.setAttribute("src", $("#ticketPhoto").attr("src"))
        $("#ticketPhoto").attr("src", tmp)
    })


    //on__active/disActive program window
    $("#programsOpenBtn").on("click", () => {
        $("#programs").addClass("on__active")
    })

    $("#programsCloseBtn").on("click", () => {
        $("#programs").removeClass("on__active")
    })


    //on__active/disActive contacts window
    $("#contactsOpenBtn").on("click", () => {
        $("#contacts").addClass("on__active")
    })

    $("#contactsCloseBtn").on("click", () => {
        $("#contacts").removeClass("on__active")
    })
    

})