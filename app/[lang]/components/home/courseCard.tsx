import React, { FC } from 'react';
import styles from './courseCard.module.scss';
import Link from 'next/link';
type Course = {
    id: string;
    title: string;
    access: string;
    description: string;
    urlPath: string;
    tags: string[];
    imgUrl: string;
}


interface CourseCardProps {
    course: Course;
}

const CourseCard: FC<CourseCardProps> = ({course}) => {

    const {id, title, access, description, urlPath, tags, imgUrl} = course;

    return (
        <Link href={`courses/${urlPath}`}>
        <article className={styles['course-item']}>
            <div className="course-item__img">
                <img src={imgUrl} alt={title} />
            </div>
            <div className={styles['course-item__content']}>
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <div className="course-item__content__tags">
                    {tags.map((tag) => (
                        <span key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
        </Link>
    )

}
export default CourseCard;