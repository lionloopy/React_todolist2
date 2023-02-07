import React, { useState } from 'react'
import '../../css/state/state.css'

function State({input, setInput}) {

const onAdd = (id) => {
  const addWorking = input.map((initial) => {
    if(initial.id === id){
      return{
        ...initial,
        isDone:!initial.isDone,
      }
    }else {
      return{...initial}
    }
  })
  setInput(addWorking)
}

const remove = (id) => {
  const removeList = input.filter(item => item.id !==id)
  setInput(removeList)
}

  return (
    <div className='list'>
      <div className='working'>
        <h3>Working 🔥</h3>
        { input.map((item) => {
          if(!item.isDone){
            return(
              <div key={item.id}>
                <div className='checkList'>
                  <div>{item.title} - {item.comment}</div>
                  <div className='changeButton'>
                    <button onClick={() => onAdd(item.id)}>
                      {item.isDone? '취소':'완료'}
                    </button>
                    <button onClick={() => remove(item.id)}>삭제</button>
                  </div>
                </div>
              </div>
            )
          }
        })
        }
        <div className='done'>
          <h3>Done 🎉</h3>
          { input.map((item) => {
          if(item.isDone){
            return(
              <div key={item.id}>
                <div className='checkList'>
                  <div>{item.title} - {item.comment}</div>
                  <div className='changeButton'>
                    <button onClick={() => onAdd(item.id)}>
                      {item.isDone? '취소':'완료'}
                    </button>
                    <button onClick={() => remove(item.id)}>삭제</button>
                  </div>
                </div>
              </div>
            )
          }
        })
        }
        </div>
      </div>
    </div>
  )
}

export default State