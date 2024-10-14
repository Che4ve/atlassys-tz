import '../styles/formElement.scss'

interface FormElementProps {
    label: string;
    placeholder: string;
}

export const FormElement = (props: FormElementProps) => {

    return (
        <div className={'form-element'}>
            <p>{props.label}</p>
            <input placeholder={props.placeholder}/>
        </div>
    )
}