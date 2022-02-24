var App = {
    fullpagejs: function() {
        new fullpage('#fullpage', {
            //options here
            anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth'],
            licenseKey: '558F2BA0-3BF94B75-94951419-B420B651',
            autoScrolling: true,
            paddingTop: '0px',
            parallax: false,
            easing: 'easeInOutQuart',
            slidesNavigation: true,
            scrollingSpeed: 1000,
            normalScrollElements: '.custom_content,.right_info',
            /*scrollOverflow: true,
            scrollOverflowReset: true,
            scrollOverflowOptions:'.normalscroll',*/
            css3: true,
            // easingcss3: 'cubic-bezier(0.77, 0, 0.175, 1)',
            responsiveWidth: 768,
            navigation: false,
            navigationPosition: 'right',
            onLeave: function(origin, destination, direction) {
                //it won't scroll if the destination is the 3rd section
                var myNumber = destination.index;
                var formattedNumber = ("0" + myNumber).slice(-2);
                jQuery('.page_nav .current_btn').html(formattedNumber);
                if (destination.index != 0 && destination.index != 2 && destination.index != 4 && destination.index != 6 && destination.index != 9 && destination.index != 12 && destination.index != 15) {
                    jQuery('#header_site').addClass('headercolor');
                    jQuery('.page_nav').addClass('pagecolor');
                } else {
                    jQuery('#header_site').removeClass('headercolor');
                    jQuery('.page_nav').removeClass('pagecolor');
                }
                if (destination.index != 0 && destination.index != 1 && destination.index != 2 && destination.index != 4 && destination.index != 6 && destination.index != 9 && destination.index != 12 && destination.index != 13 && destination.index != 15) {
                    jQuery('#footer_site').addClass('footercolor');
                    jQuery('.scroll_down').addClass('scrollcolor');
                } else {
                    jQuery('#footer_site').removeClass('footercolor');
                    jQuery('.scroll_down').removeClass('scrollcolor');
                }
            }
        });
    },
    sliderhome: function() {
        setTimeout(function() {
            jQuery('#page_loading').addClass('removeload');
        }, 3100);
        jQuery('.slider_investor').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: true,
            arrows: false,
            fade: true,
        });
        jQuery('.slider_furniture').slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            centerMode: true,
            dots: false,
            arrows: true,
            centerPadding: "0px",
            prevArrow: '<div class="prev_slide"><img src="assets/images/prev.png" class="img-fluid"/></div>',
            nextArrow: '<div class="next_slide"><img src="assets/images/next.png" class="img-fluid"/></div>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                }
            }, ]
        });
        jQuery('.slider_space').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: false,
            arrows: true,
            asNavFor: '.space_thumb',
            prevArrow: '<div class="prev_slide"><img src="assets/images/prevr.png" class="img-fluid"/></div>',
            nextArrow: '<div class="next_slide"><img src="assets/images/nextr.png" class="img-fluid"/></div>',
        });
        jQuery('.space_thumb').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: true,
            vertical: true,
            focusOnSelect: true,
            arrows: false,
            asNavFor: '.slider_space',
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                }
            }, ]
        });
        jQuery('.slider_utilities').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: true,
            focusOnSelect: true,
            arrows: true,
            asNavFor: '.thumb_utilities',
            prevArrow: '<div class="prev_slide"><img src="assets/images/prev.png" class="img-fluid"/></div>',
            nextArrow: '<div class="next_slide"><img src="assets/images/next.png" class="img-fluid"/></div>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }, ]
        });
        jQuery('.thumb_utilities').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: true,
            focusOnSelect: true,
            arrows: false,
            asNavFor: '.slider_utilities',
        });
        jQuery('.slider_policy').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: false,
            focusOnSelect: true,
            arrows: true,
            asNavFor: '.slider_bank',
            prevArrow: '<div class="prev_slide"><img src="assets/images/prevb.png" class="img-fluid"/></div>',
            nextArrow: '<div class="next_slide"><img src="assets/images/nextb.png" class="img-fluid"/></div>',
        });
        jQuery('.slider_bank').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: false,
            focusOnSelect: true,
            arrows: false,
            asNavFor: '.slider_policy',
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            }, ]
        });
        jQuery('.slider_img3d').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: false,
            focusOnSelect: true,
            arrows: true,
            prevArrow: '<div class="prev_slide"><img src="assets/images/prev.png" class="img-fluid"/></div>',
            nextArrow: '<div class="next_slide"><img src="assets/images/next.png" class="img-fluid"/></div>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }, ]
        });
        jQuery('.slider_video').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: false,
            focusOnSelect: true,
            arrows: true,
            prevArrow: '<div class="prev_slide"><img src="assets/images/prev.png" class="img-fluid"/></div>',
            nextArrow: '<div class="next_slide"><img src="assets/images/next.png" class="img-fluid"/></div>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }, ]
        });
        jQuery('.slider_progess').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: false,
            focusOnSelect: true,
            arrows: true,
            prevArrow: '<div class="prev_slide"><img src="assets/images/prev.png" class="img-fluid"/></div>',
            nextArrow: '<div class="next_slide"><img src="assets/images/next.png" class="img-fluid"/></div>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }, ]
        });
    },
    animationtm: function() {
        // build scenes
        var controller = new ScrollMagic.Controller();
        var LeftToRight = document.getElementsByClassName("left_to_right");
        var RightToLeft = document.getElementsByClassName("right_to_left");
        var BottomToTop = document.getElementsByClassName("bottom_to_top");
        var TopToBottom = document.getElementsByClassName("top_to_bottom");
        var Parallaxitem = document.getElementsByClassName("parallax_item");

        for (var i = 0; i < LeftToRight.length; i++) { // create a scene for each element
            new ScrollMagic.Scene({
                    triggerElement: LeftToRight[i], // y value not modified, so we can use element as trigger as well
                    offset: 50, // start a little later
                    triggerHook: 0.9,
                })
                .setClassToggle(LeftToRight[i], "show") // add class toggle
                .addTo(controller);
        }
        for (var i = 0; i < RightToLeft.length; i++) { // create a scene for each element
            new ScrollMagic.Scene({
                    triggerElement: RightToLeft[i], // y value not modified, so we can use element as trigger as well
                    offset: 50, // start a little later
                    triggerHook: 0.9,
                })
                .setClassToggle(RightToLeft[i], "show") // add class toggle
                .addTo(controller);
        }
        for (var i = 0; i < BottomToTop.length; i++) { // create a scene for each element
            new ScrollMagic.Scene({
                    triggerElement: BottomToTop[i], // y value not modified, so we can use element as trigger as well
                    offset: 50, // start a little later
                    triggerHook: 0.9,
                })
                .setClassToggle(BottomToTop[i], "show") // add class toggle
                .addTo(controller);
        }
        for (var i = 0; i < TopToBottom.length; i++) { // create a scene for each element
            new ScrollMagic.Scene({
                    triggerElement: TopToBottom[i], // y value not modified, so we can use element as trigger as well
                    offset: 50, // start a little later
                    triggerHook: 0.9,
                })
                .setClassToggle(TopToBottom[i], "show") // add class toggle
                .addTo(controller);
        }
        for (var i = 0; i < Parallaxitem.length; i++) {
            new ScrollMagic.Scene({ triggerElement: Parallaxitem[i] })
                .setTween(Parallaxitem[i] + " > .bg_section", { y: "80%", ease: Linear.easeNone })
                .addTo(controller);
        }
    },
    menumobile: function() {
        jQuery('.hamburger_btn').click(function(e) {
            e.preventDefault();
            jQuery('.hamburger-icon').toggleClass('open');
            jQuery('#menu_site').toggleClass('open');
            jQuery('.overlay_menu').toggleClass('is-active');
        });
        jQuery('.overlay_menu').click(function() {
            jQuery('.hamburger-icon').removeClass('open');
            jQuery('#menu_site').removeClass('open');
            jQuery('.overlay_menu').removeClass('is-active');
        });
        jQuery('#menu_site .menu_area li a').click(function() {
            jQuery('.hamburger-icon').removeClass('open');
            jQuery('#menu_site').removeClass('open');
            jQuery('.overlay_menu').removeClass('is-active');
        });
    },
    galaxy: function() {
        (function() {
            'use strict';
            /* 	'To actually be able to display anything with Three.js, we need three things:
                A scene, a camera, and a renderer so we can render the scene with the camera.'

                       - https://threejs.org/docs/#Manual/Introduction/Creating_a_scene 		*/

            var scene, camera, renderer;

            /* We need this stuff too */
            var container, aspectRatio,
                HEIGHT, WIDTH, fieldOfView,
                nearPlane, farPlane,
                mouseX, mouseY, windowHalfX,
                windowHalfY, stats, geometry,
                starStuff, materialOptions, stars;

            init();
            animate();

            function init() {
                container = document.getElementById('galaxy');
                //document.body.appendChild( container );
                document.body.style.overflow = 'hidden';

                HEIGHT = window.innerHeight;
                WIDTH = window.innerWidth;
                aspectRatio = WIDTH / HEIGHT;
                fieldOfView = 75;
                nearPlane = 1;
                farPlane = 1000;
                mouseX = 0;
                mouseY = 0;

                windowHalfX = WIDTH / 2;
                windowHalfY = HEIGHT / 2;

                /* 	fieldOfView â€” Camera frustum vertical field of view.
                        aspectRatio â€” Camera frustum aspect ratio.
                        nearPlane â€” Camera frustum near plane.
                        farPlane â€” Camera frustum far plane.

                        - https://threejs.org/docs/#Reference/Cameras/PerspectiveCamera

                         In geometry, a frustum (plural: frusta or frustums)
                         is the portion of a solid (normally a cone or pyramid)
                         that lies between two parallel planes cutting it. - wikipedia.		*/

                camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

                //Z positioning of camera

                camera.position.z = farPlane / 2;

                scene = new THREE.Scene({ antialias: true });
                scene.fog = new THREE.FogExp2(0x000000, 0.0003);

                // The wizard's about to get busy.
                starForge();

                //check for browser Support
                if (webGLSupport()) {
                    //yeah?  Right on...
                    renderer = new THREE.WebGLRenderer({ alpha: true });

                } else {
                    //No?  Well that's okay.
                    renderer = new THREE.CanvasRenderer();
                }

                //renderer.setClearColor(0x000011, 1);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(WIDTH, HEIGHT);
                container.appendChild(renderer.domElement);

                //stats = new Stats();
                //stats.domElement.style.position = 'absolute';
                //stats.domElement.style.top = '0px';
                //stats.domElement.style.right = '0px';
                // container.appendChild( stats.domElement );

                window.addEventListener('resize', onWindowResize, false);
                document.addEventListener('mousemove', onMouseMove, false);

            }

            function animate() {
                requestAnimationFrame(animate);
                render();
                // stats.update();
            }


            function render() {
                camera.position.x += (mouseX - camera.position.x) * 0.005;
                camera.position.y += (-mouseY - camera.position.y) * 0.005;
                camera.lookAt(scene.position);
                renderer.render(scene, camera);
            }

            function webGLSupport() {
                /* 	The wizard of webGL only bestows his gifts of power
                    to the worthy.  In this case, users with browsers who 'get it'.		*/

                try {
                    var canvas = document.createElement('canvas');
                    return !!(window.WebGLRenderingContext && (
                        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
                } catch (e) {
                    // console.warn('Hey bro, for some reason we\'re not able to use webGL for this.  No biggie, we\'ll use canvas.');
                    return false;
                }
            }

            function onWindowResize() {

                // Everything should resize nicely if it needs to!
                var WIDTH = window.innerWidth,
                    HEIGHT = window.innerHeight;

                camera.aspect = aspectRatio;
                camera.updateProjectionMatrix();
                renderer.setSize(WIDTH, HEIGHT);
            }

            function starForge() {
                /* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
                    are you really surprised at this point?
                                                            */
                var starQty = 5000;
                geometry = new THREE.SphereGeometry(1000, 100, 50);

                materialOptions = {
                    size: 1.0, //I know this is the default, it's for you.  Play with it if you want.
                    transparency: true,
                    opacity: 0.7,
                };

                starStuff = new THREE.PointCloudMaterial(materialOptions);

                // The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

                for (var i = 0; i < starQty; i++) {
                    var starVertex = new THREE.Vector3();
                    starVertex.x = Math.random() * 2000 - 1000;
                    starVertex.y = Math.random() * 2000 - 1000;
                    starVertex.z = Math.random() * 2000 - 1000;
                    geometry.vertices.push(starVertex);
                }


                stars = new THREE.PointCloud(geometry, starStuff);
                scene.add(stars);
            }

            function onMouseMove(e) {

                mouseX = e.clientX - windowHalfX;
                mouseY = e.clientY - windowHalfY;

            }

        })();
    },
    starmenu: function() {
        (function() {
            'use strict';
            /* 	'To actually be able to display anything with Three.js, we need three things:
                A scene, a camera, and a renderer so we can render the scene with the camera.'

                       - https://threejs.org/docs/#Manual/Introduction/Creating_a_scene 		*/

            var scene, camera, renderer;

            /* We need this stuff too */
            var container, aspectRatio,
                HEIGHT, WIDTH, fieldOfView,
                nearPlane, farPlane,
                mouseX, mouseY, windowHalfX,
                windowHalfY, stats, geometry,
                starStuff, materialOptions, stars;

            init();
            animate();

            function init() {
                container = document.getElementById('star_menu');
                //document.body.appendChild( container );
                document.body.style.overflow = 'hidden';

                HEIGHT = window.innerHeight;
                WIDTH = window.innerWidth;
                aspectRatio = WIDTH / HEIGHT;
                fieldOfView = 75;
                nearPlane = 1;
                farPlane = 1000;
                mouseX = 0;
                mouseY = 0;

                windowHalfX = WIDTH / 2;
                windowHalfY = HEIGHT / 2;

                /* 	fieldOfView â€” Camera frustum vertical field of view.
                        aspectRatio â€” Camera frustum aspect ratio.
                        nearPlane â€” Camera frustum near plane.
                        farPlane â€” Camera frustum far plane.

                        - https://threejs.org/docs/#Reference/Cameras/PerspectiveCamera

                         In geometry, a frustum (plural: frusta or frustums)
                         is the portion of a solid (normally a cone or pyramid)
                         that lies between two parallel planes cutting it. - wikipedia.		*/

                camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

                //Z positioning of camera

                camera.position.z = farPlane / 2;

                scene = new THREE.Scene({ antialias: true });
                scene.fog = new THREE.FogExp2(0x000000, 0.0003);

                // The wizard's about to get busy.
                starForge();

                //check for browser Support
                if (webGLSupport()) {
                    //yeah?  Right on...
                    renderer = new THREE.WebGLRenderer({ alpha: true });

                } else {
                    //No?  Well that's okay.
                    renderer = new THREE.CanvasRenderer();
                }

                //renderer.setClearColor(0x000011, 1);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(WIDTH, HEIGHT);
                container.appendChild(renderer.domElement);

                //stats = new Stats();
                //stats.domElement.style.position = 'absolute';
                //stats.domElement.style.top = '0px';
                //stats.domElement.style.right = '0px';
                // container.appendChild( stats.domElement );

                window.addEventListener('resize', onWindowResize, false);
                document.addEventListener('mousemove', onMouseMove, false);

            }

            function animate() {
                requestAnimationFrame(animate);
                render();
                // stats.update();
            }


            function render() {
                camera.position.x += (mouseX - camera.position.x) * 0.005;
                camera.position.y += (-mouseY - camera.position.y) * 0.005;
                camera.lookAt(scene.position);
                renderer.render(scene, camera);
            }

            function webGLSupport() {
                /* 	The wizard of webGL only bestows his gifts of power
                    to the worthy.  In this case, users with browsers who 'get it'.		*/

                try {
                    var canvas = document.createElement('canvas');
                    return !!(window.WebGLRenderingContext && (
                        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
                } catch (e) {
                    // console.warn('Hey bro, for some reason we\'re not able to use webGL for this.  No biggie, we\'ll use canvas.');
                    return false;
                }
            }

            function onWindowResize() {

                // Everything should resize nicely if it needs to!
                var WIDTH = window.innerWidth,
                    HEIGHT = window.innerHeight;

                camera.aspect = aspectRatio;
                camera.updateProjectionMatrix();
                renderer.setSize(WIDTH, HEIGHT);
            }

            function starForge() {
                /* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
                    are you really surprised at this point?
                                                            */
                var starQty = 1000;
                geometry = new THREE.SphereGeometry(1000, 100, 50);

                materialOptions = {
                    size: 1.0, //I know this is the default, it's for you.  Play with it if you want.
                    transparency: true,
                    opacity: 0.7,
                };

                starStuff = new THREE.PointCloudMaterial(materialOptions);

                // The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

                for (var i = 0; i < starQty; i++) {
                    var starVertex = new THREE.Vector3();
                    starVertex.x = Math.random() * 1000 - 500;
                    starVertex.y = Math.random() * 1000 - 500;
                    starVertex.z = Math.random() * 1000 - 500;
                    geometry.vertices.push(starVertex);
                }


                stars = new THREE.PointCloud(geometry, starStuff);
                scene.add(stars);
            }

            function onMouseMove(e) {

                mouseX = e.clientX - windowHalfX;
                mouseY = e.clientY - windowHalfY;

            }

        })();
    },
    linemenu: function() {
        if (jQuery('.menu_news li a').length) {
            var largw = jQuery('.menu_news li').outerWidth();
            jQuery('.menu_news li a').each(function() {
                var len = jQuery(this).outerWidth();
                if (largw - len - 20 > 0) {
                    jQuery(this).parent('li').append('<span class="" style="width:' + (largw - len - 20) + 'px"></span>');
                }

            });
        }
    },
    practicle: function() {
        /* ---- particles.js config ---- */

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    },

};

jQuery(document).ready(function() {
    App.fullpagejs();
    App.sliderhome();
    App.menumobile();
    App.animationtm();
    App.linemenu();
    App.galaxy();
    App.starmenu();
    App.practicle();
    jQuery(window).resize(function() {
        autoHeightMobile();
    });
    autoHeightMobile();

    function autoHeightMobile() {
        var windowWidth = jQuery(window).width();
        if (windowWidth < 768) {
            jQuery('.section').addClass('fp-auto-height');
            jQuery("#menu_site li a[href*='#']").click(function() {
                var url = jQuery(this).attr('href');
                var id = url.substring(url.lastIndexOf('#') + 1);
                var idname = jQuery('[data-anchor="' + id + '"]').attr('id');
                jQuery('html, body').animate({
                    scrollTop: $("#" + idname).offset().top
                }, 2000);
            });
        } else {
            jQuery('.section:not(#lastsection)').removeClass('fp-auto-height');
        }

    }
});

(function($) {
    $(window).on("load", function() {
        //$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
        $(".custom_content").mCustomScrollbar({
            theme: "light-3"
        });
    });
})(jQuery);