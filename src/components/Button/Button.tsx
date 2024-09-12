import "./Button.css";
type buttonProps = {
  children: React.ReactNode;
};
const Button = ({ children }: buttonProps) => {
  return (
    <div className="wrapper">
      <a className="attribute" href="">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </a>
    </div>
  );
};

export default Button;
