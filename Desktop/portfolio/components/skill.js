export default function Skill(props){

    const {percentage } = props
    const percen = percentage+ "%"

    return (
        <>
            <div className="py-3" key={percentage}>
                <h6>{props.skill}</h6>
                <div className="progress">
                        <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width:percen}}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                </div>
            </div>
            
        </>
    )
}