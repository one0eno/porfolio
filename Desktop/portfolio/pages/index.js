import Layout from "../components/Layout"
import {experiences, skills, portfolios} from "../profile"
import Skill from "../components/skill"
import Experience from "../components/experiences"
import Link from "next/Link"
import Portfolio from "../components/Portfolio"

export default function Index(){

    return (
        <>
        <Layout>
           {/* header card */}
           <header className="row">
               <div className="col-md-12">
                   <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://picsum.photos/seed/picsum/350/250?grayscale" alt="" className="img-fluid"></img>
                        </div>
                        <div className="col-md-8">
                            <h1>Jorge Arranz</h1>
                            <h3 className="text-ultralight" >FullStack Developer</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                            </p>
                            <a href="/contact">Contactar</a>
                        </div>
                    </div>
                    </div>
               </div>

           </header>

           {/* second section  */}
           <div className="row py-2">
               <div className ="col-md-4">
                   <div className="card bg-light">
                        <div className="card-body">
                            <h1>Skills</h1>

                            {
                                skills.map((element) => (
                                   <Skill {...element}></Skill>
                                ))
                            }
                            
                        </div>
                   </div>
               </div>
               <div className="col-md-8">
                    <div className="card bg-ligh">
                      <div className="card-body">
                        <h1>Experiencia</h1>
                        <ul>
                        {
                            experiences.map((element) => (
                                <Experience {...element}></Experience>
                            ))
                        }  
                        </ul>
                        <Link href="/experience">
                            <a className="btn btn-light">Conoce mas</a>
                        </Link>
                        </div>
                    </div>
               </div>

           </div>
           { /* portfolio */}
           <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                            <div className="row">
                                {
                                    portfolios.map((element) => (
                                        <Portfolio {...element}></Portfolio>
                                    ))
                                }
                            </div>
                            <div className="col-md-12">
                                    <h1 className="text-center text-light">Portfolio</h1>
                            </div>
                    </div>
                </div>
           </div>
           
        </Layout>
            
        </>
    )

}