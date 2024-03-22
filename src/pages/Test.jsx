import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Test = () => {
  const {id} = useParams();
  const [getParamsId, setParamsId] = useState(0)

  useEffect( () => {

    if(id != null || id != 0){
        setParamsId(id);
    }
    
}, []
)

  return (
    <>
      <h1>Test  : {getParamsId} - Page</h1>
    </>
  )
}

export default Test
