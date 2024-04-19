//Codigo AJAX

$('form.ajax').submit(function(evento){
    evento.preventDefault();
        console.log(evento);
        console.log($(this));

let objectForm = $(this),
sendMethod = objectForm.attr('method'),
sendUrl = objectForm.attr('action'),
sendData = {};

objectForm.find("[name]").each(function(index, formItem){
console.log(index, formItem);

let item = $(this),
name = item.attr('name'),
nameValue = item.val();

sendData[name] = nameValue;

});

console.log(sendData);


$.ajax({
    method: sendMethod,
    url: sendUrl,
    dataType: 'json',
    accepts: 'application/json',
    data: sendData,
    success: (data) => console.log(data),
    error: (err) => console.log(err)
});


});





