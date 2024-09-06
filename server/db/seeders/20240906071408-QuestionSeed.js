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
          question: "Что может путешествовать по миру, оставаясь в одном и том же углу?",
          answer: "Почтовая марка на конверте",
          image: "https://w7.pngwing.com/pngs/434/111/png-transparent-graphy-travel-boy-painted-hat-photography-thumbnail.png",
          themeId: 2,
        },
        {
          question: "Вы находитесь в самолете, перед вами лошадь, сзади вас - автомобиль. Где вы находитесь?",
          answer: "На карусели",
          image: "https://img.lovepik.com/element/40022/5126.png_860.png",
          themeId: 2,
        },
        {
          question: "Чем заканчивается ночь и день?",
          answer: "Мягким знаком",
          image: "https://w7.pngwing.com/pngs/589/897/png-transparent-circadian-rhythm-day-night-pattern-night-and-day-blue-angle-sleep-thumbnail.png",
          themeId: 2,
        },
        {
          question: "В каком году люди едят больше обычного?",
          answer: "В високосном",
          image: "https://w7.pngwing.com/pngs/82/233/png-transparent-boy-eating-boy-eating-map-food-hand-eating-thumbnail.png",
          themeId: 2,
        },
        {
          question: "Какой узел нельзя развязать?",
          answer: "Железнодорожный",
          image: "https://w7.pngwing.com/pngs/921/717/png-transparent-rope-knot-plumeria-14-2-1-rope-hardware-accessory-knot.png",
          themeId: 2,
        },
        {
          question: "Что можно видеть с закрытыми глазами?",
          answer: "Сон",
          image: "https://w7.pngwing.com/pngs/195/876/png-transparent-breathing-man-happy-relax-closed-eyes-young-adult-breath-yoga-male-thumbnail.png",
          themeId: 2,
        },
        {
          question: "На какой вопрос нельзя дать положительный ответ?",
          answer: "спишь?",
          image: "https://w7.pngwing.com/pngs/6/593/png-transparent-explore-answer-business-cooperation-business-discussion-arrow-thumbnail.png",
          themeId: 2,
        },
        {
          question: "Под каким деревом сидит заяц, когда идет дождь?",
          answer: "Под мокрым",
          image: "https://img.lovepik.com/png/20231128/the-black-rabbit-sits-sign-white-poster_721424_wh860.png",
          themeId: 2,
        },
        {
          question: "Где вода стоит столбом?",
          answer: "В стакане",
          image: "https://w7.pngwing.com/pngs/462/713/png-transparent-tap-drinking-water-drop-liquid-flowing-water-blue-effect-food-thumbnail.png",
          themeId: 2,
        },
        {
          question: "Когда беззубый чувствует боль от зубов?",
          answer: "Когда его укусила собака",
          image: "https://w7.pngwing.com/pngs/900/469/png-transparent-cartoon-tooth-pathology-healthy-teeth-face-hand-people-thumbnail.png",
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
