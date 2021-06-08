import { Button, Divider, Page, Text, Link } from '@geist-ui/react';
import { Code, Lock, Zap, Server, Clock } from '@geist-ui/react-icons';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import Shield from '../components/Shield';
import { NavBarProps } from '../lib/interfaces';
import { useUser } from '@auth0/nextjs-auth0';

const features: NavBarProps[] = [
  {
    feature:
      "Password protect any website only with a single line of code. That's it, really!!",
    children: <Code />,
  },
  {
    feature:
      'No database, backend or server side code is required. Everything is taken care by StaticShield',
    children: <Server />,
  },
  {
    feature:
      'From signup to password protecting your site, it takes only 3 minutes!',
    children: <Clock />,
  },
  {
    feature:
      'The quickest way to set up password login page, hosted on StaticShield',
    children: <Shield />,
  },
  {
    feature:
      'StaticShield is framework agnostic. It works with the framework of your choice',
    children: <Zap />,
  },
  {
    feature:
      'StaticShield hashes and encrypts data multiple times so that your data stays highly secure',
    children: <Lock />,
  },
];

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <div className='text-center text-gray-900 bg-gray-50'>
      <div className='block'>
        <Navbar />
      </div>
      <Page>
        <Head>
          <title>StaticShield</title>
          <link rel='icon' href='/staticshield.png' />
        </Head>
        <img
          src='/staticshield.png'
          alt=''
          className='w-40 h-40 mx-auto mt-16'
        />
        <Text
          className='!font-extrabold mt-12 text-5xl sm:text-7xl bg-gradient-to-r from-black via-gray-600 to-gray-500 !text-transparent bg-clip-text'
          h1>
          Static
          <span className='px-2 bg-gray-900 rounded-xl text-gray-50'>
            Shield
          </span>
        </Text>
        <Text className='text-2xl'>
          StaticShield is the easiest way to{' '}
          <span className='z-10 mx-1 heading-underline isolate whitespace-nowrap'>
            password protect
          </span>{' '}
          <br />
          your static and dyanmic sites.
        </Text>

        <div className='mt-12'>
          <Link href={user ? '/dashboard' : '/signup'}>
            <Button
              size='large'
              type='success'
              className='!inline-block ml-2 !shadow-md'>
              {user ? 'Go to Dashboard →' : 'Get started →'}
            </Button>
          </Link>
        </div>

        <Divider className='!mt-20 !mb-12'>
          <span className='-mx-6 text-gray-500 bg-gray-50'>FEATURES</span>
        </Divider>

        <div className='flex flex-wrap'>
          {features.map((feature) => {
            return (
              <FeatureCard
                key={feature.feature}
                feature={feature.feature}
                children={feature.children}
              />
            );
          })}
        </div>
      </Page>
      <style jsx>{`
        span.heading-underline {
          position: relative;
        }

        span.heading-underline::after {
          content: '';
          background-color: #bfdbfe;
          border-radius: 3px;
          transform: rotate(-2deg);
          margin: auto;
          position: absolute;
          bottom: -0.125rem;
          left: -0.5rem;
          right: -0.5rem;
          height: 2rem;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
