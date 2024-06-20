import Image from "next/image";

import reject from "../../../public/rejectnobg.png";

export default function Header() {
  return (
    <div className="w-full flex justify-center">
      <Image src={reject} width={200} height={200} alt="Reject Finance Bill" />
    </div>
  );
}