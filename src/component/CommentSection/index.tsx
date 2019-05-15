import * as React from 'react';
import styles from './index.module.scss';
import * as classname from 'classnames';
import Slider from '../Slider'
import ph1 from '../../assets/img/face_middle.png';
import ph2 from '../../assets/img/face_right.png';
import ph3 from '../../assets/img/face_left.png';

const text1 = "I have been incredibly impressed with LinkUp team of developers. They worked hard to deliver the highest-quality product possible and exceeded my expectations at every step of the way. I initially found Andriy in search of a better price than what I could find locally with other development firms. But what I found - in addition to a better price - was a much higher-quality product as well, in every way: service, design, development, communications...etc. 5+++ Stars work. Great job.";
const text2 = "Nice company willing to work and get educated at he same time. Ready to face any challenges and very friendly with customers. They quote very humbly and every invoice can be discussed well in advance. We made a custom design web shop with them and keep on cooperating on development and maintenance. Highly recommended.";
const text3 = "Loved working with LinkUp. Great guys, developers, and management. They knew how to do the job, in the most professional way.";

const arrComments: Array<IComment> = [{ photo: ph1, comment: text1, name: "John Kamman", work: "Wholesum Founder" },
{ photo: ph2, comment: text2, name: "Oleh Zavadsky", work: "CEO Ljus Sp. z o.o." },
{ photo: ph3, comment: text3, name: "Adam Frank", work: "CTO ScaleAbout" }];

const CommentSection = () => {
  return <div className={classname(styles['comments-container'])}>
    <h2>Testimonials</h2>
    <h4>What our customers told about us</h4>
    <div className={styles["slider-container"]}>
      <Slider comments={arrComments}/>
    </div>
  </div>
}

export default CommentSection;