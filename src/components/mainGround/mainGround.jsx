import '../mainGround/mainGround.css'
import Images from '../../images/images'
import { useContext } from 'react'
import { Context } from '../../contextAPI/contextAPI'

function MainGround  () {

    const {    inputs , 
        setInputs ,
        recPromt ,
         setRecPromt,
         prev , 
         setPrev ,
         resShow , 
         setResShow ,
         loadingShow , 
         setLoadingShow ,
         resData , 
         setResData , 
         onSend , 
} = useContext(Context) 

    return (
        <div id='mainGroundSec'>



                <div id='navBar'>
                    <p>AlinaAI</p>
                    <img src={Images.userImg}></img>
                </div>

                {!resShow? 
                    <> 

                <div id='geetings'>
                    <p id='greetOne'>HELLO SAVINDU </p>
                    <p>HOW CAN I HELP YOU</p>
                </div>
               

                 

                    <div id='cardSec'>

                        <div className='cards'>
                            <p className='headings'>🧑‍🎨 Makes You More Creative</p>
                            <p>Accelerate your creative process by collaborating with AlinaAI Advanced to spark new ideas, brainstorm projects, and help with your first drafts</p>
                            <img src=''></img>
                        </div>
                        <div className='cards'>
                            <p className='headings'>🚵 Call to Action</p>
                            <p>Explore the limitless possibilities with AlinaAI Advanced and take the first step towards transforming your creative process.</p>
                            <img src=''></img>
                        </div>
                        <div className='cards'>
                            <p className='headings'>💡 Enhance Your Imagination</p>
                            <p>Push the boundaries of your creativity with AlinaAI Advanced, your partner in innovative thinking and groundbreaking projects.</p>
                            <img src=''></img>
                        </div>
                        <div className='cards'>
                            <p id='alinaCard'>Feel the power of AlinaAI </p>
                            <img src=''></img>
                           
                        </div>

                </div>  </> : <>
                <div id='userSide'>
                    <img src={Images.userImg}></img>
                <p>{recPromt}</p>
                </div>
                <div id='generated' >
                    <img src={Images.alina}></img>
                {loadingShow ?<div id='loaders'> <img  src={Images.loader}></img></div>: <pre dangerouslySetInnerHTML={{__html:resData}} ></pre>}
          
                </div> 
                </>}

                    <div id='searchSec'>

                        <div id='serachInp'>
                            <input type='text' id='inpBar' placeholder='Ask From Alina' value={inputs} onChange={(e)=>{setInputs(e.target.value)}}></input>
                        </div>
                        <div id='btnSec'>
                            <img onClick={()=>onSend(inputs)} src={Images.search}></img>
                            <img src={Images.gallery} className='noImg'></img>
                            <img src={Images.mic} className='noImg'></img>
                        </div>
                        
                    </div> 
                    {!loadingShow?<div id='creadits'><p>POWERED BY SAVINDU ABEYWICKRAMA</p></div>:null}
        </div>
    )
}

export default MainGround