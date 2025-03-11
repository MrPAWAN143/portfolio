let projects = document.querySelectorAll('.projects a')

for(i=0;i<=projects.length -1;i++){
    // console.log(projects[i]);

    projects[i].addEventListener('click',()=>{
        let popup = document.querySelector('.popup')
        let bgab = document.querySelector('.bgab')
        bgab.classList.add('background_blur')
        document.querySelector('.blur').style.filter = 'blur(5px)'
       let body = document.querySelector('body')
       body.style.overflowY = 'hidden'

        popup.style.opacity = 1;

        popup.style.display = 'block'

        let closebtn = document.querySelector('.closebtn')

        closebtn.addEventListener('click',()=>{
            popup.style.transition = 'opacity 1s ease-in-out'; 
            popup.style.opacity = 0;

             setTimeout(() => {
                popup.style.display = 'none'; // Hide the popup
            }, 1000); 

            bgab.classList.remove('background_blur')
            document.querySelector('.blur').style.filter = 'blur(0px)'
            document.querySelector('body').style.overflowY = 'scroll'
        })
    })


    
}