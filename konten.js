// load konten
const jsonData = `{
    "campsite_en": [
      {
        "id": 1,
        "name": "Lake Myvatn, Northern Iceland",
        "coor": "https://www.google.com/maps/place/65.60%C2%B0N,16.99%C2%B0W",
        "img1": "https://images.unsplash.com/photo-1655536103884-206fc6837a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1664264757075-4f793ddb16e3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img3": "https://images.unsplash.com/photo-1523833880474-ff8e11a7ddb2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img4": "https://images.unsplash.com/photo-1653506521638-b079eff2b43a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Lake Myvatn Campsite",
        "hal1par1" : "Nestled in the breathtaking landscapes of northern Iceland, Lake Myvatn Campsite offers a unique camping experience at the edge of the stunning Lake Myvatn.",
        "hal1par2" : "Immerse yourself in the tranquility of nature, surrounded by geothermal wonders and volcanic landscapes.",
        "hal1par3" : "Choose from a variety of accommodation options, including spacious tent sites, cozy cabins, and RV hookups.",
        "hal1par4" : "Join us for special events like stargazing nights and guided nature walks. Your adventure at Lake Myvatn begins here!",
        "hal2par1" : "Explore our modern amenities designed to enhance your camping experience! From well-maintained camping areas to clean restrooms and hot showers, we have got you covered.",
        "hal2par2" : "Enjoy the warmth of a campfire in our designated fire pit area or relax at our picnic spots with panoramic views of Lake Myvatn.",
        "hal2par3" : "For the active camper, we offer hiking trails and easy access to bird-watching sites, showcasing the rich biodiversity of the area.",
        "hal2par4" : "Pet-friendly policies ensure that your furry companions can join in the adventure.",
        "hal3par1" : "Our pricing is tailored to meet the needs of every adventurer. Whether you prefer traditional tent camping, the comfort of a cabin, or the convenience of an RV hookup, we have options for all budgets.",
        "hal3par2" : "Check our website for the latest promotions and seasonal discounts. Reservations are easy and can be made online, ensuring a hassle-free planning process. ",
        "hal3par3" : "Standard check-in time is at 2:00 PM, and check-out is at 11:00 AM. We accept various payment methods for your convenience.",
        "hal3par4" : " ",
        "hal4par1" : "To make the most of your stay, familiarize yourself with our campsite rules and regulations outlined on our website.",
        "hal4par2" : "Pack accordingly for the Icelandic weather—layers, waterproof gear, and sturdy hiking boots are recommended.",
        "hal4par3" : "Explore the nearby Myvatn Nature Baths, Húsavík Whale Watching tours, and the iconic Hverfjall volcano.",
        "hal4par4" : "Contact us for any inquiries or assistance. Join our community on social media to share your Lake Myvatn adventures with fellow campers."
  
      },
      {
        "id": 2,
        "name": "Connemara National Park, Western Ireland",
        "coor": "https://www.google.com/maps/place/53.5384°N,9.8875°W",
        "img1": "https://images.unsplash.com/photo-1564387069416-d5fd75986a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1516395268396-710c728531c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img3": "https://images.unsplash.com/photo-1611622556084-26706c539a45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img4": "https://images.unsplash.com/photo-1574371198474-db857f159f10?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Connemara Wilderness Camp",
        "hal1par1" : "Discover the unspoiled beauty of Connemara at our Wilderness Camp, nestled in the heart of West Coast of Ireland.",
        "hal1par2" : "Surrounded by rugged landscapes, pristine lakes, and the awe-inspiring Twelve Bens mountain range, Connemara Wilderness Camp offers a true escape into nature.",
        "hal1par3" : "Camp under the starlit skies in your own tent, or choose a cozy cabin for a more comfortable retreat. Our camp is the perfect starting point for exploring the untamed wilderness of Connemara.",
        "hal1par4" : " ",
        "hal2par1" : "Experience the charm of Connemara with our well-equipped facilities. Enjoy spacious camping areas with easy access to clean and modern restroom facilities.",
        "hal2par2" : "Immerse yourself in the natural surroundings with hiking trails and birdwatching spots throughout the campsite.",
        "hal2par3" : "Relax by the communal campfire, share stories with fellow campers, or unwind at our designated picnic areas.",
        "hal2par4" : "Our pet-friendly policy ensures that your four-legged companions can accompany you on your Connemara adventure.",
        "hal3par1" : "At Connemara Wilderness Camp, we offer a range of accommodation options to suit every budget. Choose from traditional tent camping, charming cabins, or RV hookups.",
        "hal3par2" : "Check our website for seasonal promotions and exclusive discounts. Booking is simple and can be done online, allowing you to secure your spot amidst Connemara's natural wonders.",
        "hal3par3" : "Standard check-in is at 3:00 PM, and check-out is at 12:00 PM local time. We accept various payment methods for your convenience.",
        "hal3par4" : " ",
        "hal4par1" : "Familiarize yourself with our campsite guidelines, ensuring a respectful and enjoyable stay for all campers.",
        "hal4par2" : "Pack for the Irish weather—waterproof clothing, sturdy boots, and layers are recommended for exploring Connemara's diverse landscapes.",
        "hal4par3" : "Discover nearby attractions, including Kylemore Abbey, Connemara National Park, and the picturesque Clifden town.",
        "hal4par4" : " "
      },
      {
        "id": 3,
        "name": "Dartmoor National Park, Soutwest England",
        "coor": "https://www.google.com/maps/place/50.5719°N,3.9207°W",
        "img1": "https://images.unsplash.com/photo-1620841611656-0cd634390d48?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1622979358300-68884045fa62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img3": "https://images.unsplash.com/photo-1604590627104-655d2be93b23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img4": "https://images.unsplash.com/photo-1579462946810-a0a301632793?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Devon Adventure Camp",
        "hal1par1" : "Embrace the beauty of the English countryside at Devon Adventure Camp, located in the heart of the picturesque county of Devon.",
        "hal1par2" : "Surrounded by rolling hills, charming villages, and the stunning coastline, our campsite provides a perfect retreat for nature enthusiasts and adventure seekers alike.",
        "hal1par3" : "Whether you are pitching your tent or opting for a cozy cabin, Devon Adventure Camp offers a gateway to explore the diverse landscapes and rich heritage of Devon.",
        "hal1par4" : " ",
        "hal2par1" : "Enjoy modern amenities in the heart of nature. Our spacious camping areas come equipped with well-maintained restrooms and hot showers.",
        "hal2par2" : "Dive into adventure with on-site activities, including hiking trails, a climbing wall, and outdoor recreation areas.",
        "hal2par3" : "Gather around the communal campfire for evening storytelling or relax at our designated picnic spots with panoramic views of the Devon countryside.",
        "hal2par4" : "Pets are welcome, and we offer pet-friendly areas for the enjoyment of all our visitors.",
        "hal3par1" : "Devon Adventure Camp caters to all budgets with a range of accommodation options, from traditional tent camping to comfortable cabins and RV hookups.",
        "hal3par2" : "Visit our website for exclusive promotions and seasonal discounts. Secure your spot easily with our online booking system, designed for a seamless reservation process.",
        "hal3par3" : "Check-in starts at 2:00 PM, and check-out is at 11:00 AM local time. Various payment methods are accepted for your convenience.",
        "hal3par4" : " ",
        "hal4par1" : "Familiarize yourself with our campsite guidelines, ensuring a respectful and enjoyable stay for all campers.",
        "hal4par2" : "Pack for the English weather—layers, waterproof gear, and comfortable shoes are recommended for exploring Devon's diverse landscapes.",
        "hal4par3" : "Explore nearby attractions, including Dartmoor National Park, the historic town of Totnes, and the scenic South West Coast Path.",
        "hal4par4" : " "

      }
    ]
  }`;

