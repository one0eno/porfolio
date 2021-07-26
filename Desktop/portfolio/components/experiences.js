export default function Experience(props){

    return (
        <>
          
               
            <li>
                <h3>{props.company}</h3>
                <h5>{props.date}</h5>
                <p>
                    { props.description}
                </p>
            </li>
              
        
            <style jsx>{`
                
                    li{

                    }
                `
                }

            </style>
        </>
    )
}