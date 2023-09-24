

type UrlImage ={
    ig?: string;
}

const Images: React.FC<UrlImage> = (props) =>{
    const {ig = 'https://images.pexels.com/photos/6543272/pexels-photo-6543272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} = props;
    return(
        <>
            <img src={ig} alt="image" style={{width: '200px' , height : '200px0', borderRadius: '50%'}} />
        </>
    )
}

export default Images