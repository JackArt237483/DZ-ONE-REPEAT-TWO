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


// 2) task


function validateForm() {
 

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var repeatPassword = document.getElementById("repeat_password").value;

  var emailRegex = /^[\w.-]{4,16}@gmail\.com$/;
  var passwordRegex = /^[A-Z][a-zA-Z0-9]{4,16}$/;

  if (!emailRegex.test(email)) {
    alert("Введите действительный адрес электронной почты Gmail");
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert("Пароль должен начинаться с большой буквы, содержать только буквы и цифры, и иметь длину от 4 до 16 символов");
    return false;
  }

  if (password !== repeatPassword) {
    alert("Пароли не совпадают");
    return false;
  }

  console.log("Все поля заполнены")
  return true
}