'use strict';

let autoFooter = document.getElementById('auto-footer');

autoFooter.classList = '';
autoFooter.classList.add('py-3');
autoFooter.classList.add('bg-dark');
autoFooter.innerHTML = `
<div class="container px-5 text-center">
    <div class="feature text-white rounded-3"><a target="_blank" class="link-light" href="https://www.instagram.com/prof.lucasghiraldi/"><i class="bi bi-instagram"></i></a></div>
    <div class="feature text-white rounded-3"><a target="_blank" class="link-light" href="https://api.whatsapp.com/send?phone=5562981625380&text=Oi,%20gostaria%20de%20tirar%20d%C3%BAvidas."><i class="bi bi-whatsapp"></i></a></div>
    <div class="feature text-white rounded-3"><a target="_blank" class="link-light" href="https://www.tiktok.com/@olucasghiraldi?is_from_webapp=1&sender_device=pc"><i class="bi bi-tiktok"></i></a></div>
    <p class="m-0 text-center text-white">Desenvolvido por <a href="https://annacarolinadamasceno.github.io" target="_blank" class="text-white text-decoration-none">Anna Damasceno</a></p>
    <p class="m-0 text-center text-white">Todos os direitos reservados</p>
</div>`;