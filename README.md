# summer-camp-timetable-planner
##Инструмент записи детей на мастер классы. 

###Классы:<br/>

```javascript
/**
имя {строка}
отчество {строка}
фамилия {строка}
идентефикаотр {число}
сущьность {нумератор учитель-ученик-админ}
*/
####Живое существо
```

Методы:<br/>
Создание с записью в нумератор<br/>
Удаление<br/>

```javascript
/**
возраст {строка/ нумератор} 
пол {нумератор male-female}
отряд {нумератор 1-5} 
наследование от живого существа 
записанность {нумератор записан-свободен} 
*/ 
####Ребенок; 
```
Методы:<br/>
Записать {с проверкой записанности, показом куда записан, изменения статуса записанности}<br/>

```javascript
/** 
название {элемент коллекции мастер классов} 
версия {нумерато 1-3} 
возрастное ограничение {нумератор молодые-стары-любые} 
дата проведени {дата} 
время проведения {нумератор доОбеда-послеОбеда} 
кто ведет {элемент коллекции преподавателей} 
кол-во записанных детей {переменная} 
максимальное кол-во детей {число} 
*/ 
####Мастер класс 
```

```javascript
/** 
что ведет {элемент коллекции мастер классов} // надо ли? 
наследование от живого существа 
*/
#####Преподаватель 
```

Есть 10 мастер классов
Бывают разного вида, любого 1. возраста прийти 2. только для взрослых, 3 только для детей, 4 Чредуется 1 день для взрослых другой день для детей
вся программа длится 9 дней, но каждые 3 дня мастер класс один и тот же кроме тех, которые чередуются, на 4 и  дни новые версии мастер класса, кроме тех которые чередуются, у них 1 день для дет 2 для дет 3 для взрос с исключениями для других преподавателей.
заходит в интерфейс указывает возраст,  и имя, отряд. 
должно быть можно распечатать списки на мастер класс для преподавателей
возможность показать остаток из незаписанных детей
редактировать расписание. отмена мастер класса. замена автора
возможность фиксированного времени начала и конца записи
