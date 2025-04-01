import { motion } from "framer-motion";
import logo from "./assets/logo.jpg";

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
        'Você sabia que o Cosmopolitan, ou "Cosmo", ganhou popularidade nos anos 90 graças à série "Sex and the City"? 🍸 Este drink elegante e moderno, feito com vodka, licor de laranja, suco de cranberry e suco de limão, foi criado na década de 1980. É conhecido por seu sabor refrescante e levemente doce, e é frequentemente decorado com uma rodela de limão ou uma casca de laranja. O Cosmo é um símbolo de sofisticação e estilo! 🍋',
      price: 28.0,
      category: "Especiais",
      image: "/src/assets/drink1.png",
    },
    {
      id: 2,
      name: "✨ Soda Italiana ✨",
      description:
        "Você sabia que a soda italiana, apesar do nome, foi popularizada nos Estados Unidos? 🥤 Esta bebida refrescante é feita com água com gás e xarope de frutas, sendo uma opção perfeita para quem busca algo saboroso e sem álcool. Os xaropes usados originalmente vinham da Itália, dando origem ao nome. Hoje, a soda italiana é apreciada em todo o mundo por sua versatilidade e frescor. 🍒",
      price: 20.0,
      category: "Sem Álcool",
      image: "/src/assets/drink2.png",
    },
    {
      id: 3,
      name: "✨ Enzoni ✨",
      description:
        "Você sabia que o Enzoni é uma versão moderna do clássico Negroni? 🥂 Mas com uma reviravolta saborosa: ele mistura gin, bitter e uvas frescas, trazendo um toque frutado e único ao perfil amargo do Negroni original. 🥃Uma fusão perfeita entre tradição e inovação, para quem gosta de explorar novos sabores!",
      price: 15.0,
      category: "Especiais",
      image: "/src/assets/drink3.png",
    },
    {
      id: 4,
      name: "✨Whiskey Sour com Clara de Ovo✨",
      description:
        "A adição de clara de ovo ao Whiskey Sour não é só estética! Esse ingrediente cria uma espuma cremosa e suave, elevando a textura do drink a outro nível. Além disso, suaviza a acidez do limão e harmoniza os sabores, deixando o coquetel ainda mais equilibrado. Essa versão, chamada Boston Sour, é um verdadeiro clássico da mixologia e prova que pequenos detalhes fazem toda a diferença!",
      price: 15.0,
      category: "Especiais",
      image: "/src/assets/drink4.png",
    },
    {
      id: 5,
      name: "✨ New York Sour ✨",
      description:
        "Você sabia que a técnica de flutuação do vinho tinto sobre o whiskey sour foi inspirada na dualidade e diversidade de Nova York? Essa camada de vinho não só cria um visual impressionante, mas também harmoniza a acidez do sour com a suavidade frutada do vinho, proporcionando uma experiência única a cada gole. Um brinde à inovação e ao espírito da Big Apple! 🍎",
      price: 15.0,
      category: "Especiais",
      image: "/src/assets/drink5.png",
    },
    {
      id: 6,
      name: "✨ Boulevardier ✨",
      description:
        "Você sabia que o Boulevardier é uma variação do clássico Negroni? 🥃 Criado nos anos 1920 por um americano chamado Erskine Gwynne enquanto estava em Paris, este coquetel substitui o gin por bourbon ou rye whisky. Combinando whisky, vermute doce e Campari, o Boulevardier oferece um sabor robusto e sofisticado, perfeito para os amantes de drinks intensos e equilibrados. 🍊",
      price: 15.0,
      category: "Especiais",
      image: "/src/assets/drink6.png",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary relative">
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${logo})` }}
      />
      <header className="bg-secondary shadow-lg">
        <div className="container-custom py-4 flex justify-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-primary">
                MontanariDrinks
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom py-8">
        <section className="mb-16">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.div
              className="w-full md:w-1/3"
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <img
                src={logo}
                alt="Logo Montanari Drinks"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              className="w-full md:w-2/3 space-y-4 text-gray-300"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Montanari Drinks: A Arte da Mixologia ao Seu Alcance
              </h2>

              <p>
                Descubra a magia dos drinks com a Montanari Drinks, a nova
                sensação online diretamente de Itu! Fundada por duas mulheres
                apaixonadas por criar experiências sensoriais únicas, Montanari
                Drinks é o resultado da união perfeita entre ciência, arte e
                paixão, tudo ao alcance de um clique.
              </p>

              <p>
                Imagine-se saboreando coquetéis artesanais meticulosamente
                preparados por nossas fundadoras: uma farmacêutica e bartender
                talentosa que domina a ciência da mixologia, e uma barista e
                graduanda em Eventos, cuja expertise em combinar sabores e criar
                atmosferas transformadoras é incomparável.
              </p>

              <p>
                Na Montanari Drinks, cada drink é uma obra-prima. Oferecemos uma
                ampla variedade de opções alcoólicas e não alcoólicas, todas
                elaboradas com ingredientes de altíssima qualidade e uma
                criatividade sem limites. Quer você esteja em busca de um
                clássico sofisticado ou de uma novidade refrescante, nossos
                drinks são feitos sob medida para surpreender e encantar todos
                os seus sentidos.
              </p>

              <p>
                Com a conveniência do nosso serviço online, você pode desfrutar
                dos nossos drinks exclusivos onde quer que esteja. Navegue pelo
                nosso site, faça seu pedido e receba em casa coquetéis que
                transformarão qualquer ocasião em um evento especial.
              </p>

              <p className="text-primary font-semibold">
                Montanari Drinks - onde a ciência encontra a arte e a paixão se
                transforma em sabor, tudo isso entregue diretamente na sua
                porta.
              </p>
            </motion.div>
          </motion.div>
        </section>

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

        <section className="mt-16 bg-secondary/80 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Entre em Contato
            </h2>
            <p className="text-gray-300">
              Estamos aqui para tornar seu evento ainda mais especial!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="flex flex-col items-center p-6 bg-secondary rounded-lg shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src="/src/assets/whatsapp.png"
                alt="WhatsApp"
                className="w-8 h-8 mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-300 text-center">(11) 97104-0179</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 bg-secondary rounded-lg shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-primary text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Localização
              </h3>
              <p className="text-gray-300 text-center">Itu, São Paulo</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-300">
              Siga-nos nas redes sociais para ficar por dentro das novidades!
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.instagram.com/montanaridrinks/"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <img
                  src="/src/assets/instagram.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
