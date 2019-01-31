


let linkWithoutTitle = '<div class="link" id="showcase-link">OUR WORK</div><h1 id="placeholder-title">Displace Media</h1><div class="link" id="contact-link">CONTACT</div>'
let linkWithTitle = '<div class="link" id="showcase-link">OUR WORK</div><h1 class="link" id="title-link">Displace Media</h1><div class="link" id="contact-link">CONTACT</div>'
let above = true

let linkListener = () => {
    document.getElementById('showcase-link').addEventListener('click', ()=> {
        document.getElementById('showcase-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
    
    document.getElementById('contact-link').addEventListener('click', ()=> {
        document.getElementById('contact-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    if (!above) {
        document.getElementById('title-link').addEventListener('click', ()=> {
            document.getElementById('video-container').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

linkListener()


window.addEventListener('scroll', function(e) {
    videoContainerHalfHeight = document.getElementById('video-container').clientHeight/3.1
    windowHeight = window.scrollY
    if (videoContainerHalfHeight > windowHeight && above == false) {
        above = true
        removeTitle()
        linkListener()
    } else if (videoContainerHalfHeight < windowHeight && above == true){
        above = false
        addTitle()
        linkListener()
    }
})

let removeTitle = () => {
    if (above) {
        document.getElementById('link-container').innerHTML = linkWithoutTitle
    }
}

let addTitle = () => {
    if (!above) {
        document.getElementById('link-container').innerHTML = linkWithTitle
    }
}


L.mapbox.accessToken = 'pk.eyJ1Ijoia3RuZHduIiwiYSI6ImNqajZjeDQxczIybjIzcXBncXcwMGdycnUifQ.-1gqjlqOHsmFHwj0sfp68A'

let map = L.mapbox.map('map', 'mapbox.dark', {
    minZoom: 1,
    maxZoom: 20
}).setView([47.255, -122.44], 11)


L.marker([47.253, -122.44]).addTo(map)


