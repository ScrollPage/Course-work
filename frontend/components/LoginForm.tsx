import { Box, Button } from '@chakra-ui/react';
import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import { MyField } from './MyField';
import { object, string } from 'yup';
import useTranslation from 'next-translate/useTranslation';

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { t } = useTranslation();

  const validationSchema = object().shape({
    email: string()
      .email(t('login:incorrect-email-adress'))
      .required(t('login:enter-your-email-adress')),
    password: string()
      .matches(
        // @ts-ignore: Unreachable code error
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
        t('login:very-easy-password')
      )
      .required(t('login:enter-your-password')),
  });

  return (
    <Box width="full">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // await dispatch(authLogin(values.email, values.password, true));
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            resetForm();
          }, 2000);
        }}
      >
        {(props: FormikProps<FormValues>) => (
          <Form>
            <MyField
              size="lg"
              label={t('login:email-adress')}
              name="email"
              type="email"
              placeholder={t('login:enter-your-email-adress')}
            />
            <MyField
              size="lg"
              label={t('login:password')}
              name="password"
              type="password"
              placeholder={t('login:enter-your-password')}
            />
            <Button
              type="submit"
              w="full"
              mt="8"
              isLoading={props.isSubmitting}
              colorScheme="purple"
            >
              {t('login:submit')}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
