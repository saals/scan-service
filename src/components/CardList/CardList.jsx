import styles from './card-list.module.scss'

const CardList = ({ cardList, cardComponent }) => {
  const Component = cardComponent
  return (
    <div className={styles.list}>
      {cardList.map(card => <Component card={card}
                                       key={card.id || card.title} />)}
    </div>
  )
}

export default CardList
