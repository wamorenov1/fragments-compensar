class Autopauta {
    constructor(desktop, mobile, url) {
        let container = document.createElement('div')
        let autopautaFragment = `
        <style>
            .container-atp{z-index:999;display:inline-block;position:fixed;left:50%;transform:translate(-50%);bottom:0}.img-atp,.img-atp .picture{display:flex}.close-atp{padding:.25rem;position:absolute;right:-7px;top:-7px;border-radius:1rem;box-shadow:0 0 3px 2px #888;background-color:#fff}.close-atp img{width:12px;display:flex;cursor:pointer}@media(max-width:800px){.img-atp .img-element{width:400px}}
        </style>
        <div id="content-atp" class="container-atp">
            <div class="close-atp" id="close-atp">
                <img src="https://corporativo.compensar.com/Style%20Library/webparts/Feria-Vivienda-21/imagenes/cerrar-autopauta.png"
                    alt="">
            </div>
            <a href="${url}" target="_blank">
                <div class="img-atp">
                    <picture class="picture">
                        <source media="(max-width:800px)"
                            srcset="${mobile}">
                        <img class="img-element"
                            src="${desktop}"
                            alt="">
                    </picture>
                </div>
            </a>
        </div>
        `
        container.innerHTML = autopautaFragment
        document.body.insertBefore(container, document.main)
        this.cerrar()
    }
    cerrar() {
        let contenedorAtp = document.querySelector('#content-atp')
        let closeAtp = document.querySelector('#close-atp')
            closeAtp.addEventListener('click', function () {
            contenedorAtp.style.display = 'none'
        })
    }
}