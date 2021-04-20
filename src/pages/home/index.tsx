import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Container,
  Content,
  Informations,
  ButtonDashboard,
  StaticImageHome,
  PolygonOneImageHome,
  PolygonTwoImageHome,
} from './_style';

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Home = () => (
  <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
    <Container>
      <main>
        <Content>
          <section>
            <Informations>
              <motion.div transition={{ delay: 0.4 }}>
                <motion.h1 variants={fadeInUp}>ORGANIZE</motion.h1>

                <motion.h2 variants={fadeInUp}>
                  Seu gerenciador de compras online
                </motion.h2>

                <motion.h3 variants={fadeInUp}>
                  Nós te ajudamos a organizar suas compras
                </motion.h3>
              </motion.div>

              <ButtonDashboard>
                <motion.div variants={fadeInUp}>
                  <Link href="/signin">
                    <a>
                      <button className="signIn_btn" type="button">
                        Entrar
                      </button>
                    </a>
                  </Link>
                  <Link href="/signup">
                    <a>
                      <button className="signUp_btn" type="button">
                        Cadastre-se
                      </button>
                    </a>
                  </Link>
                </motion.div>
              </ButtonDashboard>
            </Informations>
          </section>

          <StaticImageHome>
            <motion.img
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/assets/Home.png"
              alt="Image Home"
              width={540}
              height={500}
            />
          </StaticImageHome>
        </Content>

        <PolygonOneImageHome>
          <motion.img
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            src="/assets/PolygonOne.png"
            alt="Image Polygon One Home"
            width={140}
            height={200}
          />
        </PolygonOneImageHome>

        <PolygonTwoImageHome>
          <motion.img
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            src="/assets/PolygonTwo.png"
            alt="Image Polygon Two Home"
            width={140}
            height={200}
          />
        </PolygonTwoImageHome>
      </main>
    </Container>
  </motion.div>
);

export default Home;
