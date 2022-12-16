import React from 'react'
import { useContext } from 'react';
import noteContext from './Context/notes/noteContext';
import Notes from './Notes';

function Home() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <div className='container'>
        <h2 className='text-center my-4'>Add a note</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary my-4">Submit</button>
        </form>
      </div>
      <Notes/>

    </>
  )
}

export default Home