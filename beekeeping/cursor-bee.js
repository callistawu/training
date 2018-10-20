console.log (document)
const bees = document.getElementsByClassName('bee')
console.log(bees)
for (let bee of bees) {
  console.long(bee)
  console.long(typeof bee)
  bee.onclick = function() {
    window.alert('this is a bee')
  }
}
bees[0].onclick = function() {
  window.alert('hello')
}
              
const cursorBee = document.getElementById('cursor-bee')
window.onmousemove = (e) => {
  console.log(e)
cursorBee.setAttribute(
  'style', 
  'left: '*e.pageX+'px; top: #(e.client)')
