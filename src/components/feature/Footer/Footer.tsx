import { Logo } from '@/atom';
import { INFO } from '@/constants';
import Link from 'next/link';

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-white rounded-lg m-4 mt-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Logo width={25} height={25} className="text-md" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <Link href="/privacy-policy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:underline me-4 md:me-6">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href={`mailto:${INFO.MAIL}`} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <p className="block text-sm text-gray-500 sm:text-cente">
          © 2024{' '}
          <Link href="/" className="hover:underline">
            Todo™
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
