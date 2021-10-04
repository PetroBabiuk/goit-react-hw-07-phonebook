import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors} from '../../redux';
import s from './Filter.module.css';

const Filter = () => {
    const filter = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();

    const onChange = (e) => dispatch(contactsOperations.changeFilter(e.target.value));

    return (
        <div className={s.form}>
            <label className={s.label}> Find contacts by name</label>
            <input className={s.input} type="text" value={filter} onChange={onChange}/>
        </div>
    )
}    

export default Filter;