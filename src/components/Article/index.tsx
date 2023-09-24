import React from "react";

interface ArticleProps{
    title: string;
    children: React.ReactNode;
    titleCss?: React.CSSProperties;
    descitpitonCss?: React.CSSProperties;
}

const Article: React.FC<ArticleProps> = (props) =>{
    const {title, children, titleCss, descitpitonCss} = props;
    return(
        <div>
            <h1 style={titleCss}>{title}</h1>
            <p style={descitpitonCss}>{children}</p>
        </div>
    )
}

export default Article;