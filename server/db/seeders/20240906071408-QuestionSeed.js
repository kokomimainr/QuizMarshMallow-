"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        // Вопросы для темы 1
        {
          question: 'Какой год был основан Санкт-Петербург?',
          answer: '1703',
          image: 'image1.jpg',
          themeId: 1
        },
        {
          question: 'Кто написал роман "Война и мир"?',
          answer: 'Лев Толстой',
          image: 'image2.jpg',
          themeId: 1
        },
        {
          question: 'Как называется самая большая планета Солнечной системы?',
          answer: 'Юпитер',
          image: 'image3.jpg',
          themeId: 1
        },
        {
          question: 'Какое государство является самым большим по территории?',
          answer: 'Россия',
          image: 'image4.jpg',
          themeId: 1
        },
        {
          question: 'Как называется столица Франции?',
          answer: 'Париж',
          image: 'image5.jpg',
          themeId: 1
        },
        {
          question: 'Как называется вещество, из которого состоит Солнце?',
          answer: 'Водород',
          image: 'image6.jpg',
          themeId: 1
        },
        {
          question: 'Кто был первым человеком в космосе?',
          answer: 'Юрий Гагарин',
          image: 'image7.jpg',
          themeId: 1
        },
        {
          question: 'Какая река является самой длинной в мире?',
          answer: 'Амазонка',
          image: 'image8.jpg',
          themeId: 1
        },
        {
          question: 'Как называется столица Японии?',
          answer: 'Токио',
          image: 'image9.jpg',
          themeId: 1
        },
        {
          question: 'Кто написал картину "Мона Лиза"?',
          answer: 'Леонардо да Винчи',
          image: 'image10.jpg',
          themeId: 1
        },

        // Вопросы для темы 2
        {
          question: 'Какой элемент периодической таблицы обозначается символом "O"?',
          answer: 'Кислород',
          image: 'image11.jpg',
          themeId: 2
        },
        {
          question: 'Как называется процесс преобразования воды в пар?',
          answer: 'Испарение',
          image: 'image12.jpg',
          themeId: 2
        },
        {
          question: 'Какое животное является символом Австралии?',
          answer: 'Кенгуру',
          image: 'image13.jpg',
          themeId: 2
        },
        {
          question: 'Как называется самый высокий водопад в мире?',
          answer: 'Анхель',
          image: 'image14.jpg',
          themeId: 2
        },
        {
          question: 'Как называется основная денежная единица Японии?',
          answer: 'Йена',
          image: 'image15.jpg',
          themeId: 2
        },
        {
          question: 'Как называется самый большой океан на Земле?',
          answer: 'Тихий океан',
          image: 'image16.jpg',
          themeId: 2
        },
        {
          question: 'Кто был первым президентом США?',
          answer: 'Джордж Вашингтон',
          image: 'image17.jpg',
          themeId: 2
        },
        {
          question: 'Как называется планета, известная своими кольцами?',
          answer: 'Сатурн',
          image: 'image18.jpg',
          themeId: 2
        },
        {
          question: 'Какой газ необходим для дыхания?',
          answer: 'Кислород',
          image: 'image19.jpg',
          themeId: 2
        },
        {
          question: 'Кто изобрел телефон?',
          answer: 'Александр Белл',
          image: 'image20.jpg',
          themeId: 2
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
