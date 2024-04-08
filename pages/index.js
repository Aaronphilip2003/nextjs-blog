import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getInternshipsData } from '../lib/internships';
import Link from 'next/link';
import Date from '../components/date';
import styles from '../styles/timeline.module.css'; // Import the CSS module


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  let allInternshipsData;
  try {
    allInternshipsData = await getInternshipsData();
    // console.log('Internships data:', allInternshipsData);
  } catch (error) {
    console.error('Error fetching internships data:', error);
    allInternshipsData = []; // Set empty array to avoid undefined error
  }
  
  return {
    props: {
      allPostsData,
      allInternshipsData, // Assign internships data to props
    },
  };
}
export default function Home({ allPostsData, allInternshipsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm Aaron. I am a Student and Developer in my third year of Computer Science Engineering</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Internships and Other Work</h2>
        <div className={styles.container}> {/* Use styles.container to apply the CSS */}
          {allInternshipsData.map(({ id, date, company, role, description, end }) => (
            <div className={styles['timeline-block']} key={id}> {/* Use styles['timeline-block'] to apply the CSS */}
              <div className={styles['timeline-block-left']}>
                <div className={styles.marker}></div>
              </div>
              <div className={styles['timeline-block-right']}>
                <div className={styles['timeline-content']}>
                  <h3 >{role}</h3>
                  <p>{company}</p>
                  <p>{description}</p>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} /> -  <Date dateString={end} /> 
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Projects</h2>
      <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
            <br/>
          </li>
          ))}
          </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Medium Articles</h2>
        <ul className={utilStyles.list}>
            <Link target='_blank' href={`https://medium.com/django-unleashed/youtube-q-a-system-b7590a610aa0`}>YouTube QnA System</Link>
            <br/>
            <small>
              <Date dateString="2023-11-24" />
            </small>
            <br/>
            <br/>
            <Link target='_blank' href={`https://medium.com/@aaronphilip2003/spotify-playlist-automation-ae1546120bd2`}>Spotify Playlist Automation</Link>
            <br/>
            <small>
              <Date dateString="2023-08-28" />
            </small>
            <br/>
            <br/>
            <Link target='_blank' href={`https://medium.com/towardsdev/making-of-a-modern-day-api-with-mongo-b8fb3017257d`}>Making of a Modern-day API</Link>
            <br/>
            <small>
              <Date dateString="2023-09-07" />
            </small>
            <br/>
            <br/>
            <Link target='_blank' href={`https://medium.com/@aaronphilip2003/mern-stack-development-and-deployment-using-vercel-d702ecdfe466`}>MERN Stack Deployment using Vercel</Link>
            <br/>
            <small>
              <Date dateString="2023-11-18" />
            </small>
        </ul>
      </section>
    </Layout>
  );
}