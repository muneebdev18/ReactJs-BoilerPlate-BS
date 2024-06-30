import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar'
import styles from './style.module.css'

const Home = () => {

  return (
    <div className={`${styles.mainWrapper} container`}>
{/* <Sidebar/> */}
<Header/>
    </div>
  )
  }

export default Home