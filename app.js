let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search2 = document.getElementById('search_input');

left_btn.addEventListener('click',()=>{

    cards.scrollLeft -= 140;
})

right_btn.addEventListener('click',()=>{
     cards.scrollLeft += 140;
})

let json_url ="movie.json";

fetch(json_url)
.then(Response => Response.json())
.then((data)=>{
    console.log(data);
    data.forEach((ele,i) =>{
        let{name,imdb,date,sposter,bposter,genre,url,trailer} = ele

        let card = document.createElement("a")
        card.classList.add('card');
        card.href=url;
        card.innerHTML=`
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                </div>
            </div>
        </div>
        `

        cards.appendChild(card)

        document.getElementById('title').innerText=data[0].name
    })

    data.forEach((ele)=>{
        let{name,imdb,date,sposter,genre,url} = ele
        let card = document.createElement("a")
        card.classList.add('card');
        card.href=url;
        card.innerHTML=`
        <img src="${sposter}" alt="">
        <div class="cont">
            <h3>${name} </h3>
            <p>${genre}, ${date} , <span>IMDB</span><i class="bi bi-star-fill"></i> 9.6</p>
        </div>`
        search.appendChild(card);

    
    });

    search2.addEventListener('key',()=>{
        let filter = search2.value.toUpperCase();
        let a = search.getElementsByTagName('card');

        for (let index = 0; index < a.length; index++) {
           let b = a[i].getElementsByClassName('cont')[0];
           
           let textvlaue = b.textContent || b.innerText;

           if (textvlaue.toUpperCase().indexOf(filter)) {
            
           } else {
            
           }

        }
    })
});