import logo from '../assets/logo.png'

const Slide =({image,text})=>{
    return(
        <div className="min-w-full  bg-blue-200 relative lg:w-4/12 lg:h-[500px] h-80  overflow-hidden   ">
            <img className="w-screen lg:w-full min-h-80   lg:min-h-[1500] object-cover me-15" src={image || logo} alt="" />
            <p className="my-4 font-mono text-lg text-white font-light relative bottom-36  ">{text}</p>
        </div>
    )
}

export default Slide
