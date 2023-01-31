import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import './home.css';
import AddingBook from '../forms/AddingBook';
import Modal from '../modals/AddingModal';

function Home() {

    const [modals, setModals] = useState({addingBooks: false, deletingBooks: false, returningBooks: false, lateSubmission: false})

    const handleChange = (e) => {
        setModals({
            ...modals,
            [e.target.name]: true
        })
    }


    return (
        <div className='home-page'>
            <Navbar/>

            <div className='cards-section'>
                <Link to='/available-books'>
                    <div>Show available Categories</div>
                </Link>

                {
                (localStorage.getItem('email') === "monikayadav05949@gmail.com") ? <div className='optional-cards'>
                    <button name="addingBooks"
                        value={
                            modals.addingBooks
                        }
                        onClick={handleChange}>Add new books</button>
                    {
                    modals.addingBooks ? <Modal onClose={
                        () => {
                            setModals(modals.addingBooks = false)
                        }
                    }><AddingBook/></Modal> : null
                }

                    <button name="deletingBooks"
                        value={
                            modals.deletingBooks
                        }
                        onClick={handleChange}>Delete Books</button>
                    <Link to='/late-submission'>
                        <div>Issued books</div>
                    </Link>
                </div> : <div className='optional-cards'>
                    <Link to='/issue-books'>
                        <div>Issuing a book</div>
                    </Link>
                    <button name="returningBooks"
                        value={
                            modals.returningBooks
                        }
                        onClick={handleChange}>Returning Book</button>
                    <button name="lateSubmission"
                        value={
                            modals.lateSubmission
                        }
                        onClick={handleChange}>Late Submission Fine</button>
                </div>
            } </div>


        </div>
    )
}

export default Home
