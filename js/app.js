$(document).ready(function() {
    




      // // // // // // //
     // Dropdown menus //
    // // // // // // //

    //find closest dropdown menu and add class open, while also removing open from other dropdowns
    function openDropdown(clickedElement) {
        var currentDropdownMenu = $(clickedElement).closest('.button-group').find('.dropdown-box');
        //console.log(clickedElement);
        $(clickedElement).closest('.button-group').find('.dropdown-box').addClass('active');
        $('.dropdown-box.active').not(currentDropdownMenu).removeClass('active');
    }
    //close dropdown
    function closeDropdown(clickedElement) {
        console.log(clickedElement);
        $('.dropdown-box').removeClass('active');
    }
    //when dropdown button is clicked toggle dropdown
    $('[data-toggle="dropdown"]').on('click', function( e ) {
        e.stopPropagation();
        openDropdown(this);
    });

    //click outside of dropdown will close dropdown
    $('body').on('click', function(){
        closeDropdown(this);
    });
    //close dropdown button will close dropdown
    $('body').on('click', '.close-button', function(){
        closeDropdown(this);
    });
    //close dropdown button will close dropdown
    $('body').on('click', '[data-dismiss="dropdown"]', function(){
        closeDropdown(this);
    });
    //clicking certain elements will not close dropdown
    $('body').on('click', '.dropdown-box__item--static, .dropdown-box__content', function(e){
        e.stopPropagation();
    });



      // // // // //
     // Callouts //
    // // // // //

    //display Callout
    function displayCallout(t) {
        var id = $(t).attr('data-target');
        $('#' + id).addClass('active');
    }
    //hide Callout
    function hideCallout() {
        $('.callout-stage.active').removeClass('active');
    }
    //add class to body to prevent scrolling
    function removeScroll() {
        $('body').addClass('callout-is-active');
    }
    //remove class from body
    function addScroll() {
        $('body').removeClass('callout-is-active');
    }
    //add backdrop div to scope-container
    function displayBD() {
        $('.scope-container').append('<div class="callout-backdrop"></div>');
        setTimeout(function() {
            $('.callout-backdrop').addClass('fade-in');
        },.2);
    }
    //remove backdrop div
    function hideBD() {
        $('.callout-backdrop').removeClass('fade-in');
        setTimeout(function() {
            $('.callout-backdrop').remove();
        },.2);
    }

    //when button is clicked display callout
    $("[data-toggle='callout']").on("click", function() {
        displayCallout(this);
        removeScroll();
    })
    //when button is clicked add no scroll to body
    $('body').on('click', '[data-toggle="callout"]', function () {
        displayBD();
    })
    //when backdrop is clicked, close callout and remove class from body
    $('body').on('click', function () {
        addScroll();
        hideCallout();
        hideBD();
    })
    $('.callout').on('click', '[data-dismiss="callout"]', function () {
        addScroll();
        hideCallout();
        hideBD();
    })
    //clicking certain elements will not close modal
    $('body').on('click', '.callout, [data-toggle="callout"]', function(e){
        e.stopPropagation();
    });



      // // // //
     // alert //
    // // // //

    $('body').on('click','.alert .close-button', function() {
        $(this).closest('.alert').removeClass('active');
    })

      // // // //
     // lists //
    // // // //

    function selectListItem() {

    }

    $('body').on('click', '.list-item', function(){

    })

      // // // // //
     // nav-bar  //
    // // // // //

    // navbar menu toggling
    $(".nav-bar__menu-toggle").click(function(e){
        $(e.target).closest('.nav-bar').toggleClass("menu--open");
        $(e.target).closest('.nav-bar--solo').toggleClass("menu--open");
        $("body").toggleClass("nav-bar__menu--open");
    });

    // navbar appendage toggling
    $(".nav-bar__appendage-toggle").click(function(e){
        $(e.target).closest('.nav-bar').toggleClass("appendage--open");
        $(e.target).closest('.nav-bar--solo').toggleClass("appendage--open");
    });

      // // // // // // //
     // Selectize modz //
    // // // // // // //

    //clear value button
    $('.clear-selectize').on('click', function() {
        var $select = $(this).closest('.form-element').find('select').selectize();
        var control = $select[0].selectize;
        control.clear();
        $(this).closest('.selectize-wrap').find('.selectize-input').removeClass('has-items');
        $(this).closest('.selectize-wrap').find('.clear-selectize').removeClass('active');
    })


})