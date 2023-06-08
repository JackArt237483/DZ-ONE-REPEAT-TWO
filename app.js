//1)  Потом к уроку еще одну залью

const parent = document.querySelector("#parent")
const child = document.querySelector("#child_block")

function moveChildBlock(distance, duraction) {
  const rightPosition = parseInt(child.style.right) || 0// Получаем занчение в CHILD
  const position = rightPosition + distance // вычесляем позицию блока
  child.style.right = position + "px" // устанавливаешь новое значение блока

  //Проверка  досгинуто ли значение  конца 
  if(position < 250) {
    setTimeout(function() {  //Если расстояние меньше выбранной позиции то вызываем функцию 
      moveChildBlock(distance,duraction)
    }, duraction);
  }
}

moveChildBlock(10,1000) // здесь настройки для дочернего блока
