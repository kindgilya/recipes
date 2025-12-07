class MockServer {
  constructor() {
    this.recipes = this._generateMockRecipes(); // Генерируем тестовые рецепты при создании экземпляра
  }

  /**
   * Имитирует задержку ответа сервера.
   * @param {number} ms - Количество миллисекунд задержки.
   * @returns {Promise<void>}
   */
  _delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Генерирует массив моковых рецептов.
   * @private
   */
  _generateMockRecipes() {
    const dishes = [
      "Карбонара",
      "Борщ",
      "Суши Филадельфия",
      "Курица Терияки",
      "Пицца Маргарита",
      "Салат Цезарь",
      "Лазанья",
      "Паста с морепродуктами",
      "Чили кон карне",
      "Тако с говядиной",
      "Бургер",
      "Стейк Рибай",
      "Крем-суп из шампиньонов",
      "Шарлотка",
      "Греческий салат",
      "Плов",
      "Рагу из овощей",
      "Сырники",
      "Блины",
      "Оливье",
    ];

    const descriptions = [
      "Классический рецепт, который всегда радует.",
      "Идеальное блюдо для любого случая.",
      "Попробуйте это уникальное сочетание вкусов.",
      "Легко приготовить, трудно остановиться.",
      "Отличный выбор для быстрого и вкусного ужина.",
      "Традиционный вкус с современным подходом.",
    ];

    const difficulties = ["Легко", "Средне", "Сложно"];
    const cookTimeMinutes = [30, 45, 8, 10.5, 5];
    const prepTimeMinutes = [3, 5, 7, 5, 5];
    const rating = [3.0, 4.5, 1, 1.5, 2];
    const servings = [2, 4, 6, 8];
    const caloriesPerServing = [
      254, 456, 645, 868, 547, 676, 68, 987, 569, 456, 457, 67, 78, 89,
    ];
    const tags = [
      "Мясо",
      "Рыба",
      "Вегетарианское",
      "Паста",
      "Суп",
      "Выпечка",
      "Салат",
      "Азиатская",
      "Мексиканская",
      "Итальянская",
    ];
    const cuisine = [
      "Азиатская",
      "Мексиканская",
      "Итальянская",
      "Русская",
      "Американская",
    ];
    const mealType = ["Завтрак", "Обед", "Ужин", "Снек", "Десерт"];

    const ingredients = [
      "Масло оливковое",
      "Лук репчатый",
      "Чеснок",
      "Соль",
      "Перец черный",
      "Помидоры",
      "Сыр пармезан",
      "Яйца",
      "Мука",
      "Молоко",
      "Вода",
      "Куриное филе",
      "Говядина",
      "Свинина",
      "Рис",
      "Картофель",
      "Морковь",
      "Капуста",
      "Огурцы",
      "Перец болгарский",
      "Зелень",
      "Сметана",
      "Майонез",
      "Сахар",
      "Уксус",
      "Томатная паста",
      "Грибы",
    ];

    const instructions = [
      "Нарежьте все ингредиенты мелкими кубиками.",
      "Обжарьте лук и чеснок до золотистого цвета.",
      "Добавьте основные ингредиенты и готовьте до мягкости.",
      "Влейте соус и тушите на медленном огне.",
      "Подавайте горячим, посыпав свежей зеленью.",
      "Запекайте в духовке при 180°C до готовности.",
      "Отварите пасту до состояния аль денте.",
      "Приготовьте соус, смешав все компоненты.",
      "Украсьте блюдо перед подачей на стол.",
    ];

    const recipes = [];
    for (let i = 1; i <= 50; i++) {
      // Генерируем 50 рецептов
      const generatedIngredients = Array.from(
        { length: Math.floor(Math.random() * 5) + 3 },
        () => {
          const ingredientName =
            ingredients[Math.floor(Math.random() * ingredients.length)];
          const amount = (Math.floor(Math.random() * 20) + 1) * 5; // От 5 до 100
          const unit = Math.random() > 0.5 ? "гр" : "мл"; // Случайная единица измерения
          return `${ingredientName} - ${amount} ${unit}`;
        }
      );

      // Генерируем от 4 до 8 шагов инструкций
      const generatedInstructions = Array.from(
        { length: Math.floor(Math.random() * 5) + 4 },
        (_, stepIndex) => {
          return `${stepIndex + 1}. ${
            instructions[Math.floor(Math.random() * instructions.length)]
          }`;
        }
      );
      recipes.push({
        id: i,
        name: `${dishes[Math.floor(Math.random() * dishes.length)]} #${i}`,
        description:
          descriptions[Math.floor(Math.random() * descriptions.length)],
        image: `https://picsum.photos/id/${100 + i}/300/200`, // Красивые случайные картинки
        difficulty:
          difficulties[Math.floor(Math.random() * difficulties.length)],
        cookTimeMinutes:
          cookTimeMinutes[Math.floor(Math.random() * cookTimeMinutes.length)],
        prepTimeMinutes:
          prepTimeMinutes[Math.floor(Math.random() * prepTimeMinutes.length)],
        servings: servings[Math.floor(Math.random() * servings.length)],
        rating: rating[Math.floor(Math.random() * rating.length)],
        tags: Array.from(
          { length: Math.floor(Math.random() * 3) + 1 },
          () => tags[Math.floor(Math.random() * tags.length)]
        ),
        ingredients: generatedIngredients,
        instructions: generatedInstructions,
        caloriesPerServing:
          caloriesPerServing[
            Math.floor(Math.random() * caloriesPerServing.length)
          ],
        cuisine: cuisine[Math.floor(Math.random() * cuisine.length)],
        mealType: mealType[Math.floor(Math.random() * mealType.length)],
      });
    }
    return recipes;
  }

  /**
   * Возвращает список рецептов с пагинацией и задержкой.
   * @param {Object} options
   * @param {number} [options.limit=10] - Количество рецептов на странице.
   * @param {number} [options.page=1] - Номер запрашиваемой страницы (начиная с 1).
   * @param {number} [options.delayMs=500] - Задержка в миллисекундах.
   * @returns {Promise<{recipes: Array, total: number, hasNextPage: boolean}>}
   */
  async getRecipes({ limit = 10, page = 1, delayMs = 500 } = {}) {
    await this._delay(delayMs);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedRecipes = this.recipes.slice(startIndex, endIndex);
    const totalRecipes = this.recipes.length;
    const hasNextPage = endIndex < totalRecipes;

    return {
      limit,
      recipes: paginatedRecipes,
      total: totalRecipes,
      hasNextPage: hasNextPage,
    };
  }

  /**
   * Возвращает детальный рецепт по ID с задержкой.
   * @param {string} id - ID рецепта.
   * @param {number} [delayMs=500] - Задержка в миллисекундах.
   * @returns {Promise<Object|null>} - Рецепт или null, если не найден.
   */

  async getRecipeById(id, delayMs = 500) {
    await this._delay(delayMs);

    const recipe = this.recipes.find((r) => r.id === id);

    // Можно добавить имитацию ошибки, если рецепт не найден
    // if (!recipe) {
    //   throw new Error(Recipe with ID ${id} not found.);
    // }

    return recipe || null;
  }
}

export default new MockServer(); // Экспортируем синглтон-экземпляр
