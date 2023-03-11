import { useEffect } from 'react'
import styles from './login-form.module.scss'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'
import TextField from '../TextField/TextField'
import { initialValues } from './params'
import validationSchema from '../../utils/validationShema'
import { HOME_URL } from '../../utils/constants'
import { useLoginMutation  } from '../../redux/api/scan'


const LoginForm = () => {
  const [
    login,
    {
      isLoading: isLoginLoading,
      isError: isLoginError,
      error: loginError,
      isSuccess: isLoginSuccess,
    },
  ] = useLoginMutation()

  const navigate = useNavigate()

  useEffect(() => {
    if (isLoginSuccess) {
      navigate(HOME_URL)
    }
  }, [ isLoginLoading ])

  const handleOnSubmit = (values, { setSubmitting }) => {
    login(values).then(() => {
      setSubmitting(false)
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form className={styles.form}>
          <TextField label={'Логин или номер телефона:'} id={'login'}
                     name={'login'} type={'text'}
          />
          <TextField label={'Пароль'} id={'password'}
                     name={'password'} type={'password'}
          />

          <Button color={'accent'} size={'big'} type={'submit'}
                  disabled={!dirty || !isValid || isSubmitting}>Войти</Button>
          <Button href="/">Восстановить пароль</Button>


          {isLoginError  && (
            <div className={styles.errorMessage}>{loginError.data.message}</div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
