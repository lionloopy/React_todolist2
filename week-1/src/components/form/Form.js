import React, { useState } from 'react'
import '../../css/form/form.css'

function Form({input, setInput}) {

    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')

    const addTitle = (event) => {
        setTitle(event.target.value)
    }
    const addComment = (event) => {
        setComment(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 새로고침 방지, 다른 링크 이동 방지
        if(title.trim() === '' || comment.trim() ==='') return
        const addList = {
            id:input.length +1,
            title:title,
            comment:comment,
        }
        setInput([...input, addList])
    }
        

  return (
    <form onSubmit={onSubmitHandler} className='form' >
        <h2 className='titlebox'>MY TODO LIST</h2>
        <div className='input-group'>
            <label>WHAT?</label>
            <input value={title} onChange={addTitle} />
            <label>WHEN?</label>
            <input value={comment} onChange={addComment}/>
            <button>+</button>
        </div>
    </form>
  )
}

export default Form