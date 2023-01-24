import styles from '@/styles/Home.module.css'
import Card from '../components/Card'
import Cardlist from '../components/CardList'
import SearchBox from '../components/SearchBox'
import { useState } from 'react'

export default function Home({robots}) {
  const [searchValue, setSearchValue] = useState('')
  

  return (
    <>
     
      <div className={styles.container}>
        <h1>RoboFriends</h1>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
         <Cardlist robots={robots} searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
    </>
  )
}

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

