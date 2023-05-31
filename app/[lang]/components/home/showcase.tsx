import styles from './showcase.module.scss';
const Showcase = () => {
    return(
        <section className={styles.hero} id="hero">
            <div className="container text-center">
            <h1 className='mb-8'>
           Votre compagnon d'études de médecine
            </h1>
                <p>
                    Etudiez avec MédiLearn
                </p>
         
            </div>
       
        </section>
    )
}
export default Showcase;