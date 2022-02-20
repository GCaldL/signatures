function generateTemplate(name, role, wp, mp, em, site, address) {
    
}

console.log("test")

$.get('templates/layout.html', function(data) {
    console.log(data);
}, 'text');

//I can't be effed checking specific el for update, just update the freaking thing regardless :)
$("*").on('change keyup paste', function () {
    console.log("updateform");
});