import styles from './login-form.module.scss'
import { Formik, Field, Form } from 'formik';

import Button from '../Button/Button'


const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >

      <Form className={styles.form}>
        <label htmlFor="name">Логин или номер телефона:</label>
        <Field id="name" name="name" type="text" />

        <label htmlFor="password">Пароль:</label>
        <Field id="password" name="password" type="password" />

        <Button type="submit" color={'accent'} size={'big'}
                disabled={true}>Войти</Button>
        <Button href="/">Восстановить пароль</Button>
      </Form>

    </Formik>
  )
}

export default LoginForm
