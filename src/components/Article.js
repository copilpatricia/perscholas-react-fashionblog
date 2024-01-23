import {Mains, Articles, ParagraphL, ALink, Times, TitleH2, Images} from '../StyledComponents/styledArticle'
import blogImg1 from '../images/blog-image-1.jpg';
import blogImg2 from '../images/blog-image-2.jpg'


function Article() {
    return (
    <Mains>
        <section>
            <Articles>
               <Times>11/12/2020</Times>
               <TitleH2>On the Street in Brooklyn</TitleH2>
               <aside>
                   <ParagraphL>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.</ParagraphL>
                   <Images src={blogImg1} alt="Street of Brooklyn"/>
                   <ALink>Continues ...</ALink>
               </aside>
           </Articles>
        </section>
        
        <section>
            <article>
               <Times>11/12/2020</Times>
               <TitleH2>Vintage in Vogue</TitleH2>
               <aside>
                   <ParagraphL>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quia, error molestiae magni dolor totam nam architecto at tempore, dolores, repellat voluptas dicta eligendi vero nesciunt sit excepturi officiis.</ParagraphL>
                   <Images src={blogImg2} alt="People dressed vintage"/>
                   <ALink>Continues ...</ALink>
               </aside>
           </article>
        </section>

    </Mains>

    )
}


export default Article