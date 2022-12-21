export default function NewsHeadline(props) {
    return (
        <div className="flex flex-row w-fit animate">
        {props.headlines.map((news, index) => {
            console.log(news);
            return (
                <>
            <p className="text-4xl w-fit whitespace-nowrap pr-4" key={index}>{news}</p>
            <p className="text-4xl w-fit pr-4">|</p>
            </>
            )
        })}
        </div>
    )
}