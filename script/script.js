window.addEventListener('DOMContentLoaded', () => {
    $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            const mes = document.querySelector('#send-message');
            mes.style.opacity = "1";
		});
		return false;
	});
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
    const about = document.querySelector('.header__wrapper-about');
    const aboutRespons = document.querySelectorAll('.header__wrapper-about_respons');
    const btnMore = document.querySelector('.btn');
    const more = document.querySelector(".header__wrapper-more");
    const moreTitle = document.querySelector('.header__wrapper-more_title');
    const moreTel = document.querySelector('.header__wrapper-more_tel');

    const numbers = ["8-927-952-41-73 (Ксения)", "8-987-582-82-90 (Екатерина)"];

    mainItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            moreTitle.textContent = `"${mainItem[i].textContent}"`
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
            btnMore.addEventListener('click', () => {
                about.style.opacity = '0';
                if (i < 4) {
                    moreTel.textContent = numbers[0];
                    moreTel.setAttribute('href', "tel:89279524173")
                } else {
                    moreTel.textContent = numbers[1];
                    moreTel.setAttribute('href', "tel:89875828290")
                }
                setTimeout(() => {
                    about.style.display = "none";
                    more.style.display = "block";
                    more.style.opacity = '1';
                }, 1000);
            });
        });
    });
    $("#tel").inputmask("+7 (999) 999-9999");  
});