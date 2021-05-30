import React, {useState, useEffect, useContext} from "react"
import {Form, Input, InputNumber, Button} from "antd"
import TextArea from 'antd/lib/input/TextArea';
import axios from "axios"
import { useParams, useHistory} from "react-router-dom"
import { UserContext} from "../../../Context/UserContext"

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 16,
    offset: 3,
  },
};

const MovieForm = () =>{
  const [game, setGame] = useState(null)
  const [user,setUser] = useContext(UserContext)
  let yearNow = new Date().getFullYear()
  let {id} = useParams()
  let history = useHistory()

  useEffect( () => {
    if (id) {
      fetchData()
    }else {
      setGame({
        name: '', 
        genre: '', 
        singlePlayer: 0,
        multiplayer : 0,
        platform : "",
        release: 2020,
        image_url : '',
    });
    }
  }, [])

  const fetchData = async () => {
    const res = await axios.get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
    let el = res.data
    setGame({
      id: el.id,
      key:el.id,
      name: el.name, 
      genre: el.genre,
      singlePlayer: el.singlePlayer,
      multiplayer: el.multiplayer,
      platform: el.platform,
      release: el.release,
      image_url: el.image_url
    });
  }
  const onFinish = () => {
    if( id === undefined ){
        axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
          name: game.name, 
          genre: game.genre,
          singlePlayer: game.singlePlayer,
          multiplayer: game.multiplayer,
          platform: game.platform,
          release: game.release,
          image_url: game.image_url
        },{headers: {"Authorization" : "Bearer "+ user.token}})
        alert("Berhasil Ditambahkan!")
        history.push('/game/create')
      }else{
        axios.put(`https://backendexample.sanbersy.com/api/data-game/${id}`, {
          name: game.name, 
          genre: game.genre,
          singlePlayer: game.singlePlayer,
          multiplayer: game.multiplayer,
          platform: game.platform,
          release: game.release,
          image_url: game.image_url
        },{headers: {"Authorization" : "Bearer "+ user.token}})
        alert("Berhasil DiEdit!")
        history.push('/game/create')     
      }
      setGame({
        name: '', 
        genre: '', 
        singlePlayer: 0,
        multiplayer : 0,
        platform : "",
        release : 2020,
        image_url : '',
      })
    console.log('Success:');
  };

  const handleChange = (event) =>{
    const nama = event.target.name
    const value = event.target.value
    setGame({...game, [nama] : value})
  }

  const handleChangesingle = (value) =>{
    setGame({...game, singlePlayer : parseInt(value)})
  }

  const handleChangemulti = (value) =>{
    setGame({...game, multiplayer : parseInt(value)})
  }

  const handleChangeRelease = (value) =>{
    setGame({...game, release : parseInt(value)})
  }

  return (
    <>
    {game !== null && (
        <div className="site-layout-background" style={{ padding: 24 }}>
        <div className="article">
            <h1 style={{fontSize:"xx-large", textAlign:"center"}}><b>Form Game</b></h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ 
                  name: game.name, 
                  genre: game.genre,
                  singlePlayer: game.singlePlayer,
                  multiplayer: game.multiplayer,
                  platform: game.platform,
                  release: game.release,
                  image_url: game.image_url
                 }}
                onFinish={onFinish}
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input game name!' }]}
                >
                    <Input name="name" value={game.name} onChange={handleChange} placeholder="Your game name"/>
                </Form.Item>
                <Form.Item
                    label="Genre"
                    name="genre"
                    rules={[{ required: true, message: 'Please input game genre!' }]}
                >
                    <Input name="genre" value={game.genre} onChange={handleChange} placeholder="Your game Genre"/>
                </Form.Item>
                <Form.Item
                    label="singlePlayer"
                    name="singlePlayer"
                    rules={[{ type:'number', required: true, message: 'Please input game singlePlayer!' }]}
                >
                    <Form.Item name="singlePlayer" noStyle>
                        <InputNumber name="singlePlayer" value={game.singlePlayer} onChange={handleChangesingle} min={0} max={1} />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="Multiplayer"
                    name="multiplayer"
                    rules={[{ type:'number', required: true, message: 'Please input movie rating!' }]}
                >
                    <Form.Item name="multiplayer" noStyle>
                        <InputNumber name="multiplayer" value={game.multiplayer} onChange={handleChangemulti} min={0} max={10} placeholder="0"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="Platform"
                    name="platform"
                    rules={[{ required: true, message: 'Please input game platform!' }]}
                >
                    <Input name="platform" value={game.platform} onChange={handleChange} placeholder="Your game platform"/>
                </Form.Item>
                <Form.Item
                    label="Release"
                    name="release"
                    rules={[{ type:'number', required: true, message: 'Please input release of games been release!' }]}
                >
                    <Form.Item name="release" noStyle>
                        <InputNumber name="release" value={game.release} onChange={handleChangeRelease} min={1955} max={yearNow} placeholder="1955"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="Image Url"
                    name="image_url"
                    rules={[{ required: true, message: 'Please input game Cover!' }]}
                >
                    <TextArea name="image_url" value={game.image_url} onChange={handleChange} placeholder="Your Movie Cover"/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
      </div>
    )}
  </>
  )
}

export default MovieForm
