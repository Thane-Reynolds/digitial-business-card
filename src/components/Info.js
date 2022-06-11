import photo from '../images/face.jpg'
import mail from '../images/Mail.png'
export function Info(){
  return(
    <section className="info">
      <div className="info--photo-div"> 
        <img src= { photo } alt="photo of Thane" />
      </div>
      <div className="info--content-div">
        <h1 className="info--name">Thane Reynolds</h1>
        <h2 className="info--title">Frontend Developer</h2>
        <div className="info--link-div">
          <a href="http://thanereynolds.dev" className="info--link" target="_blank" rel="noreferrer">thanereynolds.dev</a>
        </div>
        <div className="info--button-div">
          <a className="info--mailtolink" href="mailto: thane.a.reynolds@gmail.com">
            <button className="info--mailtobutton"><img src= { mail } alt="mail icon"/> Email</button>
            </a>
        </div>
      </div>
    </section>
  )
}