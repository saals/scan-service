import { Formik, Form } from 'formik'
import classNames from 'classnames'

import styles from './search-form.module.scss'
import { initialValues } from './params'

import Button from '../Button/Button'

import validationSchema from '../../utils/validationShema'

const SearchForm = ({ className }) => {
  const formClass = classNames(styles.form, className)

  const handleOnSubmit = (values, { setSubmitting }) => {}

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form className={formClass}>
          {/* ToDo inputs */}

          <Button
            className={styles.submit}
            type="submit"
            color="accent"
            disabled={!dirty || !isValid || isSubmitting}
          >
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SearchForm
