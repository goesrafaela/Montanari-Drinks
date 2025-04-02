import { motion } from "framer-motion";

// O logo e as imagens agora são referenciadas corretamente da pasta public
const logo = "/assets/logo.jpg";

interface Drink {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

function App() {
  const drinks: Drink[] = [
    {
      id: 1,
      name: "✨ Cosmopolitan ✨",
      description:
        'Você sabia que o Cosmopolitan, ou "Cosmo", ganhou popularidade nos anos 90 graças à série "Sex and the City"? 🍸 Este drink elegante e moderno, feito com vodka, licor de laranja, suco de cranberry e suco de limão, foi criado na década de 1980.',
      price: 28.0,
      category: "Especiais",
      image: "/assets/drink1.png", // Correto agora
    },
    {
      id: 2,
      name: "✨ Soda Italiana ✨",
      description:
        "Você sabia que a soda italiana, apesar do nome, foi popularizada nos Estados Unidos? 🥤 Esta bebida refrescante é feita com água com gás e xarope de frutas.",
      price: 20.0,
      category: "Sem Álcool",
      image: "/assets/drink2.png",
    },
    {
      id: 3,
      name: "✨ Enzoni ✨",
      description:
        "Você sabia que o Enzoni é uma versão moderna do clássico Negroni? 🥂 Mas com uma reviravolta saborosa: ele mistura gin, bitter e uvas frescas, trazendo um toque frutado e único.",
      price: 15.0,
      category: "Especiais",
      image: "/assets/drink3.png",
    },
    {
      id: 4,
      name: "✨Whiskey Sour com Clara de Ovo✨",
      description:
        "A adição de clara de ovo ao Whiskey Sour não é só estética! Esse ingrediente cria uma espuma cremosa e suave, elevando a textura do drink a outro nível.",
      price: 15.0,
      category: "Especiais",
      image: "/assets/drink4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary relative">
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${logo})` }}
      />

      <main className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinks.map((drink) => (
            <motion.div
              key={drink.id}
              className="card bg-secondary/80 p-6 rounded-xl shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {drink.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">{drink.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
