ymaps.ready(init);


function init(){
    var myMap = new ymaps.Map("map", {
    center: [55.831054, 37.629914],
    zoom: 15
    });

    document.getElementById('firstRoute').onclick = function () {
        //curl 'https://api.routing.yandex.net/v2/route?waypoints=55.734494627139355,37.68191922355621|55.733441295701056,37.59027350593535&apikey=04fcaae6-825a-469a-86fe-eabc5755edd4'
        myMap.setCenter([55.824193, 37.639714]);
        myMap.setZoom(17);
        var myPolyline = new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
            [55.822431, 37.641481],
            [55.822731, 37.642189],
            [55.824193, 37.639714],
            [55.825192, 37.638163],
            [55.826243, 37.637566]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            balloonContent: "До главного входа"
        }, {
            // Задаем опции геообъекта.
            // Отключаем кнопку закрытия балуна.
            balloonCloseButton: false,
            // Цвет линии.
            strokeColor: "#000000",
            // Ширина линии.
            strokeWidth: 4,
            // Коэффициент прозрачности.
            strokeOpacity: 0.5
        });
        myMap.geoObjects.add(myPolyline)
    }
}
let a = navigator.userAgent;


document.getElementById('newRoute').onclick = function () {
    let ul = document.createElement('ul');
    ul.className = "newpoint";
    ul.innerHTML = `<form method="post">
            <input class="email" maxlength="30" type="text" placeholder="Введите Email" name="email">
            <input class="password" maxlength="20" type="password" size="60" placeholder="Пароль" name="password">
            <div class="small_text">Мы не собираем и не передаём ваши персональные данные. Регистрация необходима для
                сохранения маршрутов в избранное.</div>
            <a href="main_page"><button class= "entry_button" name="entry_button">Войти</button></a>
        </form>




    `;

    newRoute.after(ul);

}