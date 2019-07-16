//$.getJSON (
//    'https://api.myjson.com/bins/jcmhn',
//    function(data){
//        console.log(data);
//    }
//);

function render(data) {
    for (i in data.text) {
        let text = data.text[i].replace(/{/g, '<span>');
        text = text.replace(/}/g, '</span>');
        const story = `<p>${text}</p>`;
        const $story = $(story);
        $story.appendTo($('.story'));
    }
};

$('#get').click(function(){
    $('.story').html('');
    $.getJSON (
        'https://api.myjson.com/bins/jcmhn',
        function(data){
            console.log(data);
            render(data);
        })
    }
);

$('#replace').click(function(){
    var dict = {};
    dict.var1 = $('#var1').val();
    dict.var2 = $('#var2').val();
    dict.var3 = $('#var3').val();
    dict.var4 = $('#var4').val();
    dict.var5 = $('#var5').val();
    dict.var6 = $('#var6').val();
    dict.speach = $('#speach').val();
    const span = $('span');
    for (let i = 0; i < span.length; i++){
        console.log(span[i].innerHTML, dict[span[i].innerHTML]);
    };
    for (let i = 0; i < span.length; i++){
        span[i].innerHTML = dict[span[i].innerHTML];
    };
});

