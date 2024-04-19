$('form.ajax').submit(function(evento){
    evento.preventDefault();
        console.log(evento);
        console.log($(this));
});





$.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/alvaromenar@gmail.com',
    dataType: 'json',
    accepts: 'application/json',
    data: {
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    },
    success: (data) => console.log(data),
    error: (err) => console.log(err)
});