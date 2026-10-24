
const Input = ({type, name, value, ref, label, error, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor="email">{label}:</label>
            <input 
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