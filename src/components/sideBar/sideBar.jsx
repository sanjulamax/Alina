import '../sideBar/sideBar.css'

import Images from '../../images/images.jsx'
import { useState } from 'react'

import { useContext } from 'react'
import { Context } from '../../contextAPI/contextAPI.jsx'




function SideBar() {

    const[sideBarShow , setSideBarShow] = useState(false)

        const {

            setPrev ,
            prev,
            onSend,
            inputs,
        } = useContext(Context)



    const toggleSideBar = () => {

        setSideBarShow(!sideBarShow)
        console.log(sideBarShow)
    }

    return(

      

        <>

        <div id="sideBar">

                <div id="togleShower" className='sideIcons'>

                    <img onClick={toggleSideBar} src={Images.sideBar}></img>
                    {sideBarShow ?  <p >MENU BAR</p> :null }
                </div>

                <div id="newChat" className='sideIcons'>
                    <img src={Images.chatBot1} id='chatBotImg'></img>

                  {sideBarShow ?  <a href='https://www.linkedin.com/in/savindu-abeywickrama-58a828311/'><p >WHO AM I</p></a> :null }
                </div>

                <div id='recSec' >

                        <div id="recent" className='sideIcons'>
                            <img src={Images.recentChat}></img>
                            {sideBarShow ?  <div > <p>Recent</p>  </div>:null }
                           
                            

                        
                        </div>

                        {sideBarShow ?  <div id='rec' >
                            {prev.map((prevItem)=>(<p onClick={()=>onSend(prevItem)} id='prevCrd'>{prevItem}</p>))}
                            </div>:null}

                        <div id="recentInner" className='sideIcons'>

                                <img src={Images.chatFolder}></img>

                               
                                {sideBarShow ?    <a href='https://github.com/sanjulamax/Alina'><p>Who Is AlinaAI ? </p></a> :null }
                            </div>
                </div>

                <div id='undersec'>


                <div id="help" className='sideIcons'>
                    <img src={Images.support}></img>

                    {sideBarShow ?                      <a href='https://github.com/sanjulamax/Alina/issues' > <p>Help</p></a> :null }


                </div>

                <div id="about" className='sideIcons'>
                    <img src={Images.aboutUs}></img>
                    {sideBarShow ?    <a href='https://www.linkedin.com/in/savindu-abeywickrama-58a828311/'>  <p>About</p></a> :null }
                  
                </div>

                <div id="settings" className='sideIcons'>
                    <img src={Images.settings}></img>
                    {sideBarShow ?             <p>Settings</p> :null }

           
                </div>
                </div>
        </div>
        </>


    )


}

export default SideBar