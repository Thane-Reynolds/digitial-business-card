import facebook from '../images/facebook-icon.png'
import github from '../images/github-icon.png'
import instagram from '../images/instagram-icon.png'
import linkedin from '../images/linkedin-icon.png'
import twitter from '../images/twitter-icon.png'

export function Footer(){
  return(
    <footer className="footer">
      <a href="https://twitter.com/ThaneReynolds"><img src={ twitter } alt="" /></a>
      <a href=""><img src={ facebook } alt="" /></a>
      <a href=""><img src={ instagram } alt="" /></a>
      <a href="https://www.linkedin.com/in/thane-reynolds-3b115394"><img src={ linkedin } alt="" /></a>
      <a href="https://github.com/Thane-Reynolds"><img src={ github } alt="" /></a>
    </footer>
  )
}
