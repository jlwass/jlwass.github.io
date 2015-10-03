

var displayPhotos = function(handle){
        $("#photo-list").empty();
        $.ajax({
            url: "https://api.instagram.com/v1/users/983750504/media/recent/?client_id=96595184ea8548c8b33f3ea59c7edcda",
            method: "GET",
            dataType: "jsonp",
            error: function(jqXHR, textStatus, errorThrown) {
                // FIXME: Display an error on the page.
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            },
            success: function(data){
                console.log(data);
            	var photoData = data.data;
                for(var i = 0; i < 6; i++){
                    var photo = photoData[i];
                    $("#photo-list").append($("<div class=col-md-2><a href='" + photo.link + "'><img src='" + photo.images.thumbnail.url + "'></a></div>"));
                    console.log(photo.images.standard_resolution.url);
                }
            }
        })
    }
var displayUserRepo = function(handle){
    $("#repo-list").empty();
    $.ajax({
        url: "https://api.github.com/users/jlwass/repos",
        method: "GET",
        dataType: "json",
        error: function(jqXHR, textStatus, errorThrown) {
            // FIXME: Display an error on the page.
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function(data){
            console.log(data);
            for(var i = 0; i < data.length; i++){
                var repo = data[i];
                $("#repo-list").append($("<li><a href='" + repo.html_url + "'>" + repo.name + "</a></li>"));
            }
        }
    })
}