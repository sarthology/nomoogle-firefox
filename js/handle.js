browser.tabs.query({
    'active': true,
    'lastFocusedWindow': true,
}, function (tabs) {
    browser.runtime.sendMessage(tabs[0], function (response) {
        if (response) {
            renderTitle(response.title);
            renderData(response.data);
        }
    });
});


function renderData(data) {

    var template = $('#handlebars-alternative').html();

    var context = {
        data: data
    };

    var templateScript = Handlebars.compile(template);

    var html = templateScript(context);

    $(".alternatives").append(html);
    $(".alternative").click(function (e) { 
        browser.tabs.create({
            url: e.currentTarget.attributes["data-link"].nodeValue
        });
    });
}

function renderTitle(data) {

    var template = $('#handlebars-title').html();

    var context = {
        title: data
    };

    var templateScript = Handlebars.compile(template);

    var html = templateScript(context);

    $(".message").html(html);
}