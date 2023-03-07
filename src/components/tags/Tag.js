import { useDispatch, useSelector } from "react-redux";
import { tagRemove, tagSelection } from "../../features/filterSlice/filterSlice";

export default function Tag({ title }) {
    const { tags } = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const isSelected = tags?.includes(title) ? true : false
    const style = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : `bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer`

    const handleSelection = () => {
        if (isSelected) {
            dispatch(tagRemove(title))
        }
        else {
            dispatch(tagSelection(title))
        }

    }
    return (
        <div onClick={handleSelection} className={style}>
            {title}
        </div>
    );
}
