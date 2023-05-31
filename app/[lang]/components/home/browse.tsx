import CourseCard from "./courseCard";

const Browse = () => {

    const courseList = [
        {
            id:'ad2dfuje765sd',
            title:'Cours de mathématiques',
            access:'public',
            description:'Cours de mathématiques pour les élèves de 3ème',
            urlPath:'math-pour-les-3eme-ad2dfuje765sd',
            tags:['mathématiques', 'arithmétique', 'géométrie', 'algèbre'],
            imgUrl:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e5/3e7d49769674e52dc089d51f3b570f/precalculo.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&q=50&fit=crop'
        },
        {
            id:'wadyxleffdsq2743',
            title:'Cours de physique',
            access:'public',
            description:'Cours de physique pour les élèves de 3ème',
            urlPath:'physique-pour-les-3eme-wadyxleffdsq2743',
            tags:['physique', 'mécanique', 'électromagnétisme', 'thermodynamique'],
            imgUrl:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/61/f0fa10083d11e88f53b7ce7cf4f50f/logo-MQ-800.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&fit=crop&q=50',

        }, 
        {
            id:'12ndsffdsq2743',
            title:'Cours de chimie',
            access:'public',
            description:'Cours de chimie pour les élèves de 3ème',
            urlPath:'chimie-pour-les-3eme-12ndsffdsq2743',
            tags:['chimie', 'atomistique', 'thermodynamique', 'cristallographie'],
            imgUrl:'https://prod-discovery.edx-cdn.org/media/course/image/09dd0fa9-c3c6-4a92-b224-a5e8daad384e-c1563546bc96.jpg'
        },
        {
            id:'x9e8dsffdsq2743',
            title:'Histologie',
            access:'public',
            description:'Cours d\'histologie pour les élèves de 3ème',
            urlPath:'histologie-pour-les-3eme-x9e8dsffdsq2743',
            tags:['histologie', 'biologie', 'cellules', 'tissus'],
            imgUrl:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/61/5756e092c311e5bcb613ea422b9e76/logo1-mooc-DEF-3.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&fit=crop&q=50'


        }

    ];

    return(
        <section>
            <div className="container" id="browse">
            <h2>
                Parcourir les cours
            </h2>
            <div className="browse-courselist flex justify-between">
            {courseList.map((course) =>(

                <CourseCard
                    key={course.id}
                    course={course}
                />
            ))}
            </div>
            </div>
            
        </section>
    )
}

export default Browse;