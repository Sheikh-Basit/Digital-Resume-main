window.addEventListener("load", function () {
    let btn = document.querySelectorAll('button');
    let main_nav = document.getElementById('header-mainAB');
    let mobile_nav = document.querySelector('.mobile-nav');
    let tooglenavbar = document.getElementById('tooglenavbar');
    let nav = document.querySelector('#navmenulist')                    // header menu ul
    let menu = document.getElementsByClassName('navlist');            // header menu li
    let main = document.querySelector('main');                      // main
    let portfolio_pointer = document.getElementsByClassName('portfolio-pointer') // portfolio row top list
    let brand = document.getElementsByClassName('brand')            // portfolio row  content brand
    let design = document.getElementsByClassName('design')            // portfolio row  content design
    let graphic = document.getElementsByClassName('graphic')            // portfolio row  content graphic
    let portfolio_item = document.querySelectorAll('.portfolio-items figure')      // portfolio items 
    let portfolio_item_h4 = document.querySelectorAll('.portfolio-items figure figcaption h4')      // portfolio items h4
    let portfolio_item_figure = document.querySelectorAll('.portfolio-items figure')      // portfolio items figure
    let portfolio_item_p = document.querySelectorAll('.portfolio-items figure figcaption p')      // portfolio items p
    let portfolio_doc_link = document.querySelectorAll('.portfolio-doc-link figure')       // portfolio items (class doc)
    let ptfdoc = document.getElementById('ptfdoc')             // portfolio document popup page
    let cancelbtn = document.querySelector('#cancelbtn i')    // portfolio document cancel button
    let blog_item = document.getElementsByClassName('blog-item')     // blog-item
    let blog_img = document.getElementsByClassName('blog-image')     //  blog-image
    let blog_detail = document.getElementById('Blog-Detail')         //blog-detail section
    let input_feild = document.getElementsByClassName('input-feild')   // contact table input feild
    let input_label = document.getElementsByClassName('input-label')   // contact table input label
    let current_page;
    let currentIndexC = 0;
    let currentIndexT = 0;
    main.children[0].classList.add('active-page');

    // button
    for (let butt = 0; butt < btn.length; butt++) {
        btn[butt].addEventListener('mouseover', function () {
            btn[butt].style.setProperty('--btn-opacity', '1')
            btn[butt].style.setProperty('--btn-width', '100%')

        })
        btn[butt].addEventListener('mouseout', function () {
            btn[butt].style.setProperty('--btn-opacity', '0')
            btn[butt].style.setProperty('--btn-width', '35%')
        })
    }

    // theme menu
    let theme_option = document.getElementById('theme-option');
    let toggle = document.getElementById('toggle-btn');
    let colors = document.getElementsByClassName('COLORS');
    let changecolor = document.querySelectorAll('.changecolor');
    theme_option.style.right = '-180px';
    toggle.addEventListener('click', function () {
        if (theme_option.style.right === '-180px') {
            theme_option.style.right = '0px';
        } else {
            theme_option.style.right = '-180px';
        }
    });

    // changing colors

    for (let c = 0; c < colors.length; c++) {           // class color loop
        colors[c].addEventListener('click', function () {
            for (let co = 0; co < changecolor.length; co++) {        //class changecolor loop
                if (c == 0) {
                    changecolor[co].style.setProperty('--changecolor', '#00A3E1');
                }
                if (c == 1) {
                    changecolor[co].style.setProperty('--changecolor', '#E82A2A');
                }
                if (c == 2) {
                    changecolor[co].style.setProperty('--changecolor', '#6ac045');
                }
                if (c == 3) {
                    changecolor[co].style.setProperty('--changecolor', '#D1A71D');
                }
                if (c == 4) {
                    changecolor[co].style.setProperty('--changecolor', '#FF1493');
                }
                if (c == 5) {
                    changecolor[co].style.setProperty('--changecolor', '#5078FF');
                }
            }
        })
    }


    // navigation menu items

    tooglenavbar.addEventListener('click', function () {
        main_nav.classList.toggle('active');
    });


    for (let i = 0; i < menu.length; i++) {

        menu[i].addEventListener('click', function () {
            current_page = i;

            for (var j = 0; j < menu.length; j++) {
                menu[j].classList.remove('active-page')
                main.children[j].classList.remove('active-page')
                blog_detail.classList.remove('active-page')

            }
            menu[current_page].classList.add('active-page')
            main.children[current_page].classList.add('active-page')


        })

    }
    // Home

    const h3span = document.querySelector(".homecontent h3 span");
    const array = ["Freelancer", "Web Developer", "UI/UX Designer", "Graphic Designer"];
    let currentSpanIndex = 0;

    function displayLetterByLetter() {
        let span = array[currentSpanIndex];
        let counter = 0;

        function showLetter() {
            if (counter < span.length) {
                h3span.innerHTML = span.substring(0, counter + 1);
                counter++;
                setTimeout(showLetter, 150);  // Speed of showing letters
            } else {
                setTimeout(hideLetterByLetter, 1000); // Gap before starting to hide letters
            }
        };

        showLetter();

        function hideLetterByLetter() {
            function hideLetter() {
                if (span.length > 0) {
                    span = span.slice(0, -1);
                    h3span.innerHTML = span;
                    setTimeout(hideLetter, 150);  // Speed of hiding letters
                } else {
                    setTimeout(() => {
                        currentSpanIndex = (currentSpanIndex + 1) % array.length;
                        displayLetterByLetter();
                    }, 150);  // Gap between hiding one span and displaying next span
                }
            }

            hideLetter();
        }
    }

    // Initialize
    displayLetterByLetter();





    // About Me

    // Client Slider

    let client_slider = document.querySelector("#slider .client");
    let client_slides = document.querySelectorAll(".client-item");
    let client_slideWidth = client_slides[0].offsetWidth;
    let client_slideCount = client_slides.length;
    let client_sliderWidth = client_slideCount * client_slideWidth;

    client_slider.style.width = client_sliderWidth + "px";

    setInterval(() => {
        client_slider.style.transition = "left 600ms";
        client_slider.style.left = -client_slideWidth + "px";

        setTimeout(function () {
            client_slider.style.transition = "none"; // Remove transition
            client_slider.appendChild(client_slider.firstElementChild); // Move the first slide to the end
            client_slider.style.left = 0; // Reset slider position
        }, 600);
    }, 3000);




    // Testimonial Slider

    let testimonial_slider = document.querySelector("#slider .testimonial");
    let testimonial_slides = document.querySelectorAll(".testimonial-items");
    let testimonial_slideWidth = testimonial_slides[0].offsetWidth;
    let testimonial_slideCount = testimonial_slides.length;
    let testimonial_sliderWidth = testimonial_slideCount * testimonial_slideWidth;
    let left = 0;

    function myFunction(x) {
        if (x.matches) { // If media query matches
            testimonial_slider.style.width = "300%";
            left = 100;
        } else {
            testimonial_slider.style.width = "150%";
            left = 50;
        }
    }

    let x = window.matchMedia("(max-width: 800px)")
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction)// Attach listener function on state changes

    setInterval(() => {
        testimonial_slider.style.transition = "left 600ms";
        // testimonial_slider.style.left = -testimonial_slideWidth + "px";
        testimonial_slider.style.left = -left + "%";

        setTimeout(function () {
            testimonial_slider.style.transition = "none"; // Remove transition
            testimonial_slider.appendChild(testimonial_slider.firstElementChild); // Move the first slide to the end
            testimonial_slider.style.left = 0; // Reset slider position
        }, 600);

    }, 3000);








    // Portfolio

    //  ------------------  Portfolio items hovering  -------------------------
    for (let i = 0; i < portfolio_item.length; i++) {
        portfolio_item[i].addEventListener('mouseenter', function () {
            portfolio_item_h4[i].style.transition = `transform 0.4s ease`
            portfolio_item_h4[i].style.transform = `translateY(0px)`;
            portfolio_item_h4[i].style.opacity = '1';       // h4 tag opacity
            portfolio_item_p[i].style.opacity = '1';        // p tag opacity
            portfolio_item_p[i].style.transition = `transform 0.4s ease`
            portfolio_item_p[i].style.transform = `translateY(0px)`;
            // portfolio_item_figure[i].style.setProperty('--transition', 'all 0.3s ease');
            // portfolio_item_figure[i].style.setProperty('--after-transform', 'translateX(0px)');
            // portfolio_item_figure[i].style.setProperty('--after-opacity', '1');       // set opacity of after pseudo selector of figure in portfolio class
            // portfolio_item_figure[i].style.setProperty('--before-opacity', '0.7');      // set opacity of before pseudo selector of figure in portfolio class

        })
        portfolio_item[i].addEventListener('mouseleave', function () {
            portfolio_item_h4[i].style.transition = `all 0.2s ease`
            portfolio_item_h4[i].style.transform = `translateY(-50px)`;
            if (portfolio_item_h4[i].style.transform = `translateY(-50px)`) {
                portfolio_item_h4[i].style.opacity = '0';       // h4 tag opacity
                portfolio_item_p[i].style.opacity = '0';        // p tag opacity
            }
            portfolio_item_p[i].style.transition = `all 0.2s ease`
            portfolio_item_p[i].style.transform = `translateY(50px)`;
            portfolio_item_figure[i].style.setProperty('--transition', 'all 0.3s ease'); //  transition aplly at hovering
            portfolio_item_figure[i].style.setProperty('--after-transform', 'translateX(55px)');
            portfolio_item_figure[i].style.setProperty('--after-opacity', '0');       // set opacity of after pseudo selector of figure in portfolio class
            portfolio_item_figure[i].style.setProperty('--before-opacity', '0');      // set opacity of before pseudo selector of figure in portfolio class

        })

    }
    //  ------------------  Portfolio ul list click  -------------------------
    for (let i = 0; i < portfolio_pointer.length; i++) {
        portfolio_pointer[i].addEventListener('click', function () {
            let pt = i;
            for (let i = 0; i < portfolio_pointer.length; i++) {
                portfolio_pointer[i].classList.remove('active')
            }
            portfolio_pointer[pt].classList.add('active')
            // for all elements
            if (pt == 0) {
                for (let d = 0; d < design.length; d++) {
                    design[d].style.display = 'block';
                }
                for (let g = 0; g < graphic.length; g++) {
                    graphic[g].style.display = 'block';
                }
                for (let b = 0; b < brand.length; b++) {
                    brand[b].style.display = 'block';
                }
            }
            // for brands
            if (pt == 1) {
                for (let d = 0; d < design.length; d++) {
                    design[d].style.display = 'none';
                }
                for (let g = 0; g < graphic.length; g++) {
                    graphic[g].style.display = 'none';
                }
                for (let b = 0; b < brand.length; b++) {
                    brand[b].style.display = 'block';
                }
            }
            // for design
            if (pt == 2) {
                for (let d = 0; d < design.length; d++) {
                    design[d].style.display = 'block';
                }
                for (let g = 0; g < graphic.length; g++) {
                    graphic[g].style.display = 'none';
                }
                for (let b = 0; b < brand.length; b++) {
                    brand[b].style.display = 'none';
                }
            }
            // for graphic
            if (pt == 3) {
                for (let d = 0; d < design.length; d++) {
                    design[d].style.display = 'none';
                }
                for (let g = 0; g < graphic.length; g++) {
                    graphic[g].style.display = 'block';
                }
                for (let b = 0; b < brand.length; b++) {
                    brand[b].style.display = 'none';
                }
            }
        })

    }
    //  ------------------  Portfolio item class doc click  -------------------------

    for (let j = 0; j < portfolio_doc_link.length; j++) {
        portfolio_doc_link[j].addEventListener('click', function () {
            main.children[current_page].classList.remove('active-page')
            ptfdoc.classList.add('active-page')
        })
    }
    cancelbtn.addEventListener('click', function () {
        main.children[current_page].classList.add('active-page')
        ptfdoc.classList.remove('active-page')
    })
    //   blog items 

    for (let i = 0; i < blog_item.length; i++) {
        blog_item[i].addEventListener('mouseenter', function () {
            blog_img[i].style.transition = `transform 1s ease`;
            blog_img[i].style.transform = `scale(1.1)`;

        })
        blog_item[i].addEventListener('mouseleave', function () {
            blog_img[i].style.transition = `transform 1s ease`;
            blog_img[i].style.transform = `scale(1)`;

        })
        blog_item[i].addEventListener('click', function () {
            menu[current_page].classList.remove('active-page')
            main.children[current_page].classList.remove('active-page')
            blog_detail.classList.add('active-page')

        })
    }

    //    contact table focus or blur
    for (let i = 0; i < input_feild.length; i++) {
        input_feild[i].addEventListener('focus', function () {
            input_label[i].style.transform = `translate3d(-10px,-35px,0px)`;
        })
        input_feild[i].addEventListener('blur', function () {
            if (input_feild[i].value == "") {
                input_label[i].style.transform = `translate3d(0px,0px,0px)`;
            }
        })
    }

});
