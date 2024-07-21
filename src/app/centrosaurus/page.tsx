import { Details } from "@/components/details";

import centrosaurusChibi from "public/images/centrosaurus-chibi.gif";

export default function CentrosaurusPage() {
  return (
    <div className="h-screen flex justify-center items-center min-w-[320px] p-4 border border-4 border-black border-t-0">
      <Details
        image={centrosaurusChibi}
        alt="Chibi version of a Centrosaurus"
        text="Centrosaurus is an extinct genus of herbivorous ceratopsian dinosaurs from the late Cretaceous of Canada. Their remains have been found in the Dinosaur Park Formation and uppermost Oldman Formation, dating from 76.5 to 75.5 million years ago."
      />
    </div>
  );
}
