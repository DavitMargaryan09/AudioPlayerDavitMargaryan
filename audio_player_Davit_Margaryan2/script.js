const handle = document.querySelector('.handle');
    const fill = document.querySelector('.fill');
    const main = document.getElementById('main'); 
    let previousDuration = 0

let data = {
    title : [
        "Michael Jackson - Billie jean ", 
        "Eminem - Mockingbird", 
        "GTA IV Theme Song",
        "Modern Talking - Cheri Cheri Lady",
        "PSY - Gangnam Style",
        "Stromae - Alors on danse",
        "Jennifer Lopez - On The Floor",
        "XXXtentacion - Moonlight",
        "Eminem, Nate Dogg – 'Till I Collapse",
        "Doja Cat – Woman",
        "Michael Jackson - Smooth Criminal",
        "Aram mp3 - Not Alone"
    ],
    song : [
        "music/Michael Jackson - Billie Jean.mp3",
        "music/Eminem - Mockingbird.mp3",
        "music/GTA_IV-GTA_IV-world76.spcs.bio.mp3",
        "music/Modern Talking - Cheri Cheri Lady.mp3",
        "music/PSY - Gangnam Style.mp3",
        "music/Stromae - Alors on danse.mp3",
        "music/Jennifer Lopez - On The Floor.mp3",
        "music/XXXtentacion - Moonlight.mp3",
        "music/Eminem, Nate Dogg – 'Till I Collapse.mp3",
        "music/Doja Cat – Woman.mp3",
        "music/Michael Jackson - Smooth Criminal.mp3",
        "music/Aram mp3 - Not Alone.mp3"
    ],
    poster : [
        "https://hips.hearstapps.com/hmg-prod/images/michael-jackson-performs-in-concert-circa-1986-news-photo-1690832280.jpg?crop=0.694xw:1.00xh;0.117xw,0&resize=1200:*",
        "https://m.media-amazon.com/images/I/41cLDavIUTL._AC_UF894,1000_QL80_.jpg",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/12210/capsule_616x353.jpg?t=1695131205",
        "https://media0.giphy.com/media/tqfS3mgQU28ko/giphy.gif?cid=6c09b952y1qu3masu18qaqm6093uap198yocblgolo5qagdq&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://n1s2.hsmedia.ru/04/3a/7a/043a7a05c46ec85dcce4a861ed1d006f/1200x630_0xac120003_2985818291660227758.png",
        "https://i1.sndcdn.com/artworks-N4VzVPwHFSlKDij1-bcOJUg-t500x500.jpg",
        "https://phuketnews.phuketindex.com/wp-content/uploads/2011/03/27.jpg",
        "https://www.billboard.com/wp-content/uploads/media/XXXTENTACION-MOONLIGHT-2018-billboard-1548.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f8a240bb-b9ea-4c45-9f41-ac71cb09fe1a/d9gnm1p-d55d4473-5c09-466d-9278-94f3533a2216.jpg/v1/fill/w_1024,h_1409,q_75,strp/eminem_poster_art_by_kibgraphics_d9gnm1p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQwOSIsInBhdGgiOiJcL2ZcL2Y4YTI0MGJiLWI5ZWEtNGM0NS05ZjQxLWFjNzFjYjA5ZmUxYVwvZDlnbm0xcC1kNTVkNDQ3My01YzA5LTQ2NmQtOTI3OC05NGYzNTMzYTIyMTYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.n1ubTSx5h5EIwq2_tZOZaCZZam91vh1HhiQmdgKHnzo",
        "https://img.freepik.com/free-photo/abstract-watercolor-guitar-exploding-with-colorful-motion-generated-by-ai_188544-19725.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24945872-6dda-46ed-b196-b7ed15e09825/d37m1gs-d13c1c37-7369-47cc-896f-fd9a137a5990.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0OTQ1ODcyLTZkZGEtNDZlZC1iMTk2LWI3ZWQxNWUwOTgyNVwvZDM3bTFncy1kMTNjMWMzNy03MzY5LTQ3Y2MtODk2Zi1mZDlhMTM3YTU5OTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fwrOXL931c7rn3Hivnk4myMQmyM0-WXLXBMIKMXDKgA",
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Aram_Mp3%2C_ESC2014_Armenia_1st_press_conference_02.jpg"
    ]
}

let song = new Audio()
window.onload = function() {
    playSong()
}

let currentSong = 0
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] +")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] +")"
    song.play()
}

function playOrPauseSong() {
    let play = document.getElementById("play")

    if(song.paused) {
        song.play()
        play.src = "images/pause.png"
    }else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}


song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")

        let position = song.currentTime/song.duration
    fill[0].style.marginLeft = position *  99 + "%"

    convertTime(Math.round(song.currentTime))


    if(song.ended) {
        next()
    }
})

function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")
    

    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)


    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent = min + ":" + sec
    // if(sec < 10) {
    //     "0" + sec
    // } else {
    //     sec
    // }

    totalTime(Math.floor(song.duration))
}


function totalTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")
    
    if(!isNaN(song.duration)) {
        previousDuration = song.duration
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)


    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    
    currentTime[0].textContent += " / " + min + ":" + sec
    
        
    }

    if(isNaN(song.duration)) {
        
    let min = Math.floor(previousDuration/60)
    let sec = Math.floor(previousDuration%60)


    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    
    currentTime[0].textContent += " / " + min + ":" + sec
    
        
    }
}


function prev() {
    currentSong--
    let play = document.getElementById("play")
    if(currentSong < 0) {
        currentSong = data.song.length - 1
        
    }

    playSong()
    play.src = "images/pause.png"
}

function next() {
    currentSong++
    let play = document.getElementById("play")
    if(currentSong > data.song.length - 1) {
        currentSong = 0
        
    }

    playSong()
    play.src = "images/pause.png"
}

function mute() {
    let mute = document.getElementById("mute")

    if(song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    }else {
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
     
}

function decrease() {
    let mute = document.getElementById("mute")
    song.volume -= 0.2

    if(song.volume <= 0.1) {
        mute.src = "images/volume-mute.png"
    } 
}

function increase() {
    let mute = document.getElementById("mute")
    song.volume += 0.2

    if(song.volume > 0.1) {
        mute.src = "images/volume.png"
    }
}


function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = song.duration;
  
    song.currentTime = (clickX / width) * duration;
  }
   

handle.addEventListener('click', setProgress);


