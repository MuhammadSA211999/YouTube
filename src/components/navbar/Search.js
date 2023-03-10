import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { searched } from '../../features/filterSlice/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';
export default function Search() {
    const { searchText } = useSelector((state) => state.filter)
    const [input, setInput] = useState(searchText)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const match = useMatch('/')
    //match na hole null return korbe
    //match hole ekta {} return korbe
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searched(input))
        if (!match) {
            navigate('/')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setInput(e.target.value)}
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                value={input}
                placeholder="Search"
            />
        </form>
    );
}
