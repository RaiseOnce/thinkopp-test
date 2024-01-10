import Slider from '@/components/Slider/Slider'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className="">Полезные материалы</h1>
        <h2>
          Собрали для вас полезные исследования схемы кормления и другие
          материалы, которые пригодятся для лучших результатов на вашем
          хозяйстве
        </h2>
      </div>

      <Slider />
    </main>
  )
}
