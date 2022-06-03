let modalQt=1
let el=(item)=>document.querySelector(item)
let ell=(itens)=>document.querySelectorAll(itens)

//LISTAGEM DAS PIZZAS
pizzaJson.map((item,value)=>{

    let pizzaItem=el('.models .pizza-item').cloneNode(true)

    pizzaItem.setAttribute('data-key',value)
    pizzaItem.querySelector('.pizza-item--name').innerHTML=item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML=item.description
    pizzaItem.querySelector('.pizza-item--price').innerHTML=`R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--img img').src=item.img

    pizzaItem.querySelector('a').addEventListener('click',event=>{
        event.preventDefault();
        let key=event.target.closest('.pizza-item').getAttribute('data-key')
        modalQt=1

 el('.pizzaInfo h1').innerHTML=pizzaJson[key].name
 el('.pizzaInfo--desc').innerHTML=pizzaJson[key].description
 el('.pizzaBig img').src=pizzaJson[key].img 
 el('.pizzaInfo--actualPrice').innerHTML=pizzaJson[key].price
 el('.pizzaInfo--size.selected').classList.remove('selected')
 ell('.pizzaInfo--size').forEach((size,sizeIndex) => {

    if(sizeIndex==2){
        size.classList.add('selected')
    }

    size.querySelector('span').innerHTML=pizzaJson[key].sizes[sizeIndex]

 })
    el('.pizzaInfo--qt').innerHTML=modalQt


        el('.pizzaWindowArea').style.opacity=0
       el('.pizzaWindowArea').style.display='flex'
       setTimeout(()=>{
        el('.pizzaWindowArea').style.opacity=1
       },200)
    }



    )

    el('.pizza-area').append(pizzaItem)


})


//EVENTOD DO MODA

function closeModal(){
    el('.pizzaWindowArea').style.opacity=0
    setTimeout(()=>{
        el('.pizzaWindowArea').style.display='none'
    },500)


}
ell('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach(element=>{
    element.addEventListener('click',closeModal)
})