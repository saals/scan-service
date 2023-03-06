import classNames from 'classnames/bind'
import styles from './tariff-card.module.scss'

import Button from '../Button/Button'


const cx = classNames.bind(styles)

const TariffCard = ({
                      card: {
                        title,
                        subtitle,
                        price,
                        oldPrice,
                        creditPrice,
                        description
                      }
                    }) => {

  const currentTariff = title === 'Beginner'

  const cardClass = cx({
    card: true,
    [`${title.toLowerCase()}`]: title,
    current: currentTariff
  })

  return (
    <div className={cardClass}>
      <div className={styles.head}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.price}>
          <p>{price} ₽ <del>{oldPrice} ₽</del></p>
          {creditPrice &&
            <p>или {creditPrice} ₽/мес. при рассрочке на 24 мес.</p>}
        </div>

        <div className={styles.desc}>
          <p>В тариф входит:</p>
          <ul>
            {description.map(desc => <li key={desc}>{desc}</li>)}
          </ul>
        </div>

        <Button href={'/some-link'} color={currentTariff ? 'gray' : 'accent'} size={'smail'}>
          {currentTariff ? 'Перейти в личный кабинет' : 'Подробнее'}
        </Button>
      </div>
    </div>
  )
}

export default TariffCard
