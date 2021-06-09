import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import { useHistory} from "react-router-dom"
import { Table, Button, Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {UserContext} from "../../../Context/UserContext"


const GameList = () => {
  let history = useHistory()
  const [game, setGame] = useState([])
  const [selectedId, setSelectedId]  =  useState(0)
  const [user,setUser] = useContext(UserContext)
  const [fetch, setFetch] = useState(true)
  const [search, setSearch] = useState("")
    
  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
      setGame(
        result.data.map(el=> {
          return {
            id: el.id,
            key: el.id,
            name: el.name, 
            genre: el.genre, 
            singlePlayer: el.singlePlayer, 
            multiplayer: el.multiplayer, 
            platform: el.platform, 
            release: el.release, 
            image_url: el.iamge_url
          }})
      )
    }
    if(fetch){
      fetchData()
      setFetch(false)
    }
  },[fetch])

  const onChangeTable = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  const handleDelete = (event) =>{
    let idGame = parseInt(event.target.value)
    axios.delete(`https://backendexample.sanbersy.com/api/data-contestant/${idGame}`, {headers: {"Authorization" : "Bearer "+ user.token}})
    .then(() => {
      let newGame = game.filter(el=> {return el.id !== idGame})
      setGame(newGame)
    }).catch((err)=>{
      alert(JSON.stringify(err.response.data))
    })
  }

  const submitSearch = (e) =>{
    e.preventDefault()
    axios.get(`https://backendexample.sanbersy.com/api/data-game`)
    .then(res => {
      let resBooks = res.data.map(el=>{ return {
        id: el.id,
        key: el.id,
        name: el.name, 
        genre: el.genre, 
        singlePlayer: el.singlePlayer, 
        multiplayer: el.multiplayer, 
        platform: el.platform, 
        release: el.release, 
        image_url: el.iamge_url
      }
      })

      let filteredBooks = resBooks.filter(x=> x.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
      setGame([...filteredBooks])
    })
 
  }

  const handleChangeSearch = (e)=>{
    setSearch(e.target.value)
  }


  const createNewData = ()=>{
    history.push('/game/create')
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Single Player',
      dataIndex: 'singlePlayer',
      key: 'singlePlayer',
    },
    {
      title: 'MultiPlayer',
      dataIndex: 'multiplayer',
      key: 'multiplayer',
    },
    {
      title: 'platform',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: 'release',
      dataIndex: 'release',
      key: 'release',
    },
    {
      title: 'Action',
      key: 'action',
      render: (item) => (
        <>
          <Button onClick={()=> { history.push(`/game/edit/${item.id}`)}} value={item.id}>Edit</Button>
          <Button onClick={handleDelete} value={item.id}>Delete</Button>
        </>
      ),
    },
  ];


  return (
    <>
    <div className="site-layout-background" style={{ padding: 24 }}>
      <h1 style={{textAlign:"center", fontSize:"30px"}}>Data Game</h1>
      <div>
        <Button onClick={createNewData} type="primary" style={{ margin: 20, float:"left" }}>
            <PlusOutlined />Add Data Movie
        </Button>
        <div>
            <form onSubmit={submitSearch} className="form-search" style={{ margin: 10, float:"right" }}>
              <input type="text" value={search} onChange={handleChangeSearch} />
              <button className="btn-info" >search</button>
            </form>
          </div>
        </div>
      <Table dataSource={game} columns={columns} scroll={{ x: 1300 }} onChange={onChangeTable} />
    </div>
    </>
  )
}
export default GameList