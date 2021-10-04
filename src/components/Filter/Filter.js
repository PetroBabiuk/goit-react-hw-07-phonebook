import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { contactsOperations, contactsSelectors} from '../../redux';
import s from './Filter.module.css';

const Filter = () => {
    const filter = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();

    const inputId = shortid.generate();
    const labeltId = shortid.generate();

    const onChange = (e) => dispatch(contactsOperations.changeFilter(e.target.value));

    return (
    <>
        <div className={s.form}>
            <label htmlFor={labeltId} className={s.label}> Find contacts by name</label>
            <input className={s.input} id={inputId} type="text" value={filter} onChange={onChange}/>
        </div>
    </>
    )
}    

export default Filter;