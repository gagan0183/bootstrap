$(document).ready(function() {
    $('#myDropDown').on('show.bs.dropdown', function() {
        console.log('opening dropdown');
    });
    $('#myDropDown').on('shown.bs.dropdown', function() {
        console.log('dropdown opened');
    });
    $('#myDropDown').on('hide.bs.dropdown', function() {
        console.log('hiding dropdown');
    });
    $('#myDropDown').on('hidden.bs.dropdown', function() {
        console.log('dropdown hidden');
    });
});