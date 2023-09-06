interface Testprps {
    hDescription : string;
}

const TestProps: React.FC<Testprps> =(props)=>{
    return(
        <div>
            <h1 title="H1">{props.hDescription}</h1>
        </div>
    );
};
export default TestProps;