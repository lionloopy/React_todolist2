import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Form from '../components/form/Form'
import State from '../components/state/State'

function TodoList() {

  const [input, setInput] = useState([
    {id:1, title:'공부하기', comment:'목요일까지', isDone:false},
    {id:2, title:'운동하기', comment:'금요일까지', isDone:true},
])

  return (
    <Layout>
        <Form input={input} setInput={setInput}/>
        <State input={input} setInput={setInput}/>
    </Layout>
  )
}

export default TodoList