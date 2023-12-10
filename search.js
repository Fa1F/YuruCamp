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

const jsonData = `{
    "campsite_en": [
      {
        "id": 1,
        "name": "Lake Myvatn, Northern Iceland",
        "coor": "https://www.google.com/maps/place/65.60",
        "img1": "https://images.unsplash.com/photo-1655536103884-206fc6837a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1664264757075-4f793ddb16e3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img3": "https://images.unsplash.com/photo-1523833880474-ff8e11a7ddb2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img4": "https://images.unsplash.com/photo-1653506521638-b079eff2b43a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Lake Myvatn Campsite"
      },
      {
        "id": 2,
        "name": "Connemara National Park, Western Ireland",
        "coor": "https://www.google.com/maps/place/53.5384°N,9.8875°W",
        "img1": "https://images.unsplash.com/photo-1564387069416-d5fd75986a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1516395268396-710c728531c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img3": "https://images.unsplash.com/photo-1611622556084-26706c539a45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img4": "https://images.unsplash.com/photo-1574371198474-db857f159f10?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Connemara Wilderness Camp"
      },
      {
        "id": 3,
        "name": "Dartmoor National Park, Soutwest England",
        "coor": "https://www.google.com/maps/place/50.5719°N,3.9207°W",
        "img1": "https://images.unsplash.com/photo-1620841611656-0cd634390d48?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1622979358300-68884045fa62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img3": "https://images.unsplash.com/photo-1604590627104-655d2be93b23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img4": "https://images.unsplash.com/photo-1579462946810-a0a301632793?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Devon Adventure Camp"
      }
    ]
  }`;

$(document).ready(function () {

    // default
    var responseData = JSON.parse(jsonData);

    var imageLinks = responseData.campsite_en.map(campsite => campsite.img1);
    var imgNames = responseData.campsite_en.map(campsite => campsite.name);
    var campID = responseData.campsite_en.map(campsite => campsite.id);

    console.log(imageLinks + "+" + imgNames + "+" + campID);

    var imageTrack = $("#image-track");
    imageLinks.forEach(function (link, index) {
        var img = $("<img>").addClass("image").attr("src", link).attr("draggable", "false").data("name", imgNames[index]).data("id", campID[index]);
        imageTrack.append(img);
    });
    $("#image-track").on("mouseenter", ".image", handleImageEnter).on("mouseleave", ".image", handleImageLeave).on("click", ".image", openKonten);

    //  pas pencet tombol search
    $('form').submit(function (event) {
        event.preventDefault(); // Biar gak di-refresh

        var searchQuery = $('input[name="search"]').val().toLowerCase();
        var filteredData = responseData.campsite_en.filter(campsite => campsite.name.toLowerCase().includes(searchQuery));

        var filteredImageLinks = filteredData.map(campsite => campsite.img1);
        var filteredImgNames = filteredData.map(campsite => campsite.name);
        var filteredCampID = filteredData.map(campsite => campsite.id);

        var imageTrack = $("#image-track");
        imageTrack.empty(); // hapus gambar

        filteredImageLinks.forEach(function (link, index) {
            var img = $("<img>").addClass("image").attr("src", link).attr("draggable", "false").data("name", filteredImgNames[index]).data("id", filteredCampID[index]);
            imageTrack.append(img);
        });

        $("#image-track").on("mouseenter", ".image", handleImageEnter).on("mouseleave", ".image", handleImageLeave).on("click", ".image", openKonten);
    });
});


