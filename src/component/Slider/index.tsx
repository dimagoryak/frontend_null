import React from "react";
import Slider from "react-slick";
import styles from './index.module.scss';

interface Props {
    comments: Array<IComment>;
}

export default class SimpleSlider extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        var settings = {
            infinite: true,
            centerMode: true,
            centerPadding: '20%',
            speed: 500,
            slidesToShow: 1
        };

        return (
            <Slider {...settings}>
                {this.props.comments.map((element, index) => (
                    <div key={index} className={styles['comment-slide']}>
                        <div className={styles['photo']}> 
                            <img alt={"photo" + index + 1} src={element.photo} />
                        </div>
                        <p className={styles.comment}>{element.comment}</p>
                        <p className={styles.name}>{element.name}</p>
                        <p className={styles.work}>{element.work}</p>
                    </div>
                ))}
            </Slider>
        );
    }
}