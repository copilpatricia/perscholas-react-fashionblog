import {Footers, UlList, ALink, PTag} from '../StyledComponents/styledFooter'

function Footer() {
    return(
        <Footers>
        <nav aria-label="Main Navigation" role="navigation" class="nav-footer">
            <UlList>
              <li><ALink>Women's</ALink></li>
              <li><ALink>Men's</ALink></li>
              <li><ALink>On the Street</ALink></li>
              <li><ALink>The Catwalk</ALink></li>
              <li><ALink>AdWatch</ALink></li>
              <li><ALink>About</ALink></li>
            </UlList>
          </nav>
        <PTag>&copy; 2013 Valet Industries, Inc</PTag>
    </Footers>
    )
}

export default Footer