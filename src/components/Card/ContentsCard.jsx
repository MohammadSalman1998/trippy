// src\components\Card\ContentsCard.jsx


const items = [
    {
        id: 1,
        image: import.meta.env.BASE_URL+"assets/img/02.jpg",
        title: "Trip in Indonesia",
        description: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
    },
    {
        id: 2,
        image: import.meta.env.BASE_URL+"assets/img03.jpg",
        title: "Trip in Malaysia",
        description: "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"
    },
    {
        id: 3,
        image: import.meta.env.BASE_URL+"assets/img06.jpg",
        title: "Trip in France",
        description: "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
    },
]


const ContentsCard = () => {
    return (
        <>
            {items.map((item) => {
                return (
                    <div className='cardContent' key={item.id}>
                    <div className="headCard">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="bodyCard">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
                )
            })}
        </>
    )
}

export default ContentsCard