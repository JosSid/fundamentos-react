import { useEffect, useState } from 'react';
import { getLatestTweets } from './service.js';
import classNames from 'classnames';
import Layout from '../layout/Layout.js';

import styles from './TweetsPage.module.css';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
 
  //useEffect en si no puede ser async/await
  //pero podemos crear execute dentro y hacerlo ahi
  useEffect(() => {
    const execute = async () => {
      const tweets = await getLatestTweets();
      setTweets(tweets);
    };
    execute();

    /*         getLatestTweets().then(tweets =>{
         
        setTweets(tweets);;
    }); */
  }, []);

  const className = classNames(styles.tweets__page, {
    [styles.empty]: !tweets.length,
  });



  return (
    <Layout title="What's going on...">
      <div className={className}>
        {tweets.length ? (
          <ul>
            {tweets.map((tweet) => (
              <li key={tweet.id}>{tweet.content}</li>
            ))}
          </ul>
        ) : (
          <button>Write your tweets</button>
        )}
      </div>
    </Layout>
  );
};

export default TweetsPage;
