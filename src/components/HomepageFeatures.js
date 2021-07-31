import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  
  {
    title: 'Python',
    Svg: require('../../static/img/tutorial/15774175881551942290.svg').default,
    
  },

  {
    title: 'Selenium',
    Svg: require('../../static/img/tutorial/14773475701551942825.svg').default,
    
  },

  {
    title: 'ChromeDriver',
    Svg: require('../../static/img/tutorial/656295881586787936.svg').default,
    
  },
  {
    title: 'Docker',
    Svg: require('../../static/img/tutorial/12099885771536233213.svg').default,
    
  },
  
  {
    title: 'Jenkins',
    Svg: require('../../static/img/tutorial/jenkins-icon.svg').default,
    
  },
  {
    title: 'Azure',
    Svg: require('../../static/img/tutorial/20154405451536130220.svg').default,
    
  },

  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
