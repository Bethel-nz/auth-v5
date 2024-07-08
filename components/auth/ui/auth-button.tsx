'use server';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { signIn } from 'auth';

const GoogleAuthButton = ({ provider }: { provider: string }) => {
  async function AuthAction(provider: string) {
    await signIn(provider, {
      redirect: true,
      redirectTo: `/`,
    });
  }

  return (
    <form action={() => AuthAction(provider)}>
      <Button className='flex w-full gap-4'>
        <Image
          src={'/google-icon.png'}
          alt='google logo'
          height={20}
          width={20}
          className='w-6 h-6'
        />
        <span className={'text-md font-semibold'}>Google</span>
      </Button>
    </form>
  );
};

export default GoogleAuthButton;
