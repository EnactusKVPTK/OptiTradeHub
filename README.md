# Документаия к OptiTreadeHub

## Описание проекта

Проект представляет собой веб-сайт, разработанный с использованием Node.js для серверной части и React для клиентской части. Сайт предназначен для публикации и просмотра контента, а также для регистрации и аутентификации пользователей.

## Установка и настройка

    1. Клонирование репозитория: Выполните команду git clone с URL репозитория.
    https://github.com/EnactusKVPTK/OptiTradeHub.git

    2. Установка зависимостей серверной части: Перейдите в корневую директорию проекта и выполните команду npm install.
    cd server
    npm install

    3. Установка зависимостей клиентской части: Перейдите в директорию client и выполните команду npm install.
    cd client
    npm install

    4. Настройка переменных окружения: Создайте файл .env в корневой директории сервера проекта (server) и укажите необходимые переменные окружения, такие как PORT(5000), DB_NAME(store_opti), DB_USER(postgres), DB_PASSWORD(root), DB_HOST(localhost), DB_PORT(5432) и SECRET_KEY.
    Создайте файл .env в корневой директории клиента проекта (client) и укажите необходимые переменные окружения REACT_APP_API_URL()'http://localhost:5000/')

    5.Запуск сервера: В корневой директории проекта выполните команду npm run dev. Заранее настроив и запустив базу данных PostgresSQL и создав в ней базу данных (По умолчанию: store_opti)
    npm run dev

    6. Запуск клиента: Перейдите в директорию client и выполните команду npm start.
    cd client
    npm start

    7. Открытие веб-сайта: Откройте браузер и перейдите по адресу http://localhost:3000

## Структура проекта

Проект разделен на две основные части:

    server: Содержит серверную часть приложения на Node.js.
        index.js: Главный файл приложения, который настраивает сервер и определяет маршруты.
        models/: Содержит модели данных для работы с базой данных PostgresSQL.
        routes/: Содержит маршруты API для обработки запросов от клиентской части.
        static/: Содержит статические файлы.
        middleware/: Содержит файлы middleware которые проверяют запросы API на корректность.
        error/: Содержит файд ApiError который возрашает код и сообшение ошибки.
        controller:/ Содержит контроллеры которые вызываются через API выполняют основную логику (создание пользователя, получения всех продуктов и т.д.)
    client: Содержит клиентскую часть приложения на React.
        public/: Статические файлы, такие как HTML и изображения.
        src/: Исходный код React-приложения.
            components/: Компоненты React, используемые для отображения пользовательского интерфейса.
                modals:/ Содержит компоненты создания продуктов и пользователя.
            pages/: Отдельные страницы веб-сайта, представленные в виде компонентов React.
            http/: Клиентские службы для выполнения HTTP-запросов к серверной части.
            store/: Содерижт описание и характеристики продукта и пользователя.
            utils/: Содержит файл констант машрутизации.
            assets/: Содержит картинки, иконки и т.д. используемые на клиенте.

## Зависимости

Серверная часть (Node.js)
    express: Фреймворк для создания веб-приложений на Node.js.
    sequelize: Инструмент для работы с PostgreSQL, обеспечивающий моделирование данных и взаимодействие с базой данных.
    jsonwebtoken: Библиотека для создания и верификации JSON Web Tokens для аутентификации пользователей.
    cors: Предназначена для обработки HTTP-запросов с применением политики CORS (Cross-Origin Resource Sharing) на сервере.
    uuid: Используется для генерации уникальных идентификаторов.
    dotenv: Предназначена для загрузки переменных окружения из файла .env в вашем проекте.
    bcrypt: Предназначена для хеширования паролей с использованием алгоритма bcrypt.
    pg: Позволяющий взаимодействовать с базой данных PostgreSQL из Node.js приложений.
    pg-hstor: это модуль для Node.js, предназначенный для работы с типом данных hstore в PostgreSQL.

Клиентская часть (React)
    react: JavaScript библиотека для создания пользовательских интерфейсов.
    react-router-dom: Библиотека для навигации между различными компонентами React в веб-приложениях.
    axios: Библиотека для выполнения HTTP-запросов из браузера или Node.js.
    bootstrap: Набор готовых компонентов, стилей и JavaScript плагинов.
    dotenv: Предназначена для загрузки переменных окружения из файла .env в вашем проекте.
    mobx: Библиотека управления состоянием для JavaScript-приложений.
    jwt-decode: Это библиотека для декодирования JSON Web Token (JWT) в JavaScript.
    web-vitals: это библиотека, предназначенная для измерения и отслеживания ключевых метрик производительности веб-страниц.
