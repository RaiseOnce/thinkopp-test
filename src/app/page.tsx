import Slider from '@/components/Slider/Slider'
import styles from './page.module.scss'
import data from '@/constants/mockData'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.header}>Полезные материалы</h1>
        <h3 className={styles.subheader}>
          Собрали для вас полезные исследования схемы кормления и другие
          материалы, которые пригодятся для лучших результатов на вашем
          хозяйстве
        </h3>
      </div>

      <Slider slides={data} />
    </main>
  )
}
