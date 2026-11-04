
const Input = ({type, name, value, ref, label, error, register, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor="email">{label}:</label>
            <input 
                {...register(name)}
                type={type} 
                onChange={onChange}
                name={name}
                value={value} 
                ref={ref} 
                className="form-control" 
                id={name} 
            />
            <span className="text-danger">{error}</span>
        </div>
    )
}

export default Input;