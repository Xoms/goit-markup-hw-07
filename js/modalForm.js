(()=>{
    const backdrop = document.querySelector(".backdrop");
    const btnOpen = document.querySelector(".hero__button");
    const btnClose = document.querySelector(".modal-form__btn-close");

    btnOpen.addEventListener('click', toggleModal);
    btnClose.addEventListener('click', toggleModal);

    function toggleModal(){
        backdrop.classList.toggle("is-hidden");
    }
})();