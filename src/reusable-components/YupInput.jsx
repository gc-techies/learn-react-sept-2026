
const YupInput = ({name, type, label, error, register}) => {
    return (
        <div className="form-group">
            <label htmlFor="email">{label}:</label>
            <input 
                {...register(name)}
                type={type} 
                className="form-control" 
            />
            <span className="text-danger">{error}</span>
        </div>
    )
}

export default YupInput;