import NewsData from "./../newsData.json"
import NewsHeadline from "./newsHeadline";

export default function NewsBar() {

    return (
        <div className="w-full h-12 bg-red2 overflow-hidden flex flex-row relative">
            <NewsHeadline headlines={NewsData.headlines} />
            <NewsHeadline headlines={NewsData.headlines} />
        </div>
    )
}