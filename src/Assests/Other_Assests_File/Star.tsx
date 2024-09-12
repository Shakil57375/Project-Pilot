import { VscStarFull } from "react-icons/vsc";


const Star = () => {
    return (
        <div >
            <VscStarFull className="text-pink-600 text-4xl animate-pulse absolute top-20 md:left-90" />
            <VscStarFull className="text-pink-600 text-4xl animate-pulse absolute top-20 md:left-80" />
            <VscStarFull className="text-pink-600 text-4xl animate-pulse absolute top-1/4 md:left-16" />
            <VscStarFull className="text-pink-600 text-4xl animate-pulse absolute top-20 md:left-[1200px]" />
            <VscStarFull className="text-white text-4xl animate-pulse absolute top-2.5 md:left-[1300px]" />
            <VscStarFull className="text-pink-600 text-4xl animate-pulse absolute top-24 md:left-[1400px]" />
            <VscStarFull className="text-pink-600 text-4xl animate-pulse absolute  md:left-[1400px]" />
            <VscStarFull className="text-white text-4xl animate-pulse absolute top-1/4 md:left-[1500px]" />
        </div>
    );
};

export default Star;