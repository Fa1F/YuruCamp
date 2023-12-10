const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// Buka link
function openKonten(event) {
    var id = $(event.target).data("id");
    window.open("http://127.0.0.1/projek/konten.html?id=" + id, "_self")
}

// Untuk footer
function handleImageEnter(event) {
    var name = $(event.target).data("name");
    $("#foot h2").text(name);
}

function handleImageLeave() {
    $("#foot h2").text("Where should I camp?");
}

$(document).ready(function () {

    // default
    $.get("campsite.js", function (data) {
        var responseData;
        if (typeof data === 'object') {
            // Data is already an object (possibly parsed), use it directly
            responseData = data;
        } else {
            // Parse the data if it's a string
            responseData = JSON.parse(data);
        }
        var imageLink = responseData.links;
        var imgName = responseData.names;
        var campID = responseData.ids;

        console.log(imageLink + "+" + imgName + "+" + campID);

        var imageTrack = $("#image-track");
        imageLink.forEach(function (link, index) {
            var img = $("<img>").addClass("image").attr("src", link).attr("draggable", "false").data("name", imgName[index]).data("id", campID[index]);
            imageTrack.append(img);
        });
        $("#image-track").on("mouseenter", ".image", handleImageEnter).on("mouseleave", ".image", handleImageLeave).on("click", ".image", openKonten);
    });
    //  pas pencet tombol search
    $('form').submit(function (event) {
        event.preventDefault(); // Biar gak di-refresh

        // Melakukan AJAX request
        $.get("campsite.js", { search: $('input[name="search"]').val() }, function (data) {
            var responseData;
            if (typeof data === 'object') {
                // Data is already an object (possibly parsed), use it directly
                responseData = data;
            } else {
                // Parse the data if it's a string
                responseData = JSON.parse(data);
            }
            var imageLinks = responseData.links;
            var imgNames = responseData.names;
            var campID = responseData.ids;

            var imageTrack = $("#image-track");
            imageTrack.empty(); // hapus gambar

            imageLinks.forEach(function (link, index) {
                var img = $("<img>").addClass("image").attr("src", link).attr("draggable", "false").data("name", imgNames[index]).data("id", campID[index]);
                imageTrack.append(img);
            });

            $("#image-track").on("mouseenter", ".image", handleImageEnter).on("mouseleave", ".image", handleImageLeave).on("click", ".image", openKonten);
        });
    });
});

