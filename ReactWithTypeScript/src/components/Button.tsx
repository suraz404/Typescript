type ButtonProps = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
};

const Button = ({ label, onClick, isDisabled }: ButtonProps) => {
  return (
    <div>
      <label htmlFor="button">{label}</label>
      <button id="button" onClick={onClick}>
        Click
      </button>
      <button>
        {" "}
        disabled={isDisabled}
        <button />
        {isDisabled ? "Disable" : "Enable"}
      </button>
    </div>
  );
};

export default Button;
