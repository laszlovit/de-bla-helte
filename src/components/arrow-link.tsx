import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/16/solid';

type ArrowLinkProps = {
  href: string;
  label: string;
};

export default function ArrowLink({ href, label }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center font-medium gap-x-2 text-sm"
    >
      {label}
      <div className="bg-gray-950 rounded-full p-0.5 group-hover:bg-primary transition duration-300">
        <ArrowRightIcon className="size-3 text-white " />
      </div>
    </Link>
  );
}
