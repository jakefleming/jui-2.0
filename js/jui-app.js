(function ( $ ) {

//handle touch
$.fn.click = function(listener) {
    return this.each(function() {

        var $this = $( this );

        $this.on('vclick', listener);
    });
};

$(document).ready(function() {

      // // // // // // //
     // Dropdown menus //
    // // // // // // //

    //find closest dropdown menu and add class open, while also removing open from other dropdowns
    function openDropdown(clickedElement) {
        var currentDropdownMenu = $(clickedElement).closest('.button-group').find('.dropdown-box');
        //console.log(clickedElement);
        $(clickedElement).closest('.button-group').find('.dropdown-box').toggleClass('dropdown-box--active');
        $('.dropdown-box.active').not(currentDropdownMenu).removeClass('dropdown-box--active');
    }
    //close dropdown
    function closeDropdown(clickedElement) {
        //console.log(clickedElement);
        $('.dropdown-box').removeClass('dropdown-box--active');
    }
    //when dropdown button is clicked toggle dropdown
    $('[data-toggle="dropdown"]').on('click', function( e ) {
        e.stopPropagation();
        closeDropdown();
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
        $('#' + id).addClass('callout-is-active');
    }
    //hide Callout
    function hideCallout() {
        $('.callout-stage.callout-is-active').removeClass('callout-is-active');
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
    });
    //when button is clicked add no scroll to body
    $('body').on('click', '[data-toggle="callout"]', function () {
        displayBD();
    });
    //when backdrop is clicked, close callout and remove class from body
    $('body').on('click', function () {
        addScroll();
        hideCallout();
        hideBD();
    });
    $('.callout').on('click', '[data-dismiss="callout"]', function () {
        addScroll();
        hideCallout();
        hideBD();
    });
    //clicking certain elements will not close modal
    $('body').on('click', '.callout, [data-toggle="callout"]', function(e){
        e.stopPropagation();
    });



      // // // //
     // alert //
    // // // //

    $('body').on('click','.alert .alert__close-button', function() {
        $(this).closest('.alert').removeClass('alert--active');
    });

      // // // //
     // lists //
    // // // //

    function selectListItem() {

    }

    $('body').on('click', '.list-item', function(){

    });

      // // // // //
     // nav-bar  //
    // // // // //

    // navbar menu toggling
    $("body").on('click', '.nav-bar__menu-toggle', function(e){
        $(e.target).closest('.nav-bar').toggleClass("menu-is-open");
        $("body").toggleClass("nav-bar__menu--open");
        $(this).toggleClass('nav-bar__action--active');
    });

    // navbar appendage toggling
    $("body").on('click', '.nav-bar__appendage-toggle', function(e){
        $(e.target).closest('.nav-bar').toggleClass("appendage-is-open");
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
        $(this).closest('.selectize-wrap').find('.clear-selectize').removeClass('clear-selectize--active');
    });


      // // // // //
     // Drawers  //
    // // // // //

    //Open Drawer
    function openDrawer(t) {
        var id = $(t).attr('data-target');
        $('#' + id).toggleClass('drawer--active');
    }
    //Close Drawer
    function closeDrawer() {
        $('.drawer.drawer--active').removeClass('drawer--active');
    }

    //when button is clicked open Drawer
    $("[data-toggle='drawer']").on("click", function() {
        openDrawer(this);
    });

    //when backdrop is clicked, close callout and remove class from body
    //$('body').on('click', function () {
    //    closeDrawer();
    //});
    $('.drawer').on('click', '[data-dismiss="drawer"]', function () {
        closeDrawer();
    });
    //clicking certain elements will not close modal
    $('body').on('click', '.drawer, [data-toggle="drawer"]', function(e){
        e.stopPropagation();
    });

    //nav drawer
    $('body').on('click', '.nav-bar__drawer-toggle', function(){
        $(this).closest('.nav-bar').find('.nav-bar__drawer').toggleClass('nav-bar__drawer--active');
        $(this).toggleClass('nav-bar__action--active');
    })

    $('body').on('click', '.nav-bar__action', function(){
        $(this).toggleClass('nav-bar__action--active');
    })


});
}( jQuery ));