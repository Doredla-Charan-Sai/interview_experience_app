import '../SomethingWrong/index.css'
import success from '../../success.png'

const Success = (props)=>{
    const {onCloseSuccess} = props;
    return(
        <div className="wrong-cont">
            <div className='cross-btn-cont'>
                <button className='cross-btn' onClick={onCloseSuccess}>X</button>
            </div>
            <img src={success} alt='something went wrong' className='wrong-img'/>
        </div>
    )
}

export default Success;