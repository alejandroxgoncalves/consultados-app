 const preguntas = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Berlín", "Madrid", "París", "Roma"],
        correctAnswer: "París",
        category: "Geografía",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es el planeta más grande de nuestro sistema solar?",
        options: ["Tierra", "Júpiter", "Marte", "Saturno"],
        correctAnswer: "Júpiter",
        category: "Ciencia",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es el símbolo químico del agua?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: "H2O",
        category: "Ciencia",
        difficulty: "Fácil"
    },
    {
        question: "¿Quién escribió 'Romeo y Julieta'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correctAnswer: "Shakespeare",
        category: "Literatura",
        difficulty: "Fácil"
    },
    {
        question: "¿Qué país es conocido como la Tierra del Sol Naciente?",
        options: ["China", "Japón", "India", "Corea del Sur"],
        correctAnswer: "Japón",
        category: "Geografía",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es el número primo más pequeño?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        category: "Matemáticas",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es el ingrediente principal del guacamole?",
        options: ["Tomate", "Aguacate", "Cebolla", "Limón"],
        correctAnswer: "Aguacate",
        category: "Gastronomía",
        difficulty: "Fácil"
    },
    {
        question: "¿Qué elemento tiene el símbolo químico 'O'?",
        options: ["Oxígeno", "Osmio", "Ozono", "Olivino"],
        correctAnswer: "Oxígeno",
        category: "Ciencia",
        difficulty: "Media"
    },
    {
        question: "¿En qué año se hundió el Titanic?",
        options: ["1912", "1905", "1920", "1930"],
        correctAnswer: "1912",
        category: "Historia",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es el océano más grande de la Tierra?",
        options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        correctAnswer: "Pacífico",
        category: "Geografía",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa",
        category: "Geografía",
        difficulty: "Media"
    },
    {
        question: "¿Qué animal es conocido como el Rey de la Selva?",
        options: ["Elefante", "Tigre", "León", "Oso"],
        correctAnswer: "León",
        category: "Fauna",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuántos continentes hay en el mundo?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7",
        category: "Geografía",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es la raíz cuadrada de 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
        category: "Matemáticas",
        difficulty: "Fácil"
    },
    {
        question: "¿Quién descubrió la gravedad?",
        options: ["Einstein", "Newton", "Galileo", "Tesla"],
        correctAnswer: "Newton",
        category: "Ciencia",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es la sustancia natural más dura de la Tierra?",
        options: ["Oro", "Hierro", "Diamante", "Platino"],
        correctAnswer: "Diamante",
        category: "Ciencia",
        difficulty: "Difícil"
    },
    {
        question: "¿Cuál es el mamífero más grande?",
        options: ["Elefante", "Ballena Azul", "Jirafa", "Tiburón"],
        correctAnswer: "Ballena Azul",
        category: "Fauna",
        difficulty: "Media"
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        correctAnswer: "Da Vinci",
        category: "Arte",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correctAnswer: "Amazonas",
        category: "Geografía",
        difficulty: "Difícil"
    },
    {
        question: "¿Cuál es la moneda de Japón?",
        options: ["Won", "Yuan", "Yen", "Ringgit"],
        correctAnswer: "Yen",
        category: "Economía",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es el país más grande por área?",
        options: ["EE.UU.", "China", "India", "Rusia"],
        correctAnswer: "Rusia",
        category: "Geografía",
        difficulty: "Fácil"
    },
    {
        question: "¿Qué idioma se habla más en el mundo?",
        options: ["Inglés", "Mandarín", "Español", "Hindi"],
        correctAnswer: "Mandarín",
        category: "Lenguas",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es el desierto más grande del mundo?",
        options: ["Sahara", "Gobi", "Atacama", "Ártico"],
        correctAnswer: "Sahara",
        category: "Geografía",
        difficulty: "Media"
    },
    {
        question: "¿Quién inventó el teléfono?",
        options: ["Einstein", "Bell", "Tesla", "Ford"],
        correctAnswer: "Bell",
        category: "Historia",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es el país más pequeño del mundo?",
        options: ["Mónaco", "Ciudad del Vaticano", "Nauru", "Malta"],
        correctAnswer: "Ciudad del Vaticano",
        category: "Geografía",
        difficulty: "Difícil"
    },
    {
        question: "¿Qué planeta es conocido como el Planeta Rojo?",
        options: ["Marte", "Venus", "Saturno", "Tierra"],
        correctAnswer: "Marte",
        category: "Ciencia",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: ["K2", "Monte Everest", "Kangchenjunga", "Lhotse"],
        correctAnswer: "Monte Everest",
        category: "Geografía",
        difficulty: "Difícil"
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correctAnswer: "George Washington",
        category: "Historia",
        difficulty: "Fácil"
    },
    {
        question: "¿Qué ciudad es conocida como la Gran Manzana?",
        options: ["Los Ángeles", "Chicago", "Nueva York", "San Francisco"],
        correctAnswer: "Nueva York",
        category: "Geografía",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es la especie de ave más grande?",
        options: ["Águila", "Pingüino", "Avestruz", "Cóndor"],
        correctAnswer: "Avestruz",
        category: "Fauna",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es la moneda del Reino Unido?",
        options: ["Euro", "Dólar", "Libra", "Yen"],
        correctAnswer: "Libra",
        category: "Economía",
        difficulty: "Fácil"
    },
    {
        question: "¿En qué país se encuentran los canguros?",
        options: ["Sudáfrica", "Nueva Zelanda", "Australia", "India"],
        correctAnswer: "Australia",
        category: "Fauna",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es el punto de ebullición del agua en Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: "100°C",
        category: "Ciencia",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuál es el volcán más grande de la Tierra?",
        options: ["Monte St. Helens", "Monte Fuji", "Kilauea", "Mauna Loa"],
        correctAnswer: "Mauna Loa",
        category: "Geografía",
        difficulty: "Difícil"
    },
    {
        question: "¿Qué animal puede dormir hasta 3 años?",
        options: ["Caracol", "Oso", "Koala", "Murciélago"],
        correctAnswer: "Caracol",
        category: "Fauna",
        difficulty: "Difícil"
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
        category: "Geografía",
        difficulty: "Fácil"
    },
    {
        question: "¿Qué planeta está más cerca del sol?",
        options: ["Mercurio", "Venus", "Tierra", "Marte"],
        correctAnswer: "Mercurio",
        category: "Ciencia",
        difficulty: "Fácil"
    },
    {
        question: "¿Cuántos estados tiene Estados Unidos?",
        options: ["50", "52", "48", "51"],
        correctAnswer: "50",
        category: "Geografía",
        difficulty: "Fácil"
    },
    {
        question: "¿Qué animal es conocido por sus rayas blancas y negras?",
        options: ["Cebra", "Tigre", "Panda", "Jirafa"],
        correctAnswer: "Cebra",
        category: "Fauna",
        difficulty: "Fácil"
    },
    {
        question: "¿Quién es el autor de '1984'?",
        options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ray Bradbury"],
        correctAnswer: "George Orwell",
        category: "Literatura",
        difficulty: "Media"
    },
    {
        question: "¿Qué país inventó la pizza?",
        options: ["Italia", "Grecia", "Francia", "EE.UU."],
        correctAnswer: "Italia",
        category: "Gastronomía",
        difficulty: "Fácil"
    },
    {
        question: "¿Cómo se llama el barco que trajo a los peregrinos a América en 1620?",
        options: ["Mayflower", "Titanic", "Nina", "Santa María"],
        correctAnswer: "Mayflower",
        category: "Historia",
        difficulty: "Media"
    },
    {
        question: "¿Qué país es conocido por la Torre Eiffel?",
        options: ["Alemania", "Francia", "Italia", "España"],
        correctAnswer: "Francia",
        category: "Geografía",
        difficulty: "Fácil"
    },
    {
        question: "¿Qué animal es el mamífero terrestre más grande?",
        options: ["Elefante", "Rinoceronte", "Hipopótamo", "Jirafa"],
        correctAnswer: "Elefante",
        category: "Fauna",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es el río más largo de Estados Unidos?",
        options: ["Río Misisipi", "Río Colorado", "Río Ohio", "Río Amazonas"],
        correctAnswer: "Río Misisipi",
        category: "Geografía",
        difficulty: "Difícil"
    },
    {
        question: "¿Qué elemento es representado por el símbolo 'Na'?",
        options: ["Nitrógeno", "Neón", "Sodio", "Níquel"],
        correctAnswer: "Sodio",
        category: "Ciencia",
        difficulty: "Media"
    }
  ];

  export default preguntas;