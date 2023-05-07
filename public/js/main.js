document.addEventListener("DOMContentLoaded", () => {
    let mapsBtn = document.querySelectorAll(".maps-btn")
    let mapsIcon = document.querySelectorAll(".maps-icon")
    for(let i = 0; i < mapsBtn.length; i++){
        mapsBtn[i].addEventListener("click", () => {
            for(let k = 0; k < mapsBtn.length; k++){
                mapsBtn[k].classList.remove("active")
            }
            mapsBtn[i].classList.add("active")
            let view = mapsBtn[i].dataset.maps;
            for(let j = 0; j < mapsIcon.length; j++){
                if(mapsIcon[j].dataset.icon == view){
                    mapsIcon[j].classList.add("active")
                }
                else{
                    mapsIcon[j].classList.remove("active")
                }
            }
        })
    }
    let swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".my-swiper-button-next",
          prevEl: ".my-swiper-button-prev",
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            // when window width is >= 320px
            0: {
              slidesPerView: 1.24,
              spaceBetween: 20
            },
            // when window width is >= 480px
            550: {
              slidesPerView: 2.4,
              spaceBetween: 30
            },
            // when window width is >= 640px
            990: {
              slidesPerView: 3.7,
              spaceBetween: 150
            }
          }
      });
  
})