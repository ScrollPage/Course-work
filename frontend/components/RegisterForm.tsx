import { Box, Button } from '@chakra-ui/react';
import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import { MyField } from './MyField';
import { object, string, ref } from 'yup';
import useTranslation from 'next-translate/useTranslation';

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const { t } = useTranslation();

  const validationSchema = object().shape({
    email: string()
      .email(t('register:incorrect-email-adress'))
      .required(t('register:enter-your-email-adress')),
    firstName: string()
      .min(3, t('register:very-short-firstname'))
      .max(15, t('register:very-long-firstname'))
      .required(t('register:enter-your-firstname')),
    lastName: string()
      .min(3, t('register:very-short-lastname'))
      .max(15, t('register:very-long-lastname'))
      .required(t('register:enter-your-lastname')),
    password: string()
      .matches(
        // @ts-ignore: Unreachable code error
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
        t('register:very-easy-password')
      )
      .required(t('register:enter-your-password')),
    confirmPassword: string()
      .required(t('register:enter-your-password'))
      .oneOf([ref('password'), ''], t('register:passwords-must-match')),
  });

  return (
    <Box width="full">
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: '',
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
              size="sm"
              label={t('register:email-adress')}
              name="email"
              type="email"
              placeholder={t('register:enter-your-email-adress')}
            />
            <MyField
              size="sm"
              label={t('register:first-name')}
              name="firstName"
              type="text"
              placeholder={t('register:enter-your-firstname')}
            />
            <MyField
              size="sm"
              label={t('register:last-name')}
              name="lastName"
              type="text"
              placeholder={t('register:enter-your-lastname')}
            />
            <MyField
              size="sm"
              label={t('register:password')}
              name="password"
              type="password"
              placeholder={t('register:enter-your-password')}
            />
            <MyField
              size="sm"
              label={t('register:confirm-password')}
              name="confirmPassword"
              type="password"
              placeholder={t('register:enter-your-password')}
            />
            <Button
              type="submit"
              w="full"
              mt="4"
              isLoading={props.isSubmitting}
              colorScheme="purple"
              size="sm"
            >
              {t('register:create-account')}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
