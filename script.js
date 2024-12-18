let Arr = [
    ["Станьте профессионалом в управлении отелем и рестораном. Получите профильные навыки по направлениям ресторанного и барного сервиса, администрирования, поварского дела и хаускипинга. А также превосходные менеджерские компетенции по стандартам международного гостиничного бизнеса. ", "img/image.png", "167 000 ₽/год"],
    ["Мечтали стать шеф-поваром или управлять рестораном? Вы овладеете кулинарным искусством и научитесь организовать работу кухни, готовить блюда национальной и международной кухни, рассчитать их себестоимость и оптимизировать бизнес-процессы. Узнаете секреты успешной карьеры через выстраивание работы с гостями, финансами и персоналом.", "img/images (3).jpg", "167 000 ₽/год"],
    ["Узнаете секреты работы в службах F&B, front-office и housekeeping. Научим оптимизировать бизнес-процессы и создавать качественные гостиничные продукты. Пройдете  оплачиваемые стажировки в международных отелях Hyatt, Radisson,Grand Kavat с возможностью прямого общения с топ-менеджерами.", "img/image-235.webp", "167 000 ₽/год"],
    ["Освой надежную профессию в интересной сфере и получи возможность работать в красивейших отелях мира, организовывать обслуживание и досуг туристов, путешествовать и достойно зарабатывать.", "img/image-236.webp", "131 000 ₽/год"]
]

let currentIndex = 0;
let autoScrollInterval;

function moveSlide(direction) {
    const cards = document.getElementById('cards');
    const totalCards = cards.children.length;
    const cardsToShow = 5;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - cardsToShow;
    } else if (currentIndex > totalCards - cardsToShow) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (100 / cardsToShow);
    cards.style.transform = `translateX(${offset}%)`;
}

function startContinuousScroll() {
    const cards = document.getElementById('cards');
    const cardsToShow = 9;
    const scrollSpeed = 0.3; // Скорость прокрутки (мс между обновлениями)

    setInterval(() => {
        const totalCards = cards.children.length;
        const offsetIncrement = (100 / cardsToShow) / (1000 / scrollSpeed); // Постоянное смещение

        const offset = -(currentIndex + offsetIncrement) * (100 / cardsToShow);
        if (Math.abs(offset) >= totalCards * (65 / cardsToShow)) {
            currentIndex = 0; // Сброс в начало
        } else {
            currentIndex += offsetIncrement;
        }

        cards.style.transform = `translateX(${offset}%)`;
        cards.style.transition = 'transform linear';
    }, scrollSpeed);
}

function faq(element) {
    if(element.classList.contains('active')) {
      element.classList.remove('active');
    } else {
      element.classList.add('active');
    }
}

function special(element, number) {
    const activeElements = document.querySelectorAll('.active-special');
    activeElements.forEach(activeElement => {
        activeElement.classList.remove('active-special');
    });
    // Добавляем класс 'active-special' к новому элементу
    element.classList.add('active-special');
      document.getElementById('text').innerText = Arr[number][0];
      document.getElementById('img').src = Arr[number][1];
      document.getElementById('price').innerText = Arr[number][2];
}

function toggleMenu() {
    const menu = document.getElementById('header-bottom');
    if(menu.classList.contains('active-menu')) {
        menu.classList.remove('active-menu');
      } else {
        menu.classList.add('active-menu');
      }
}

startContinuousScroll();