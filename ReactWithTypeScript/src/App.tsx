import Button from "./components/Button";

export const App = () => {
  return (
    <div>
      <Button
        label="Click"
        isDisabled={false}
        onClick={() => alert("You clicked")}
      />
    </div>
  );
};
