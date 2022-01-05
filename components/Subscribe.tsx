import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Form, FormState, Subscribers } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const subscriberCount = new Number(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }


    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Hooray! Check your mail.`
    });
  };

  return (
    <div className="border border-blue-200 rounded-lg p-6 my-4 w-full dark:border-gray-700 bg-blue-50 dark:bg-gray-900">
      <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-600 dark:text-gray-400">
        Get emails from me about behind-the-scenes view in my life as well as anything I discovered that facinates me.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="craig@apple.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 pr-32"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-normal h-8 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
          } subscribers `}
          <Link href="/newsletter">
            <a></a>
          </Link>
        </p>
      )}
    </div>
  );
}
