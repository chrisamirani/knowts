'use client';

import { useEffect } from 'react';
import API from '@/api';

import PlateEditor from '@/components/plate-editor';

export default function Dashboard() {
  useEffect(() => {
    const getUser = async () => {
      const userResult = await API.DefaultService.me();

      console.log({ userResult });
    };

    getUser();
  }, []);
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="max-w-[1336px] rounded-lg border bg-background shadow">
        <PlateEditor />
      </div>
    </section>
  );
}
