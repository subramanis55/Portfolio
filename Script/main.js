
/*let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>
    {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');     
    }
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(
        sec =>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');
            if(top>=offset && top<offset +height){
                navlinks.forEach.apply(
                    links=>{
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*='+id+']').classList.add('active');
                    }
                );
            };
        }
    );

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {;
    menuIcon.classList.toggle('fa-xmark');
    if (navbar.style.display === 'block') {
       // menuIcon.classList.toggle('fa-xmark');
        navbar.style.display = 'none';
    }
     else {
      //  menuIcon.classList.toggle('fa-bars');
        //navbar.classList.toggle('active');
        navbar.style.display = 'block';
    }
    
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf'; // Replace with the path to your document
    link.download = 'Subramani_Resume.pdf'; // Replace with the name you want the downloaded file to have
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function SendEmail(){
    
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "subramanis6385@gmail.com",
            Password : "9AEE2E38BFB53215E2B6FF49DDEF3E950462",
            To:"subramanis6385@gmail.com",
            From:document.getElementById('email').value,
            Subject:document.getElementById('subject').value,
            Body:document.getElementById('message').value+"<br><br> Name:"+document.getElementById('name').value+ "<br> Contact : "+document.getElementById('phone').value
        }).then(
          message => alert("Mail Currently not working try Directy!")
        );
        document.getElementById('subject').value=""; 
        document.getElementById('message').value=""; 
        document.getElementById('name').value="";
        document.getElementById('phone').value="";
        document.getElementById('subject').value="";
}