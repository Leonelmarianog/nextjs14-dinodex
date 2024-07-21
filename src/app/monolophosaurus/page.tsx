import { Details } from "@/components/details";

import monolophosaurusChibi from "public/images/monolophosaurus-chibi.gif";

export default function MonolophosaurusPage() {
  return (
    <div className="h-screen flex justify-center items-center min-w-[320px] p-4 border border-4 border-black border-t-0">
      <Details
        image={monolophosaurusChibi}
        alt="Chibi version of a Monolophosaurus"
        text='Monolophosaurus (meaning "single-crested lizard") is an extinct genus of tetanuran theropod dinosaur from the Middle Jurassic Shishugou Formation in what is now Xinjiang, China. It was named for the single crest on top of its skull.'
      />
    </div>
  );
}