function fetchArticle(id) {
    try {
        const data = JSON.parse(jsonData).campsite_en.find(campsite => campsite.id === id);

        console.log("Received data:", data);

        var hal1par1 = data.hal1par1;
        var hal1par2 = data.hal1par2;
        var hal1par3 = data.hal1par3;
        var hal1par4 = data.hal1par4;
        var hal2par1 = data.hal2par1;
        var hal2par2 = data.hal2par2;
        var hal2par3 = data.hal2par3;
        var hal2par4 = data.hal2par4;
        var hal3par1 = data.hal3par1;
        var hal3par2 = data.hal3par2;
        var hal3par3 = data.hal3par3;
        var hal3par4 = data.hal3par4;
        var hal4par1 = data.hal4par1;
        var hal4par2 = data.hal4par2;
        var hal4par3 = data.hal4par3;
        var hal4par4 = data.hal4par4;

        $('#artikel1').html(hal1par1 + '<br><br>' + hal1par2 + '<br><br>' + hal1par3 + '<br><br>' + hal1par4);
        $('#artikel2').html(hal2par1 + '<br><br>' + hal2par2 + '<br><br>' + hal2par3 + '<br><br>' + hal2par4);
        $('#artikel3').html(hal3par1 + '<br><br>' + hal3par2 + '<br><br>' + hal3par3 + '<br><br>' + hal3par4);
        $('#artikel4').html(hal4par1 + '<br><br>' + hal4par2 + '<br><br>' + hal4par3 + '<br><br>' + hal4par4);
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
}

function fetchCampTable(id) {
    var camp = jsonData.campsite_en.find(campsite => campsite.id === id);
    var judul = camp.title;
    var koor = camp.coor;
    var gambar1 = camp.img1;
    var gambar2 = camp.img2;
    var gambar3 = camp.img3;
    var gambar4 = camp.img4;

    $('#title').text("WELCOME TO " + judul);
    $('#koordinat').attr('href', koor);
    $("#pic1").css("background-image", "url('" + gambar1 + "')");
    $("#pic2").css("background-image", "url('" + gambar2 + "')");
    $("#pic3").css("background-image", "url('" + gambar3 + "')");
    $("#pic4").css("background-image", "url('" + gambar4 + "')");
    $("#book").attr('href', "https://fa1f.github.io/YuruCamp/book.html?id=" + id);
}

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetchCampTable(id);
    fetchArticle(id);
})

/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {
    nav.dataset.transitionable = "true";

    nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
    nav.dataset.transitionable = "false";

    nav.dataset.toggled = "false";
};