import React from 'react'

const movie = (props) => {
    var[movie,setmoviename]=useState(props.data)
    console.log("add page props"+props.data)
    const handlechange=(e)=>{
        const{director,value}=e.target
        setmoviename{{...movie,[director]:value}}
        console.log(movie)
    }
    const inputhand={}=>
    <div>
      
    </div>
  )
}

export default movie
