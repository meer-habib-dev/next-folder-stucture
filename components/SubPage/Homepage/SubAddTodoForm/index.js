import {useState} from "react";
import style from './SubAddTodoForm.module.css';
import PrimaryInput from "../../../form/input/primaryInput";
import PrimaryButton from "../../../form/Button/PrimaryButton";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../../../store/slices/todoSlice";

const SubAddTodoForm = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();

    const submit = () => {
        const n = nanoid()

        if(!value){
            alert('No value exists!')
            return;
        }

        const todo = {
            id: n,
            text: value,
            status: false
        }


        dispatch(addTodoAction(todo))
        return;
    }


    return (
        <>
            <h2 className={style['home-heading']}>TODO---</h2>
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <PrimaryInput
                        name={'item'}
                        type={'text'}
                        label={'New todo item'}
                        placeholder={'Todo item..'}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />


                </div>
                <div className={'flex justify-center'}>
                    <PrimaryButton
                        onClick={submit}
                    >
                        Submit
                    </PrimaryButton>
                </div>
            </div>
        </>

    )
}

export default SubAddTodoForm