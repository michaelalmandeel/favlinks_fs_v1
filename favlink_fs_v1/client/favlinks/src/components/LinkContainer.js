import { useState } from 'react'
import Table from './Table'
import Form from './Form'
// import Form from './Form';

const LinkContainer = (props) => {

  const [favLinks,setFavLinks] = useState([])

  const _removeLink = (index) => { setFavLinks(favLinks.splice(index,1)) }

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  const _handleSubmit = (favLink) => {

       setFavLinks(favLinks.concat([favLink]))
  }

  return (
    <div className="container" style={{margin: '20px'}}>
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData={favLinks} removeLink={_removeLink} />

      <br />

      <h3>Add New</h3>
      <Form handleSubmit={_handleSubmit}/>
    </div>
  )
}

export default LinkContainer
