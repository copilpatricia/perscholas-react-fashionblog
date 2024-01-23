import {Headers, Title, UlList, ALink} from '../StyledComponents/styledHeader'

function Header() {
  return (
    <Headers>
        <Title>Sartre's List</Title>
        <h2>Better-Dressed People</h2>
        <nav aria-label="Main Navigation" role="navigation">
            <UlList>
              <li><ALink>Women's</ALink></li>
              <li><ALink>Men's</ALink></li>
              <li><ALink>On the Street</ALink></li>
              <li><ALink>The Catwalk</ALink></li>
              <li><ALink>AdWatch</ALink></li>
              <li><ALink>About</ALink></li>
            </UlList>
        </nav>
    </Headers>
  )  
}

export default Header