import Redirect from "umi/redirect";
export default props => {
    if (new Date().getDay() % 2 === 1) {
        return <Redirect to="/login"/>;
    }
    return (
        <div>
            <div>PrivateRoute</div>
        
        {props.children}
        </div>
    );
};