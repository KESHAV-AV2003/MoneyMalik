import React, {useContext, useEffect} from 'react'
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';


export const Home = (props) => {
  const context = useContext(noteContext);
    let navigate = useNavigate();
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
            // eslint-disable-next-line
        }
        else {
            navigate("/")
        }
    }, [])
  const {showAlert}=props
  return (
      <Notes showAlert={showAlert} />
  )
}

export default Home
