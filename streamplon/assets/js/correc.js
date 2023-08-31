const reshma = () => {
    const btnburger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    btnburger.addEventListener('click', () =>{

        // lancera l'animations

        btnburger.classList.toggle('active');
        nav.classList.toggle('nav-active');
    })


}

reshma();