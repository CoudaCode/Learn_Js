box = document.querySelector(".box");
pencils = document.querySelector(".pencils");
first = document.querySelector('.first')
let continnus = false

function create(el) {
  console.log("test",el.currentTarget.offsetTop,el.currentTarget.offsetTop)

  let pencils = document.createElement('div')

  pencils.classList.add('pencils')
  pencils.style.position =`absolute`
  pencils.style.top = `${(el.clientY - el.currentTarget.offsetTop) - 15}px`
  pencils.style.left = `${(el.clientX - el.currentTarget.offsetLeft) - 15}px`
  box.appendChild(pencils)
}


box.addEventListener('click', function(e){
   create(e)
 })


box.addEventListener("mousemove", function (e){
  pencils.style.top = `${-15 + e.clientY}px`;
  pencils.style.left = `${-15 + e.clientX}px`;

  if (continnus) {
    create(e)
  }
});

box.addEventListener('dblclick', ()=>{
    continnus = true;
    console.log(continnus)
})
