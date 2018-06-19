$(document).ready(function(){

$(".home_page_gallery").hover(function() {
	var id = ($(this)).attr('id');
	$(".home_page_gallery").each(function(i, obj) {
	//change all rest images back to background image
		var id = ($(this)).attr('id');
		$(this).css('background-image', 'url(./images/aptcovers/' + id +'aptt.png)');
		});
	//change clicked image to people image
		$(this).css('background-image', 'url(./images/apttypes/' + id +'.png)');
      	});
});

window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

function arrows1() {
        var element = document.getElementById("roombtn");

        element.classList.toggle("equipbuttonsuparrow");
    
} 
function arrows2() {
    var element = document.getElementById("kitchenbtn");

    element.classList.toggle("equipbuttonsuparrow");

} 
function arrows3() {
    var element = document.getElementById("showerbtn");

    element.classList.toggle("equipbuttonsuparrow");

} 
function arrows4() {
    var element = document.getElementById("generalbtn");

    element.classList.toggle("equipbuttonsuparrow");

} 


$(document).ready(function () {
    // Add smooth scrolling to all links
    if (window.location.hash !== "") {
        var hash = window.location.hash;
    }
    $("a").on('click', function (event) {
       
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
           // event.preventDefault();
          
            // Store hash
            var hash = this.hash;
          
            var nav_height = 77; // pixels
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top- nav_height - 10
            }, 700, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

$('.equipbuttons').click(function () {
    var things = $(this).parent().find(".things");
  
    things.toggleClass("show");
    
    });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.equipbuttons')) {

        var dropdowns = document.getElementsByClassName("things");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunc() {
    var navbar = document.getElementById("topNav");

    if (window.pageYOffset >= 200) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
} 

function myFunc2() {
    var navbar = document.getElementById("topNav2");
    var navbar2 = document.getElementById("bottomnav");
    if (window.pageYOffset >= 200) {
        navbar.classList.add("sticky");
        navbar2.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
        navbar2.classList.remove("sticky");
    }



}
function myFunc3() {
    var navbar = document.getElementById("topNav3");
    var navbar3 = document.getElementById("bottomnav2");
    if (window.pageYOffset >= 200) {
        navbar.classList.add("sticky");
        navbar3.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
        navbar3.classList.remove("sticky");
    }



}
function myFunc4() {
    var navbar = document.getElementById("topNav4");
    var navbar4 = document.getElementById("bottomnav3");
    if (window.pageYOffset >= 200) {
        navbar.classList.add("sticky");
        navbar4.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
        navbar4.classList.remove("sticky");
    }



}
