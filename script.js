// document.addEventListener("DOMContentLoaded", () => {
//   const book = document.querySelector(".book");

//   // Add the 'open' class after a short delay to trigger the animation
//   setTimeout(() => {
//     book.classList.add("open");
//   }, 500); // Adjust the delay for the effect
// });
// document.querySelector('.hhdfh').addEventListener('click',function(){
// })


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menua = document.querySelectorAll("#menu a");

    menuToggle.addEventListener("click", () => {
        // Toggle the 'menu' visibility
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });

    for (i = 0; i <= menua.length - 1; i++) {
        menua[i].addEventListener('click', function () {
            menu.style.display = "none";
        })
    }

});


const projactdetails = [
    {
        id: 1,
        projactname: "E-Commerce Platform",
        projactheading: "Build Your Online Store",
        projactsubheading: "A Complete E-Commerce Solution",
        projactdescription: "This project is a fully functional e-commerce platform that includes product listing, shopping cart, payment integration, and admin panel for inventory management.",
        projacttechnology: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
        url: 'https://example.com/ecommerce',
        card: [{
            img1: 'url1',
        },
        {

        }

        ]

    },
    {
        id: 2,
        projactname: "Portfolio Website",
        projactheading: "Showcase Your Work",
        projactsubheading: "A Personal Portfolio Template",
        projactdescription: "A responsive portfolio website that showcases your skills, projects, and achievements with a contact form and smooth animations.",
        projacttechnology: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'GSAP'],
        url: 'https://example.com/portfolio'
    },
    {
        id: 3,
        projactname: "Social Media App",
        projactheading: "Connect with Friends",
        projactsubheading: "A Modern Social Networking App",
        projactdescription: "A social media application where users can create profiles, post updates, follow others, and like/comment on posts.",
        projacttechnology: ['React Native', 'Firebase', 'Redux', 'Node.js'],
        url: 'https://example.com/socialapp'
    },
    {
        id: 4,
        projactname: "Task Management Tool",
        projactheading: "Stay Organized",
        projactsubheading: "A Task and Project Management System",
        projactdescription: "A web app for managing tasks and projects with features like task assignment, progress tracking, and deadline reminders.",
        projacttechnology: ['Angular', 'Node.js', 'Express', 'MongoDB'],
        url: 'https://example.com/taskmanager'
    },
    {
        id: 5,
        projactname: "Weather Forecast App",
        projactheading: "Stay Ahead of the Weather",
        projactsubheading: "A Real-Time Weather Update App",
        projactdescription: "An app that provides real-time weather updates, 7-day forecasts, and radar maps based on your location.",
        projacttechnology: ['Vue.js', 'Axios', 'OpenWeather API', 'Tailwind CSS'],
        url: 'https://example.com/weatherapp'
    },
    {
        id: 6,
        projactname: "Blogging Platform",
        projactheading: "Write and Share Your Thoughts",
        projactsubheading: "A Multi-User Blogging Website",
        projactdescription: "A platform for users to create, edit, and publish blog posts with an admin panel for content moderation.",
        projacttechnology: ['Laravel', 'PHP', 'MySQL', 'CKEditor'],
        url: 'https://example.com/bloggingplatform'
    },
    {
        id: 7,
        projactname: "Online Education Platform",
        projactheading: "Learn Anytime, Anywhere",
        projactsubheading: "A Learning Management System",
        projactdescription: "An online platform for hosting and managing educational content, quizzes, and student-teacher interaction.",
        projacttechnology: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
        url: 'https://example.com/educationplatform'
    },
    {
        id: 8,
        projactname: "Real-Time Chat Application",
        projactheading: "Instant Messaging Made Easy",
        projactsubheading: "A Fast and Secure Chat App",
        projactdescription: "A real-time chat app with features like private chats, group messaging, and end-to-end encryption.",
        projacttechnology: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
        url: 'https://example.com/chatapp'
    },
    {
        id: 9,
        projactname: "Food Delivery App",
        projactheading: "Order Food Online",
        projactsubheading: "A Comprehensive Food Delivery Solution",
        projactdescription: "A food delivery platform that includes restaurant listing, menu browsing, and live order tracking.",
        projacttechnology: ['Flutter', 'Firebase', 'Dart', 'Google Maps API'],
        url: 'https://example.com/fooddelivery'
    },
    {
        id: 10,
        projactname: "Hospital Management System",
        projactheading: "Efficient Healthcare Solutions",
        projactsubheading: "A Hospital Management Platform",
        projactdescription: "A management system for hospitals with modules for patient records, appointment scheduling, and billing.",
        projacttechnology: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
        url: 'https://example.com/hospitalmanagement'
    },

];



