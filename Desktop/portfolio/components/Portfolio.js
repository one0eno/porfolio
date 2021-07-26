export default function Portfolio(props){

    return(

        <>
            <div className="col-md-4  p-2" key={props.title}>
                <div className="card h-100">
                    <div className="overflow">
                        <img src={props.img} alt="" className="card-img-top" />
                    </div>
                    
                    <div className="card-body">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <a href="#!">Conoce mas</a>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .overflow{
                        height:50%;
                        overflow:hidden;
                    }

                    .overflow .card-img-top{
                        transform:scale(1);
                        transition:all 0.2s;
                    }

                    .overflow .card-img-top:hover{
                        transform:scale(1.8);
                    }
                `}
            </style>
        </>
    )
    
}