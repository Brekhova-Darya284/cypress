describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки восст. пароль

         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текс
         cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })
    
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки восст. пароль

        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1123'); //Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текс
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

   })

   it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки восст. пароль

    cy.get('#mail').type('1german@dolnikov.ru'); //Ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текс
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

})
        
   it('Прверка, что в логине нет @', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки восст. пароль

    cy.get('#mail').type('germandolnikov.ru'); //Ввели  логин без @
    cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текс
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

})

it('Прверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки восст. пароль
    cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту для восстановления
    cy.get('#restoreEmailButton').click(); // Нажала отправить код
    
    
    
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после авт. вижу текс
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

})

it('В логине есть строчные буквы', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки восст. пароль

    cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин, где есть строчные буквы
    cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текс
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

})

 })
 
 // План
 // Найти поле логин и ввести правильный логин
 // Найти поле пароль и ввести правильный пароль
 // Найти поле войти и нажать на нее
 // Проверить, что авторизация прошла успешна
 // (Проверить нужный текст и наличие кнопки крестик)