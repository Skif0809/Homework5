'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add("menu-item");                          // Добавили новый li, с классом...
menuItemLi.textContent = "Пятый пункт";                       // и текстом
menu.appendChild(menuItemLi);                                   


document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Поменяли фон


title.textContent = "Мы продаём только подлинную технику Apple"    // Заменили текст

adv.remove();                                                   // Удалили рекламу со страницы

let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Спросили пользователя про его отношение к технике Apple
promptforApple.textContent = yourOpinion;