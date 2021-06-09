import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import { Table, Button, Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {UserContext} from "../../../Context/UserContext"

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

// ReactDOM.render(<Table columns={columns} dataSource={data} onChange={onChange} />, mountNode);

const MovieList = () => {
  let history = useHistory()
  const [movie, setMovie] = useState([])
  const [user,setUser] = useContext(UserContext)
  const [fetch, setFetch] = useState(true)
  const [search, setSearch] = useState("")
    
  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
      setMovie(
        result.data.map(el=> {
          return {
            id: el.id,
            key: el.id,
            title: el.title, 
            description: el.description, 
            year: el.year, 
            duration: el.duration, 
            genre: el.genre, 
            rating: el.rating, 
            review: el.review, 
            image_url: el.image_url
          }})
      )
    }
    if(fetch){
      fetchData()
      setFetch(false)
    }
  },[fetch])

  const handleDelete = (event) =>{
    let idPeserta = parseInt(event.target.value)
    axios.delete(`https://backendexample.sanbersy.com/api/data-contestant/${idPeserta}`, {headers: {"Authorization" : "Bearer "+ user.token}})
    .then(() => {
      let newPesertaLomba = movie.filter(el=> {return el.id !== idPeserta})
      setMovie(newPesertaLomba)
    }).catch((err)=>{
      alert(JSON.stringify(err.response.data))
    })
  }

  const submitSearch = (e) =>{
    e.preventDefault()
    axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
    .then(res => {
      let resBooks = res.data.map(el=>{ return {
        id: el.id,
        key: el.id,
        title: el.title, 
        description: el.description, 
        year: el.year, 
        duration: el.duration, 
        genre: el.genre, 
        rating: el.rating, 
        review: el.review, 
        image_url: el.image_url
      }
      })

      let filteredBooks = resBooks.filter(x=> x.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
      setMovie([...filteredBooks])
    })
 
  }

  const handleChangeSearch = (e)=>{
    setSearch(e.target.value)
  }


  const createNewData = ()=>{
    history.push('/movie/create')
  }

  

  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'review',
      dataIndex: 'review',
      key: 'review',
    },
    {
      title: 'Action',
      key: 'action',
      render: (item) => (
        <>
          <Button onClick={()=> { history.push(`/movie/edit/${item.id}`)}} value={item.id}>Edit</Button>
          <Button onClick={handleDelete} value={item.id}>Delete</Button>
        </>
      ),
    },
  ];


  return (
    <>
    <div className="site-layout-background" style={{ padding: 24 }}>
      <h1 style={{textAlign:"center", fontSize:"30px"}}>Data Movie</h1>
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
      <Table dataSource={movie} columns={columns} scroll={{ x: 1300 }} />
    </div>
    </>
  )
}
export default MovieList