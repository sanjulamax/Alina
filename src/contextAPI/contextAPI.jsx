import { createContext, useState } from "react";
import run from "../config/alina";


export const Context = createContext()

const ContextProvider = (props) => {

    const [inputs , setInputs] = useState("")
    const [recPromt , setRecPromt] = useState("")
    const [prev , setPrev] = useState([])
    const [resShow , setResShow] = useState(false)
    const [loadingShow , setLoadingShow] = useState(false)
    const [resData , setResData] = useState("")

    const  writingEffect = (index,nextWord) => {
        setTimeout(function(){
            setResData((prev)=>prev+nextWord)

        },75*index)

    }
    


    const onSend = async (promts) => {
        setLoadingShow(true)
        setResData("")
        setResShow(true)
        setRecPromt(promts)
        setLoadingShow(true)

        if(prev.includes(promts)) {


        }
        else{
            setPrev((prev)=>[...prev,promts])
        }
       

        const resultsOfPromt = await run(promts)
        
        let responsArray = resultsOfPromt.split("**")
        let newRespons = ('')  ;
        for(let i =0 ; i<responsArray.length ; i++) {

            if( i%2 !==1){

                newRespons += responsArray[i]

            }
            else{
                newRespons += "<b>"+responsArray[i]+"</b>"
            }
        } 

        newRespons =newRespons.split("*").join("<br> ")
        newRespons = newRespons.split(" ")
        for(let i=0 ; i<newRespons.length ; i++ ){
            writingEffect(i,newRespons[i]+" ")


        }
        setInputs("")
        setLoadingShow(false)
        
    }

    

    const contextValue = {

        inputs , 
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



    }

    return ( 


    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
    
    
    )            

}

export default ContextProvider