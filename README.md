# summer-camp-timetable-planner
##Инструмент записи детей на мастер классы. 

Основное действующие лица:<br/>
/**<br/>
возраст {строка} <br/>
имя {строка} <br/>
фамилия {строка} <br/>
отряд {нумератор 1-5} <br/>
идентефикаотр {число} <br/>
*/ <br/>
Ребенок; <br/>

/** <br/>
название {элемент коллекции мастер классов} <br/>
версия {нумерато 1-3} <br/>
возрастное ограничение {нумератор молодые-стары-любые} <br/>
дата проведени {дата} <br/>
время проведения {нумератор доОбеда-послеОбеда} <br/>
кто ведет {элемент коллекции преподавателей} <br/>
кол-во записанных детей {переменная} <br/>
максимальное кол-во детей {число} <br/>
*/ <br/>
Мастер класс <br/>

/** <br/>
имя {строка} <br/>
фамилия {срока} <br/>
что ведет {элемент коллекции мастер классов} // надо ли? <br/>
идентификатор {число} <br/>
*/
Преподаватель <br/>

Есть 10 мастер классов
Бывают разного вида, любого 1. возраста прийти 2. только для взрослых, 3 только для детей, 4 Чредуется 1 день для взрослых другой день для детей
вся программа длится 9 дней, но каждые 3 дня мастер класс один и тот же кроме тех, которые чередуются, на 4 и  дни новые версии мастер класса, кроме тех которые чередуются, у них 1 день для дет 2 для дет 3 для взрос с исключениями для других преподавателей.
заходит в интерфейс указывает возраст,  и имя, отряд. 
должно быть можно распечатать списки на мастер класс для преподавателей
возможность показать остаток из незаписанных детей
редактировать расписание. отмена мастер класса. замена автора
возможность фиксированного времени начала и конца записи
