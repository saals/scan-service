import styles from './login-form.module.scss'
import { Formik, Form } from 'formik'

import Button from '../Button/Button'
import TextField from '../TextField/TextField'
import { initialValues } from './params'
import validationSchema from '../../utils/validationShema'


const LoginForm = () => {
  const handleOnSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500))
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form className={styles.form}>
          <TextField label={'Логин или номер телефона:'} id={'name'}
                     name={'name'} type={'text'}
          />
          <TextField label={'Пароль'} id={'password'}
                     name={'password'} type={'password'}
          />

          <Button color={'accent'} size={'big'}
                  disabled={!dirty || !isValid || isSubmitting}>Войти</Button>
          <Button href="/">Восстановить пароль</Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
