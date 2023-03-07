import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { searched } from '../../features/filterSlice/filterSlice';

export default function Search() {
    const { searchText } = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const [input, setInput] = useState(searchText)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searched(input))
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
