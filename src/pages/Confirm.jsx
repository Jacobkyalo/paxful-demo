import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Confirm() {
  return (
    <section className="h-screen flex items-center justify-center flex-col">
      <AiOutlineLoading3Quarters
        size={50}
        width={4}
        className="text-btnColor block mx-auto"
      />
      <p className="text-lg mt-4 font-bold">
        please wait as we open offer Mor4Qh04Yq...
      </p>
    </section>
  );
}
