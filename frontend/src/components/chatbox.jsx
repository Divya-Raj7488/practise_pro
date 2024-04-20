import React from 'react'

const Chatbox = () => {
  return (
    <div className='chatboxContainer'>
      <div className='searchBoxContainer'>
        <input type="text" className='searchBox' />
      </div>
      <div className='chats'>
        <div className='messagers'>
            {/* <div></div> */}
        </div>
        <div className='personalChat'></div>
      </div>
    </div>
  )
}

export default Chatbox
