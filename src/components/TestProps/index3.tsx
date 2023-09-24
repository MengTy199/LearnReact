import React from "react";  


interface ArticleProps{
    title: string;
    children: React.ReactNode;
    css?: React.CSSProperties;

}


const Article: React.FC<ArticleProps> =(props) =>{
    const {title, children, css} = props;
    return(
        <div style={css}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )
}

export default Article;