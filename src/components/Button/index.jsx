import PropTypes from 'prop-types';
import { ContainerButton } from './styles';


const Button = ({ children, ...props }) => {
  return <ContainerButton {...props}>{children}</ContainerButton>;
};


Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;