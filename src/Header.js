import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const number = useSelector(state => state.length);
  return(
    <div className="Header">
        <h1>You have <span>{ number }</span> events</h1>
    </div>
  );  
}

export default Header;