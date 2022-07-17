import "./CheckInput.css"

const CheckInput = () =>{
    return <form >
        <div className="form-group">
        <input type="checkbox" checked />
        <label className="checkMark" for="check"></label>
        </div>
        
    </form>
}

export default CheckInput 