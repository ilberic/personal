window.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.header__wrapper-logo');
    const main = document.querySelector('.header__wrapper-main');
    const workerImage = document.querySelector('.header__wrapper-image img');
    const logoDescr = document.querySelector('.header__wrapper-logo_descr');
    setTimeout(() => {
        logo.style.top = "-70px";
        logoDescr.style.right = "100%";
        main.style.opacity = "1";
    }, 1000);

    const mainItem = document.querySelectorAll(".header__wrapper-main_wrapper-item");

    // mainItem.forEach((item, i) => {
    //     item.addEventListener('mouseover', () => {
    //         workerImage.style.opacity = "0";
    //         setTimeout(() => {
    //             workerImage.style.opacity = "1";
    //             workerImage.setAttribute('src', `img/${i+1}.png`);
    //         }, 1000);

    //     });
    // });

    const about = document.querySelector('.header__wrapper-about');
    const aboutRespons = document.querySelectorAll('.header__wrapper-about_respons');

    mainItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            workerImage.style.opacity = "0";
            main.style.opacity =  "0";
            setTimeout(() => {
                workerImage.style.opacity = "1";
                workerImage.setAttribute('src', `img/${i+1}.png`);
                main.style.display = "none";
                about.style.display = "block";
                about.style.opacity = "1";
                aboutRespons[i].style.display = "block";
                aboutRespons[i].style.opacity = "1";
            }, 1000);
        });
    });



});