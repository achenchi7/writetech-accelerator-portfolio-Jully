import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Detailed',
    Svg: require('@site/static/img/detailed.svg').default,
    description: (
      <>
        Find documentation that is detailed and caters to your needs.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/understandable.svg').default,
    description: (
      <>
        Making your code work with you and not 
        against you. Less bugs encountered
      </>
    ),
  },
  {
    title: 'Friendly',
    Svg: require('@site/static/img/friendly.svg').default,
    description: (
      <>
        Whether you are a beginner or seasoned professional, there's
        something for everyone
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
