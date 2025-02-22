// src\components\Section\SectionsIems.jsx

const items = [
    {
        id: 1,
        title: "Mt. Daguldul, Batangas",
        description: "One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you&apos;ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!",
        image1:"/public/assets/img/02.jpg",
        image2:"/public/assets/img/03.jpg",
        reverce:"",
    },
    {
        id: 2,
        title: "Taal Volcano, Batangas",
        description: "A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total.",
        image1:"/public/assets/img/04.jpg",
        image2:"/public/assets/img/05.jpg",
        reverce: "reverce",
    },
]


const SectionsIems = () => {
    return (
        <>
        {
            items.map((item)=>{
                return(
                    <div key={item.id} className={`bodySection ${item.reverce}`}>
                    <div className="leftSide">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                    <div className="rightSide">
                        <img src={item.image1} alt="" />
                        <img src={item.image2} alt="" />
                    </div>
                </div>
                )
            })
        }
        </>
       
    )
}

export default SectionsIems