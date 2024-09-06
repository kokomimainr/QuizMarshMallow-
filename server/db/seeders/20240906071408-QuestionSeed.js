"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        // Вопросы для темы 1
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Кот спрашивает А?",
          image: "/public/Кот1.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Мистер Фреш",
          image: "/public/Кот2.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Happy Happy Happy",
          image: "/public/Кот3.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Банана Кот",
          image: "/public/Кот4.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Хрустящий Кот",
          image: "/public/Кот5.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Уставший кот",
          image: "/public/Кот6.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Голодный кот",
          image: "/public/Кот7.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Танцующий кот",
          image: "/public/Кот8.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Вайб Кот",
          image: "/public/Кот9.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Спорящие коты",
          image: "/public/Кот10.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Кот за рулем",
          image: "/public/Кот11.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Витающий Кот",
          image: "/public/Кот12.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Кричащий кот",
          image: "/public/Кот13.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Беспомощный кот",
          image: "/public/Кот14.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Кот пилит ногти",
          image: "/public/Кот15.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Кота тошнит",
          image: "/public/Кот16.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Кот танцует тектоник",
          image: "/public/Кот17.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Кот Максвелл",
          image: "/public/Кот18.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Шокированный кот",
          image: "/public/Кот19.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Кот бьет другого кота",
          image: "/public/Кот20.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Мокрый кот",
          image: "/public/Кот21.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Pop cat",
          image: "/public/Кот22.gif",
          themeId: 1,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Grumpy Cat",
          image: "/public/Кот23.gif",
          themeId: 1,
        },

        // Вопросы для темы 2
        {
          question:
            'Какой элемент периодической таблицы обозначается символом "O"?',
          answer: "Кислород",
          image: "image11.jpg",
          themeId: 2,
        },
        {
          question: "Опиши действия или эмоцию кота, если есть имя то вспомни его",
          answer: "Испарение",
          image: "image12.jpg",
          themeId: 2,
        },
        {
          question: "Какое животное является символом Австралии?",
          answer: "Кенгуру",
          image: "image13.jpg",
          themeId: 2,
        },
        {
          question: "Как называется самый высокий водопад в мире?",
          answer: "Анхель",
          image: "image14.jpg",
          themeId: 2,
        },
        {
          question: "Как называется основная денежная единица Японии?",
          answer: "Йена",
          image: "image15.jpg",
          themeId: 2,
        },
        {
          question: "Как называется самый большой океан на Земле?",
          answer: "Тихий океан",
          image: "image16.jpg",
          themeId: 2,
        },
        {
          question: "Кто был первым президентом США?",
          answer: "Джордж Вашингтон",
          image: "image17.jpg",
          themeId: 2,
        },
        {
          question: "Как называется планета, известная своими кольцами?",
          answer: "Сатурн",
          image: "image18.jpg",
          themeId: 2,
        },
        {
          question: "Какой газ необходим для дыхания?",
          answer: "Кислород",
          image: "image19.jpg",
          themeId: 2,
        },
        {
          question: "Кто изобрел телефон?",
          answer: "Александр Белл",
          image: "image20.jpg",
          themeId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
