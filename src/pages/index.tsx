import styles from '@/styles/Home.module.css'
import Card from '../components/Card'
import Cardlist from '../components/CardList'
import SearchBox from '../components/SearchBox'
import { useState } from 'react'

export default function Home({robots}) {
  const [searchValue, setSearchValue] = useState('')
  return (
    // passing the robots data as props to the Cardlist component and the searchValue and setSearchValue as props to the SearchBox component to act on them.
    <>
      <div className={styles.container}>
        <h1>RoboFriends</h1>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
         <Cardlist robots={robots} searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
    </>
  )
}

// this loads the data from the server side and pass it to the component as props when the user loads the site the first time.
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
  return {
    props: {
      robots: data
    }
  }
}

