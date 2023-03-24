import { Formik, Form } from 'formik'
import classNames from 'classnames'
import { useSubmit } from 'react-router-dom'

import styles from './search-form.module.scss'
import { initialValues, dateRangeOptions } from './params'

import Button from '../Button/Button'
import TextField from '../TextField/TextField'
import SelectField from '../SelectField/SelectField'
import Checkbox from '../Checkbox/Checkbox'
import DateRangeField from '../DateRangeField/DateRangeField'

import { RESULT_URL } from '../../utils/constants'
import { searchValidationSchema } from '../../utils/validation/schema'


const SearchForm = ({ className }) => {
  const formClass = classNames(styles.form, className)

  const submit = useSubmit()

  const handleOnSubmit = async (values, { setSubmitting }) => {
    submit(values, {
      method: 'post',
      action: RESULT_URL,
    })

    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={searchValidationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form className={formClass}>

          <div>
            <TextField label="ИНН компании *"
                       id="inn"
                       name="inn"
                       placeholder="10 цифр"
            />

            <SelectField label="Тональность:" id="tonality" name="tonality">
              <option value="any">Любая</option>
              <option value="positive">Позитивная</option>
              <option value="negative">Негативная</option>
            </SelectField>

            <TextField
              label="Количество документов в выдаче *"
              id="limit"
              name="limit"
              placeholder="От 1 до 1000"
            />

          </div>
          <div className={styles.checkboxes}>
            <Checkbox label="Признак максимальной полноты" name="maxFullness" />
            <Checkbox
              label="Упоминания в бизнес-контексте"
              name="inBusinessNews"
            />
            <Checkbox label="Главная роль в публикации" name="onlyMainRole" />
            <Checkbox
              label="Публикации только с риск-факторами"
              name="onlyWithRiskFactors"
            />
            <Checkbox
              label="Исключать технические новости рынков"
              name="excludeTechNews"
            />
            <Checkbox
              label="Исключать анонсы и календари"
              name="excludeAnnouncements"
            />
            <Checkbox label="Исключать сводки новостей" name="excludeDigests" />
          </div>

          <DateRangeField
            label="Диапазон поиска *"
            options={dateRangeOptions}
          />

          <div className={styles['submit-wrap']}>
            <Button
              type={'submit'}
              color={'accent'}
              disabled={!dirty || !isValid || isSubmitting}
              size={'big'}
            >
              Поиск
            </Button>

            <p>* Обязательные к заполнению поля</p>
          </div>

        </Form>
      )}
    </Formik>
  )
}

export default SearchForm
