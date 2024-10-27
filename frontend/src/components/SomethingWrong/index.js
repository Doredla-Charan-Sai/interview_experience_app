import '../SomethingWrong/index.css'
import wrong from '../../wrong.jpg'

const SomethingWrong = (props)=>{
    const {onCloseWrong} = props;
    return(
        <div className="wrong-cont">
            <div className='cross-btn-cont'>
                <button className='cross-btn' onClick={onCloseWrong}>X</button>
            </div>
            <img src={wrong} alt='something went wrong' className='wrong-img'/>
        </div>
    )
}

export default SomethingWrong;