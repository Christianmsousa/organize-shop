import { SignUpSchema } from '../../schema/SignUpSchema';
import * as S from './_style';
import { Input } from '../../components/Input';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
const easing = [0.6, -0.5, 0.01, 0.99];
import { Formik, Form } from 'formik';
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

const SignUp = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <S.Container>
        <main>
          <S.Content>
            <section>
              <S.Informations>
                <motion.div transition={{ delay: 0.4 }}>
                  <motion.h1 variants={fadeInUp}>ORGANIZE</motion.h1>
                  <motion.h2 variants={fadeInUp}>Cadastre-se</motion.h2>
                  <motion.div variants={fadeInUp}>
                    <Formik
                      initialValues={{ name: '', email: '', password: '' }}
                      validationSchema={SignUpSchema}
                      onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <Input
                            name="name"
                            type="text"
                            icon="/assets/IconName.svg"
                            placeholder="Nome"
                          />
                          <Input
                            name="email"
                            type="email"
                            icon="/assets/IconEmail.svg"
                            placeholder="Email"
                          />
                          <Input
                            name="password"
                            type="password"
                            icon="/assets/IconSenha.svg"
                            placeholder="Senha"
                          />
                          <S.ButtonSubmit title="Cadastrar" />
                        </Form>
                      )}
                    </Formik>
                  </motion.div>
                </motion.div>
              </S.Informations>
            </section>

            <S.StaticImageHome>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                src="/assets/Signup.png"
                alt="Image Home"
                width={540}
                height={435}
              />
            </S.StaticImageHome>
          </S.Content>

          <S.PolygonOneImageHome>
            <motion.img
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/assets/PolygonOne.png"
              alt="Image Polygon One Home"
              width={140}
              height={200}
            />
          </S.PolygonOneImageHome>

          <S.PolygonTwoImageHome>
            <motion.img
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/assets/PolygonTwo.png"
              alt="Image Polygon Two Home"
              width={140}
              height={200}
            />
          </S.PolygonTwoImageHome>
        </main>
      </S.Container>
    </motion.div>
  );
};

export default SignUp;
