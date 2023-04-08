import useNOSTR from "~/hooks/useNOSTR";
import Button from "../button";

export const Connected = () => {
  const { pubKey } = useNOSTR();
  return (
    <div className="space-y-4 text-center">
      <div>PubKey: {pubKey}</div>
      <div className="flex justify-center">
        <Button onClick={() => alert("Estamos laburando. No seas ansiosa")}>
          Ohh yeahhh
        </Button>
      </div>
    </div>
  );
};

export default Connected;
