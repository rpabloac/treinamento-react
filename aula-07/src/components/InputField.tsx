function InputField(props) {
    const { id, label, type, placeholder, value, onChange } = props;

    //console.log('Carteirinha');
    //console.log('Senha');

    return (
        <>
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input 
                type={type} 
                id={id} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                />
            </div>
        </>
    )
}

export default InputField;