setTimeout(function () {



    let leftPage = document.querySelector('.left-page')

    let projactname = leftPage.children[0]
    let projactheading = leftPage.children[1]
    let projactsubheading = leftPage.children[2]
    let projactdescription = leftPage.children[3]
    let projacttechnology = leftPage.children[4]
    let projacturl = leftPage.children[5]


    let a = document.createElement('a')
    projacturl.append(a)



    projactname.innerHTML = projactdetails[0].projactname
    projactheading.innerHTML = projactdetails[0].projactheading
    projactsubheading.innerHTML = projactdetails[0].projactsubheading
    projactdescription.innerHTML = projactdetails[0].projactdescription
    projacttechnology.innerHTML = projactdetails[0].projacttechnology
    projacturl.innerHTML = projactdetails[0].url

    //   flipCard[0].style.display = 'block';


    let items = document.querySelectorAll('.items')





    let projactmainImage = document.querySelector('.projactmainImages')





    for (i = 0; i <= items.length; i++) {

        let item = items[i]

        let anchor = item.querySelector('a')






        anchor.addEventListener('click', () => {


            let flipCard = document.querySelectorAll('.flip-card')

            let card = projactdetails[0].card

           

        let item = card.map((item) => {
            // console.log(item);

            return item
            

            })

         
            // console.log(item);
            

            // console.log(card);

            for (y = 0; y <= flipCard.length; y++) {

                if (item.classList.contains('a1')) {
                    flipCard[0].style.display = 'block';
                    projactname.innerHTML = projactdetails[0].projactname
                    projactheading.innerHTML = projactdetails[0].projactheading
                    projactsubheading.innerHTML = projactdetails[0].projactsubheading
                    projactdescription.innerHTML = projactdetails[0].projactdescription
                    projacttechnology.innerHTML = projactdetails[0].projacttechnology
                    projacturl.innerHTML = projactdetails[0].url







                } else if (item.classList.contains('a2')) {

                    flipCard[1].style.display = 'block';

                    projactname.innerHTML = projactdetails[1].projactname
                    projactheading.innerHTML = projactdetails[1].projactheading
                    projactsubheading.innerHTML = projactdetails[1].projactsubheading
                    projactdescription.innerHTML = projactdetails[1].projactdescription
                    projacttechnology.innerHTML = projactdetails[1].projacttechnology
                    projacturl.innerHTML = projactdetails[1].url




                } else if (item.classList.contains('a3')) {

                    flipCard[2].style.display = 'block';

                    projactname.innerHTML = projactdetails[2].projactname
                    projactheading.innerHTML = projactdetails[2].projactheading
                    projactsubheading.innerHTML = projactdetails[2].projactsubheading
                    projactdescription.innerHTML = projactdetails[2].projactdescription
                    projacttechnology.innerHTML = projactdetails[2].projacttechnology
                    projacturl.innerHTML = projactdetails[2].url

                }
                else if (item.classList.contains('a4')) {

                    flipCard[3].style.display = 'block';
                    projactname.innerHTML = projactdetails[3].projactname
                    projactheading.innerHTML = projactdetails[3].projactheading
                    projactsubheading.innerHTML = projactdetails[3].projactsubheading
                    projactdescription.innerHTML = projactdetails[3].projactdescription
                    projacttechnology.innerHTML = projactdetails[3].projacttechnology
                    projacturl.innerHTML = projactdetails[3].url


                } else if (item.classList.contains('a5')) {

                    flipCard[4].style.display = 'block';
                    projactname.innerHTML = projactdetails[4].projactname
                    projactheading.innerHTML = projactdetails[4].projactheading
                    projactsubheading.innerHTML = projactdetails[4].projactsubheading
                    projactdescription.innerHTML = projactdetails[4].projactdescription
                    projacttechnology.innerHTML = projactdetails[4].projacttechnology
                    projacturl.innerHTML = projactdetails[4].url


                } else if (item.classList.contains('a6')) {

                    flipCard[5].style.display = 'block';

                    projactname.innerHTML = projactdetails[5].projactname
                    projactheading.innerHTML = projactdetails[5].projactheading
                    projactsubheading.innerHTML = projactdetails[5].projactsubheading
                    projactdescription.innerHTML = projactdetails[5].projactdescription
                    projacttechnology.innerHTML = projactdetails[5].projacttechnology
                    projacturl.innerHTML = projactdetails[5].url

                } else if (item.classList.contains('a7')) {

                    flipCard[6].style.display = 'block';
                    projactname.innerHTML = projactdetails[6].projactname
                    projactheading.innerHTML = projactdetails[6].projactheading
                    projactsubheading.innerHTML = projactdetails[6].projactsubheading
                    projactdescription.innerHTML = projactdetails[6].projactdescription
                    projacttechnology.innerHTML = projactdetails[6].projacttechnology
                    projacturl.innerHTML = projactdetails[6].url


                } else if (item.classList.contains('a8')) {

                    flipCard[7].style.display = 'block';
                    projactname.innerHTML = projactdetails[7].projactname
                    projactheading.innerHTML = projactdetails[7].projactheading
                    projactsubheading.innerHTML = projactdetails[7].projactsubheading
                    projactdescription.innerHTML = projactdetails[7].projactdescription
                    projacttechnology.innerHTML = projactdetails[7].projacttechnology
                    projacturl.innerHTML = projactdetails[7].url


                } else if (item.classList.contains('a9')) {

                    flipCard[8].style.display = 'block';
                    projactname.innerHTML = projactdetails[8].projactname
                    projactheading.innerHTML = projactdetails[8].projactheading
                    projactsubheading.innerHTML = projactdetails[8].projactsubheading
                    projactdescription.innerHTML = projactdetails[8].projactdescription
                    projacttechnology.innerHTML = projactdetails[8].projacttechnology
                    projacturl.innerHTML = projactdetails[8].url


                } else if (item.classList.contains('a10')) {

                    flipCard[9].style.display = 'block';
                    projactname.innerHTML = projactdetails[9].projactname
                    projactheading.innerHTML = projactdetails[9].projactheading
                    projactsubheading.innerHTML = projactdetails[9].projactsubheading
                    projactdescription.innerHTML = projactdetails[9].projactdescription
                    projacttechnology.innerHTML = projactdetails[9].projacttechnology
                    projacturl.innerHTML = projactdetails[9].url


                }

                flipCard[y].style.display = 'none'



            }

        })


        let aa1 = document.querySelectorAll('.aa1')




        anchor.addEventListener('mouseenter', () => {

            if (item.classList.contains('a1')) {
                aa1[0].classList.add('scroll')
            }
            if (item.classList.contains('a2')) {
                aa1[1].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[2].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[3].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[4].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[5].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[6].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[7].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[8].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[9].classList.add('scroll')
            }
            if (item.classList.contains('a1')) {
                aa1[10].classList.add('scroll')
            }


        })
        anchor.addEventListener('mouseleave', () => {

            for (i = 0; i <= aa1.length; i++) {
                aa1[i].classList.remove('scroll')
            }



        })
    }




}, 1300)



