function FactsUI(h3='Exercise Facts', p1='${text}', p2='${text}', p3='${text}', p4='${text}', img1='${url="123.svg"}', img2='${url="1 out of 2.svg"}', img3='${url="1 out of 5.svg"}', img4='${url="1 out of 3.svg"}'){
    return `
    <div class="fact1">
        <h3 style="
        font-size: 2rem;
        ">${h3}</h3>

        <p class="paras">${p1}</p>
        <img src='${img1}' class="factimg"></img>

        <p class="paras">${p2}</p>
        <img src='${img2}' class="factimg"></img>

        <p class="paras">${p3}</p>
        <img src='${img3}' class="factimg3"></img>

        <p class="paras">${p4}</p>
        <img src='${img4}' class="factimg4"></img>

    </div>
    `
}